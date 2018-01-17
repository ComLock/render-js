/* global describe it */
/* eslint-disable function-paren-newline */
/* eslint-disable no-unused-vars */


import { deepStrictEqual } from 'assert';
import { removeWhiteSpace } from './util.es';
import { render, doctype, html, head, title, style } from '../index';
import { el, Node, body, div, p, main, section, header, h1 } from '../ncss.es';
import { UNICODE_LETTERS } from '../util.es';


describe('ncss', () => {
  it('element without spec or content', () => {
    deepStrictEqual(el('span'), new Node({
      html: '<span></span>',
      css: []
    }));
  });

  it('element with only second argument of type String', () => {
    deepStrictEqual(el('h1', 'String'), new Node({
      html: '<h1>String</h1>',
      css: []
    }));
  });

  it('element with only second argument of type Node', () => {
    deepStrictEqual(el('div', el('p', 'String')), new Node({
      html: '<div><p>String</p></div>',
      css: []
    }));
  });

  it('element with only second argument of type Object', () => {
    const className = 'd-n';
    deepStrictEqual(
      el(
        'div', {
          style: {
            display: 'none'
          }
        }
      ), new Node({
        html: `<div class="${className}"></div>`,
        css: [`.${className}{display:none}`]
      })
    );
  });

  it('element with spec and third argument of type String', () => {
    const className = 'd-n';
    deepStrictEqual(
      el(
        'h1', {
          style: {
            display: 'none'
          }
        }, 'String'
      ), new Node({
        html: `<h1 class="${className}">String</h1>`,
        css: [`.${className}{display:none}`]
      })
    );
  });

  it('element with spec and third argument of type Node', () => {
    const className = 'd-n';
    deepStrictEqual(
      el(
        'div', {
          style: {
            display: 'none'
          }
        }, el('p', 'String')
      ), new Node({
        html: `<div class="${className}"><p>String</p></div>`,
        css: [`.${className}{display:none}`]
      })
    );
  });

  it('element with spec._media', () => {
    const className = 'd-n-o-s-a-w-mi-480-a-w-ma-1023-n-sp';
    deepStrictEqual(
      el(
        'div', {
          _media: {
            only_screen_and_minWidth480_and_maxWidth1023_comma_not_speech: {
              display: 'none'
            }
          }
        }
      ), new Node({
        html: `<div class="${className}"></div>`,
        css: [`@media only screen and (min-width: 480px) and (max-width: 1023px), not speech{.${className}{display:none}}`]
      })
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
      }).css,
      [
        '@media (min-width: 800px){.w-660-w-mi-800{width:660px}}',
        '@media (min-width: 1200px){.w-1020-w-mi-1200{width:1020px}}'
      ]
    ); // deepStrictEqual
  }); // it


  it('nested elements with spec.style and spec._media', () => {
    const classA = 'c-b';
    const classB = 'd-n';
    const classC = 'd-b-w-mi-480';
    const classD = 'd-ib-w-mi-1024';
    deepStrictEqual(
      div({
        style: {
          display: 'none'
        },
        _media: {
          minWidth480: {
            display: 'block'
          },
          minWidth1024: {
            display: 'inline-block'
          }
        } // _media
      }, p({
        style: {
          color: 'black'
        },
        _media: {
          minWidth480: {
            display: 'block'
          },
          minWidth1024: {
            display: 'inline-block'
          }
        }
      }, 'String') // p
      ), // div
      new Node({
        html: `<div class="${classC} ${classD} ${classB}"><p class="${classA} ${classC} ${classD}">String</p></div>`,
        css: [ // NOTE Order changes due to sortAndRemoveDups
          `.${classA}{color:black}`,
          `.${classB}{display:none}`,
          `@media (min-width: 1024px){.${classD}{display:inline-block}}`,
          `@media (min-width: 480px){.${classC}{display:block}}`
        ]
      })
    ); // deepStrictEqual
  }); // it

  it('full page with page contributions', () => {
    const node = body(
      main(
        h1({
          style: {
            color: 'black'
          },
          _media: {
            minWidth480: {
              display: 'block'
            },
            minWidth1024: {
              display: 'inline-block'
            }
          }
        }, 'Main heading')
      )
    );
    deepStrictEqual(
      render(
        html([
          head([
            title('Title'),
            style({ type: 'text/css' }, node.css.join('')) // pageContributions.headEnd
          ]),
          node.html
        ])
      ), // render
      removeWhiteSpace(`
<html>
  <head>
  <title>Title</title>
  <style type="text/css">
    .c-b{color:black}
    @media (min-width: 1024px){.d-ib-w-mi-1024{display:inline-block}}
    @media (min-width: 480px){.d-b-w-mi-480{display:block}}
    </style>
  </head>
  <body>
    <main>
      <h1 class="c-b d-b-w-mi-480 d-ib-w-mi-1024">Main heading</h1>
    </main>
  </body>
</html>`)
    ); // deepStrictEqual
  }); // it

  it('handles unknown css properties, int value assumed to be px, color, conver illegal chars', () => {
    const pre = '@media (min-width: 480px){.';
    const classA = 'un-known-100';
    const classB = 'c-b-w-mi-480';
    const classC = 'd-invalid-w-mi-480';
    const classD = 'exclamation-exclamation-w-mi-480';
    const classE = 'int-100-w-mi-480';
    const classF = 'percent-100-w-mi-480';
    const classG = 'un-known-va-lue-w-mi-480';
    const classH = 'underscore-underscore-w-mi-480';
    const classI = 'unicode-letters-y-y-i-n-n-i-n-w-mi-480';
    deepStrictEqual(
      div({
        style: {
          unKnown: 100
        },
        _media: {
          minWidth480: {
            display: 'invalid',
            null: null,
            undef: undefined,
            unKnown: 'va lue',
            int: 100,
            color: 'black',
            percent: '100%',
            exclamation: '!exclamation',
            underscore: '_underscore_',
            unicodeLetters: UNICODE_LETTERS
          }
        }
      })
      , new Node({
        css: [
          `.${classA}{un-known:100}`,
          `${pre}${classB}{color:black}}`,
          `${pre}${classC}{display:invalid}}`,
          `${pre}${classD}{exclamation:!exclamation}}`,
          `${pre}${classE}{int:100}}`,
          `${pre}${classF}{percent:100%}}`,
          `${pre}${classG}{un-known:va lue}}`,
          `${pre}${classH}{underscore:_underscore_}}`,
          `${pre}${classI}{unicode-letters:${UNICODE_LETTERS}}}`
        ],
        html: `<div class="${classB} ${classC} ${classD} ${classE} ${classF} ${classA} ${classG} ${classH} ${classI}"></div>`
      })
    ); // deepStrictEqual
  }); // it

  it('accepts array as content', () => {
    deepStrictEqual(body([main()]).html, '<body><main></main></body>');
  });

  it('accepts function as content', () => {
    deepStrictEqual(body(() => main()).html, '<body><main></main></body>');
  });

  it('accepts nested functions as content', () => {
    deepStrictEqual(body(() => () => main()).html, '<body><main></main></body>');
  });

  it('accepts arrays of nested functions as content', () => {
    deepStrictEqual(
      section([
        () => header(),
        () => () => p()
      ]).html,
      '<section><header></header><p></p></section>'
    );
  });
}); // describe ncss
