/* global describe it */
/* eslint-disable function-paren-newline */
/* eslint-disable no-unused-vars */


import { deepStrictEqual } from 'assert';
import { render, doctype, html, head, title, style } from '../index';
import { el, Node, body, div, p, main, h1 } from '../ncss.es';


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
    deepStrictEqual(
      el(
        'div', {
          style: {
            display: 'none'
          }
        }
      ), new Node({
        html: '<div style="display: none"></div>',
        css: []
      })
    );
  });

  it('element with spec and third argument of type String', () => {
    deepStrictEqual(
      el(
        'h1', {
          style: {
            display: 'none'
          }
        }, 'String'
      ), new Node({
        html: '<h1 style="display: none">String</h1>',
        css: []
      })
    );
  });

  it('element with spec and third argument of type Node', () => {
    deepStrictEqual(
      el(
        'div', {
          style: {
            display: 'none'
          }
        }, el('p', 'String')
      ), new Node({
        html: '<div style="display: none"><p>String</p></div>',
        css: []
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
        css: [`@media only screen and (min-width: 480px) and (max-width: 1023px), not speech { .${className} { display: none !important; } }`]
      })
    );
  });

  it('nested elements with spec.style and spec._media', () => {
    const classA = 'd-b-w-mi-480';
    const classB = 'd-ib-w-mi-1024';
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
        html: `<div class="${classA} ${classB}" style="display: none"><p class="${classA} ${classB}" style="color: black">String</p></div>`,
        css: [ // NOTE Order changes due to sortAndRemoveDups
          `@media (min-width: 1024px) { .${classB} { display: inline-block !important; } }`,
          `@media (min-width: 480px) { .${classA} { display: block !important; } }`
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
            style({ type: 'text/css' }, node.css.join('\n')) // pageContributions.headEnd
          ]),
          node.html
        ])
      ), // render
      `<html><head><title>Title</title>
<style type="text/css">@media (min-width: 1024px) { .d-ib-w-mi-1024 { display: inline-block !important; } }
@media (min-width: 480px) { .d-b-w-mi-480 { display: block !important; } }</style></head>
<body><main><h1 class="d-b-w-mi-480 d-ib-w-mi-1024" style="color: black">Main heading</h1></main></body></html>`
    ); // deepStrictEqual
  }); // it

  it('handles unknown css properties, int value assumed to be px, color', () => {
    const pre = '@media (min-width: 480px) { .';
    const classA = 'c-b-w-mi-480';
    const classB = 'd-invalid-w-mi-480';
    const classC = 'pixel-100-w-mi-480';
    const classD = 'un-known-va-lue-w-mi-480';
    deepStrictEqual(
      div({
        /* style: {
          unKnown: 100
        }, */
        _media: {
          minWidth480: {
            display: 'invalid',
            null: null,
            undef: undefined,
            unKnown: 'va lue',
            pixel: 100,
            color: 'black'
          }
        }
      })
      , new Node({
        css: [
          `${pre}${classA} { color: black !important; } }`,
          `${pre}${classB} { display: invalid !important; } }`,
          `${pre}${classC} { pixel: 100px !important; } }`,
          `${pre}${classD} { un-known: va lue !important; } }`
        ],
        html: `<div class="${classA} ${classB} ${classC} ${classD}"></div>`
      })
    ); // deepStrictEqual
  }); // it
}); // describe ncss
