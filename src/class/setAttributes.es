/* eslint-disable import/prefer-default-export */


import merge from 'deepmerge';
import {PROP_ATTR} from './element.es';


export function setAttributes(element, attributes) {
  // eslint-disable-next-line no-param-reassign
  element[PROP_ATTR] = merge(element[PROP_ATTR], attributes);
  return element; // Chainable
}
