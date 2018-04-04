/* eslint-disable import/prefer-default-export */
/* eslint-disable no-param-reassign */


import {PROP_ATTR} from './element.es';
import {isArray} from '../util/isArray.es';
import {sortAndRemoveDups} from '../util/sortAndRemoveDups.es';


export function addClass(element, classes) {
  if (!element[PROP_ATTR]) { element[PROP_ATTR] = {}; }
  if (!element[PROP_ATTR].class) {
    element[PROP_ATTR].class = [];
  } else if (!isArray(element[PROP_ATTR].class)) {
    element[PROP_ATTR].class = [element[PROP_ATTR].class];
  }
  let arr = [];
  if (isArray(classes)) {
    classes.forEach(c => {
      arr = arr.concat(c.split(' '));
    });
  } else {
    arr = arr.concat(classes.split(' '));
  }
  element[PROP_ATTR].class = sortAndRemoveDups(element[PROP_ATTR].class.concat(arr));
  return element; // Chainable
}
