/* global describe it */
/* eslint-disable function-paren-newline */
/* eslint-disable no-console */

import { deepStrictEqual } from 'assert';
import {
  modifyStyleAndMediaToClassAndCss, render,
  html, head, body, main, header, h1, div, span
} from '../src/obj.es';
//import { toStr } from '../util.es';


describe('obj', () => {
  it('string', () => {
    deepStrictEqual(render('<html></html>'), {
      css: [],
      html: '<html></html>'
    });
  });

  it('array of strings', () => {
    deepStrictEqual(render([
      '<1></1>',
      '<2></2>'
    ]), {
      css: [],
      html: '<1></1><2></2>'
    });
  });

  it('obj with single element without attributes or content', () => {
    deepStrictEqual(render({ html: '' }), { css: [], html: '<html></html>' });
    deepStrictEqual(render({ html: {} }), { css: [], html: '<html></html>' });
    deepStrictEqual(render({ html: null }), { css: [], html: '<html></html>' });
    deepStrictEqual(render({ html: undefined }), { css: [], html: '<html></html>' });
  });

  it('obj with single element with string value', () => {
    deepStrictEqual(
      render({ html: '<head></head><body></body>' }),
      { css: [], html: '<html><head></head><body></body></html>' }
    );
  });

  it('obj with single element with attribute', () => {
    deepStrictEqual(render({
      html: {
        a: {
          name: 'value'
        }
      }
    }), { css: [], html: '<html name="value"></html>' });
  });

  it('obj with single element with string content', () => {
    deepStrictEqual(render({
      html: {
        c: '<head></head>'
      }
    }), { css: [], html: '<html><head></head></html>' });
  });

  it('obj with single element with array of strings content', () => {
    deepStrictEqual(render({
      html: {
        c: [
          '<head></head>',
          '<body></body>'
        ]
      }
    }), { css: [], html: '<html><head></head><body></body></html>' });
  });

  it('obj with single element with object content', () => {
    deepStrictEqual(render({
      html: {
        c: {
          head: null
        }
      }
    }), { css: [], html: '<html><head></head></html>' });
  });

  it('obj with single element with array of object and string content', () => {
    deepStrictEqual(render({
      html: {
        c: [
          {
            head: null
          },
          '<body></body>'
        ]
      }
    }), { css: [], html: '<html><head></head><body></body></html>' });
  });

  it('void element', () => {
    deepStrictEqual(render({ br: 'gets lost' }), { css: [], html: '<br/>' });
  });

  it('nested elements with attributes and content', () => {
    deepStrictEqual(render({
      html: {
        a: { // attributes
          class: 'className',
          style: 'font-size: 16px;' // attribute (will NOT be processed to NCSS)
        },
        c: [{ // content, can be string, object or array of either (TODO func/promise?)
          head: {
            c: '<title>Title</title>'
          } // head
        }, {
          body: {
            s: { // style property (will be processed to NCSS)
              fontSize: 24
            },
            m: { // media property (will be processed to NCSS)
              minWidth800: {
                width: 660
              }
            },
            c: {
              main: {
                c: {
                  header: {
                    c: [{
                      h1: {
                        c: 'Title'
                      }
                    }, '<span>Text</span>'
                    ]
                  } // heading
                }
              } // main
            }
          } // body
        }]
      } // html
    }), {
      css: [
        '.fs-24{font-size:24px}',
        '@media (min-width: 800px){.w-660-w-mi-800{width:660px}}'
      ],
      html: '<html class="className" style="font-size: 16px;"><head><title>Title</title></head><body class="fs-24 w-660-w-mi-800"><main><header><h1>Title</h1><span>Text</span></header></main></body></html>'
    }); // deepStrictEqual
  }); // it

  it('function syntax', () => {
    deepStrictEqual(render(html()), { css: [], html: '<html></html>' });
    deepStrictEqual(
      render(html({ name: 'value' })),
      { css: [], html: '<html name="value"></html>' }
    );
    deepStrictEqual(
      render(html(head())),
      { css: [], html: '<html><head></head></html>' }
    );
    deepStrictEqual(
      render(html({
        class: 'className',
        style: 'font-size: 16px;' // attribute (will NOT be processed to NCSS)
      }, [ // content, can be string, object or array of either (TODO func/promise?)
        head('<title>Title</title>'),
        body({
          _s: { // style property (will be processed to NCSS)
            fontSize: 24
          },
          _m: { // media property (will be processed to NCSS)
            minWidth800: {
              width: 660
            }
          } // _m
        }, main(header([
          h1('Title'),
          span('Text')
        ]))) // body
      ])), {
        css: [
          '.fs-24{font-size:24px}',
          '@media (min-width: 800px){.w-660-w-mi-800{width:660px}}'
        ],
        html: '<html class="className" style="font-size: 16px;"><head><title>Title</title></head><body class="fs-24 w-660-w-mi-800"><main><header><h1>Title</h1><span>Text</span></header></main></body></html>'
      }
    ); // deepStrictEqual
  }); // it

  it('modifyStyleAndMediaToClassAndCss(obj)', () => {
    const obj = div({
      _s: {
        display: 'none'
      },
      _m: {
        minWidth1: {
          display: 'block'
        }
      }
    });
    modifyStyleAndMediaToClassAndCss(obj);
    const css = [
      '.d-n{display:none}',
      '@media (min-width: 1px){.d-b-w-mi-1{display:block}}'
    ];
    deepStrictEqual(obj, {
      div: {
        a: {
          class: [
            'd-n',
            'd-b-w-mi-1'
          ]
        },
        css
      },
      _t: 'div'
    }); // deepStrictEqual

    // These are bad since clone.div references obj.div
    //const clone = Object.assign({}, obj);
    //const clone = { ...{}, ...obj };

    // These are bad, since div gets overwritten rather than merged:
    //const clone = { ...{}, ...obj, div: { a: { id: 'id' } } };
    //const clone = { div: { a: { id: 'id' } }, ...obj };

    const clone = JSON.parse(JSON.stringify(obj)); // Should work most of the time.
    //const clone = Object.create(obj); // Native implementation not available yet.
    clone.div.a.id = 'id';
    //console.log(`clone:${toStr(clone)}`);
    //console.log(`obj:${toStr(obj)}`); // This should not contain the id!
    deepStrictEqual(render([obj, clone]), {
      css,
      html: '<div class="d-b-w-mi-1 d-n"></div><div class="d-b-w-mi-1 d-n" id="id"></div>'
    });
  }); // it
}); // describe
