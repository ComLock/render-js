/* eslint-disable import/prefer-default-export */

import {isArray} from '../util/isArray.es';
import {PROP_CONTENT} from './element.es';


export function addContent(element, content) {
  if (isArray(element[PROP_CONTENT])) {
    element[PROP_CONTENT] = element[PROP_CONTENT].concat(content); // eslint-disable-line no-param-reassign
  } else if (element[PROP_CONTENT]) {
    element[PROP_CONTENT] = [element[PROP_CONTENT]].concat(content); // eslint-disable-line no-param-reassign
  } else {
    element[PROP_CONTENT] = content; // eslint-disable-line no-param-reassign
  }
  return element; // Chainable
} // export function addContent
