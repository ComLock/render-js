/* eslint-disable import/prefer-default-export */
import stringify from 'json-stringify-safe';

export function toStr(value) {
  return stringify(value, null, 4);
}
