// This file is ECMAscript 2015, if you need old JavaScript 1.6 use dist/util.js
export {
  camelize,
  dasherize,
  dict,
  isArray,
  isArrayOrFuncOrString,
  isArrayOrString,
  isBool,
  isEmptyObject,
  isFunction,
  isInt,
  isNumeric,
  isObject,
  isSet,
  isString,
  sortAndRemoveDups,
  sortedUniqStr,
  toStr
} from './src/util.es';
export {objToStyleAttr as objectToCssDeclarations} from './src/css/objToStyleAttr.es'; // NOTE Deprecated to be removed in 2.0.0
export {UNICODE_LETTERS} from './src/util/unicode.es'; // Only used in test, keeping for backwards compat
