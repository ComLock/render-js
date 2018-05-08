/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */


import convertHrtime from 'convert-hrtime';
//import { toStr } from '../src/util/toStr.es';


export function profile(message, fn, times = 1000) {
  const start = process.hrtime();
  for (let i = 0; i < times; i += 1) {
    fn();
  }
  const end = process.hrtime();
  const average = (
    convertHrtime(end).nanoseconds - convertHrtime(start).nanoseconds
  ) / times;
  console.log(`${average}ns ${message}`);
  //console.log(`value: ${toStr(fn())}`);
  return {
    average,
    value: fn()
  };
}


export function removeWhiteSpace(str) {
  return str.replace(/[\n\r]+\s*/g, ''); // .replace(/[\n\r]+/g, '');
}
