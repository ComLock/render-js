/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-useless-constructor */
/* eslint quotes: ["error", "single", { "allowTemplateLiterals": true }] */


import { ELEMENTS, att2Str, isVoid } from './src/html.es';
import { isString, toStr } from './util.es';


const WARN = true;
const DEBUG = false;
const TRACE = false;


const SYMBOL_TAG = '_t';
// const SYMBOL_ATTRIBUTES = '_a';
const SYMBOL_CHILDREN = '_c';
const SYMBOL_SPEC = '_s';
// const SYMBOL_PARENT = '_p';


class Node {
  static get children() { // Read-only accessor
    return this[SYMBOL_CHILDREN];
  }

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

  render() {
    const tag = this[SYMBOL_TAG]; DEBUG && console.log(`tag:${toStr(tag)}`);
    DEBUG && console.log(`spec:${toStr(this[SYMBOL_SPEC])}`);
    const attributes = att2Str({ ...(this[SYMBOL_SPEC] || {}), _media: null }); DEBUG && console.log(`attributes:${toStr(attributes)}`);
    if (isVoid(tag)) { return `<${tag}${attributes}/>`; }
    const children = this[SYMBOL_CHILDREN]; DEBUG && console.log(`children:${toStr(children)}`);
    if (!children) { return `<${tag}${attributes}></${tag}>`; }
    if (isString(children)) { return `<${tag}${attributes}>${children}</${tag}>`; }
    if (children instanceof Node) { return `<${tag}${attributes}>${children.render()}</${tag}>`; }
    if (Array.isArray(children)) {
      return `<${tag}${attributes}>${children.map(child => child.render()).join('')}</${tag}>`;
    }
    WARN && console.warn(`children not String, Node or Array of Nodes!`);
    return '';
  } // render
} // class Node
exports.Node = Node;


class Dom extends Node {
  constructor(spec, content) {
    TRACE && console.log(`new Dom(${toStr(spec)}, ${toStr(content)})`);
    super('', spec, content);
  }

  render() {
    const children = this[SYMBOL_CHILDREN]; TRACE && console.log(`children:${toStr(children)}`);
    if (!children) { return ''; }
    if (isString(children)) { return children; }
    if (children instanceof Node) { return children.render(); }
    if (Array.isArray(children)) {
      return children.map(child => child.render()).join('');
    }
    WARN && console.warn(`children not String, Node or Array of Nodes!`);
    return '';
  } // render
} // class Dom
exports.Dom = Dom;


ELEMENTS.forEach(k => {
  exports[k] = (...args) => new Node(k, ...args);
});
