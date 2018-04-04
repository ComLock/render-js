/* eslint-disable import/prefer-default-export */


import {isString} from '../util/isString.es';


export function uniqCss(arr) {
  const style = [];
  const media = [];
  arr.forEach(line => {
    if (isString(line)) {
      if (line.startsWith('@')) {
        if (!media.includes(line)) { media.push(line); }
      } else if (!style.includes(line)) { style.push(line); }
    }
  });
  return style.concat(media);
} // export function uniqCss
