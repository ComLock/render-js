/* eslint-disable import/prefer-default-export */


export function removeWhiteSpace(str) {
  return str.replace(/[\n\r]+\s*/g, ''); // .replace(/[\n\r]+/g, '');
}
