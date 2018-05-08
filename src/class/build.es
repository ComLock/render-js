/* eslint-disable no-param-reassign */
//import merge from 'deepmerge';
//import {RESET_OBJECT} from '../css/reset.es';

import {
  PROP_ATTR, PROP_CONTENT, PROP_CSS, PROP_MEDIA, PROP_STYLE//, PROP_TAG
} from './element.es';

import {dashPropToAbbrClassName} from '../css/dashPropToAbbrClassName.es';
import {valueDashPropToAbbrClassName} from '../css/valueDashPropToAbbrClassName.es';
import {addDefaultUnit} from '../css/addDefaultUnit.es';
import {classAppendAndCssFromMedia} from '../css/classAppendAndCssFromMedia.es';
import {classAppendAndCssFromStyle} from '../css/classAppendAndCssFromStyle.es';
import {toClassName} from '../css/toClassName.es';

import {isArray} from '../util/isArray.es';
import {isSet} from '../util/isSet.es';
import {isString} from '../util/isString.es';


export function buildStyle(item, options) {
  if (item[PROP_STYLE]) {
    //const style = RESET_OBJECT[item[PROP_TAG]] ? merge(RESET_OBJECT[item[PROP_TAG]], item[PROP_STYLE]) : item[PROP_STYLE];
    const s = classAppendAndCssFromStyle(item[PROP_STYLE], options);
    item[PROP_CSS] = isArray(item[PROP_CSS]) ? item[PROP_CSS].concat(s.css) : s.css;
    if (!isSet(item[PROP_ATTR])) { item[PROP_ATTR] = {}; }
    item[PROP_ATTR].class = item[PROP_ATTR].class ?
      [].concat(item[PROP_ATTR].class, s.classAppend) : s.classAppend;
    delete item[PROP_STYLE];
  } // if style
} // export function buildStyle


export function buildMedia(item, options) {
  if (item[PROP_MEDIA]) {
    const m = classAppendAndCssFromMedia(item[PROP_MEDIA], options);
    item[PROP_CSS] = isArray(item[PROP_CSS]) ? item[PROP_CSS].concat(m.css) : m.css;
    if (!isSet(item[PROP_ATTR])) { item[PROP_ATTR] = {}; }
    item[PROP_ATTR].class = item[PROP_ATTR].class ?
      [].concat(item[PROP_ATTR].class, m.classAppend) : m.classAppend;
    delete item[PROP_MEDIA];
  } // if style
} // export function buildMedia


export function buildStyleAndMedia(item, options) {
  buildStyle(item, options);
  buildMedia(item, options);
} // export function buildStyleAndMedia


export function build(dom, {
  abbreviateCssPropertyValues = true,
  abbreviateCssPropertyNames = true,
  addDefaultUnits = true/*,
  autoprefixer = false*/
} = {}) {
  if (isString(dom)) { return dom; }
  const arr = isArray(dom) ? dom : [dom];

  const options = {
    dashPropToClassNameFn: abbreviateCssPropertyNames ? dashPropToAbbrClassName : toClassName,
    valueDashPropToAbbrClassNameFn: abbreviateCssPropertyValues ? valueDashPropToAbbrClassName : toClassName,
    addDefaultUnitFn: addDefaultUnits ? addDefaultUnit : value => value
  };

  const res = arr.map(item => {
    if (isString(item)) { return item; }

    // TODO Handle function?

    buildStyleAndMedia(item, options);

    if (item[PROP_CONTENT]) {
      build(item[PROP_CONTENT], options); // recurse
    }

    return item;
  }); // map
  dom = res.length === 1 ? res[0] : res;
  return dom; // So it can be chained
} // export function build
