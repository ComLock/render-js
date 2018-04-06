import {PROP_STYLE} from './element.es';


export function setStyle(element, style) {
  element[PROP_STYLE] = style; // eslint-disable-line no-param-reassign
  return element; // Chainable
}
