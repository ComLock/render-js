/* global describe it */

import { deepStrictEqual } from 'assert';
import { isArrayOrFuncOrString } from '../util.es';


describe('util', () => {
  describe('isArrayOrFuncOrString', () => {
    it('null', () => {
      deepStrictEqual(isArrayOrFuncOrString(null), false);
    }); // null
  }); // isArrayOrFuncOrString
}); // util
