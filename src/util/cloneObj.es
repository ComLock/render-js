/* eslint-disable import/prefer-default-export */


import merge from 'deepmerge';


export const cloneObj = obj => merge({}, obj);
