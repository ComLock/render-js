/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable spaced-comment */
/* eslint-enable no-console */


import { el as htmlEl, ELEMENTS } from './index';
import {
  isArray,
  isArrayOrFuncOrString,
  isFunction,
  isString/*,
  toStr*/
} from './util.es';
import {
  classAppendAndCssFromMedia,
  classAppendAndCssFromStyle,
  uniqCss
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
  //console.log(`tag:${toStr(tag)} spec:${toStr(spec)} content:${toStr(content)}`);
  // TRACE && console.log(`spec instanceof Node:${spec instanceof Node}`);
  if (spec instanceof Node || isArrayOrFuncOrString(spec)) {
    content = spec;
    spec = {};
  }
  //console.log(`tag:${toStr(tag)} spec:${toStr(spec)} content:${toStr(content)}`);

  let css = [];
  if (spec) { // generate css from spec.style and spec._media append to spec.class
    if (spec.style) {
      const s = classAppendAndCssFromStyle(spec.style, { autoprefixer });
      spec.class = [].concat(spec.class, s.classAppend).filter(n => n); // Remove null elements;
      css = uniqCss(css.concat(s.css));
      spec.style = null; // Generate away the style attribute, so we can avoid !important
    }
    if (spec._media) {
      const o = classAppendAndCssFromMedia(spec._media, { autoprefixer });
      spec.class = [].concat(spec.class, o.classAppend).filter(n => n); // Remove null elements;
      css = uniqCss(css.concat(o.css));
      // TRACE && console.log(`css:${toStr(css)}`);
      spec._media = null; // Don't pass to htmlEl as attribute. NOTE this means cannot have attribute named _media
    }
  } // generate css from spec

  if (!isArray(content)) { content = [content]; } // forceArray to simplify code
  content = content.map(item => {
    while (isFunction(item)) {
      item = item();
    }
    if (item instanceof Node) {
      css = uniqCss(css.concat(item.css));
      return item.html;
    }
    if (isString(item)) { return item; }
    return '';
  }).join(''); // map

  // const string = content instanceof Node ? content.html : content;
  return new Node({
    html: htmlEl(tag, spec, content),
    css
  });
};


ELEMENTS.forEach(k => {
  exports[k] = (...args) => exports.el(k, ...args);
});


export default exports;
