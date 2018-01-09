/* eslint-disable arrow-body-style */
/* eslint-disable function-paren-newline */
/* eslint-disable max-len */
/* eslint-disable no-new-object */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable spaced-comment */

/* eslint-enable no-console */

import { el as htmlEl, ELEMENTS } from './index';
import { dasherize, isInt, isString, sortAndRemoveDups, toStr } from './util.es';
import {
  classAppendAndCssFromMedia,
  classAppendAndCssFromStyle,
  CSS_MEDIA_WORD_TO_ABBR,
  CSS_PROP_TO_ABBR,
  CSS_PROP_VALUES_TO_ABBR,
  toClassName
} from './src/css.es';

// export { html, head } from './index';


// const WARN = false;
// const DEBUG = false;
// const TRACE = false;


// Since both spec and content may be of type Object we need some way to know which is which...
class Node {
  constructor({ html = '', css = {} } = {}) {
    this.html = html;
    this.css = css;
  }
} // class Node
exports.Node = Node;


exports.el = (
  tag,
  spec = null,
  content = null,
  {
    autoprefixer = true
  } = {}
) => {
  // TRACE && console.log(`tag:${toStr(tag)} spec:${toStr(spec)} content:${toStr(content)}`);
  // TRACE && console.log(`spec instanceof Node:${spec instanceof Node}`);
  if (isString(spec) || spec instanceof Node) {
    content = spec;
    spec = {};
  }
  // TRACE && console.log(`tag:${toStr(tag)} spec:${toStr(spec)} content:${toStr(content)}`);
  let css = content instanceof Node ? content.css : []; // Assuming Node always has a css property.
  if (spec) {
    if (spec.style) {
      const s = classAppendAndCssFromStyle(spec.style, { autoprefixer });
      spec.class = [].concat(spec.class, s.classAppend).filter(n => n); // Remove null elements;
      css = sortAndRemoveDups(css.concat(s.css));
      spec.style = null; // Generate away the style attribute, so we can avoid !important
    }
    if (spec._media) {
      const o = classAppendAndCssFromMedia(spec._media, { autoprefixer });
      spec.class = [].concat(spec.class, o.classAppend).filter(n => n); // Remove null elements;
      css = sortAndRemoveDups(css.concat(o.css));
      // TRACE && console.log(`css:${toStr(css)}`);
      spec._media = null; // Don't pass to htmlEl as attribute. NOTE this means cannot have attribute named _media
    }
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
