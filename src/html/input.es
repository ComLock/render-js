/* eslint-disable no-param-reassign */

//import {print as inspect} from 'q-i'
import {el} from './el.es';
import {camelize} from '../util/camelize.es';
import {isArrayOrString} from '../util/isArrayOrString.es';


const INPUT_TYPES_OBSOLETE = ['datetime'];

export const INPUT_TYPES = [ // See NOTE 1
  'button', 'checkbox', 'color', 'date', 'datetime-local', 'email', 'file',
  'hidden', 'image', 'month', 'number', 'password', 'radio', 'range', 'reset',
  'search', 'submit', 'tel', 'text', 'time', 'url', 'week'
].concat(INPUT_TYPES_OBSOLETE);

const KNOWN_CONFLICTS = ['button', 'image', 'time']; // See NOTE 2

exports.INPUT_TYPES_WITHOUT_KNOWN_CONFLICTS = INPUT_TYPES
  .filter(a => !KNOWN_CONFLICTS.includes(a));


export const inputFn = t => (attributes = {}, content = {}) => {
  if (isArrayOrString(attributes)) {
    const tmp = content;
    content = attributes;
    attributes = tmp;
  }
  attributes.type = t;
  return el('input', attributes, content);
}; // inputFn


INPUT_TYPES.forEach(t => {
  exports[camelize(t)] = inputFn(t);
});


export default exports;

/*
  NOTE 1 These are not JS Reserved words:
  color, file, reset, search, submit
  https://www.w3schools.com/js/js_reserved.asp

  NOTE 2 Some input types conflicts with elements, but can be renamed in import.
*/
