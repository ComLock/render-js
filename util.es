/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */


const DEBUG = false;
const TRACE = false;


export function toStr(value) {
  return JSON.stringify(value, null, 4);
}


export function camelize(str) {
  TRACE && console.log(`camelize(${toStr(str)})`);
  const camelizedStr = str.replace(
    /(?:^\w|[A-Z]|\b\w)/g,
    (letter, index) => index === 0 // eslint-disable-line no-confusing-arrow
      ? letter.toLowerCase()
      : letter.toUpperCase()
  ).replace(/(\s|-)+/g, '');
  DEBUG && console.log(`camelize(${toStr(str)}) --> ${camelizedStr}`);
  return camelizedStr;
} // function camelize


export function dasherize(str) {
  TRACE && console.log(`dasherize(${toStr(str)})`);
  const dasherizedStr = `${str}` // handle non-strings
    .replace(/([A-Z])/g, '-$1')
    .replace(/[-_\s]+/g, '-')
    .toLowerCase();
  DEBUG && console.log(`dasherize(${toStr(str)}) --> ${dasherizedStr}`);
  return dasherizedStr;
} // function dasherize


export const dict = arr => Object.assign(...arr.map(([k, v]) => ({ [k]: v })));


export function isBool(value) {
  return typeof (value) === typeof (true);
}


export function isInt(value) {
  return typeof value === 'number' && isFinite(value) && Math.floor(value) === value; // eslint-disable-line no-restricted-globals
}


export function isSet(value) {
  if (typeof value === 'boolean') { return true; } // If value is true/false it is set
  return value !== null && typeof value !== 'undefined';
}


export function isString(value) {
  return typeof value === 'string' || value instanceof String;
}


export function isArrayOrString(value) {
  return Array.isArray(value) || isString(value);
}


export function objectToCssDeclarations(obj, { newline = '' } = {}) {
  return Object.keys(obj)
    .map(name => `${dasherize(name)}: ${obj[name]}`)
    .join(`;${newline}`);
} // function objectToCssDeclarations


export function sortAndRemoveDups(arr) {
  return arr.sort() // must happen before removing duplicates
    .filter((item, pos, ary) => !pos || item !== ary[pos - 1]); // removing duplicates
}
