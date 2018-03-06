/* eslint-disable import/prefer-default-export */
/* eslint-enable no-console */

import {
  isArray,
  isEmptyObject,
  isFunction,
  isObject,
  isString//,
  //toStr
} from '../util.es';
import {
  classAppendAndCssFromMedia,
  classAppendAndCssFromStyle,
  uniqCss
} from './css.es';
import {
  att2Str,
  isVoid
} from './html.es';


export function render(view) {
  //console.log(`render(${toStr(view)})`);
  if (isString(view)) { return { css: [], html: view }; }
  const res = { css: [], html: '' };
  const arr = isArray(view) ? view : [view]; //console.log(`arr:${toStr(arr)}`);
  for (let i = 0; i < arr.length; i += 1) {
    const item = arr[i];
    if (isString(item)) {
      res.html += item; // Modifying res which is passed by reference.
    } else { // isObject
      const tag = Object.keys(item)[0]; // There should only be one property.
      const boolVoid = isVoid(tag);
      //console.log(`tag:${tag}`);
      const value = item[tag]; //console.log(`value:${toStr(value)}`);
      let attrStr = '';
      let contentStr = '';
      if (isArray(value)) {
        throw new Error(`The value of tag:${tag} cannot be of type array!`);
      } else if (isFunction(value)) {
        throw new Error(`The value of tag:${tag} cannot be of type function!`);
      } else if (isObject(value)) {
        if (isEmptyObject(value)) {
          contentStr = '';
        } else {
          //console.log(`tag:${tag} value:${toStr(value)}`);
          if (!boolVoid && value.c) {
            //console.log(`tag:${tag} recursing`);
            const c = render(value.c); // recurse
            res.css = res.css.concat(c.css);
            contentStr = c.html;
          }
          const attrs = value.a || {};
          if (value.s) { // S is processed before M. This means Mobile first.
            const s = classAppendAndCssFromStyle(value.s);
            //console.log(`tag:${tag} s:${toStr(s)}`);
            res.css = res.css.concat(s.css);
            attrs.class = attrs.class ?
              [].concat(attrs.class, s.classAppend) : s.classAppend;
            //console.log(`tag:${tag} attrs.class:${toStr(attrs.class)}`);
          }
          if (value.m) {
            const m = classAppendAndCssFromMedia(value.m);
            //console.log(`tag:${tag} m:${toStr(m)}`);
            res.css = res.css.concat(m.css);
            attrs.class = attrs.class ?
              [].concat(attrs.class, m.classAppend) : m.classAppend;
            //console.log(`tag:${tag} attrs.class:${toStr(attrs.class)}`);
          }
          if (res.css) { res.css = uniqCss(res.css); }
          if (attrs) { attrStr = att2Str(attrs); }
        }
      } else if (isString(value)) {
        contentStr = value;
      }
      if (boolVoid) {
        res.html += `<${tag}${attrStr}/>`;
      } else {
        res.html += `<${tag}${attrStr}>${contentStr}</${tag}>`;
      }
    }
  }
  //console.log(`res:${toStr(res)}`);
  return res;
}
