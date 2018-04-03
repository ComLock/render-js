/* eslint-disable import/prefer-default-export */


// https://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object
export function isEmptyObject(value) {
  return Object.keys(value).length === 0 && value.constructor === Object;
}
