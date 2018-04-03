/* eslint-disable import/prefer-default-export */


import {PROP_ATTR} from './element.es';


export function setAttribute(element, name, value) {
  element[PROP_ATTR][name] = value; // eslint-disable-line no-param-reassign
}
