/* eslint-disable import/prefer-default-export */


import {isFunction} from './isFunction.es';
import {isString} from './isString.es';


export function isArrayOrFuncOrString(value) {
  return Array.isArray(value) || isString(value) || isFunction(value);
}
