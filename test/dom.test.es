/* eslint quotes: ["error", "single", { "allowTemplateLiterals": true }] */
/* eslint-disable function-paren-newline */
/* eslint-disable no-unused-vars */
/* global describe it */


import { deepStrictEqual } from 'assert';
import {
  Dom, Node,
  doctype, html, head, title,
  body, main, h1, div, p, span
} from '../dom.es';


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
    const className = 'd-b-w-mi-480';
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
      dom.getCss(), [`@media (min-width: 480px) { .${className} { display: block !important; } }`]
    );
    deepStrictEqual(
      dom.render(),
      `<body class="${className}" style="display: none">${content}</body>`
    ); // deepStrictEqual
  });

  it('render', () => {
    const dom = new Dom(
      html([
        head([
          title('Title')
        ]),
        body([
          main([
            h1('Heading'),
            div(
              p([
                span('Text'),
                span() // Test empty element
              ]) // p
            ) // div
          ]) // main
        ]) // body
      ]) // html
    ); // Dom
    deepStrictEqual(
      dom.render(),
      `<html><head><title>Title</title></head><body><main><h1>Heading</h1><div><p><span>Text</span><span></span></p></div></main></body></html>`
    ); // deepStrictEqual
  }); // it
}); // describe
