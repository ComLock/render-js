/* eslint-disable key-spacing */
/* eslint-disable no-multi-spaces */


import {dict} from '../util/dict.es';


export const CSS_SELECTORS_ABBR = {
  c:  '.', // class (dot)
  i:  '#', // id (hash)
  a:  '*', // all (asteriks)
  an: ',', // and (comma)
  in: ' ', // inside (single space)
  gt: '>', // childOf (greaterthan)
  p:  '+', // immediately after (plus sign)
  t:  '~'  // after (tilde)
  // TODO Attribute selectors
}; // CSS_SELECTORS_ABBR

export const CSS_SELECTORS_TO_ABBR = dict(Object.keys(CSS_SELECTORS_ABBR).map(a =>
  [CSS_SELECTORS_ABBR[a], a]));

export const CSS_SELECTORS = Object.keys(CSS_SELECTORS_TO_ABBR);


export const CSS_PSEUDO_CLASSES_ABBR = { // https://www.w3schools.com/cssref/css_selectors.asp
  ac:   'active',
  c:   'checked',
  d:   'disabled',
  em:  'empty',
  en:  'enabled',
  fc:  'first-child',
  fot: 'first-of-type',
  h:   'hover',
  f:   'focus',
  ir:  'in-range',
  i:   'invalid',
  lc:  'last-child',
  lot: 'last-of-type',
  l:   'link',
  // lang
  // not
  // nth-child
  // nth-last-child
  // nth-last-of-type
  // nth-of-type
  oot: 'only-of-type',
  oc:  'only-child',
  o:   'optional',
  oor: 'out-of-range',
  ro:  'read-only',
  rw:  'read-write',
  re:  'required',
  r:   'root',
  t:   'target',
  va:  'valid',
  vi:  'visited'
}; // export const CSS_PSEUDO_CLASSES_ABBR

export const CSS_PSEUDO_CLASSES_TO_ABBR = dict(Object.keys(CSS_PSEUDO_CLASSES_ABBR).map(a =>
  [CSS_PSEUDO_CLASSES_ABBR[a], a]));


export const CSS_PSEUDO_ELEMENTS_ABBR = {
  af:  'after',
  b:   'before',
  fl:  'first-letter',
  fli: 'first-line',
  s:   'selection'
}; // export const CSS_PSEUDO_ELEMENTS_ABBR

export const CSS_PSEUDO_ELEMENTS_TO_ABBR = dict(Object.keys(CSS_PSEUDO_ELEMENTS_ABBR).map(a =>
  [CSS_PSEUDO_ELEMENTS_ABBR[a], a]));


export const CSS_PSEUDO_SELECTORS_TO_ABBR = Object.assign(
  {},
  CSS_PSEUDO_CLASSES_TO_ABBR, CSS_PSEUDO_ELEMENTS_TO_ABBR
);
