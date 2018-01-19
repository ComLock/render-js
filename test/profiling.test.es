/* eslint-disable no-console */

import convertHrtime from 'convert-hrtime';
import { deepStrictEqual, ok } from 'assert';
//import { div } from '../index';
import { sortAndRemoveDups, sortedUniqStr, toStr } from '../util.es';

function profile(fn, message, times = 10000) {
  const start = process.hrtime();
  for (let i = 0; i < times; i += 1) {
    fn();
  }
  const end = process.hrtime();
  const average = (
    convertHrtime(end).nanoseconds - convertHrtime(start).nanoseconds
  ) / times;
  console.log(`${message}: ${toStr(average)}`);
  //console.log(`value: ${toStr(fn())}`);
  return {
    average,
    value: fn()
  };
}


describe('profiling', () => {
  /*it('div no params', () => {
    const average = profile(() => { div(); });
    ok(average < 1867.205);
  });*/

  it('sortAndRemoveDups', () => {
    const ARRAY = 'abcdezfygxhviujtkslrmqnpoopnqmrlsktjuivhwgxfyezdcba'.split('');
    const t1 = profile(() => sortAndRemoveDups(ARRAY).join(' '), 'sortAndRemoveDups');
    const t2 = profile(() => sortedUniqStr(ARRAY), 'sortedUniqStr');
    deepStrictEqual(t1.value, t2.value, '1 === 2');
    ok(t2.average < t1.average);
  });
}); // describe
