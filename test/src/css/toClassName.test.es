import {deepStrictEqual} from 'assert';
import {
  /*toClassNameToLowerCaseLast,
  toClassNameStartsWithEndsWith,
  toClassNameCharCode,
  toClassNameMatch,
  toClassNameSearch,*/
  toClassName
} from '../../../src/css/toClassName.es';
import {profile} from '../../util.es';
import {UNICODE_LETTERS} from '../../../src/util/unicode.es';

//const TEST = UNICODE_LETTERS;//'09AZaz';
const TEST = `-b o\tx\rS\nizing${UNICODE_LETTERS}-`; // eslint-disable-line quotes
//const RES = 'b-ox-sizing-y-y-i-n-n-i-n';
const RES1 = 'b-ox-sizing-y-y-i-i-n-n-i-n'; // Differences due to Unicode folding.
const TIMES = 0;


describe('src', () => {
  describe('css', () => {
    describe('toClassName', () => {
      it('profiling', () => {
        /*deepStrictEqual(profile('toClassNameSearch', () => toClassNameSearch(TEST), TIMES).value, RES);
        deepStrictEqual(profile('toClassNameMatch', () => toClassNameMatch(TEST), TIMES).value, RES);
        deepStrictEqual(profile('toClassNameCharCode', () => toClassNameCharCode(TEST), TIMES).value, RES);
        deepStrictEqual(profile('toClassNameToLowerCaseLast', () => toClassNameToLowerCaseLast(TEST), TIMES).value, RES);
        deepStrictEqual(profile('toClassNameStartsWithEndsWith', () => toClassNameStartsWithEndsWith(TEST), TIMES).value, RES1);*/
        deepStrictEqual(profile('toClassName', () => toClassName(TEST), TIMES).value, RES1);
      }); // profiling
    }); // toClassName
  }); // css
}); // src
