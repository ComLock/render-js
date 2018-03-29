/* eslint-disable import/prefer-default-export */

// https://developer.mozilla.org/en-US/docs/Web/SVG/Element
const SVG_AND_HTML_ELEMENTS = [
  'font', 'image', 'script', 'style', 'title'
];

export const SVG_NOT_HTML_ELEMENTS = [
  'altGlyph', 'altGlyphDef', 'altGlyphItem', 'animate', 'animateColor',
  'animateMotion', 'animateTransform', 'circle', 'clipPath', 'color-profile',
  'cursor', 'defs', 'desc', 'discard', 'ellipse', 'feBlend', 'feColorMatrix',
  'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting',
  'feDisplacementMap', 'feDistantLight', 'feDropShadow', 'feFlood', 'feFuncA',
  'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feImage', 'feMerge',
  'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight',
  'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence', 'filter',
  'font-face', 'font-face-format', 'font-face-name', 'font-face-src',
  'font-face-uri', 'foreignObject', 'g', 'glyph', 'glyphRef', 'hatch',
  'hatchpath', 'hkern', 'line', 'linearGradient', 'marker', 'mask',
  'feTurbulence', 'filter', 'font-face', 'font-face-format', 'font-face-name',
  'font-face-src', 'font-face-uri', 'foreignObject', 'g', 'glyph', 'glyphRef',
  'hatch', 'hatchpath', 'hkern', 'line', 'linearGradient', 'marker', 'mask',
  'mesh', 'meshgradient', 'meshpatch', 'meshrow', 'metadata', 'missing-glyph',
  'mpath', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect',
  'set', 'solidcolor', 'stop', 'svg', 'switch', 'symbol', 'text', 'textPath',
  'tref', 'tspan', 'unknown', 'use', 'view', 'vkern'
];

export const SVG_ELEMENTS = SVG_AND_HTML_ELEMENTS.concat(SVG_NOT_HTML_ELEMENTS);
