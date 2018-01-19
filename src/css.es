/* eslint-disable function-paren-newline */
/* eslint-disable key-spacing */
/* eslint-disable max-len */
/* eslint-disable no-confusing-arrow */
/* eslint-disable no-multi-spaces */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
/* eslint-disable object-property-newline */
/* eslint-disable spaced-comment */

/* eslint-enable no-console */

// import _autoprefixer from 'autoprefixer';
// import { sync as postCssSync } from 'postcss-js';
import defaultUnit from 'jss-default-unit';
import {
  dasherize,
  dict,
  isSet,
  isString,
  toStr
} from '../util.es';

const addDefaultUnit = defaultUnit({
  'line-height': 'px'
}).onChangeValue;

// const prefixer = postCssSync([_autoprefixer]);


// const WARN = true;
// const DEBUG = true;
// const TRACE = false;

/* http://stackoverflow.com/questions/448981/which-characters-are-valid-in-css-class-names-selectors
 Basically, a name must begin with an underscore (_), a hyphen (-), or a letter(a–z),
  followed by any number of hyphens, underscores, letters, or numbers.
 There is a catch: if the first character is a hyphen,
  the second character must2 be a letter or underscore,
  and the name must be at least 2 characters long.
 -?[_a-zA-Z]+[_a-zA-Z0-9-]*
 https://discuss.enonic.com/t/sanitize-username-in-auth-createuser/996/3
*/
export function toClassName(value) {
  return `${value}`                  // Handle non-strings
    .replace(/[\n\r\t]+/gm, '')      // Remove some whitespace
    .replace(/([A-Z])/g, '-$1')      // Insert - before large letters
    .replace(/[^a-zA-Z0-9]+/g, '-') // Replace multiple illegal chars with -
    .replace(/^-/, '')              // Trim - from start of text
    .replace(/-$/, '')              // Trim - from end of text
    .toLowerCase();
} // export function toClassName


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

export const CSS_PSEUDO_SELECTORS_TO_ABBR = Object.assign({},
  CSS_PSEUDO_CLASSES_TO_ABBR, CSS_PSEUDO_ELEMENTS_TO_ABBR);


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


const CSS_COLOR_VALUES_ABBR = { // https://developer.mozilla.org/en-US/docs/Web/CSS/color
  // Global values https://developer.mozilla.org/en-US/docs/Web/CSS/all
  ini:  'initial',
  ih:  'inherit',
  u:  'unset',
  rev: 'revert',
  // Special
  cc: 'currentColor',
  t:  'transparent', // transparent, teal
  // https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#Color_keywords
  // CSS Level 1
  b:  'black', // black, blue, beige, bisque, brown
  s:  'silver', // silver, salmon
  gr: 'gray', // green, gray, gold, goldenrod
  w:  'white',
  m:  'maroon', // maroon, moccasin
  r:  'red',
  p:  'purple', // purple, peru, pink, plum
  f:  'fuchsia',
  g:  'green', // green, gray, gold
  l:  'lime', // lime, lavender
  o:  'olive', // olive, orange
  y:  'yellow',
  n:  'navy',
  bl: 'blue', // black, blue
  te: 'teal', // transparent, teal
  a:  'aqua', // aqua, azure
  // CSS Level 2 (Revision 1)
  or: 'orange', // olive, orange
  // CSS Color Module Level 3
  ab: 'aliceblue',
  aw: 'antiquewhite',
  am: 'aquamarine',
  az: 'azure', // #f0ffff // aqua, azure
  be: 'beige', // #f5f5dc // black, blue, beige, bisque, brown
  bi: 'bisque', // #ffe4c4 // black, blue, beige, bisque, brown
  ba: 'blanchedalmond', // #ffebcd
  bv: 'blueviolet', // #8a2be2
  br: 'brown', // #a52a2a // black, blue, beige, bisque, brown
  bw: 'burlywood', // #deb887
  cb: 'cadetblue', // #5f9ea0
  c: 'chartreuse', // #7fff00 // chartreuse, chocolate, coral, crimson
  ch: 'chocolate', // #d2691e // chartreuse, chocolate, coral, crimson
  co: 'coral',     // #ff7f50 // chartreuse, chocolate, coral, crimson
  cfb: 'cornflowerblue', // #6495ed
  cs: 'cornsilk', // #fff8dc
  cr: 'crimson', // #dc143c // chartreuse, chocolate, coral, crimson
  cy: 'cyan', // (synonym of aqua) #00ffff
  db: 'darkblue', // #00008b // darkblue, dodgerblue
  dc: 'darkcyan', // #008b8b
  dgro: 'darkgoldenrod', // #b8860b // darkgreen, darkgray, darkgoldenrod
  dgr: 'darkgray', // #a9a9a9 // darkgreen, darkgray, dimgray, darkgoldenrod
  dag:'darkgrey', // #a9a9a9
  dg: 'darkgreen', // #006400 // darkgreen, darkgray, dimgray
  dk: 'darkkhaki', // #bdb76b
  dm: 'darkmagenta', // #8b008b
  dog: 'darkolivegreen', // #556b2f
  do: 'darkorange', // #ff8c00 // darkorange, darkorchid
  dor: 'darkorchid', // #9932cc // darkorange, darkorchid
  dr: 'darkred', // #8b0000
  ds: 'darksalmon', // #e9967a
  dsg: 'darkseagreen', // #8fbc8f // darkseagreen, darkslategray
  gsb: 'darkslateblue', // #483d8b
  dsgr: 'darkslategray', // #2f4f4f // darkseagreen, darkslategray
  dasg: 'darkslategrey', // #2f4f4f
  dt: 'darkturquoise', // #00ced1
  dv: 'darkviolet', // #9400d3
  dp: 'deeppink', // #ff1493
  dsb: 'deepskyblue', // #00bfff
  dig: 'dimgray', // #696969 // darkgreen, darkgray, dimgray
  dige: 'dimgrey', // #696969
  dob: 'dodgerblue', // #1e90ff // darkblue, dodgerblue
  fb: 'firebrick', // #b22222
  fw: 'floralwhite', // #fffaf0
  fg: 'forestgreen', // #228b22
  gb: 'gainsboro', // #dcdcdc
  gw: 'ghostwhite', // #f8f8ff
  go: 'gold', // #ffd700  // green, gray, gold
  gor: 'goldenrod', // #daa520 // green, gray, goldenrod
  ry: 'greenyellow', // #adff2f
  ge: 'grey', // #808080
  hd: 'honeydew', // #f0fff0
  hp: 'hotpink', // #ff69b4
  ir: 'indianred', // #cd5c5c
  i: 'indigo', // #4b0082 // indigo, ivory
  iv: 'ivory', // #fffff0 // indigo, ivory
  k: 'khaki', // #f0e68c
  la: 'lavender', // #e6e6fa // lime, lavender
  lab: 'lavenderblush', // #fff0f5
  lag: 'lawngreen', // #7cfc00 // lightgreen, lightgray, lawngreen
  lc: 'lemonchiffon', // #fffacd // lemonchiffon, lightcoral, lightcyan
  lb: 'lightblue', // #add8e6
  lco: 'lightcoral', // #f08080 // lemonchiffon, lightcoral, lightcyan
  lcy: 'lightcyan', // #e0ffff // lemonchiffon, lightcoral, lightcyan
  lgry: 'lightgoldenrodyellow', // #fafad2
  lgr: 'lightgray', // #d3d3d3 // lightgreen, lightgray, lawngreen, limegreen
  lge: 'lightgrey', // #d3d3d3
  lg: 'lightgreen', // #90ee90 // lightgreen, lightgray, lawngreen, limegreen
  lp: 'lightpink', // #ffb6c1
  ls: 'lightsalmon', // #ffa07a
  lsg: 'lightseagreen', // #20b2aa // lightseagreen, lightslategray
  lsb: 'lightskyblue', // #87cefa // lightskyblue, lightsteelblue
  lsgr: 'lightslategray', // #778899 // lightseagreen, lightslategray
  lsge: 'lightslategrey', // #778899
  lstb: 'lightsteelblue', // #b0c4de // lightskyblue, lightsteelblue
  ly: 'lightyellow', // #ffffe0
  lig: 'limegreen', // #32cd32 // lightgreen, lightgray, lawngreen, limegreen
  li: 'linen', // #faf0e6 // lime, lavender, linen
  ma: 'magenta', // (synonym of fuchsia) #ff00ff
  mam: 'mediumaquamarine', // #66cdaa
  mb: 'mediumblue', // #0000cd // mediumblue, midnightblue
  mo: 'mediumorchid', // #ba55d3
  mp: 'mediumpurple', // #9370db
  msg: 'mediumseagreen', // #3cb371 // mediumseagreen, mediumspringgreen
  msb: 'mediumslateblue', // #7b68ee
  mspg: 'mediumspringgreen', // #00fa9a // mediumseagreen, mediumspringgreen
  mt: 'mediumturquoise', // #48d1cc
  mvr: 'mediumvioletred', // #c71585
  mnb: 'midnightblue', // #191970 // mediumblue, midnightblue
  mc: 'mintcream', // #f5fffa
  mr: 'mistyrose', // #ffe4e1
  ms: 'moccasin', // #ffe4b5 // maroon, moccasin
  nw: 'navajowhite', // #ffdead
  ol: 'oldlace', // #fdf5e6
  od:'olivedrab', // #6b8e23
  orr: 'orangered', // #ff4500 // // olive, orange, orangered
  orc: 'orchid', // #da70d6 // olive, orange, orchid
  pgr: 'palegoldenrod', // #eee8aa
  pg: 'palegreen', // #98fb98
  pt: 'paleturquoise', // #afeeee
  pvr: 'palevioletred', // #db7093
  pw: 'papayawhip', // #ffefd5
  pp: 'peachpuff', // #ffdab9
  pe: 'peru', // #cd853f // purple, peru, pink, plum
  pi: 'pink', // #ffc0cb // purple, peru, pink, plum
  pl: 'plum', // #dda0dd // purple, peru, pink, plum
  pb: 'powderblue', // #b0e0e6
  rbr: 'rosybrown', // #bc8f8f // royalblue, rosybrown
  rb: 'royalblue', // #4169e1 // royalblue, rosybrown
  sb: 'saddlebrown', // #8b4513 // saddlebrown, sandybrown
  sa: 'salmon', // #fa8072 // silver, salmon, sienna
  sab: 'sandybrown', // #f4a460 // saddlebrown, sandybrown
  sg: 'seagreen', // #2e8b57
  ss: 'seashell', // #fff5ee
  si: 'sienna', // #a0522d // silver, salmon, sienna
  sbl: 'skyblue', // #87ceeb // saddlebrown, sandybrown, skyeblue
  slb: 'slateblue', // #6a5acd
  slg: 'slategray', // #708090
  sge: 'slategrey', // #708090
  sn: 'snow', // #fffafa
  spg: 'springgreen', // #00ff7f
  stb: 'steelblue', // #4682b4
  ta: 'tan', // #d2b48c
  th: 'thistle', // #d8bfd8
  to: 'tomato', // #ff6347
  tq: 'turquoise', // #40e0d0
  v: 'violet', // #ee82ee
  wh: 'wheat', // #f5deb3
  ws: 'whitesmoke', // #f5f5f5
  yg: 'yellowgreen', // #9acd32
  // CSS Color Module Level 4
  rp: 'rebeccapurple'
}; // const CSS_COLOR_VALUES_ABBR

const CSS_BORDER_STYLE_VALUES_ABBR = {
  // Global values https://developer.mozilla.org/en-US/docs/Web/CSS/all
  ini: 'initial',
  ih:  'inherit',
  u:   'unset',
  rv:  'revert',
  // Border-style https://developer.mozilla.org/en-US/docs/Web/CSS/border-style#Values
  d:  'dotted',
  da: 'dashed',
  du: 'double',
  g:  'groove',
  h:  'hidden',
  i:  'inset',
  o:  'outset',
  n:  'none',
  r:  'ridge',
  s:  'solid'
}; // CSS_BORDER_STYLE_VALUES_ABBR


const CSS_DISPLAY_VALUES_ABBR = {
  // Global
  ih:    'inherit',
  ini:   'initial',
  u:     'unset',
  rv:    'revert',
  // Display https://developer.mozilla.org/en-US/docs/Web/CSS/display#Values
  b:     'block',
  f:     'flex',
  fl:    'flow',
  fr:    'flow-root',
  g:     'grid',
  i:     'inline',
  ib:    'inline-block',
  if:    'inline-flex',
  it:    'inline-table',
  li:    'list-item',
  n:     'none',
  r:     'ruby',
  rb:    'ruby-base',
  rt:    'ruby-text',
  rbc:   'ruby-base-container',
  rtc:   'ruby-text-container',
  ri:    'run-in',
  sg:    'sub-grid',
  t:     'table',
  tc:    'table-cell',
  tca:   'table-caption',
  tfg:   'table-footer-group',
  thg:   'table-header-group',
  tr:    'table-row',
  trg:   'table-row-group',
  tcol:  'table-column',
  tcolg: 'table-column-group'
}; // CSS_DISPLAY_VALUES_ABBR

export const CSS_FLOAT_VALUES_ABBR = {
  // Global
  ih:  'inherit',
  ini: 'initial',
  u:   'unset',
  rv:  'revert',
  // Float
  is: 'inline-start',
  ie: 'inline-end',
  l:  'left',
  n:  'none',
  r:  'right'
}; // export const CSS_FLOAT_VALUES_ABBR


// https://developer.mozilla.org/en-US/docs/Web/CSS/font-family
export const CSS_FONT_FAMILY_VALUES_ABBR = {
  // Global
  ih:  'inherit',
  ini: 'initial',
  us:  'unset',
  rv:  'revert',
  // Generics
  c:   'cursive',
  f:   'fantasy',
  m:   'monospace',
  s:   'serif',
  ss:  'sans-serif',
  su:  'system-ui',
  // Specific
  a:   'Arial',
  ac:  'Apple Chancery',
  bp:  'BrownPro',
  bpb: 'BrownProBold',
  bsm: 'Brush Script MT',
  bss: 'Brush Script Std',
  con: 'Consolas',
  co:  'Courier',
  cm:  'Curlz MT',
  dsm: 'DejaVu Sans Mono',
  fm:  'Fira Mono',
  fs:  'Fira Sans',
  g:   'Georgia',
  gse: 'Gill Sans Extrabold',
  gs:  'Gill Sans',
  gb1: '"Goudy Bookletter 1911"',
  ha:  'Harrington',
  h:   'Helvetica',
  he:  'Herculanum',
  lm:  'Liberation Mono',
  lis: 'Liberation Sans',
  lb:  'Lucida Bright',
  lca: 'Lucida Calligraphy',
  lc:  'Lucida Console',
  lf:  'Lucida Fax',
  lh:  'Lucida Handwriting',
  ls:  'Lucida Sans',
  lsu: 'Lucida Sans Unicode',
  me:  'Menlo',
  mo:  'Monaco',
  nsl: 'Nimbus Sans L',
  os:  'Open Sans',
  p:   'Palatino',
  pl:  'Palatino Linotype',
  pa:  'Palladio',
  pap: 'Papyrus',
  pt:  'Party LET',
  t:   'Times',
  tnr: 'Times New Roman',
  tm:  'Trebuchet MS',
  v:   'Verdana',
  u:   'URW Palladio',
  // Special
  z:   'zero-width'
}; // CSS_FONT_FAMILY_VALUES_ABBRs


export const CSS_PROP_VALUES_ABBR = {
  'background-color':    CSS_COLOR_VALUES_ABBR,
  'border-bottom-color': CSS_COLOR_VALUES_ABBR,
  'border-bottom-style': CSS_BORDER_STYLE_VALUES_ABBR,
  'border-color':        CSS_COLOR_VALUES_ABBR,
  'border-left-color':   CSS_COLOR_VALUES_ABBR,
  'border-left-style':   CSS_BORDER_STYLE_VALUES_ABBR,
  'border-right-color':  CSS_COLOR_VALUES_ABBR,
  'border-right-style':  CSS_BORDER_STYLE_VALUES_ABBR,
  'border-style':        CSS_BORDER_STYLE_VALUES_ABBR,
  'border-top-color':    CSS_COLOR_VALUES_ABBR,
  'border-top-style':    CSS_BORDER_STYLE_VALUES_ABBR,
  color:                 CSS_COLOR_VALUES_ABBR,
  display:               CSS_DISPLAY_VALUES_ABBR,
  float:                 CSS_FLOAT_VALUES_ABBR,
  'font-family':         CSS_FONT_FAMILY_VALUES_ABBR
};
export const CSS_PROP_VALUES_TO_ABBR = dict(Object.keys(CSS_PROP_VALUES_ABBR).map(prop => [
  prop,
  dict(Object.keys(CSS_PROP_VALUES_ABBR[prop]).map(a => [CSS_PROP_VALUES_ABBR[prop][a], a]))
]));
// DEBUG && console.log(`CSS_PROP_VALUES_TO_ABBR:${toStr(CSS_PROP_VALUES_TO_ABBR)}`);


export function objToStyleAttr(props) {
  return Object.keys(props)
    .map(k => `${dasherize(k)}: ${addDefaultUnit(props[k], k)}`)
    .join(';');
}


function handleNested({
  selector,
  style,
  // parentSelectorAbbr = ''
  postfix = '',
  prefix = ''
}) {
  /*console.log(`handleNested(${toStr({
    selector, style, postfix, prefix
  })})`);*/
  if (selector.startsWith('&')) { selector = selector.substring(1); }
  let className = '';
  const classAppend = [];
  const css = [];
  //console.log(`TRACE selector.length:${toStr(selector.length)}`);
  for (let i = 0; i < selector.length;) {
    const char = selector[i];
    //console.log(`TRACE i:${toStr(i)} char:${toStr(char)}`);
    if (char === ':') { // pseudo
      let nextI = i + 1;
      className += selector.substring(nextI).split(/:/).map(p => {
        //console.log(`TRACE nextI:${toStr(nextI)} p:${toStr(p)}`);
        if (p === '') {
          nextI += 1;
          return '';
        }
        p = p.replace(/ .*/, ''); // TODO rather simple hack to support '&:hover top'
        //console.log(`TRACE &: p:${p}`);
        if (CSS_PSEUDO_SELECTORS_TO_ABBR[p]) {
          nextI += p.length + 1; // NOTE +1 due to split(/:/) add one too much after last, handeled below
          return `${CSS_PSEUDO_SELECTORS_TO_ABBR[p]}-`;
        }
        //console.log(`ERROR Unhandeled p:${toStr(p)}`);
        return '';
      }).join('');
      //console.log(`TRACE nextI:${toStr(nextI)}`);
      i = nextI - 1; // NOTE -1 because +1 to much in added after last split(:) element in map, see above
    } else if (CSS_SELECTORS_TO_ABBR[char]) {
      className += `${CSS_SELECTORS_TO_ABBR[char]}-`;
      i += 1;
    } else {
      className += char;
      i += 1;
    }
  } // for char
  //console.log(`DEBUG selector:${toStr(selector)} className:${toStr(className)}`);

  // eslint-disable-next-line no-use-before-define
  return classAppendAndCssFromStyle(style, { // "recurse"
    classAppend, css, prefix: `${prefix}${className}-`, postfix, pseudoPostfix: selector
  }); // Seems like both classAppend and css gets passed by reference and modified in recursion.
} // function handleNested


function handleProp({
  prop,
  value,
  classAppend = [],
  css = [],
  prefix = '',
  postfix = '',
  pseudoPostfix = ''
}) {
  /*console.log(`handleProp(${toStr({
    prop, value, classAppend, css, prefix, postfix, pseudoPostfix
  })})`);*/
  const dashProp = dasherize(prop); // TRACE && console.log(`dashProp:${toStr(dashProp)}`);
  const propAbbr = CSS_PROP_TO_ABBR[dashProp] || toClassName(prop);
  /* if (WARN && !CSS_PROP_TO_ABBR[dashProp]) {
    console.warn(`WARN: Couldn't find abbreviation for property:${prop} falling back to toClassName on property:${propAbbr}`);
  } */
  let lastValue = value;
  value = addDefaultUnit(value, prop);
  if (Array.isArray(value)) { lastValue = value[value.length - 1]; }
  const valueAbbr = (CSS_PROP_VALUES_TO_ABBR[prop] && CSS_PROP_VALUES_TO_ABBR[prop][lastValue]) || toClassName(lastValue);
  /* if (WARN && !(CSS_PROP_VALUES_TO_ABBR[prop] && CSS_PROP_VALUES_TO_ABBR[prop][value])) {
    console.warn(`WARN: Couldn't find abbreviation for property:${prop} value:${value} falling back to toClassName on value:${valueAbbr}`);
  } */
  const className = `${prefix}${propAbbr}-${valueAbbr}${postfix}`;// console.log(`className:${toStr(className)}`);
  classAppend.push(className);
  if (Array.isArray(value)) {
    const props = value.map(v => `${dashProp}:${v}`).join(';');
    css.push(`.${className}{${props}}`);
  } else {
    css.push(`.${className}${pseudoPostfix}{${dashProp}:${value}}`);
  }
  return {
    css,
    classAppend
  };
} // function handleProp


export function classAppendAndCssFromStyle(
  style,
  {
    // autoprefixer = true,
    classAppend = [],
    css = [],
    prefix = '',
    postfix = '',
    pseudoPostfix = ''
  } = {}
) {
  /*console.log(`classAppendAndCssFromStyle(${toStr(style)}, ${toStr({
    classAppend, css, prefix, postfix, pseudoPostfix
  })})`);*/
  // const maybePrefixedStyle = autoprefixer ? prefixer(style) : style; // TRACE && console.log(`maybePrefixedStyle:${toStr(maybePrefixedStyle)}`);
  const maybePrefixedStyle = style;
  Object.keys(style).forEach(prop => {
    // DEBUG && console.log(`DEBUG prop:${prop}`);
    const value = maybePrefixedStyle[prop];
    if (isSet(value)) {
      if (prop.startsWith('&')) {
        const n = handleNested({
          selector: prop, style: style[prop], postfix, prefix
        });
        classAppend.push(...n.classAppend);
        css.push(...n.css);
      } else { // not nested
        const p = handleProp({
          prop, value, prefix, postfix, pseudoPostfix
        });
        classAppend.push(...p.classAppend);
        css.push(...p.css);
      } // not pseudo
    } /* else {
      WARN && console.warn(`WARN: Ignoring property:${prop} due to no value`);
    } */
  }); // forEach prop
  return {
    classAppend,
    css
  };
} // export function classAppendAndCssFromStyle


export function classAppendAndCssFromMedia(
  media,
  {
    autoprefixer = true
  } = {}
) {
  // TRACE && console.log(`media:${toStr(media)}`);
  const classAppend = [];
  const css = [];
  Object.keys(media).forEach(mediaRuleKey => { // only_screen_and_minWidth480_and_maxWidth1023_comma_not_speech
    let postfix = '';
    const mediaQueryList = mediaRuleKey.split('_comma_').map(mediaQueryAbbr =>
      mediaQueryAbbr.split('_').map(mediaWord => {
        // TRACE && console.log(`mediaWord:${toStr(mediaWord)}`);
        if (CSS_MEDIA_WORD_TO_ABBR[mediaWord]) {
          postfix = `${postfix}-${CSS_MEDIA_WORD_TO_ABBR[mediaWord]}`;
          return mediaWord;
        }
        const match = /^(maxWidth|minWidth)(.*)$/.exec(mediaWord);
        if (match) {
          // TRACE && console.log(`match:${toStr(match)}`);
          postfix = `${postfix}-${CSS_MEDIA_WORD_TO_ABBR[dasherize(match[1])]}-${match[2]}`;
          return `(${dasherize(match[1])}: ${match[2]}px)`;
        }
        throw new Error(`No match in mediaWord:${toStr(mediaWord)} mediaQueryAbbr:${toStr(mediaQueryAbbr)} mediaQueryList:${toStr(mediaQueryList)} mediaRuleKey:${toStr(mediaRuleKey)} media:${toStr(media)}`);
        /* console.warn(`No match in mediaWord:${mediaWord}`);
        return ''; */
      }).join(' ') // map mediaWord
    ); // map mediaQueryAbbr
    const s = classAppendAndCssFromStyle(media[mediaRuleKey], { autoprefixer, postfix });
    classAppend.push(...s.classAppend);
    s.css.forEach(scss => css.push(`@media ${mediaQueryList.join(', ')}{${scss}}`));
  }); // forEach mediaRuleKey
  return {
    classAppend,
    css
  };
} // export function classAppendAndCssFromMedia


export function uniqCss(arr) {
  const style = [];
  const media = [];
  arr.forEach(line => {
    if (isString(line)) {
      if (line.startsWith('@')) {
        if (!media.includes(line)) { media.push(line); }
      } else if (!style.includes(line)) { style.push(line); }
    }
  });
  return style.concat(media);
} // export function uniqCss
