/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

/* eslint-enable no-console */


import { el } from './index';
import { camelize, isArrayOrString } from './util.es';


const INPUT_TYPES_OBSOLETE = ['datetime'];
const INPUT_TYPES = [ // See NOTE 1
  'button', 'checkbox', 'color', 'date', 'datetime-local', 'email', 'file',
  'hidden', 'image', 'month', 'number', 'password', 'radio', 'range', 'reset',
  'search', 'submit', 'tel', 'text', 'time', 'url', 'week'
].concat(INPUT_TYPES_OBSOLETE);
const KNOWN_CONFLICTS = ['button', 'image', 'time']; // See NOTE 2
exports.INPUT_TYPES_WITHOUT_KNOWN_CONFLICTS = INPUT_TYPES
  .filter(a => !KNOWN_CONFLICTS.includes(a));


INPUT_TYPES.forEach(t => {
  // console.log(`camelize(${t}):${camelize(t)}`);
  exports[camelize(t)] = (attributes = {}, content = {}) => {
    if (isArrayOrString(attributes)) {
      const tmp = content;
      content = attributes;
      attributes = tmp;
    }
    attributes.type = t;
    return el('input', attributes, content);
  };
});


/*
  NOTE 1 These are not JS Reserved words:
  color, file, reset, search, submit
  https://www.w3schools.com/js/js_reserved.asp

  NOTE 2 Some input types conflicts with elements, but can be renamed in import.
*/
