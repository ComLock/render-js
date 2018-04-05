/* global describe it */

import { deepStrictEqual } from 'assert';
import { isArrayOrFuncOrString } from '../lib/util';


describe('util', () => {
  describe('isArrayOrFuncOrString', () => {
    it('null', () => {
      deepStrictEqual(isArrayOrFuncOrString(null), false);
    }); // null
  }); // isArrayOrFuncOrString
}); // util
