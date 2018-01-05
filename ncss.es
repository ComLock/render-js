/* eslint-disable arrow-body-style */
/* eslint-disable function-paren-newline */
/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable no-new-object */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable spaced-comment */


import { el as htmlEl, ELEMENTS } from './index';
import { dasherize, isInt, isString, sortAndRemoveDups, toStr } from './util.es';
import { CSS_MEDIA_WORD_TO_ABBR, CSS_PROP_TO_ABBR, CSS_PROP_VALUES_TO_ABBR } from './src/css.es';

// export { html, head } from './index';


const WARN = true;
const DEBUG = false;
const TRACE = false;


/*
function _media(name, rules) {
  return `@media (min-width: ${MEDIA_QUERIES[name].minWidth}) {${[].concat(rules).join('\n')}}`;
}
*/

// Since both spec and content may be of type Object we need some way to know which is which...
class Node {
  constructor({ html = '', css = {} } = {}) {
    this.html = html;
    this.css = css;
  }
} // class Node
exports.Node = Node;

/*
const o = {};
const c = new Node({ html: '', css: [] });
console.log(`o instanceof Node:${toStr(o instanceof Node)}`); // false
console.log(`c instanceof Node:${toStr(c instanceof Node)}`); // true
*/


function classAppendAndCssFromMedia(media) {
  TRACE && console.log(`media:${toStr(media)}`);
  const classAppend = [];
  const css = [];
  Object.keys(media).forEach(mediaRuleKey => { // only_screen_and_minWidth480_and_maxWidth1023_comma_not_speech
    let postfix = '';
    const mediaQueryList = mediaRuleKey.split('_comma_').map(mediaQueryAbbr => {
      return mediaQueryAbbr.split('_').map(mediaWord => {
        TRACE && console.log(`mediaWord:${toStr(mediaWord)}`);
        if (CSS_MEDIA_WORD_TO_ABBR[mediaWord]) {
          postfix = `${postfix}-${CSS_MEDIA_WORD_TO_ABBR[mediaWord]}`;
          return mediaWord;
        }
        const match = /^(maxWidth|minWidth)(.*)$/.exec(mediaWord);
        TRACE && console.log(`match:${toStr(match)}`);
        postfix = `${postfix}-${CSS_MEDIA_WORD_TO_ABBR[dasherize(match[1])]}-${match[2]}`;
        return `(${dasherize(match[1])}: ${match[2]}px)`;
      }).join(' '); // map mediaWord
    }); // map mediaQueryAbbr
    Object.keys(media[mediaRuleKey]).forEach(prop => {
      const value = media[mediaRuleKey][prop];
      if (value) {
        const dashProp = dasherize(prop); TRACE && console.log(`dashProp:${toStr(dashProp)}`);
        const propAbbr = CSS_PROP_TO_ABBR[dashProp] || dashProp;
        if (!CSS_PROP_TO_ABBR[dashProp]) {
          WARN && console.warn(`WARN: Couldn't find abbreviation for property:${prop} falling back to dasherized property:${dashProp}`);
        }
        const dashValue = dasherize(value);
        const valueAbbr = (CSS_PROP_VALUES_TO_ABBR[prop] && CSS_PROP_VALUES_TO_ABBR[prop][value]) || dashValue;
        if (!(CSS_PROP_VALUES_TO_ABBR[prop] && CSS_PROP_VALUES_TO_ABBR[prop][value])) {
          WARN && console.warn(`WARN: Couldn't find abbreviation for property:${prop} value:${value} falling back to dasherized value:${dashValue}`);
        }
        const className = `${propAbbr}-${valueAbbr}${postfix}`;
        classAppend.push(className);
        css.push(`@media ${mediaQueryList.join(', ')} { .${className} { ${dashProp}: ${value}${isInt(value) ? 'px' : ''} !important; } }`);
      } else {
        WARN && console.warn(`WARN: Ignoring property:${prop} due to no value`);
      }
    });
  }); // forEach mediaRuleKey
  return {
    classAppend,
    css
  };
} // function classAppendAndCssFromMedia


exports.el = (tag, spec = null, content = null) => {
  TRACE && console.log(`tag:${toStr(tag)} spec:${toStr(spec)} content:${toStr(content)}`);
  TRACE && console.log(`spec instanceof Node:${spec instanceof Node}`);
  if (isString(spec) || spec instanceof Node) {
    content = spec;
    spec = {};
  }
  TRACE && console.log(`tag:${toStr(tag)} spec:${toStr(spec)} content:${toStr(content)}`);
  let css = content instanceof Node ? content.css : []; // Assuming Node always has a css property.
  if (spec && spec._media) {
    const o = classAppendAndCssFromMedia(spec._media);
    spec.class = [].concat(spec.class, o.classAppend).filter(n => n); // Remove null elements;
    css = sortAndRemoveDups(css.concat(o.css));
    TRACE && console.log(`css:${toStr(css)}`);
    spec._media = null; // Don't pass to htmlEl as attribute. NOTE this means cannot have attribute named _media
  }
  // const string = content instanceof Node ? content.html : content;
  return new Node({
    html: htmlEl(tag, spec, content instanceof Node ? content.html : content), // Allow content to be Node or string
    css
  });
};


ELEMENTS.forEach(k => {
  exports[k] = (...args) => exports.el(k, ...args);
});


export default exports;
