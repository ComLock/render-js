/* eslint-disable import/prefer-default-export */


/**
 * Returns true if the value is an object. Otherwise false.
 * Note that array and function is an object.
 * @param {*} value
 * @returns {boolean}
 */
export function isObject(value) {
  return value === Object(value);
}
