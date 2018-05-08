/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
/* eslint-disable spaced-comment */
/* eslint-enable no-console */


import {el as htmlEl} from './src/html/el.es';
import {HTML_AND_SVG_ELEMENTS} from './src/html/elements.es';

import {isArray} from './src/util/isArray.es';
import {isArrayOrFuncOrString} from './src/util/isArrayOrFuncOrString.es';
import {isFunction} from './src/util/isFunction.es';
import {isString} from './src/util/isString.es';

import {dashPropToAbbrClassName} from './src/css/dashPropToAbbrClassName.es';
import {valueDashPropToAbbrClassName} from './src/css/valueDashPropToAbbrClassName.es';
import {addDefaultUnit} from './src/css/addDefaultUnit.es';
import {classAppendAndCssFromMedia} from './src/css/classAppendAndCssFromMedia.es';
import {classAppendAndCssFromStyle} from './src/css/classAppendAndCssFromStyle.es';
import {toClassName} from './src/css/toClassName.es';
import {uniqCss} from './src/css/uniqCss.es';

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
    abbreviateCssPropertyValues = true,
    abbreviateCssPropertyNames = true,
    addDefaultUnits = true,
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
    const options = {
      dashPropToAbbrClassNameFn: abbreviateCssPropertyNames ? dashPropToAbbrClassName : toClassName,
      valueDashPropToAbbrClassNameFn: abbreviateCssPropertyValues ? valueDashPropToAbbrClassName : toClassName,
      addDefaultUnitFn: addDefaultUnits ? addDefaultUnit : value => value,
      autoprefixer
    };
    if (spec.style) {
      const s = classAppendAndCssFromStyle(spec.style, options);
      spec.class = [].concat(spec.class, s.classAppend).filter(n => n); // Remove null elements;
      css = uniqCss(css.concat(s.css));
      spec.style = null; // Generate away the style attribute, so we can avoid !important
    }
    if (spec._media) {
      const o = classAppendAndCssFromMedia(spec._media, options);
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


HTML_AND_SVG_ELEMENTS.forEach(k => {
  exports[k] = (...args) => exports.el(k, ...args);
});


//export default exports; // Not needed
