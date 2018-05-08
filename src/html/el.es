/* eslint-disable no-param-reassign */
import {att2Str} from '../html/att2Str.es';
import {isVoid} from '../html/isVoid.es';
import {isArray} from '../util/isArray.es';
import {isArrayOrString} from '../util/isArrayOrString.es';
import {isArrayOrFuncOrString} from '../util/isArrayOrFuncOrString.es';
import {isFunction} from '../util/isFunction.es';
import {toStr} from '../util/toStr.es';


export function el(tag, attributes = null, content = null) {
  if (isArrayOrFuncOrString(attributes)) { // Allow arguments in any order
    if (isArrayOrFuncOrString(content)) {
      throw new Error(`When called with two arguments one must be an object! ${toStr(tag)}(${toStr(attributes)}, ${toStr(content)})`);
    }
    const tmp = content;
    content = attributes;
    attributes = tmp;
  }

  // DEBUG && console.log(`attributes:${toStr(attributes)}`);
  attributes = att2Str(attributes); // TODO , {addDefaultUnitFn}

  if (!isArray(content)) { content = [content]; } // forceArray to simplify code
  content = content.map(item => {
    while (isFunction(item)) {
      item = item();
    }

    if (isArrayOrString(item)) {
      item = [].concat(item).join(''); // This works for both array and string
    } else {
      item = '';
    }
    return item;
  }).join('');
  // DEBUG && console.log(`content:${toStr(content)}`);
  return isVoid(tag) ? `<${tag}${attributes}/>` : `<${tag}${attributes}>${content}</${tag}>`;
} // el


export const elFn = tag => (...args) => el(tag, ...args);
