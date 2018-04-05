// import _autoprefixer from 'autoprefixer';
// import { sync as postCssSync } from 'postcss-js';

export {classAppendAndCssFromMedia} from './css/classAppendAndCssFromMedia.es';
export {classAppendAndCssFromStyle} from './css/classAppendAndCssFromStyle.es';
export {objToStyleAttr} from './css/objToStyleAttr.es';
export {toClassName} from './css/toClassName.es';
export {uniqCss} from './css/uniqCss.es';

// TODO Deprecated, so remove in 2.0.0
export {
  CSS_MEDIA_ABBR,
  CSS_MEDIA_WORD_TO_ABBR,
  CSS_MEDIA_LOGICAL_OPERATORS,
  CSS_MEDIA_TYPES,
  CSS_MEDIA_FEATURES
} from './css/media.es';
export {
  CSS_SELECTORS_ABBR,
  CSS_SELECTORS_TO_ABBR,
  CSS_SELECTORS,
  CSS_PSEUDO_CLASSES_ABBR,
  CSS_PSEUDO_CLASSES_TO_ABBR,
  CSS_PSEUDO_ELEMENTS_ABBR,
  CSS_PSEUDO_ELEMENTS_TO_ABBR,
  CSS_PSEUDO_SELECTORS_TO_ABBR
} from './css/properties.es';
export {
  CSS_PROP_ABBR,
  CSS_PROP_TO_ABBR,
  CSS_PROP_VALUES_ABBR,
  CSS_PROP_VALUES_TO_ABBR
} from './css/properties.es';
export {CSS_FLOAT_VALUES_ABBR} from './css/property/float.es';
export {CSS_FONT_FAMILY_VALUES_ABBR} from './css/property/fontFamily.es';
// const prefixer = postCssSync([_autoprefixer]);
