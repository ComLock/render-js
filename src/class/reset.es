/* eslint-disable prefer-destructuring */
import merge from 'deepmerge';

import {Element, isContent} from './element.es';
import {RESET_OBJECT} from '../css/reset.es';
import {HTML_AND_SVG_ELEMENTS} from '../html/elements.es';


function element(t, ...args) {
  const params = {
    tagName: t
  };
  if (isContent(args[0])) {
    params.content = args[0];
    if (RESET_OBJECT[t]) {
      params.spec = {
        _s: RESET_OBJECT[t]
      };
    }
  } else {
    params.spec = args[0];
    params.content = args[1];
    if (RESET_OBJECT[t]) {
      if (!params.spec) { params.spec = {}; }
      params.spec._s = params.spec._s
        ? merge(RESET_OBJECT[t], params.spec._s)
        : RESET_OBJECT[t];
    }
  }
  return Element(params);
}

HTML_AND_SVG_ELEMENTS.forEach(t => {
  exports[t] = (...args) => element(t, ...args);
}); // forEach
