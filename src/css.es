/* eslint-disable key-spacing */
/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
/* eslint-disable object-property-newline */


import { dict, toStr } from '../util.es';


const DEBUG = false;

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
DEBUG && console.log(`CSS_MEDIA_WORD_TO_ABBR:${toStr(CSS_MEDIA_WORD_TO_ABBR)}`);


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


// http://stackoverflow.com/questions/448981/which-characters-are-valid-in-css-class-names-selectors -?[_a-zA-Z]+[_a-zA-Z0-9-]*
export const CSS_PROP_ABBR = { // Abbreviation
  b:      'bottom',
  ba:     'border', // all
  bc:     'border-color',
  bbc:    'border-bottom-color',
  bbs:    'border-bottom-style',
  bbw:    'border-bottom-width',
  bgc:    'background-color',
  blc:    'border-left-color',
  bls:    'border-left-style',
  blw:    'border-left-width',
  br:     'border-radius',
  brc:    'border-right-color',
  brs:    'border-right-style',
  brw:    'border-right-width',
  bsi:    'box-sizing',
  bsy:    'border-spacing',
  btc:    'border-top-color',
  bts:    'border-top-style',
  btw:    'border-top-width',
  bw:     'border-width',
  c:      'color',
  cl:     'clear',
  d:      'display',
  di:     'direction',
  f:      'float',
  fi:     'fill',
  fio:    'fill-opacity',
  fir:    'fill-rule',
  filt:   'filter',
  'fx-b': 'flex-basis',
  'fx-d': 'flex-direction',
  'fx-g': 'flex-grow',
  'fx-s': 'flex-shrink',
  'fx-w': 'flex-wrap',
  'fl-c': 'flood-color',
  'fl-o': 'flood-opacity',
  ff:     'font-family',
  fk:     'font-kerning',
  fs:     'font-size',
  fstr:   'font-stretch',
  fsty:   'font-style',
  fv:     'font-variant',
  fvc:    'font-variant-caps',
  fvl:    'font-variant-ligatures',
  fvn:    'font-variant-numeric',
  fw:     'font-weight',
  h:      'height',
  'h-ma': 'max-height',
  'h-mi': 'min-height',
  i:      'isolation',
  ir:     'image-rendering',
  jc:     'justify-content',
  l:      'left',
  ls:     'letter-spacing',
  lc:     'lighting-color',
  lh:     'line-height',
  lsi:    'list-style-image',
  lss:    'list-style-style',
  lst:    'list-style-type',
  // ma:     ['margin-bottom', 'margin-left', 'margin-right', 'margin-top'],
  mb:     'margin-bottom',
  ml:     'margin-left',
  mr:     'margin-right',
  mt:     'margin-top',
  // mx:     ['margin-left', 'margin-right'],
  // my:     ['margin-bottom', 'margin-top'],
  'mk-e': 'marker-end',
  'mk-i': 'marker-imd',
  'mk-t': 'marker-top',
  mask:   'mask',
  maskt:  'mask-type',
  mbm:    'mix-blend-mode',
  'mo-o': 'motion-offset',
  'mo-p': 'motion-path',
  'mo-r': 'motion-rotation',
  obf:    'object-fit',
  obp:    'object-position',
  op:     'opacity',
  or:     'order',
  orp:    'orphans',
  'ou-c': 'outline-color',
  'ou-o': 'outline-offset',
  'ou-s': 'outline-style',
  'ou-w': 'outline-width',
  ov:     'overflow',
  ovx:     'overflow-x',
  ovy:     'overflow-y',
  ovw:     'overflow-wrap',
  p:      'position',
  po:     'paint-order',
  // pa:     ['padding-bottom', 'padding-left', 'padding-right', 'padding-top'],
  pb:     'padding-bottom',
  pl:     'padding-left',
  pr:     'padding-right',
  pt:     'padding-top',
  // px:     ['padding-left', 'padding-right'],
  // py:     ['padding-bottom', 'padding-top'],
  pba:    'page-break-after',
  pbb:    'page-break-before',
  pp:     'perspective',
  ppo:     'perspective-origin',
  pe:     'pointer-event',
  r:      'right',
  rs:     'resize',
  rx:     'rx',
  ry:     'ry',
  sp:     'speak',
  ta:     'text-align',
  tal:    'text-align-last',
  tan:    'text-anchor',
  td:     'text-decoration',
  ti:     'text-indent',
  to:     'text-overflow',
  tr:     'text-rendering',
  ts:     'text-shadow',
  tsa:    'text-size-adjust',
  tt:     'text-transform',
  t:      'top',
  'to-a': 'touch-action',
  tf:     'transform',
  'tf-o': 'transform-origin',
  'tf-s': 'transform-style',
  v:      'visibility',
  va:     'vertical-align',
  ve:     'vector-effect',
  ws:     'white-space',
  wi:     'widows',
  wc:     'will-change',
  wm:     'writing-mode',
  'wo-b': 'word-break',
  'wo-s': 'word-spacing',
  'wo-w': 'word-wrap',
  w:      'width',
  'w-ma': 'max-width',
  'w-mi': 'min-width',
  x:      'x',
  y:      'y',
  z:      'zoom',
  zi:     'z-index'
}; // CSS_PROP_ABBR
export const CSS_PROP_TO_ABBR = dict(Object.keys(CSS_PROP_ABBR).map(a =>
  [CSS_PROP_ABBR[a], a]));


export const CSS_PROP_VALUES_ABBR = {
  display: {
    b:     'block',
    d:     'initial',
    f:     'flex',
    // g:    'grid',
    i:     'inherit',
    in:    'inline',
    inb:   'inline-block',
    inf:   'inline-flex',
    int:   'inline-table',
    li:    'list-item',
    n:     'none',
    ri:    'run-in',
    t:     'table',
    tc:    'table-cell',
    tca:   'table-caption',
    tfg:   'table-footer-group',
    thg:   'table-header-group',
    tr:    'table-row',
    trg:   'table-row-group',
    tcol:  'table-column',
    tcolg: 'table-column-group'
  } // display
};
export const CSS_PROP_VALUES_TO_ABBR = dict(Object.keys(CSS_PROP_VALUES_ABBR).map(prop => [
  prop,
  dict(Object.keys(CSS_PROP_VALUES_ABBR[prop]).map(a => [CSS_PROP_VALUES_ABBR[prop][a], a]))
]));
DEBUG && console.log(`CSS_PROP_VALUES_TO_ABBR:${toStr(CSS_PROP_VALUES_TO_ABBR)}`);
