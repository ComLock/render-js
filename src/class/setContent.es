/* eslint-disable import/prefer-default-export */


import {PROP_CONTENT} from './element.es';


export function setContent(element, content) {
  element[PROP_CONTENT] = content; // eslint-disable-line no-param-reassign
  return element; // Chainable
}
