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
      //console.log(`tag:${toStr(tag)}`);
      let value = item[tag]; //console.log(`value:${toStr(value)}`);
      if (isArray(value)) {
        throw new Error(`The value of tag:${tag} cannot be of type array!`);
      } else if (isFunction(value)) {
        throw new Error(`The value of tag:${tag} cannot be of type function!`);
      } else if (isObject(value)) {
        if (isEmptyObject(value)) { value = ''; }
        //if (item.a) {}
        //if (item.c) {}
        //if (item.m) {}
        //if (item.s) {}
      } else if (!value) {
        value = '';
      }
      res.html += `<${tag}>${value}</${tag}>`;
    }
  }
  console.log(`res:${toStr(res)}`);
  return res;
}
