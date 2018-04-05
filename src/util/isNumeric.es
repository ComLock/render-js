/* eslint-disable no-restricted-globals */
export function isNumeric(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
}
