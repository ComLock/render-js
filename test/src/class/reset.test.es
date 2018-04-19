import {deepStrictEqual} from 'assert';
//import {print as inspect} from 'q-i';

import {RESET_STYLE} from '../../../src/css/reset.es';
import {html} from '../../../src/class/reset.es';


describe('src', () => {
  describe('class', () => {
    it('reset', () => {
      deepStrictEqual(html(), {
        _t: 'html',
        _s: RESET_STYLE
      });
    }); // defaultStyle
  }); // class
}); // src
