/* eslint-disable prefer-destructuring */
import merge from 'deepmerge';

import {Element, isContent} from '../element.es';
import {HTML_AND_SVG_ELEMENTS} from '../../html/elements.es';


export const COMLOCK_STYLE = {
  border: '0 none',
  boxSizing: 'border-box',
  font: 'inherit',
  fontSize: '100%',
  lineHeight: '1',
  margin: '0',
  padding: '0',
  verticalAlign: 'baseline'
};


function element(t, ...args) {
  const params = {
    tagName: t
  };
  if (isContent(args[0])) {
    params.content = args[0];
    params.spec = {
      _s: COMLOCK_STYLE
    };
  } else {
    params.spec = args[0];
    params.content = args[1];
    if (!params.spec) { params.spec = {}; }
    params.spec._s = params.spec._s
      ? merge(COMLOCK_STYLE, params.spec._s)
      : COMLOCK_STYLE;
  }
  return Element(params);
}


HTML_AND_SVG_ELEMENTS.forEach(t => {
  exports[t] = (...args) => element(t, ...args);
}); // forEach
