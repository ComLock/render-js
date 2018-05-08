/* eslint-disable function-paren-newline */
/* eslint-disable max-len */


import {dashPropToAbbrClassName} from './dashPropToAbbrClassName.es';
import {valueDashPropToAbbrClassName} from './valueDashPropToAbbrClassName.es';
import {addDefaultUnit} from './addDefaultUnit.es';
import {classAppendAndCssFromStyle} from './classAppendAndCssFromStyle.es';
import {CSS_MEDIA_WORD_TO_ABBR} from './media.es';

import {dasherize} from '../util/dasherize.es';
import {toStr} from '../util/toStr.es'; // used in throw


export function classAppendAndCssFromMedia(media, {
  dashPropToAbbrClassNameFn = dashPropToAbbrClassName,
  valueDashPropToAbbrClassNameFn = valueDashPropToAbbrClassName,
  addDefaultUnitFn = addDefaultUnit
} = {}) {
  // TRACE && console.log(`media:${toStr(media)}`);
  const classAppend = [];
  const css = [];
  Object.keys(media).forEach(mediaRuleKey => { // only_screen_and_minWidth480_and_maxWidth1023_comma_not_speech
    let postfix = '';
    const mediaQueryList = mediaRuleKey.split('_comma_').map(mediaQueryAbbr =>
      mediaQueryAbbr.split('_').map(mediaWord => {
        // TRACE && console.log(`mediaWord:${toStr(mediaWord)}`);
        if (CSS_MEDIA_WORD_TO_ABBR[mediaWord]) {
          postfix = `${postfix}-${CSS_MEDIA_WORD_TO_ABBR[mediaWord]}`;
          return mediaWord;
        }
        const match = /^(maxWidth|minWidth)(.*)$/.exec(mediaWord);
        if (match) {
          // TRACE && console.log(`match:${toStr(match)}`);
          const property = dasherize(match[1]);
          postfix = `${postfix}-${CSS_MEDIA_WORD_TO_ABBR[property]}-${match[2]}`;
          return `(${property}: ${match[2]}px)`;
        }
        throw new Error(`No match in mediaWord:${toStr(mediaWord)} mediaQueryAbbr:${toStr(mediaQueryAbbr)} mediaQueryList:${toStr(mediaQueryList)} mediaRuleKey:${toStr(mediaRuleKey)} media:${toStr(media)}`);
        /* console.warn(`No match in mediaWord:${mediaWord}`);
        return ''; */
      }).join(' ') // map mediaWord
    ); // map mediaQueryAbbr
    const s = classAppendAndCssFromStyle(media[mediaRuleKey], {
      dashPropToAbbrClassNameFn,
      valueDashPropToAbbrClassNameFn,
      addDefaultUnitFn,
      postfix
    });
    classAppend.push(...s.classAppend);
    s.css.forEach(scss => css.push(`@media ${mediaQueryList.join(', ')}{${scss}}`));
  }); // forEach mediaRuleKey
  return {
    classAppend,
    css
  };
} // export function classAppendAndCssFromMedia
