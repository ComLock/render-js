/* eslint quotes: ["error", "single", { "allowTemplateLiterals": true }] */
/* eslint-disable no-console */
/* eslint-disable function-paren-newline */
/* eslint-disable no-unused-vars */
/* global describe it */

import { deepStrictEqual, notDeepStrictEqual } from 'assert';
import { removeWhiteSpace } from './util.es';
import {
  Dom, Node,
  doctype, html, head, title, style,
  body, main, h1, div, p, span
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
  });


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
    view.html.head.title.add(model.title);
    view.html.body.main.h1.add(model.heading);
    view.html.body.main.div.p.span.add(model.text);
    view.html.head.style.add(view.html.body.getCss().join('')); // This will trigger build on body

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
