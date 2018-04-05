import {camelize} from './util/camelize.es';
import {dasherize} from './util/dasherize.es';
import {dict} from './util/dict.es';
import {isArray} from './util/isArray.es';
import {isArrayOrFuncOrString} from './util/isArrayOrFuncOrString.es';
import {isArrayOrString} from './util/isArrayOrString.es';
import {isBool} from './util/isBool.es';
import {isEmptyObject} from './util/isEmptyObject.es';
import {isFunction} from './util/isFunction.es';
import {isInt} from './util/isInt.es';
import {isNumeric} from './util/isNumeric.es';
import {isObject} from './util/isObject.es';
import {isSet} from './util/isSet.es';
import {isString} from './util/isString.es';
import {sortAndRemoveDups} from './util/sortAndRemoveDups.es';
import {sortedUniqStr} from './util/sortedUniqStr.es';
import {toStr} from './util/toStr.es';

/*
  A little weird way of exporting, but it works when:
  1. imported directly
  2. transpiled to dist
  3. webpacked to lib
*/

exports.camelize = camelize;
exports.dasherize = dasherize;
exports.dict = dict;
exports.isArray = isArray;
exports.isArrayOrFuncOrString = isArrayOrFuncOrString;
exports.isArrayOrString = isArrayOrString;
exports.isBool = isBool;
exports.isEmptyObject = isEmptyObject;
exports.isFunction = isFunction;
exports.isInt = isInt;
exports.isNumeric = isNumeric;
exports.isObject = isObject;
exports.isSet = isSet;
exports.isString = isString;
exports.sortAndRemoveDups = sortAndRemoveDups;
exports.sortedUniqStr = sortedUniqStr;
exports.toStr = toStr;

export default exports;
