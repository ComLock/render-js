/* eslint quotes: ["error", "single", { "allowTemplateLiterals": true }] */
/* eslint-disable no-console */
/* eslint-disable function-paren-newline */
/* eslint-disable no-unused-vars */
/* global describe it */

import { deepStrictEqual, notDeepStrictEqual } from 'assert';
import { removeWhiteSpace } from './util.es';
import {
  PROPERTY_CHILDREN,
  PROPERTY_TAG,
  Dom, Node,
  doctype, html, head, title, style,
  body, main, section, header, h1, div, p, span
} from '../dom.es';
import { toStr } from '../util.es';


describe('dom', () => {
  it('empty element', () => {
    deepStrictEqual(new Dom().render(), '');
    deepStrictEqual(new Dom(html()).render(), '<html></html>');
  });

  it('string element', () => {
    deepStrictEqual(new Dom('Text').render(), 'Text');
    deepStrictEqual(new Dom(html('Text')).render(), '<html>Text</html>');
  });

  it('just attribute', () => {
    deepStrictEqual(new Dom({ gets: 'ignored' }).render(), '');
    deepStrictEqual(new Dom(html({ key: 'value' })).render(), '<html key="value"></html>');
  });

  it('attribute and string', () => {
    deepStrictEqual(new Dom({ gets: 'ignored' }, 'Text').render(), 'Text');
    deepStrictEqual(new Dom(html({ key: 'value' }, 'Text')).render(), '<html key="value">Text</html>');
  });

  it('custom element', () => {
    const custom = (...args) => new Node('custom', ...args);
    deepStrictEqual(new Node('custom', { key: 'value' }, 'Text').render(), '<custom key="value">Text</custom>');
    deepStrictEqual(custom({ key: 'value' }, 'Text').render(), '<custom key="value">Text</custom>');
  });


  it('accepts array as content', () => {
    deepStrictEqual(body([main()]).render(), '<body><main></main></body>');
  });


  it('accepts function as content', () => {
    deepStrictEqual(body(() => main()).render(), '<body><main></main></body>');
  });


  it('accepts nested functions as content', () => {
    deepStrictEqual(body(() => () => main()).render(), '<body><main></main></body>');
  });


  it('accepts arrays of nested functions as content', () => {
    deepStrictEqual(
      section([
        () => header(),
        () => () => p()
      ]).render(),
      '<section><header></header><p></p></section>'
    );
  });

  it('Issue #9 CSS order matters', () => {
    deepStrictEqual(
      div({
        _media: {
          minWidth800: {
            width: 660
          },
          minWidth1200: {
            width: 1020
          }
        }
      }).getCss(),
      [
        '@media (min-width: 800px).w-660-w-mi-800{width: 660px;}',
        '@media (min-width: 1200px).w-1020-w-mi-1200{width: 1020px;}'
      ]
    ); // deepStrictEqual
  }); // it

  it('_media', () => {
    const content = 'Only visible from screen width 480';
    const classA = 'd-n';
    const classB = 'd-b-w-mi-480';
    const dom = body({
      style: {
        display: 'none'
      },
      _media: {
        minWidth480: {
          display: 'block'
        }
      }
    }, content);
    deepStrictEqual(
      dom.getCss(), [
        `.${classA}{display:none}`,
        `@media (min-width: 480px){.${classB}{display:block}}`
      ]
    );
    deepStrictEqual(
      dom.render(),
      `<body class="${classB} ${classA}">${content}</body>`
    ); // deepStrictEqual
  });


  it('add', () => {
    deepStrictEqual(new Dom().add().render(), '');
    deepStrictEqual(new Dom().add('a').render(), 'a');
    deepStrictEqual(new Dom().add(doctype()).render(), '<!DOCTYPE html>');
    deepStrictEqual(new Dom().add(['a', doctype(), 'b']).render(), 'a<!DOCTYPE html>b');
    deepStrictEqual(new Dom().add([
      doctype(),
      html(body())
    ]).render(), removeWhiteSpace(`
<!DOCTYPE html>
<html>
  <body>
  </body>
</html>`));
  });


  it('path', () => {
    const d0 = div('0');
    const d1 = div('1');
    const s = span();
    const b = body([d0, d1, s]);
    const dom = new Dom(b);
    deepStrictEqual(dom.body, b);
    deepStrictEqual(dom.body.div[0], d0);
    notDeepStrictEqual(dom.body.div[0], d1);
    deepStrictEqual(dom.body.div[1], d1);
    notDeepStrictEqual(dom.body.div[1], d0);
    deepStrictEqual(dom.body.span, s);
  }); // path


  it('parent and root', () => {
    const b = body();
    deepStrictEqual(b.parent, undefined);
    deepStrictEqual(b.root, b);
    const h = html(b);
    deepStrictEqual(h.parent, undefined);
    deepStrictEqual(h.root, h);
    deepStrictEqual(b.parent, h);
    deepStrictEqual(h.body.parent, h);
    deepStrictEqual(b.root, h);
    deepStrictEqual(h.body.root, h);

    const d = new Dom(h); // At this point root must be set for h and also for b;
    deepStrictEqual(d.parent, undefined);
    deepStrictEqual(d.root, d);
    deepStrictEqual(h.parent, d);
    deepStrictEqual(d.html.parent, d);
    deepStrictEqual(b.parent, h);
    deepStrictEqual(h.body.parent, h);
    deepStrictEqual(d.html.body.parent, h);
    deepStrictEqual(h.root, d);
    deepStrictEqual(d.html.root, d);
    deepStrictEqual(b.root, d);
    deepStrictEqual(h.body.root, d);
    deepStrictEqual(d.html.body.root, d);

    const dom = new Dom();
    deepStrictEqual(dom.parent, undefined);
    deepStrictEqual(dom.root, dom);

    dom.add(html());
    deepStrictEqual(dom.parent, undefined);
    deepStrictEqual(dom.root, dom);
    deepStrictEqual(dom.html.parent, dom);
    deepStrictEqual(dom.html.root, dom);

    dom.html.add(body());
    deepStrictEqual(dom.parent, undefined);
    deepStrictEqual(dom.root, dom);
    deepStrictEqual(dom.html.parent, dom);
    deepStrictEqual(dom.html.root, dom);
    deepStrictEqual(dom.html.body.parent, dom.html);
    deepStrictEqual(dom.html.body.root, dom);

    const tree = new Dom().add(html().add(body()));
    deepStrictEqual(tree.parent, undefined);
    deepStrictEqual(tree.root, tree);
    deepStrictEqual(tree.html.parent, tree);
    deepStrictEqual(tree.html.root, tree);
    deepStrictEqual(tree.html.body.parent, tree.html);
    deepStrictEqual(tree.html.body.root, tree);

    const view = new Dom(html(body()));
    deepStrictEqual(view.parent, undefined);
    deepStrictEqual(view.root, view);
    deepStrictEqual(view.html.parent, view);
    deepStrictEqual(view.html.root, view);
    deepStrictEqual(view.html.body.parent, view.html);
    deepStrictEqual(view.html.body.root, view);
  }); // parent and root


  it('html, head and body', () => {
    const h = html();
    deepStrictEqual(h.root, h);
    deepStrictEqual(h.html, h);
    deepStrictEqual(h.head, undefined);
    deepStrictEqual(h.body, undefined);

    const e = head();
    deepStrictEqual(e.root, e);
    deepStrictEqual(e.html, undefined);
    deepStrictEqual(e.head, e);
    deepStrictEqual(e.body, undefined);

    const b = body();
    deepStrictEqual(b.root, b);
    deepStrictEqual(b.html, undefined);
    deepStrictEqual(b.head, undefined);
    deepStrictEqual(b.body, b);

    h.add(e);
    deepStrictEqual(h.root, h);
    deepStrictEqual(e.root, h);

    deepStrictEqual(h.html, h);
    deepStrictEqual(e.html, h);

    deepStrictEqual(e.head, e);
    deepStrictEqual(h.head, e);
    deepStrictEqual(h.body, undefined);
    deepStrictEqual(e.body, undefined);

    const d = new Dom(html([
      head(title()),
      body(main())
    ]));

    [
      d,
      d.html,
      d.html.head,
      d.html.head.title,
      d.html.body,
      d.html.body.main
    ].forEach(node => {
      deepStrictEqual(node.root, d);
      deepStrictEqual(node.html, d.html);
      deepStrictEqual(node.head, d.html.head);
      deepStrictEqual(node.body, d.html.body);
    });
  }); // html, head and body


  it('render', () => {
    const classA = 'd-n';
    const classB = 'd-b-w-mi-480';
    const b = body([
      main([
        h1('Heading'),
        div(
          p([
            span({
              style: {
                display: 'none'
              },
              _media: {
                minWidth480: {
                  display: 'block'
                }
              }
            }, 'Text'),
            span() // Test empty element
          ]) // p
        ) // div
      ]) // main
    ]); // body
    const dom = new Dom([
      doctype(),
      html([
        head([
          title('Title'),
          style({ type: 'text/css' }, b.getCss().join(''))
        ]),
        b
      ]) // html
    ]); // Dom
    deepStrictEqual(
      dom.render(),
      removeWhiteSpace(`
<!DOCTYPE html>
<html>
  <head>
    <title>Title</title>
    <style type="text/css">
      .${classA}{display:none}
      @media (min-width: 480px){.${classB}{display:block}}
    </style></head>
  <body>
    <main>
      <h1>Heading</h1>
      <div>
        <p>
          <span class="${classB} ${classA}">Text</span>
          <span></span>
        </p>
      </div>
    </main>
  </body>
</html>`)
    ); // deepStrictEqual
  }); // it

  it('VMC view model controller', () => {
    const view = new Dom([ // Things that are always the same
      doctype(),
      html([
        head([
          title(),
          style({ type: 'text/css' })
        ]), // head
        body([
          main([
            h1(),
            div([
              p(
                span({
                  style: {
                    display: 'none'
                  },
                  _media: {
                    minWidth480: {
                      display: 'block'
                    }
                  }
                }) // span
              ) // p
            ]) // div
          ]) // main
        ]) // body
      ]) // html
    ]); // view

    const model = { // Things that change
      title: 'Title',
      heading: 'Heading',
      text: 'Text'
    }; // model

    // Controller
    view.head.title.add(model.title);
    view.body.main.h1.add(model.heading);
    view.body.main.div.p.span.add(model.text);
    view.head.style.add(view.body.getCss().join('')); // This will trigger build on body

    // Test
    const classA = 'd-n';
    const classB = 'd-b-w-mi-480';
    deepStrictEqual(view.render(), removeWhiteSpace(`
<!DOCTYPE html>
<html>
<head>
  <title>Title</title>
  <style type="text/css">
    .${classA}{display:none}
    @media (min-width: 480px){.${classB}{display:block}}
  </style></head>
<body>
  <main>
    <h1>Heading</h1>
    <div>
      <p>
        <span class="${classB} ${classA}">Text</span>
      </p>
    </div>
  </main>
</body>
</html>`));
  }); // it view
}); // describe
