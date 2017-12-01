/* eslint-disable import/prefer-default-export */
/* eslint-disable no-confusing-arrow */
/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
const DEBUG = false;
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
const ELEMENTS = [
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


function isSet(value) {
  if (typeof value === 'boolean') { return true; } // If value is true/false it is set
  return value !== null && typeof value !== 'undefined';
}


function isString(value) {
  return typeof value === 'string' || value instanceof String;
}


function isArrayOrString(value) {
  return Array.isArray(value) || isString(value);
}


function toStr(value) {
  return JSON.stringify(value, null, 4);
}


exports.el = (tag, attributes = null, content = null) => {
  if (isArrayOrString(attributes)) {
    const tmp = content;
    content = attributes;
    attributes = tmp;
  }
  if (isArrayOrString(attributes)) {
    throw new Error('When called with two arguments the first one must be an object!');
  }
  if (attributes) {
    DEBUG && console.log(`attributes:${toStr(attributes)}`);
    attributes = Object.keys(attributes).sort()
      .map(a => attributes[a] ? `${a}="${attributes[a]}"` : a)
      .join(' ');
    attributes = ` ${attributes}`;
  } else {
    attributes = '';
  }
  DEBUG && console.log(`attributes:${toStr(attributes)}`);
  if (content) {
    content = [].concat(content).join('\n');
  }
  DEBUG && console.log(`content:${toStr(content)}`);
  const isSelfClosing = !(isSet(content) && content.length);
  return isSelfClosing ? `<${tag}${attributes}/>` : `<${tag}${attributes}>${content}</${tag}>`;
}; // el


exports.render = array => [].concat(array).join('\n');


/*
  https://html.spec.whatwg.org/multipage/syntax.html#the-doctype
  HTML5 Documents         <!DOCTYPE html>
  HTML 4.01 Strict        <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
  HTML 4.01 Transitional  <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
  HTML 4.01 Frameset      <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">
  XHTML 1.0 Strict        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
  XHTML 1.0 Transitional  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  XHTML 1.0 Frameset      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">
  XHTML 1.1               <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
*/
exports.doctype = ({
  type = 'html', // HTML
  system = null, // PUBLIC
  legacy = null // '"-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"'
} = {}) => `<!DOCTYPE ${type}${system ? ' ' + system : ''}${legacy ? ' ' + legacy : ''}>`; // eslint-disable-line prefer-template


ELEMENTS.forEach(k => {
  exports[k] = (...args) => exports.el(k, ...args);
});


export default exports;
