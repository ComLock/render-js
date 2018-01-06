/* eslint-disable import/prefer-default-export */
/* eslint-disable max-len */
/* eslint-disable no-confusing-arrow */
/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
import {
  dasherize,
  isArrayOrString,
  isSet,
  isString,
  objectToCssDeclarations,
  sortAndRemoveDups// ,
  // toStr
} from './util.es';


// const DEBUG = false;
const NEWLINE = '\n';
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
const VOID_ELEMENTS = [ // Self-closing elements
  'area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'input', 'keygen',
  'link', 'menuitem', 'meta', 'param', 'source', 'track', 'wbr'
];


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
    // DEBUG && console.log(`attributes:${toStr(attributes)}`);
    attributes = Object.keys(attributes).sort().map(a => {
      if (isSet(attributes[a])) {
        if (isString(attributes[a])) {
          if (a === 'class') {
            return `class="${sortAndRemoveDups(attributes[a].split(' ')).join(' ')}"`;
          }
          return attributes[a].length ? `${dasherize(a)}="${attributes[a]}"` : `${dasherize(a)}`;
        }
        if (Array.isArray(attributes[a])) {
          if (a === 'class') {
            return `class="${sortAndRemoveDups(attributes[a].join(' ').split(' ')).join(' ')}"`; // join and split to handle array item with space seperated classes.
          }
          return `${dasherize(a)}='${JSON.stringify(attributes[a])}'`; // See NOTE-1 and the end of the file
        }
        if (a === 'style') {
          return `style="${objectToCssDeclarations(attributes[a])}"`;
        }
        // DEBUG && console.log(`Not string or array. attributes[${toStr(a)}]:${toStr(attributes[a])}`);
        return `${dasherize(a)}='${JSON.stringify(attributes[a])}'`; // See NOTE-1 and the end of the file
      }
      return null;
    }).filter(n => n) // Remove null elements
      .join(' ');
    if (attributes.length) {
      attributes = ` ${attributes}`;
    }
  } else {
    attributes = '';
  }
  // DEBUG && console.log(`attributes:${toStr(attributes)}`);
  if (content) {
    content = [].concat(content).join(NEWLINE);
  } else {
    content = '';
  }
  // DEBUG && console.log(`content:${toStr(content)}`);
  const isSelfClosing = VOID_ELEMENTS.includes(tag); // || !(isSet(content) && content.length);
  return isSelfClosing ? `<${tag}${attributes}/>` : `<${tag}${attributes}>${content}</${tag}>`;
}; // el


exports.render = array => [].concat(array).join(NEWLINE);


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


/* NOTE-1
 Both the XML and Html4 standard allows single
 quotes to be used around attribute values:

  * Extensible Markup Language (XML) 1.0 (Fifth Edition)
    https://www.w3.org/TR/REC-xml/#NT-AttValue

  * HTML 4.01 Specification
    https://www.w3.org/TR/html4/intro/sgmltut.html#h-3.2.2

 While JSON requires double quotes to be used:

  * The JavaScript Object Notation (JSON) Data Interchange Format
    https://tools.ietf.org/html/rfc7159#section-7

 So when storing a json in a html attribute, it looks much to surround the value
 with single quotes rather than to escape all double quotes in the JSON.

*/
