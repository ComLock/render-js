/* eslint-disable import/prefer-default-export */


import {
  PROP_ATTR,
  PROP_CONTENT,
  PROP_CSS,
  PROP_TAG
} from './element.es';

import {buildStyleAndMedia} from './build.es';

import {dashPropToAbbrClassName} from '../css/dashPropToAbbrClassName.es';
import {valueDashPropToAbbrClassName} from '../css/valueDashPropToAbbrClassName.es';
import {addDefaultUnit} from '../css/addDefaultUnit.es';
import {toClassName} from '../css/toClassName.es';
import {uniqCss} from '../css/uniqCss.es';

import {att2Str} from '../html/att2Str.es';
import {isVoid} from '../html/isVoid.es';

import {isArray} from '../util/isArray.es';
import {isString} from '../util/isString.es';
//import {toStr} from '../util/toStr.es';


export function render(dom, {
  abbreviateCssPropertyNames = true,
  abbreviateCssPropertyValues = true,
  addDefaultUnits = true/*,
  autoprefixer = false*/
} = {}) {
  if (isString(dom)) { return { css: [], html: dom }; }
  const res = { css: [], html: '' };
  const arr = isArray(dom) ? dom : [dom]; //console.log(`arr:${toStr(arr)}`);
  const options = {
    dashPropToAbbrClassNameFn: abbreviateCssPropertyNames ? dashPropToAbbrClassName : toClassName,
    valueDashPropToAbbrClassNameFn: abbreviateCssPropertyValues ? valueDashPropToAbbrClassName : toClassName,
    addDefaultUnitFn: addDefaultUnits ? addDefaultUnit : value => value
  };
  for (let i = 0; i < arr.length; i += 1) {
    const item = arr[i];
    if (isString(item)) {
      res.html += item; // Modifying res which is passed by reference.
      // TODO Handle isFunction(item)
    } else { // Dom object
      const boolVoid = isVoid(item[PROP_TAG]);

      let contentStr = '';
      if (!boolVoid && item[PROP_CONTENT]) {
        //console.log(`tag:${PROP_TAG} recursing`);
        const c = render(item[PROP_CONTENT]); // recurse
        res.css = res.css.concat(c.css);
        contentStr = c.html;
      }

      buildStyleAndMedia(item, options); // console.log(`item:${toStr(item)}`);
      if (item[PROP_CSS]) { res.css = res.css.concat(item[PROP_CSS]); }
      if (res.css) { res.css = uniqCss(res.css); }

      const attrStr = item[PROP_ATTR] ? att2Str(item[PROP_ATTR], {addDefaultUnitFn: options.addDefaultUnitFn}) : '';
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
