/* eslint-disable max-len */
/* eslint-disable no-param-reassign */


import {
  dasherize,
  isSet,
  isString,
  sortedUniqStr// ,
  // toStr
} from '../util.es';
import { objToStyleAttr } from './css.es';


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

const VOID_ELEMENTS = [ // Self-closing elements
  'area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'input', 'keygen',
  'link', 'menuitem', 'meta', 'param', 'source', 'track', 'wbr'
];

export const ELEMENTS = [
  'a', 'abbr', 'address', 'area', 'article', 'aside', 'audio',
  'b', 'base', 'bdi', 'bdo', 'blockquote', 'body', 'br', 'button',
  'canvas', 'caption', 'cite', 'code', 'col', 'colgroup',
  'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'div', 'dl', 'dt',
  'em', 'embed',
  'fieldset', 'figcaption', 'figure', 'footer', 'form',
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hr', 'html',
  'i', 'iframe', 'img', 'input', 'ins',
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
  EXPERIMENTAL_ELEMENTS
);


export function isVoid(tag) {
  return VOID_ELEMENTS.includes(tag);
}


export function att2Str(attributes) {
  if (!attributes) { return ''; }
  // DEBUG && console.log(`attributes:${toStr(attributes)}`);
  attributes = Object.keys(attributes).sort().map(a => {
    if (isSet(attributes[a])) {
      if (isString(attributes[a])) {
        if (a === 'class') {
          return `class="${sortedUniqStr(attributes[a].split(' '))}"`;
        }
        return attributes[a].length ? `${dasherize(a)}="${attributes[a]}"` : `${dasherize(a)}`;
      }
      if (Array.isArray(attributes[a])) {
        if (a === 'class') {
          return `class="${sortedUniqStr(attributes[a].join(' ').split(' '))}"`; // join and split to handle array item with space seperated classes.
        }
        return `${dasherize(a)}='${JSON.stringify(attributes[a])}'`; // See NOTE-1 and the end of the file
      }
      if (a === 'style') {
        return `style="${objToStyleAttr(attributes[a])}"`;
      }
      // DEBUG && console.log(`Not string or array. attributes[${toStr(a)}]:${toStr(attributes[a])}`);
      return `${dasherize(a)}='${JSON.stringify(attributes[a])}'`; // See NOTE-1 and the end of the file
    }
    return null;
  }).filter(n => n) // Remove null elements
    .join(' ');
  return attributes.length ? ` ${attributes}` : attributes;
} // export function att2Str
