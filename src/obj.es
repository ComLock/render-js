/* eslint-disable import/prefer-default-export */
/* eslint-enable no-console */

import {
  isArray,
  isEmptyObject,
  isFunction,
  isObject,
  isSet,
  isString//,
  //toStr
} from '../util.es';
import {
  classAppendAndCssFromMedia,
  classAppendAndCssFromStyle,
  uniqCss
} from './css.es';
import {
  ELEMENTS as HTML_ELEMENTS,
  att2Str,
  isVoid
} from './html.es';
import { SVG_NOT_HTML_ELEMENTS } from './svg.es';


const HTML_AND_SVG_ELEMENTS = HTML_ELEMENTS.concat(SVG_NOT_HTML_ELEMENTS);


HTML_AND_SVG_ELEMENTS.forEach(t => {
  exports[t] = (...args) => {
    if (isString(args[0]) || isArray(args[0]) || !isSet(args[0]) || args[0]._t) {
      const obj = {
        [t]: {
          c: args[0]
        },
        _t: t // So we can differentiate between attributes and element objects.
      }; // obj
      //console.log(`obj:${toStr(obj)}`);
      return obj;
    } // if

    // At this point args[0] should be an attribute object.
    const el = {
      a: args[0]
    };
    if (isSet(args[1])) {
      el.c = args[1]; // eslint-disable-line prefer-destructuring
    }
    if (el.a._s) {
      el.s = el.a._s;
      delete el.a._s;
    }
    if (el.a._m) {
      el.m = el.a._m;
      delete el.a._m;
    }
    const obj = {
      [t]: el,
      _t: t // So we can differentiate between attributes and element objects.
    }; // obj
    //console.log(`obj:${toStr(obj)}`);
    return obj;
  };
}); // ELEMENTS.forEach


/* eslint-disable no-param-reassign */
export function modifyStyleAndMediaToClassAndCss(view) {
  if (isString(view)) { return view; }
  const arr = isArray(view) ? view : [view];
  const ret = arr.map(item => { //console.log(`item(${toStr(item)})`);
    if (isString(item)) { return item; }
    const tag = Object.keys(item)[0]; //console.log(`tag(${toStr(tag)})`);
    const value = item[tag]; //console.log(`value(${toStr(value)})`);
    if (isObject(value) && !isEmptyObject(value)) {
      // S is processed before M. This means Mobile first.
      if (value.s) { //console.log(`value.s(${toStr(value.s)})`);
        const s = classAppendAndCssFromStyle(value.s); //console.log(`s(${toStr(s)})`);
        item[tag].css = isArray(item[tag].css) ? item[tag].css.concat(s.css) : s.css;
        if (!isSet(item[tag].a)) { item[tag].a = {}; }
        item[tag].a.class = item[tag].a.class ?
          [].concat(item[tag].a.class, s.classAppend) : s.classAppend;
        delete item[tag].s;
      }
      if (value.m) { //console.log(`value.m(${toStr(value.m)})`);
        const m = classAppendAndCssFromMedia(value.m);
        item[tag].css = isArray(item[tag].css) ? item[tag].css.concat(m.css) : m.css;
        if (!isSet(item[tag].a)) { item[tag].a = {}; }
        item[tag].a.class = item[tag].a.class ?
          [].concat(item[tag].a.class, m.classAppend) : m.classAppend;
        delete item[tag].m;
      }
      if (value.c) {
        modifyStyleAndMediaToClassAndCss(value.c);
      }
    }
    return item;
  }); // arr.map
  return ret.length === 1 ? ret[0] : ret;
} // export function modifyStyleAndMediaToClassAndCss
/* eslint-enable-next-line no-param-reassign */


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
          if (value.css) { res.css = res.css.concat(value.css); }
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
} // export function render
