/* eslint-disable import/prefer-default-export */
/* eslint-disable max-len */


export function isFunction(value) {
  return !!(value && value.constructor && value.call && value.apply); // highly performant from underscore
}
