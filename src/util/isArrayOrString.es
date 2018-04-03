/* eslint-disable import/prefer-default-export */


import {isString} from './isString.es';


export function isArrayOrString(value) {
  return Array.isArray(value) || isString(value);
}
