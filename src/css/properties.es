/* eslint-disable key-spacing */

import {
  CSS_ANIMATION_DIRECTION_VALUES_ABBR,
  CSS_ANIMATION_FILL_MODE_VALUES_ABBR,
  CSS_ANIMATION_PLAY_STATE_VALUES_ABBR
} from './property/animation.es';
import {CSS_ALIGN_CONTENT_VALUES_ABBR} from './property/alignContent.es';
import {CSS_ALIGN_ITEMS_VALUES_ABBR} from './property/alignItems.es';
import {CSS_BORDER_STYLE_VALUES_ABBR} from './property/borderStyle.es';
import {CSS_BOX_SIZING_VALUES_ABBR} from './property/boxSizing.es';
import {CSS_CLEAR_VALUES_ABBR} from './property/clear.es';
import {CSS_COLOR_VALUES_ABBR} from './property/color.es';
import {CSS_CURSOR_VALUES_ABBR} from './property/cursor.es';
import {CSS_DISPLAY_VALUES_ABBR} from './property/display.es';
import {CSS_FLOAT_VALUES_ABBR} from './property/float.es';
import {CSS_FONT_FAMILY_VALUES_ABBR} from './property/fontFamily.es';
import {CSS_FONT_WEIGHT_VALUES_ABBR} from './property/fontWeight.es';
import {CSS_JUSTIFY_CONTENT_VALUES_ABBR} from './property/justifyContent.es';
import {CSS_JUSTIFY_ITEMS_VALUES_ABBR} from './property/justifyItems.es';
import {CSS_LINE_HEIGHT_VALUES_ABBR} from './property/lineHeight.es';
import {
  CSS_LIST_STYLE_VALUES_ABBR,
  CSS_LIST_STYLE_IMAGE_VALUES_ABBR,
  CSS_LIST_STYLE_POSITION_VALUES_ABBR,
  CSS_LIST_STYLE_TYPE_VALUES_ABBR
} from './property/listStyle.es';
import {CSS_OUTLINE_VALUES_ABBR} from './property/outline.es';
import {CSS_OUTLINE_WIDTH_VALUES_ABBR} from './property/outlineWidth.es';
import {CSS_OVERFLOW_VALUES_ABBR} from './property/overflow.es';
import {CSS_OVERFLOW_WRAP_VALUES_ABBR} from './property/overflowWrap.es';
import {CSS_POINTER_EVENTS_VALUES_ABBR} from './property/pointerEvents.es';
import {CSS_POSITION_VALUES_ABBR} from './property/position.es';
import {CSS_TEXT_DECORATION_VALUES_ABBR} from './property/textDecoration.es';
import {CSS_TEXT_DECORATION_LINE_VALUES_ABBR} from './property/textDecorationLine.es';
import {CSS_TEXT_DECORATION_STYLE_VALUES_ABBR} from './property/textDecorationStyle.es';
import {
  CSS_TRANSITION_TIMING_FUNCTION_VALUES_ABBR,
  CSS_TRANSITION_VALUES_ABBR
} from './property/transition.es';
import {CSS_VERTICAL_ALIGN_VALUES_ABBR} from './property/verticalAlign.es';
import {CSS_WHITE_SPACE_VALUES_ABBR} from './property/whiteSpace.es';


import {dict} from '../util/dict.es';


// http://stackoverflow.com/questions/448981/which-characters-are-valid-in-css-class-names-selectors -?[_a-zA-Z]+[_a-zA-Z0-9-]*
export const CSS_PROP_ABBR = { // Abbreviation
  ac:     'align-content',
  ai:     'align-items',
  a:      'animation',
  ad:     'animation-delay',
  ar:     'animation-direction',
  au:     'animation-duration',
  afm:    'animation-fill-mode',
  aic:    'animation-iteration-count',
  an:     'animation-name',
  aps:    'animation-play-state',
  atf:    'animation-timing-function',
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
  bs:     'border-style',
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
  bo:     'box-shadow',
  c:      'color',
  cl:     'clear',
  cu:     'cursor',
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
  gcg:    'grid-column-gap',
  grg:    'grid-row-gap',
  gtc:    'grid-template-columns',
  gtr:    'grid-template-rows',
  h:      'height',
  'h-ma': 'max-height',
  'h-mi': 'min-height',
  i:      'isolation',
  ir:     'image-rendering',
  jc:     'justify-content',
  ji:     'justify-items',
  l:      'left',
  ls:     'letter-spacing',
  lc:     'lighting-color',
  lh:     'line-height',
  lsa:    'list-style',
  lsi:    'list-style-image',
  lsp:    'list-style-position',
  lst:    'list-style-type',
  m:      'margin',
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
  ou:     'outline',
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
  pa:      'padding',
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
  ppo:    'perspective-origin',
  pe:     'pointer-events',
  r:      'right',
  rs:     'resize',
  rx:     'rx',
  ry:     'ry',
  sp:     'speak',
  ta:     'text-align',
  tal:    'text-align-last',
  tan:    'text-anchor',
  td:     'text-decoration',
  tdc:     'text-decoration-color',
  tdl:     'text-decoration-line',
  tds:     'text-decoration-style',
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
  tra:    'transition',
  tde:    'transition-delay',
  tdu:    'transition-duration',
  tp:     'transition-property',
  ttf:    'transition-timing-function',
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
  'animation-direction':        CSS_ANIMATION_DIRECTION_VALUES_ABBR,
  'animation-fill-mode':        CSS_ANIMATION_FILL_MODE_VALUES_ABBR,
  'animation-play-state':       CSS_ANIMATION_PLAY_STATE_VALUES_ABBR,
  'animation-timing-function':  CSS_TRANSITION_TIMING_FUNCTION_VALUES_ABBR,
  'align-content':              CSS_ALIGN_CONTENT_VALUES_ABBR,
  'align-items':                CSS_ALIGN_ITEMS_VALUES_ABBR,
  'background-color':           CSS_COLOR_VALUES_ABBR,
  'border-bottom-color':        CSS_COLOR_VALUES_ABBR,
  'border-bottom-style':        CSS_BORDER_STYLE_VALUES_ABBR,
  'border-color':               CSS_COLOR_VALUES_ABBR,
  'border-left-color':          CSS_COLOR_VALUES_ABBR,
  'border-left-style':          CSS_BORDER_STYLE_VALUES_ABBR,
  'border-right-color':         CSS_COLOR_VALUES_ABBR,
  'border-right-style':         CSS_BORDER_STYLE_VALUES_ABBR,
  'border-style':               CSS_BORDER_STYLE_VALUES_ABBR,
  'border-top-color':           CSS_COLOR_VALUES_ABBR,
  'border-top-style':           CSS_BORDER_STYLE_VALUES_ABBR,
  'box-sizing':                 CSS_BOX_SIZING_VALUES_ABBR,
  clear:                        CSS_CLEAR_VALUES_ABBR,
  color:                        CSS_COLOR_VALUES_ABBR,
  cursor:                       CSS_CURSOR_VALUES_ABBR,
  display:                      CSS_DISPLAY_VALUES_ABBR,
  fill:                         CSS_COLOR_VALUES_ABBR,
  float:                        CSS_FLOAT_VALUES_ABBR,
  'font-family':                CSS_FONT_FAMILY_VALUES_ABBR,
  'font-weight':                CSS_FONT_WEIGHT_VALUES_ABBR,
  'justify-content':            CSS_JUSTIFY_CONTENT_VALUES_ABBR,
  'justify-items':              CSS_JUSTIFY_ITEMS_VALUES_ABBR,
  'line-height':                CSS_LINE_HEIGHT_VALUES_ABBR,
  'list-style':                 CSS_LIST_STYLE_VALUES_ABBR,
  'list-style-image':           CSS_LIST_STYLE_IMAGE_VALUES_ABBR,
  'list-style-position':        CSS_LIST_STYLE_POSITION_VALUES_ABBR,
  'list-style-type':            CSS_LIST_STYLE_TYPE_VALUES_ABBR,
  outline:                      CSS_OUTLINE_VALUES_ABBR,
  'outline-color':              CSS_COLOR_VALUES_ABBR,
  'outline-style':              CSS_BORDER_STYLE_VALUES_ABBR,
  'outline-width':              CSS_OUTLINE_WIDTH_VALUES_ABBR,
  overflow:                     CSS_OVERFLOW_VALUES_ABBR,
  'overflow-wrap':              CSS_OVERFLOW_WRAP_VALUES_ABBR,
  'overflow-x':                 CSS_OVERFLOW_VALUES_ABBR,
  'overflow-y':                 CSS_OVERFLOW_VALUES_ABBR,
  'pointer-events':             CSS_POINTER_EVENTS_VALUES_ABBR,
  position:                     CSS_POSITION_VALUES_ABBR,
  'text-decoration':            CSS_TEXT_DECORATION_VALUES_ABBR,
  'text-decoration-color':      CSS_COLOR_VALUES_ABBR,
  'text-decoration-line':       CSS_TEXT_DECORATION_LINE_VALUES_ABBR,
  'text-decoration-style':      CSS_TEXT_DECORATION_STYLE_VALUES_ABBR,
  transition:                   CSS_TRANSITION_VALUES_ABBR,
  'transition-timing-function': CSS_TRANSITION_TIMING_FUNCTION_VALUES_ABBR,
  'vertical-align':             CSS_VERTICAL_ALIGN_VALUES_ABBR,
  'white-space':                CSS_WHITE_SPACE_VALUES_ABBR
};

export const CSS_PROP_VALUES_TO_ABBR = dict(Object.keys(CSS_PROP_VALUES_ABBR).map(prop => [
  prop,
  dict(Object.keys(CSS_PROP_VALUES_ABBR[prop]).map(a => [CSS_PROP_VALUES_ABBR[prop][a], a]))
]));
// console.log(`CSS_PROP_VALUES_TO_ABBR:${toStr(CSS_PROP_VALUES_TO_ABBR)}`);
