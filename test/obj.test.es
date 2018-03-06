/* global describe it */

import { deepStrictEqual } from 'assert';
import { render } from '../obj.es';


describe('obj', () => {
  it('string', () => {
    deepStrictEqual(render({ view: '<html></html>' }).html, '<html></html>');
  });

  it('array of strings', () => {
    deepStrictEqual(render({
      view: [
        '<1></1>',
        '<2></2>'
      ]
    }).html, '<1></1><2></2>');
  });

  it('obj with single element without attributes or content', () => {
    deepStrictEqual(render({ view: { html: '' } }).html, '<html></html>');
    deepStrictEqual(render({ view: { html: {} } }).html, '<html></html>');
    deepStrictEqual(render({ view: { html: null } }).html, '<html></html>');
    deepStrictEqual(render({ view: { html: undefined } }).html, '<html></html>');
  });
  it('obj with single element with string value', () => {
    deepStrictEqual(render({
      view: {
        html: '<head></head><body></body>'
      }
    }).html, '<html><head></head><body></body></html>');
  });

  it('obj with single element with attribute', () => {
    deepStrictEqual(render({
      view: {
        html: {
          a: {
            name: 'value'
          }
        }
      }
    }).html, '<html name="value"></html>');
  });

  it('obj with single element with string content', () => {
    deepStrictEqual(render({
      view: {
        html: {
          c: '<head></head>'
        }
      }
    }).html, '<html><head></head></html>');
  });

  it('obj with single element with array of strings content', () => {
    deepStrictEqual(render({
      view: {
        html: {
          c: [
            '<head></head>',
            '<body></body>'
          ]
        }
      }
    }).html, '<html><head></head><body></body></html>');
  });

  it('obj with single element with object content', () => {
    deepStrictEqual(render({
      view: {
        html: {
          c: {
            head: null
          }
        }
      }
    }).html, '<html><head></head></html>');
  });

  it('obj with single element with array of object and string content', () => {
    deepStrictEqual(render({
      view: {
        html: {
          c: [
            {
              head: null
            },
            '<body></body>'
          ]
        }
      }
    }).html, '<html><head></head><body></body></html>');
  });

  it('void element', () => {
    deepStrictEqual(
      render({
        view: {
          br: 'gets lost'
        }
      }).html,
      '<br/>'
    );
  });

  it('nested elements with attributes and content', () => {
    deepStrictEqual(render({
      view: {
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
                fontSize: 16
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
      } // view
    }).html, '<html class="className" style="font-size: 16px;"><head><title>Title</title></head><body><main><header><h1>Title</h1><span>Text</span></header></main></body></html>'); // deepStrictEqual
  }); // it*/
}); // describe
