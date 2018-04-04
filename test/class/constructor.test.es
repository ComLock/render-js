import {deepStrictEqual} from 'assert';

import {
  html
} from '../../src/class.es';


describe('class', () => {
  describe('constructor', () => {
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
        _t: 'html'
      });
      deepStrictEqual(html({}, ''), {
        _t: 'html'
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
    }); // it

    it('style spec', () => {
      const STYLE = {borderBottomWidth: 1};
      deepStrictEqual(html({_s: STYLE}), {
        _t: 'html',
        _s: STYLE
      });
    }); // it

    it('media spec', () => {
      const MEDIA = {
        minWidth1: {
          borderBottomWidth: 1
        }
      };
      deepStrictEqual(html({_m: MEDIA}), {
        _t: 'html',
        _m: MEDIA
      });
    }); // it
  }); // describe constructor
}); // describe class
