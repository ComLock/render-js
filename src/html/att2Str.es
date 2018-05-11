/* eslint-disable import/prefer-default-export */

import stringify from 'json-stringify-safe';

import {encodeHtmlEntity} from './encodeHtmlEntity.es';

import {addDefaultUnit} from '../css/addDefaultUnit.es';
import {objToStyleAttr} from '../css/objToStyleAttr.es';

import {dasherize} from '../util/dasherize.es';
import {isSet} from '../util/isSet.es';
import {isString} from '../util/isString.es';
import {sortedUniqStr} from '../util/sortedUniqStr.es';


export function att2Str(attributes, {
  addDefaultUnitFn = addDefaultUnit
} = {}) {
  if (!attributes) { return ''; }
  // console.log(`attributes:${toStr(attributes)}`);
  const attrs = Object.keys(attributes).sort().map(a => {
    if (isSet(attributes[a])) {
      const property = a === 'viewBox' ? 'viewBox' : dasherize(a); // svg viewBox is case-sensitive!
      if (isString(attributes[a])) {
        if (a === 'class') {
          return `class="${sortedUniqStr(attributes[a].split(' '))}"`;
        }
        return attributes[a].length ? `${property}="${attributes[a]}"` : `${property}`;
      }
      if (Array.isArray(attributes[a])) {
        if (a === 'class') {
          return `class="${sortedUniqStr(attributes[a].join(' ').split(' '))}"`; // join and split to handle array item with space seperated classes.
        }
        return `${property}='${encodeHtmlEntity(stringify(attributes[a]))}'`; // See NOTE-1 and the end of the file
      }
      if (a === 'style') {
        return `style="${objToStyleAttr(attributes[a], {addDefaultUnitFn})}"`;
      }
      // console.log(`Not string or array. attributes[${toStr(a)}]:${toStr(attributes[a])}`);
      return `${property}='${encodeHtmlEntity(stringify(attributes[a]))}'`; // See NOTE-1 and the end of the file
    }
    return null;
  }).filter(n => n) // Remove null elements
    .join(' ');
  return attrs.length ? ` ${attrs}` : attrs;
} // export function att2Str


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

NOTE-2 The limit for an HTML attribute is potentially 65536 characters.
 https://stackoverflow.com/questions/2752457/max-length-of-an-html-attribute-value

*/
