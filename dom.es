/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-useless-constructor */
/* eslint-disable spaced-comment */

/* eslint max-len: ["error", { "code": 150, "comments": 200 }] */
/* eslint quotes: ["error", "single", { "allowTemplateLiterals": true }] */

/* eslint-enable no-console */

import { ELEMENTS, att2Str, isVoid } from './src/html.es';
import { doctype } from './index';
import { classAppendAndCssFromMedia, classAppendAndCssFromStyle } from './src/css.es';
import { isSet, isString, sortAndRemoveDups, toStr } from './util.es';

const WARN = true;
//const DEBUG = false;
//const TRACE = false;

/*
  XML elements must follow these naming rules:
  Element names are case-sensitive
  Element names must start with a letter or underscore
  Element names cannot start with the letters xml (or XML, or Xml, etc)
  Element names can contain letters, digits, hyphens, underscores, and periods
  Element names cannot contain spaces
*/

const SYMBOL_TAG = '-t';
// const SYMBOL_ATTRIBUTES = '_a';
const SYMBOL_CHILDREN = '-c';
const SYMBOL_CSS = '-cs';
const SYMBOL_HTML = '-h';
const SYMBOL_SPEC = '-s';
// const SYMBOL_PARENT = '_p';

const METHODS = ['constructor', 'add', 'build', 'getCss', 'render'];

class Node {
  /* static get children() { // Read-only accessor
    return this[SYMBOL_CHILDREN];
  } */

  constructor(tag, spec, content) {
    if (METHODS.includes(tag)) { throw new Error(`Illegal tag:${tag} matches method name!`); }
    // TRACE && console.log(`new Node(${toStr(tag)}, ${toStr(spec)}, ${toStr(content)})`);
    this[SYMBOL_TAG] = tag;
    // TRACE && console.log(`${tag} spec is ${(isString(spec) && 'string') || (spec instanceof Node && 'Node') || (Array.isArray(spec) && 'Array') || 'Unknown type'}`);
    if (isString(spec) || spec instanceof Node || Array.isArray(spec)) {
      content = spec;
      spec = {};
    }
    this[SYMBOL_SPEC] = spec;
    this[SYMBOL_CSS] = [];
    this.add(content);
    // TRACE && console.log(`tag:${toStr(this[SYMBOL_TAG])}, spec:${toStr(this[SYMBOL_SPEC])}, children:${toStr(this[SYMBOL_CHILDREN])}`);
  } // constructor


  add(content) {
    if (!isSet(content)) { return this; }
    //console.log(`add(${toStr(content)}) children:${toStr(this[SYMBOL_CHILDREN])}`);
    const array = Array.isArray(content) ? content : [content];
    const children = [].concat(this[SYMBOL_CHILDREN], ...array.map(item => {
      if (item instanceof Node) {
        const childTag = item[SYMBOL_TAG];
        //console.log(`childTag:${toStr(childTag)} this[childTag]:${toStr(this[childTag])}`);
        if (this[childTag]) {
          if (Array.isArray(this[childTag])) {
            this[childTag].push(item);
          } else {
            this[childTag] = [this[childTag], item];
          }
        } else {
          this[childTag] = item;
        }
        return item;
      }
      if (isString(item)) {
        return item;
      }
      throw new Error(`Unhandeled type when adding child:${toStr(item)}`);
    })) // forEach
      .filter(n => n); // remove null
    this[SYMBOL_CHILDREN] = children.length < 2 ? children[0] : children;
    //console.log(`add children:${toStr(this[SYMBOL_CHILDREN])}`);
    return this;
  } // add


  build({
    autoprefixer = true
  } = {}) {
    const tag = this[SYMBOL_TAG]; // DEBUG && console.log(`tag:${toStr(tag)}`);
    const spec = this[SYMBOL_SPEC] || {}; // DEBUG && console.log(`spec:${toStr(spec)}`);
    if (spec.style) {
      const s = classAppendAndCssFromStyle(spec.style, { autoprefixer });
      spec.class = [].concat(spec.class, s.classAppend).filter(n => n); // Remove null elements;
      this[SYMBOL_CSS] = sortAndRemoveDups(this[SYMBOL_CSS].concat(s.css));
      spec.style = null;
    }
    if (spec._media) {
      const o = classAppendAndCssFromMedia(spec._media, { autoprefixer });
      spec.class = [].concat(spec.class, o.classAppend).filter(n => n); // Remove null elements;
      this[SYMBOL_CSS] = sortAndRemoveDups(this[SYMBOL_CSS].concat(o.css));
    }
    const attributes = att2Str({ ...spec, _media: null }); //DEBUG && console.log(`attributes:${toStr(attributes)}`);
    if (isVoid(tag)) { this[SYMBOL_HTML] = `<${tag}${attributes}/>`; return this; }
    const children = this[SYMBOL_CHILDREN]; //DEBUG && console.log(`children:${toStr(children)}`);
    if (!children) { this[SYMBOL_HTML] = `<${tag}${attributes}></${tag}>`; return this; }
    if (isString(children)) { this[SYMBOL_HTML] = `<${tag}${attributes}>${children}</${tag}>`; return this; }
    if (children instanceof Node) {
      children.build();
      this[SYMBOL_HTML] = `<${tag}${attributes}>${children[SYMBOL_HTML]}</${tag}>`;
      this[SYMBOL_CSS] = sortAndRemoveDups(this[SYMBOL_CSS].concat(children[SYMBOL_CSS]));
      return this;
    }
    if (Array.isArray(children)) {
      let innerHtml = '';
      children.forEach(child => {
        if (child instanceof Node) {
          innerHtml += child.build()[SYMBOL_HTML];
          this[SYMBOL_CSS] = this[SYMBOL_CSS].concat(child[SYMBOL_CSS]);
          //try {} catch (e) {throw new Error(`child doesn't have a build method message:${e.message} child:${toStr(child)} children:${toStr(children)}`);}
        } else if (isString(child)) {
          innerHtml += child;
        }
      }); // forEach(child
      this[SYMBOL_HTML] = `<${tag}${attributes}>${innerHtml}</${tag}>`;
      this[SYMBOL_CSS] = sortAndRemoveDups(this[SYMBOL_CSS]);
      return this;
    } // childen isArray
    //WARN && console.warn(`NODE: children not String, Node or Array of Nodes!`);
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
    //TRACE && console.log(`new Dom(${toStr(spec)}, ${toStr(content)})`);
    super('', spec, content);
  }

  build() {
    const children = this[SYMBOL_CHILDREN]; //TRACE && console.log(`children:${toStr(children)}`);
    if (!children) { this[SYMBOL_HTML] = ''; return this; }
    if (isString(children)) { this[SYMBOL_HTML] = children; return this; }
    if (children instanceof Node) {
      this[SYMBOL_HTML] = children.build()[SYMBOL_HTML];
      this[SYMBOL_CSS] = children[SYMBOL_CSS] ? sortAndRemoveDups(children[SYMBOL_CSS]) : [];
      return this;
    }
    if (Array.isArray(children)) {
      let innerHtml = '';
      children.forEach(child => {
        if (child instanceof Node) {
          innerHtml += child.build()[SYMBOL_HTML];
          this[SYMBOL_CSS] = this[SYMBOL_CSS].concat(child[SYMBOL_CSS]);
          //try {} catch (e) {throw new Error(`child doesn't have a build method message:${e.message} child:${toStr(child)} children:${toStr(children)}`);}
        } else if (isString(child)) {
          innerHtml += child;
        }
      }); // forEach(child
      this[SYMBOL_HTML] = innerHtml;
      this[SYMBOL_CSS] = sortAndRemoveDups(this[SYMBOL_CSS]);
      return this;
    }
    //WARN && console.warn(`DOM: children not String, Node or Array of Nodes!`);
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
