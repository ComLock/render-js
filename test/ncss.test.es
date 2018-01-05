/* global describe it */
/* eslint-disable function-paren-newline */
/* eslint-disable no-unused-vars */


import { deepStrictEqual } from 'assert';
import { render, doctype, html, head, title, style } from '../index';
import { el, Node, body, div, p, main, h1 } from '../ncss.es';


const MEDIA_RULES = {
  xxs: '(min-width: 320px)', // Mobile S
  xs: '(min-width: 480px)',
  s: '(min-width: 768px)', // Tablet
  sp: '(min-width: 800px)', // 992
  m: '(min-width: 1024px)', // Laptop
  l: '(min-width: 1200px)',
  xl: '(min-width: 1440px)',
  xxl: '(min-width: 2560px)' // 4K
};


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
    const classB = 'd-inb-w-mi-1024';
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
<style type="text/css">@media (min-width: 1024px) { .d-inb-w-mi-1024 { display: inline-block !important; } }
@media (min-width: 480px) { .d-b-w-mi-480 { display: block !important; } }</style></head>
<body><main><h1 class="d-b-w-mi-480 d-inb-w-mi-1024" style="color: black">Main heading</h1></main></body></html>`
    ); // deepStrictEqual
  }); // it
}); // describe ncss
