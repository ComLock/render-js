/* eslint-disable computed-property-spacing */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-multi-spaces */
/* eslint-disable semi-spacing */
/* eslint-disable space-in-parens */

import {isArray} from '../util/isArray.es';
import {isString} from '../util/isString.es';


const DEFAULT_TAGNAME = 'div';

export const PROP_TAG        = '_t';
export const PROP_ATTR       = '_a';
export const PROP_CONTENT    = '_c';
export const PROP_CSS        = '_css';
/*const PROP_MEDIA      = '_m';
const PROP_HEAD_BEGIN = '_hb';
const PROP_HEAD_END   = '_he';
const PROP_BODY_BEGIN = '_bb';
const PROP_BODY_END   = '_be';*/


export function Element({
  tagName = DEFAULT_TAGNAME,
  attributes = null,
  content = null/*,
  media = {},
  headBegin = [],
  headEnd = [],
  bodyBegin = [],
  bodyEnd = []*/
} = {}) {
  const obj = {
    [PROP_TAG]: tagName
  };
  if (attributes) { obj[PROP_ATTR      ] = attributes; }
  if (content   ) { obj[PROP_CONTENT   ] = content   ; }
  /*
  if (media     ) { obj[PROP_MEDIA     ] = media    ; }
  if (headBegin ) { obj[PROP_HEAD_BEGIN] = headBegin; }
  if (headEnd   ) { obj[PROP_HEAD_END  ] = headEnd  ; }
  if (bodyBegin ) { obj[PROP_BODY_BEGIN] = bodyBegin; }
  if (bodyEnd   ) { obj[PROP_BODY_END  ] = bodyEnd  ; }
  */
  return obj;
}


function isContent(value) {
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
    attributes: args[0],
    content: args[1]
  });
}
