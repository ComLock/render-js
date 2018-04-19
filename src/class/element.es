/* eslint-disable computed-property-spacing */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-multi-spaces */
/* eslint-disable semi-spacing */
/* eslint-disable space-in-parens */
//import {print as inspect} from 'q-i';

import {cloneObj} from '../util/cloneObj.es';
import {isArray} from '../util/isArray.es';
import {isEmptyObject} from '../util/isEmptyObject.es';
import {isString} from '../util/isString.es';

const DEFAULT_TAGNAME = 'div';


export const PROP_TAG        = '_t';
export const PROP_ATTR       = '_a';
export const PROP_CONTENT    = '_c';
export const PROP_CSS        = '_css';
export const PROP_STYLE      = '_s';
export const PROP_MEDIA      = '_m';
/*const PROP_HEAD_BEGIN = '_hb';
const PROP_HEAD_END   = '_he';
const PROP_BODY_BEGIN = '_bb';
const PROP_BODY_END   = '_be';*/


export function Element({
  tagName = DEFAULT_TAGNAME,
  spec = null,
  content = null/*,
  headBegin = [],
  headEnd = [],
  bodyBegin = [],
  bodyEnd = []*/
} = {}) {
  const obj = {
    [PROP_TAG]: tagName
  };

  if (spec) {
    // Avoid modifying function parameter spec, which is an object and as such
    // passed by reference.
    const attributes = cloneObj(spec);

    if (spec._s) {
      obj[PROP_STYLE] = spec._s;
      delete attributes._s;
    }

    if (spec._m) {
      obj[PROP_MEDIA] = spec._m;
      delete attributes._m;
    }
    if (!isEmptyObject(attributes)) { obj[PROP_ATTR] = attributes; }
  } // if spec

  if (content) { obj[PROP_CONTENT] = content; } // if content
  /*
  if (headBegin ) { obj[PROP_HEAD_BEGIN] = headBegin; }
  if (headEnd   ) { obj[PROP_HEAD_END  ] = headEnd  ; }
  if (bodyBegin ) { obj[PROP_BODY_BEGIN] = bodyBegin; }
  if (bodyEnd   ) { obj[PROP_BODY_END  ] = bodyEnd  ; }
  */
  //obj[tagName] = obj; // Self-reference could be useful for html, head and body
  return obj;
}


export function isContent(value) {
  return isString(value) || isArray(value) || (value && value[PROP_TAG]);
}


export function element(t, ...args) {
  if (isContent(args[0])) {
    return Element({
      tagName: t,
      content: args[0]
    });
  }
  return Element({
    tagName: t,
    spec: args[0],
    content: args[1]
  });
}
