/* eslint-disable import/prefer-default-export */


import merge from 'deepmerge';


export const clone = obj => merge({}, obj);
