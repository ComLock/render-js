import {deepStrictEqual} from 'assert';
//import {print as inspect} from 'q-i';

import {RESET_STYLE} from '../../../src/css/reset.es';
import {html} from '../../../src/class.es';


describe('src', () => {
  describe('class', () => {
    it('defaultStyle', () => {
      deepStrictEqual(html(), {
        _t: 'html',
        _s: RESET_STYLE
      });
    }); // defaultStyle
  }); // class
}); // src
