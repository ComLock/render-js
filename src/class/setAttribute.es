/* eslint-disable import/prefer-default-export */


import {PROP_ATTR} from './element.es';


export function setAttribute(element, name, value) {
  if (element[PROP_ATTR]) {
    element[PROP_ATTR][name] = value; // eslint-disable-line no-param-reassign
  } else {
    element[PROP_ATTR] = { // eslint-disable-line no-param-reassign
      [name]: value
    };
  }
  return element; // Chainable
}
