import {deepStrictEqual} from 'assert';
//import {print as inspect} from 'q-i';

import {RESET_STYLE} from '../../../src/css/reset.es';
import {html} from '../../../src/class/reset.es';
import {COMLOCK_STYLE, body} from '../../../src/class/reset/comlock.es';


describe('src', () => {
  describe('class', () => {
    it('reset', () => {
      deepStrictEqual(html(), {
        _t: 'html',
        _s: RESET_STYLE
      });
    }); // it reset

    describe('reset', () => {
      it('comlock', () => {
        deepStrictEqual(body(), {
          _t: 'body',
          _s: COMLOCK_STYLE
        });
      }); // comlock
    }); // describe reset
  }); // class
}); // src
