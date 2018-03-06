/* global describe it */

import { deepStrictEqual } from 'assert';
import { render } from '../src/obj.es';


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
}); // describe
