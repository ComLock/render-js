/* eslint-disable import/prefer-default-export */


import {PROP_ATTR} from './element.es';


export function getAttribute(element, name) {
  return element[PROP_ATTR][name];
}
