/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */

import {
  isArray,
  isEmptyObject,
  isFunction,
  isObject,
  isString//,
  //toStr
} from './util.es';
import {
  classAppendAndCssFromMedia,
  classAppendAndCssFromStyle,
  uniqCss
} from './src/css.es';
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
      let attrStr = '';
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
            //console.log(`tag:${tag} recursing`);
            const c = render({ view: value.c }); // recurse
            res.css = res.css.concat(c.css);
            content = c.html;
          }
          const attributes = value.a || {};
          if (value.s) { // S is processed before M. This means Mobile first.
            const s = classAppendAndCssFromStyle(value.s);
            //console.log(`tag:${tag} s:${toStr(s)}`);
            res.css = res.css.concat(s.css);
            attributes.class = attributes.class ?
              [].concat(attributes.class, s.classAppend) : s.classAppend;
            //console.log(`tag:${tag} attributes.class:${toStr(attributes.class)}`);
          }
          if (value.m) {
            const m = classAppendAndCssFromMedia(value.m);
            //console.log(`tag:${tag} m:${toStr(m)}`);
            res.css = res.css.concat(m.css);
            attributes.class = attributes.class ?
              [].concat(attributes.class, m.classAppend) : m.classAppend;
            //console.log(`tag:${tag} attributes.class:${toStr(attributes.class)}`);
          }
          if (res.css) { res.css = uniqCss(res.css); }
          if (attributes) { attrStr = att2Str(attributes); }
        }
      } else if (isString(value)) {
        content = value;
      }
      if (isVoid(tag)) { // TODO? short circuit
        res.html += `<${tag}${attrStr}/>`;
      } else {
        res.html += `<${tag}${attrStr}>${content}</${tag}>`;
      }
    }
  }
  //console.log(`res:${toStr(res)}`);
  return res;
}
