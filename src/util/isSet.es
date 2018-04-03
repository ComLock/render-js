/* eslint-disable import/prefer-default-export */


export function isSet(value) {
  if (typeof value === 'boolean') { return true; } // If value is true/false it is set
  return value !== null && typeof value !== 'undefined';
}
