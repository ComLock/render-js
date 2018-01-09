/* eslint-disable import/prefer-default-export */
/* eslint-disable no-confusing-arrow */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */

/* eslint-enable no-console */


import {
  isArrayOrString// ,
  // toStr
} from './util.es';
import { ELEMENTS, att2Str, isVoid } from './src/html.es';


exports.ELEMENTS = ELEMENTS; // TODO backwardscompat remove in 2.0.0


// const DEBUG = false;
const NEWLINE = '\n';


exports.el = (tag, attributes = null, content = null) => {
  if (isArrayOrString(attributes)) {
    const tmp = content;
    content = attributes;
    attributes = tmp;
  }
  if (isArrayOrString(attributes)) {
    throw new Error('When called with two arguments the first one must be an object!');
  }

  // DEBUG && console.log(`attributes:${toStr(attributes)}`);
  if (content) {
    content = [].concat(content).join(NEWLINE);
  } else {
    content = '';
  }
  // DEBUG && console.log(`content:${toStr(content)}`);
  attributes = att2Str(attributes);
  return isVoid(tag) ? `<${tag}${attributes}/>` : `<${tag}${attributes}>${content}</${tag}>`;
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
