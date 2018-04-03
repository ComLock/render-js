/* eslint-disable import/prefer-default-export */


import {VOID_ELEMENTS} from './elements.es';


export function isVoid(tag) {
  return VOID_ELEMENTS.includes(tag);
}
