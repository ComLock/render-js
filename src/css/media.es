/* eslint-disable key-spacing */
/* eslint-disable object-property-newline */


import {dict} from '../util/dict.es';


export const CSS_MEDIA_ABBR = { // Abbreviation
  // Trying to use first letter in each word.
  // When there is a conflict list conflicts in comment in priority order.
  al:  'all', // (first two letters) and, all
  a:   'and', // (first letter) and, all
  ap:  'any-pointer',
  ah:  'any-hover',
  ar:  'aspect-ratio',
  c:   'color',
  cg:  'color-gamut',
  ci:  'color-index',
  dw:  'device-width',
  dh:  'device-height',
  dar: 'device-aspect-ratio',
  dm:  'display-mode',
  g:   'grid',
  h:   'height', 'h-ma': 'max-height', 'h-mi': 'min-height',
  ho:  'hover',
  ic:  'inverted-colors',
  ll:  'light-level',
  m:   'monochrome',
  n:   'not',
  o:   'only', // (first letter) only, orientation
  or:  'orientation', // (first two letters) only, orientation
  ob:  'overflow-block',
  oi:  'overflow-inline',
  p:   'pointer',
  r:   'resolution',
  sa:  'scan', // (first letter and uncommon vocal) screen, speech, scripting, scan
  s:   'screen', // (first letter) screen, speech, scripting, scan
  sc:  'scripting', // (first two letters) screen, speech, scripting, scan
  sp:  'speech', // (first two letters) screen, speech, scripting, scan
  u:   'update',
  w:   'width', 'w-ma': 'max-width', 'w-mi': 'min-width'
}; // CSS_MEDIA_ABBR

export const CSS_MEDIA_WORD_TO_ABBR = dict(Object.keys(CSS_MEDIA_ABBR).map(a =>
  [CSS_MEDIA_ABBR[a], a]));
// DEBUG && console.log(`CSS_MEDIA_WORD_TO_ABBR:${toStr(CSS_MEDIA_WORD_TO_ABBR)}`);


export const CSS_MEDIA_LOGICAL_OPERATORS = [ // https://developer.mozilla.org/en-US/docs/Web/CSS/@media#Logical_operators
  'and',
  'not',
  'only'
];


export const CSS_MEDIA_TYPES = [ // https://developer.mozilla.org/en-US/docs/Web/CSS/@media#Media_types
  'all',
  'print',
  'screen',
  'speech'
];


export const CSS_MEDIA_FEATURES = [ // https://developer.mozilla.org/en-US/docs/Web/CSS/@media#Media_features
  'width',
  'height',
  'aspect-ratio',
  'orientation',
  'resolution',
  'scan',
  'grid',
  'update',
  'overflow-block',
  'overflow-inline',
  'color',
  'color-gamut',
  'color-index',
  'display-mode',
  'monochrome',
  'inverted-colors',
  'pointer',
  'hover',
  'any-pointer',
  'any-hover',
  'light-level',
  'scripting',
  'device-width',
  'device-height',
  'device-aspect-ratio'
]; // CSS_MEDIA_FEATURES
