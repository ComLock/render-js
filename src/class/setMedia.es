/* eslint-disable import/prefer-default-export */


import {PROP_MEDIA} from './element.es';


export function setMedia(element, media) {
  element[PROP_MEDIA] = media; // eslint-disable-line no-param-reassign
  return element; // Chainable
}
