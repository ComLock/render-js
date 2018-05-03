import {SVG_NOT_HTML_ELEMENTS} from '../svg.es';


const OBSOLETE_ELEMENTS = [
  'acronym', 'applet', 'basefont', 'big', 'blink', 'center', 'command', 'dir',
  'element', 'font', 'image', 'listing', 'marquee', 'multicol', 'nextid',
  'plaintext', 'shadow', 'spacer', 'strike', 'tt', 'xmp'
];

const NON_STANDARD_ELEMENTS = [
  'bsgound', 'nobr', 'noembed'
];

const DEPRECATED_ELEMENTS = [
  'content', 'frame', 'frameset', 'isindex', 'keygen'
];

const EXPERIMENTAL_ELEMENTS = [
  'dialog', 'hgroup', 'menu', 'menuitem'
];


// https://developer.mozilla.org/en-US/docs/Glossary/Empty_element
export const VOID_ELEMENTS = [ // Self-closing elements
  'area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'img', 'input',
  'keygen', 'link', 'menuitem', 'meta', 'param', 'source', 'track', 'wbr'
];

export const ELEMENTS = [
  'a', 'abbr', 'address', 'area', 'article', 'aside', 'audio',
  'b', 'base', 'bdi', 'bdo', 'blockquote', 'body', 'br', 'button',
  'canvas', 'caption', 'cite', 'code', 'col', 'colgroup',
  'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'div', 'dl', 'dt',
  'em', 'embed',
  'fieldset', 'figcaption', 'figure', 'footer', 'form',
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hr', 'html',
  'i', 'iframe', 'input', 'ins',
  'kbd',
  'label', 'legend', 'li', 'link',
  'main', 'map', 'mark', 'meta', 'meter',
  'nav', 'noframes', 'noscript',
  'object', 'ol', 'optgroup', 'option', 'output',
  'p', 'param', 'picture', 'pre', 'progress',
  'q',
  'rp', 'rt', 'rtc', 'ruby',
  's', 'samp', 'script', 'section', 'select', 'slot', 'small', 'source', 'span',
  'strong', 'style', 'sub', 'summary', 'sup',
  'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead',
  'time', 'title', 'tr', 'track',
  'u', 'ul',
  'var', 'video',
  'wbr'
].concat(
  DEPRECATED_ELEMENTS,
  NON_STANDARD_ELEMENTS,
  OBSOLETE_ELEMENTS,
  EXPERIMENTAL_ELEMENTS,
  VOID_ELEMENTS
);


export const HTML_AND_SVG_ELEMENTS = ELEMENTS.concat(SVG_NOT_HTML_ELEMENTS);
