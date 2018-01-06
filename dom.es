/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-useless-constructor */
/* eslint quotes: ["error", "single", { "allowTemplateLiterals": true }] */


import { ELEMENTS, att2Str, isVoid } from './src/html.es';
import { doctype } from './index';
import { classAppendAndCssFromMedia } from './ncss.es';
import { isString, sortAndRemoveDups, toStr } from './util.es';

const WARN = true;
const DEBUG = false;
const TRACE = false;


const SYMBOL_TAG = '_t';
// const SYMBOL_ATTRIBUTES = '_a';
const SYMBOL_CHILDREN = '_c';
const SYMBOL_CSS = '_css';
const SYMBOL_HTML = '_h';
const SYMBOL_SPEC = '_s';
// const SYMBOL_PARENT = '_p';


class Node {
  /* static get children() { // Read-only accessor
    return this[SYMBOL_CHILDREN];
  } */

  constructor(tag, spec, content) {
    TRACE && console.log(`new Node(${toStr(tag)}, ${toStr(spec)}, ${toStr(content)})`);
    this[SYMBOL_TAG] = tag;
    TRACE && console.log(`${tag} spec is ${(isString(spec) && 'string') || (spec instanceof Node && 'Node') || (Array.isArray(spec) && 'Array') || 'Unknown type'}`);
    if (isString(spec) || spec instanceof Node || Array.isArray(spec)) {
      content = spec;
      spec = {};
    }
    this[SYMBOL_CHILDREN] = content;
    this[SYMBOL_SPEC] = spec;
    TRACE && console.log(`tag:${toStr(this[SYMBOL_TAG])}, spec:${toStr(this[SYMBOL_SPEC])}, children:${toStr(this[SYMBOL_CHILDREN])}`);
  } // constructor

  build() {
    const tag = this[SYMBOL_TAG]; DEBUG && console.log(`tag:${toStr(tag)}`);
    const spec = this[SYMBOL_SPEC] || {}; DEBUG && console.log(`spec:${toStr(spec)}`);
    if (spec._media) {
      const o = classAppendAndCssFromMedia(spec._media);
      spec.class = [].concat(spec.class, o.classAppend).filter(n => n); // Remove null elements;
      this[SYMBOL_CSS] = sortAndRemoveDups((this[SYMBOL_CSS] || []).concat(o.css));
    }
    const attributes = att2Str({ ...spec, _media: null }); DEBUG && console.log(`attributes:${toStr(attributes)}`);
    if (isVoid(tag)) { this[SYMBOL_HTML] = `<${tag}${attributes}/>`; return this; }
    const children = this[SYMBOL_CHILDREN]; DEBUG && console.log(`children:${toStr(children)}`);
    if (!children) { this[SYMBOL_HTML] = `<${tag}${attributes}></${tag}>`; return this; }
    if (isString(children)) { this[SYMBOL_HTML] = `<${tag}${attributes}>${children}</${tag}>`; return this; }
    if (children instanceof Node) {
      children.build();
      this[SYMBOL_HTML] = `<${tag}${attributes}>${children[SYMBOL_HTML]}</${tag}>`;
      this[SYMBOL_CSS] = sortAndRemoveDups((this[SYMBOL_CSS] || []).concat(children[SYMBOL_CSS]));
      return this;
    }
    if (Array.isArray(children)) {
      children.forEach(child => child.build());
      this[SYMBOL_HTML] = `<${tag}${attributes}>${children.map(child => child[SYMBOL_HTML]).join('')}</${tag}>`;
      this[SYMBOL_CSS] = sortAndRemoveDups((this[SYMBOL_CSS] || [])
        .concat(children.map(child => child[SYMBOL_CSS])));
      return this;
    }
    WARN && console.warn(`NODE: children not String, Node or Array of Nodes!`);
    this[SYMBOL_HTML] = '';
    return this;
  } // build

  getCss() {
    return this.build()[SYMBOL_CSS];
  }

  render() {
    return this.build()[SYMBOL_HTML];
  }
} // class Node
exports.Node = Node;


class Dom extends Node {
  constructor(spec, content) {
    TRACE && console.log(`new Dom(${toStr(spec)}, ${toStr(content)})`);
    super('', spec, content);
  }

  build() {
    const children = this[SYMBOL_CHILDREN]; TRACE && console.log(`children:${toStr(children)}`);
    if (!children) { this[SYMBOL_HTML] = ''; return this; }
    if (isString(children)) { this[SYMBOL_HTML] = children; return this; }
    if (children instanceof Node) {
      this[SYMBOL_HTML] = children.build()[SYMBOL_HTML];
      this[SYMBOL_CSS] = children[SYMBOL_CSS] ? sortAndRemoveDups(children[SYMBOL_CSS]) : [];
      return this;
    }
    if (Array.isArray(children)) {
      this[SYMBOL_HTML] = children.map(child => child.build()[SYMBOL_HTML]).join('');
      this[SYMBOL_CSS] = sortAndRemoveDups(children.map(child => child[SYMBOL_CSS] || []));
      return this;
    }
    WARN && console.warn(`DOM: children not String, Node or Array of Nodes!`);
    this[SYMBOL_HTML] = '';
    return this;
  } // build
} // class Dom
exports.Dom = Dom;


ELEMENTS.forEach(k => {
  exports[k] = (...args) => new Node(k, ...args);
});


exports.doctype = (...args) => new Dom(doctype(...args));


export default exports;
