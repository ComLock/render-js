/* eslint-disable arrow-body-style */
/* eslint-disable function-paren-newline */
/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable no-new-object */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */


import { el as htmlEl } from './index';
import { dasherize, isString, toStr } from './util.es';

// export { html, head } from './index';


const DEBUG = true;
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
  DEBUG && console.log(`media:${toStr(media)}`);
  const classAppend = [];
  const css = [];
  Object.keys(media).forEach(mediaRuleKey => {
    const queries = [];
    const prefix = dasherize(mediaRuleKey);
    mediaRuleKey.split('_').forEach(mP => {
      DEBUG && console.log(`mP:${toStr(mP)}`);
      const match = /^(maxWidth|minWidth)(.*)$/.exec(mP);
      queries.push(`(${dasherize(match[1])}: ${match[2]})`);
    });
    Object.keys(media[mediaRuleKey]).forEach(prop => {
      const dashProp = dasherize(prop);
      //classAppend.push(`${prefix}-${dashProp}-`);
      // `${dashProp}: ${media[mediaRuleKey][property]}`
    });
    css.push(`@media ${queries.join(' AND ')} {}`);
  }); // forEach mediaRuleKey
  /*
    const parts = m.split('_').map(p => {
      const match = /^(max|min)Width(.*)$/.exec(p);
      classes.push(`${match[1] === max ? 'w-ma': 'w-mi'}-${match[2]}`);
    });
    // return `@media (${m.split('_').map(e => dasherize(e)).join(') and (')})`;
  }) // map
  */
  return {
    classAppend: 'jalla',
    css: []
  };
}


exports.el = (tag, spec = null, content = null) => {
  let classes = [];
  TRACE && console.log(`tag:${toStr(tag)} spec:${toStr(spec)} content:${toStr(content)}`);
  TRACE && console.log(`spec instanceof Node:${spec instanceof Node}`);
  if (isString(spec) || spec instanceof Node) {
    content = spec;
    spec = {};
  }
  DEBUG && console.log(`tag:${toStr(tag)} spec:${toStr(spec)} content:${toStr(content)}`);
  let css = content instanceof Node ? content.css : []; // Assuming Node always has a css property.
  if (spec && spec._media) {
    const { classAppend, css } = classAppendAndCssFromMedia(spec._media);
    classes = [].concat(classes, classAppend);
    css = css.concat(css);
    DEBUG && console.log(`css:${toStr(css)}`);
    spec._media = null; // Don't pass to htmlEl as attribute. NOTE this means cannot have attribute named _media
  }
  // const string = content instanceof Node ? content.html : content;
  return new Node({
    html: htmlEl(tag, spec, content instanceof Node ? content.html : content), // Allow content to be Node or string
    css
  });
};


export default exports;
