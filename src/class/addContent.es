/* eslint-disable import/prefer-default-export */

import {isArray} from '../util/isArray.es';
import {PROP_CONTENT} from './element.es';


// TODO applyPath
export function addContent(element, content) {
  if (isArray(element[PROP_CONTENT])) {
    element[PROP_CONTENT].push(content);
  } else if (element[PROP_CONTENT]) {
    // eslint-disable-next-line no-param-reassign
    element[PROP_CONTENT] = [element[PROP_CONTENT], content];
  } else {
    element[PROP_CONTENT] = content; // eslint-disable-line no-param-reassign
  }
} // export function addContent
