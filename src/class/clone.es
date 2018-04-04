/* eslint-disable import/prefer-default-export */


import merge from 'deepmerge';
import {isArray} from '../util/isArray.es';


export const clone = obj => merge(isArray(obj) ? [] : {}, obj);
