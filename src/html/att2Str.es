/* eslint-disable import/prefer-default-export */


import {objToStyleAttr} from '../css/objToStyleAttr.es';
import {
  dasherize,
  isSet,
  isString,
  sortedUniqStr
} from '../util.es';


export function att2Str(attributes) {
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
        return `${property}='${JSON.stringify(attributes[a])}'`; // See NOTE-1 and the end of the file
      }
      if (a === 'style') {
        return `style="${objToStyleAttr(attributes[a])}"`;
      }
      // console.log(`Not string or array. attributes[${toStr(a)}]:${toStr(attributes[a])}`);
      return `${property}='${JSON.stringify(attributes[a])}'`; // See NOTE-1 and the end of the file
    }
    return null;
  }).filter(n => n) // Remove null elements
    .join(' ');
  return attrs.length ? ` ${attrs}` : attrs;
} // export function att2Str
