/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */

import {
  isArray,
  isEmptyObject,
  isFunction,
  isObject,
  isString,
  toStr
} from './util.es';
import {
  att2Str,
  isVoid
} from './src/html.es';

// view, model, data, view
// item, entry, child
export function render({
  view,
  res = {
    html: '',
    css: []
  }
}) {
  //console.log(`render(${toStr({ view, res })})`);
  if (isString(view)) {
    res.html += view;
    return res;
  }
  const arr = isArray(view) ? view : [view]; //console.log(`arr:${toStr(arr)}`);
  for (let i = 0; i < arr.length; i += 1) {
    const item = arr[i];
    if (isString(item)) {
      res.html += item; // Modifying res which is passed by reference.
    } else { // isObject
      const tag = Object.keys(item)[0]; // There should only be one property.
      //console.log(`tag:${tag}`);
      const value = item[tag]; //console.log(`value:${toStr(value)}`);
      let attributes = '';
      let content = '';
      if (isArray(value)) {
        throw new Error(`The value of tag:${tag} cannot be of type array!`);
      } else if (isFunction(value)) {
        throw new Error(`The value of tag:${tag} cannot be of type function!`);
      } else if (isObject(value)) {
        if (isEmptyObject(value)) {
          content = '';
        } else {
          //console.log(`tag:${tag} value:${toStr(value)}`);
          if (value.c) {
            console.log(`tag:${tag} recursing`);
            content = render({ view: value.c }).html; // recurse
          }
          if (value.a) { attributes = att2Str(value.a); }
          //if (value.m) {}
          //if (value.s) {}
        }
      } else if (isString(value)) {
        content = value;
      }
      if (isVoid(tag)) { // TODO short circuit
        res.html += `<${tag}${attributes}/>`;
      } else {
        res.html += `<${tag}${attributes}>${content}</${tag}>`;
      }
    }
  }
  console.log(`res:${toStr(res)}`);
  return res;
}
