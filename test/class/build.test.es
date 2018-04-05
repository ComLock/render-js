import {deepStrictEqual} from 'assert';
import {html, build} from '../../lib/class';


describe('class', () => {
  describe('build', () => {
    const STYLE = { borderBottomWidth: 1};
    const MEDIA = {
      minWidth1: STYLE
    };

    it('no style nor media', () => {
      const dom = html();
      build(dom);
      deepStrictEqual(dom, {
        _t: 'html'
      });
    }); // it no style nor media

    it('just style', () => {
      const dom = html({_s: STYLE});
      build(dom);
      deepStrictEqual(dom, {
        _t: 'html',
        _a: {
          class: [
            'bbw-1'
          ]
        },
        _css: [
          '.bbw-1{border-bottom-width:1px}'
        ]
      });
    }); // it just style

    it('just media', () => {
      const dom = html({_m: MEDIA});
      build(dom);
      deepStrictEqual(dom, {
        _t: 'html',
        _a: {
          class: [
            'bbw-1-w-mi-1'
          ]
        },
        _css: [
          '@media (min-width: 1px){.bbw-1-w-mi-1{border-bottom-width:1px}}'
        ]
      });
    }); // it just media

    it('style and media', () => {
      const dom = html({
        _s: STYLE,
        _m: MEDIA
      });
      build(dom);
      deepStrictEqual(dom, {
        _t: 'html',
        _a: {
          class: [
            'bbw-1',
            'bbw-1-w-mi-1'
          ]
        },
        _css: [
          '.bbw-1{border-bottom-width:1px}',
          '@media (min-width: 1px){.bbw-1-w-mi-1{border-bottom-width:1px}}'
        ]
      });
    }); // it style and media
  }); // describe build
});// describe class
