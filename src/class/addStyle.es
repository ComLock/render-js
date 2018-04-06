/* eslint-disable no-param-reassign */
import merge from 'deepmerge';
import {PROP_STYLE} from './element.es';


export function addStyle(element, ...args) {
  if (!element[PROP_STYLE]) { element[PROP_STYLE] = {}; }

  if (args.length === 1) { // A style object is passed
    if (!element[PROP_STYLE]) { element[PROP_STYLE] = {}; }
    element[PROP_STYLE] = merge(element[PROP_STYLE], args[0]);
  } else { // A property and a value is passed
    const [property, value] = args;
    element[PROP_STYLE][property] = value;
  }

  return element; // Chainable
}
