import {deepStrictEqual} from 'assert';
import {html, svg, render} from '../src/class.es';


describe('class', () => {
  describe('function', () => {
    it('no params', () => {
      deepStrictEqual(html(), {
        _t: 'html'
      });
    }); // it

    it('empty params', () => {
      deepStrictEqual(html(null, null), {
        _t: 'html'
      });
      deepStrictEqual(html('', ''), { //Should this fail?
        _t: 'html'
      });
      deepStrictEqual(html({}), {
        _t: 'html',
        _a: {}
      });
      deepStrictEqual(html({}, ''), {
        _t: 'html',
        _a: {}
      });
    }); // it

    it('useful params', () => {
      deepStrictEqual(html({prop: 'value'}, 'text'), {
        _t: 'html',
        _a: {
          prop: 'value'
        },
        _c: 'text'
      });
    });//it

    describe('attributes', () => {
      it('dasherize', () => {
        const dom = html({dataProp: 'value'});
        deepStrictEqual(dom, {
          _t: 'html',
          _a: {
            dataProp: 'value'
          }
        });
        const r = render(dom);
        deepStrictEqual(r, {
          css: [],
          html: '<html data-prop="value"></html>'
        });
      }); // it
      it('handles svg viewBox attribute which is case sensitive', () => {
        const VIEWBOX = '0 0 1 1';
        const dom = svg({ viewBox: VIEWBOX });
        deepStrictEqual(dom, {
          _t: 'svg',
          _a: {
            viewBox: VIEWBOX
          }
        });
        deepStrictEqual(render(dom), {
          css: [],
          html: `<svg viewBox="${VIEWBOX}"></svg>`
        });
      }); // it

      it('style attribute object to string addings default unit', () => {
        const dom = html({
          style: {
            borderBottomWidth: 1,
            lineHeight: 1
          }
        });
        deepStrictEqual(dom, {
          _t: 'html',
          _a: {
            style: {
              borderBottomWidth: 1,
              lineHeight: 1
            }
          }
        });
        deepStrictEqual(render(dom), {
          css: [],
          html: '<html style="border-bottom-width:1px;line-height:1px"></html>'
        });
      }); // it
    }); // describe attributes*/
  }); // describe function
});// describe class
