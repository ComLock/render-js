/* eslint-disable import/prefer-default-export */


export function dasherize(str) {
  // TRACE && console.log(`dasherize(${toStr(str)})`);
  // const dasherizedStr =
  return `${str}` // handle non-strings
    .replace(/([A-Z])/g, '-$1')
    .replace(/[-_\s]+/g, '-')
    .toLowerCase();
  // DEBUG && console.log(`dasherize(${toStr(str)}) --> ${dasherizedStr}`);
  // return dasherizedStr;
} // function dasherize
