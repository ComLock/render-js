/* eslint-disable import/prefer-default-export */


import {att2Str} from '../html/att2Str.es';
import {isVoid} from '../html/isVoid.es';
import {
  PROP_ATTR,
  PROP_CONTENT,
  PROP_CSS,
  PROP_TAG
} from './element.es';
import {
  isArray,
  //isEmptyObject,
  //isFunction,
  //isObject,
  isString
} from '../util.es';

/*, {
  dasherizeHtmlAttributes = true,
  abbreviateCssProperties = false
} = {}*/

export function render(dom) {
  if (isString(dom)) { return { css: [], html: dom }; }
  const res = { css: [], html: '' };
  const arr = isArray(dom) ? dom : [dom]; //console.log(`arr:${toStr(arr)}`);
  for (let i = 0; i < arr.length; i += 1) {
    const item = arr[i];
    if (isString(item)) {
      res.html += item; // Modifying res which is passed by reference.
      // TODO Handle isFunction(item)
    } else { // Dom object
      const boolVoid = isVoid(item[PROP_TAG]);

      let contentStr = '';
      if (!boolVoid && item[PROP_CONTENT]) {
        //console.log(`tag:${tag} recursing`);
        const c = render(item[PROP_CONTENT]); // recurse
        //res.css = res.css.concat(c.css);
        contentStr = c.html;
      }
      const attrs = item[PROP_ATTR] || {};
      if (item[PROP_CSS]) { res.css = res.css.concat(item[PROP_CSS]); }
      //if (res.css) { res.css = uniqCss(res.css); }
      let attrStr = '';
      if (attrs) { attrStr = att2Str(attrs); }
      if (boolVoid) {
        res.html += `<${item[PROP_TAG]}${attrStr}/>`;
      } else {
        res.html += `<${item[PROP_TAG]}${attrStr}>${contentStr}</${item[PROP_TAG]}>`;
      }
    } // isObject
  } // for
  //console.log(`res:${toStr(res)}`);
  return res;
} // export function render
