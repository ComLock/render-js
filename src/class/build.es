/* eslint-disable no-param-reassign */
//import merge from 'deepmerge';
//import {RESET_OBJECT} from '../css/reset.es';

import {
  PROP_ATTR, PROP_CONTENT, PROP_CSS, PROP_MEDIA, PROP_STYLE//, PROP_TAG
} from './element.es';
import {isArray} from '../util/isArray.es';
import {isSet} from '../util/isSet.es';
import {isString} from '../util/isString.es';
import {
  classAppendAndCssFromMedia,
  classAppendAndCssFromStyle
} from '../css.es';


export function buildStyle(item) {
  if (item[PROP_STYLE]) {
    // TODO implement !abbreviateCssProperties
    //const style = RESET_OBJECT[item[PROP_TAG]] ? merge(RESET_OBJECT[item[PROP_TAG]], item[PROP_STYLE]) : item[PROP_STYLE];
    const s = classAppendAndCssFromStyle(item[PROP_STYLE]);
    item[PROP_CSS] = isArray(item[PROP_CSS]) ? item[PROP_CSS].concat(s.css) : s.css;
    if (!isSet(item[PROP_ATTR])) { item[PROP_ATTR] = {}; }
    item[PROP_ATTR].class = item[PROP_ATTR].class ?
      [].concat(item[PROP_ATTR].class, s.classAppend) : s.classAppend;
    delete item[PROP_STYLE];
  } // if style
} // export function buildStyle


export function buildMedia(item) {
  if (item[PROP_MEDIA]) {
    // TODO implement !abbreviateCssProperties
    const m = classAppendAndCssFromMedia(item[PROP_MEDIA]);
    item[PROP_CSS] = isArray(item[PROP_CSS]) ? item[PROP_CSS].concat(m.css) : m.css;
    if (!isSet(item[PROP_ATTR])) { item[PROP_ATTR] = {}; }
    item[PROP_ATTR].class = item[PROP_ATTR].class ?
      [].concat(item[PROP_ATTR].class, m.classAppend) : m.classAppend;
    delete item[PROP_MEDIA];
  } // if style
} // export function buildMedia


export function buildStyleAndMedia(item) {
  buildStyle(item);
  buildMedia(item);
} // export function buildStyleAndMedia


/*, {
  abbreviateCssProperties = true
} = {}*/
export function build(dom) {
  if (isString(dom)) { return; }
  const arr = isArray(dom) ? dom : [dom];
  const res = arr.map(item => {
    if (isString(item)) { return item; }

    // TODO Handle function?

    buildStyleAndMedia(item);

    if (item[PROP_CONTENT]) { build(item[PROP_CONTENT]); } // recurse

    return item;
  }); // map
  dom = res.length === 1 ? res[0] : res;
  return dom; // So it can be chained
} // export function build
