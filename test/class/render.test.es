import {deepStrictEqual} from 'assert';
import {html, svg, render} from '../../lib/class';

describe('class', () => {
  describe('render', () => {
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
    }); // describe attributes

    it('style and media', () => {
      const STYLE = {borderBottomWidth: 1};
      const MEDIA = {minWidth1: STYLE};
      const dom = html({
        _s: STYLE,
        _m: MEDIA
      });
      deepStrictEqual(render(dom), {
        css: [
          '.bbw-1{border-bottom-width:1px}',
          '@media (min-width: 1px){.bbw-1-w-mi-1{border-bottom-width:1px}}'
        ],
        html: '<html class="bbw-1 bbw-1-w-mi-1"></html>'
      });
    }); // it
  }); // describe render
}); // describe class
