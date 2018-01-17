/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
/* eslint-disable spaced-comment */
/* eslint max-len: ["error", { "code": 150, "comments": 200 }] */
/* eslint quotes: ["error", "single", { "allowTemplateLiterals": true }] */
/* eslint-enable no-console */

import { ELEMENTS, att2Str, isVoid } from './src/html.es';
import { doctype } from './index';
import {
  classAppendAndCssFromMedia,
  classAppendAndCssFromStyle,
  uniqCss
} from './src/css.es';
import {
  isArray,
  isFunction,
  isSet,
  isString,
  toStr
} from './util.es';


//const WARN = true;
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

export const PROPERTY_TAG = '-t';
// const PROPERTY_ATTRIBUTES = '_a';
export const PROPERTY_CHILDREN = '-c';
const PROPERTY_CSS = '-cs';
const PROPERTY_HTML = '-h';
const PROPERTY_SPEC = '-s';
// const PROPERTY_PARENT = '_p';

const METHODS = ['constructor', 'add', 'build', 'getCss', 'render', 'setDown', 'setUp'];
const UNIQUE_ELEMENTS = ['html', 'head', 'body'];


class Node {
  /* static get children() { // Read-only accessor
    return this[PROPERTY_CHILDREN];
  } */

  constructor(tag, spec, content) {
    if (METHODS.includes(tag)) { throw new Error(`Illegal tag:${tag} matches method name!`); }
    // TRACE && console.log(`new Node(${toStr(tag)}, ${toStr(spec)}, ${toStr(content)})`);
    this.root = this;
    this[PROPERTY_TAG] = tag;
    if (UNIQUE_ELEMENTS.includes(tag)) { this[tag] = this; } // Reference self
    // TRACE && console.log(`${tag} spec is ${(isString(spec) && 'string') || (spec instanceof Node && 'Node') || (Array.isArray(spec) && 'Array') || 'Unknown type'}`);
    if (isString(spec) || spec instanceof Node || isArray(spec) || isFunction(spec)) {
      content = spec;
      spec = {};
    }
    this[PROPERTY_SPEC] = spec;
    this[PROPERTY_CSS] = [];

    this[PROPERTY_CHILDREN] = [];
    this.add(content);
    // TRACE && console.log(`tag:${toStr(this[PROPERTY_TAG])}, spec:${toStr(this[PROPERTY_SPEC])}, children:${toStr(this[PROPERTY_CHILDREN])}`);
  } // constructor


  setDown(key, value, { skip = null } = {}) {
    //console.log(`this:${this[PROPERTY_TAG]} setDown(${key}, ${value[PROPERTY_TAG]}El)`);
    //console.log(`Setting ${this[PROPERTY_TAG]}.${key}=${value[PROPERTY_TAG]} (in setDown)`);
    this[key] = value;
    //console.log(`${this[PROPERTY_TAG]} has ${this[PROPERTY_CHILDREN].length} children`);
    this[PROPERTY_CHILDREN].forEach(child => {
      if (child instanceof Node) {
        if (child === skip) {
          //console.log(`Skipping tree of ${child[PROPERTY_TAG]} when setting ${key}`);
        } else {
          child.setDown(key, value);
        }
      }
    });
    return this;
  }


  /*setUp(key, value) {
    this[key] = value;
    if (this.parent) {
      this.parent.setUp(key, value);
    }
    return this;
  }*/


  hasDescendant(node) {
    if (this[PROPERTY_CHILDREN].includes(node)) { return true; }
    /* eslint-disable consistent-return */
    this[PROPERTY_CHILDREN].forEach(child => {
      if (child instanceof Node && child.hasDescendant(node)) { return true; } // "recurse"
    });
    /* eslint-enable consistent-return */
    return false;
  }


  add(content) {
    if (!isSet(content)) { return this; }
    //console.log(`add(${toStr(content)}) children:${toStr(this[PROPERTY_CHILDREN])}`);

    // Make sure children is an array.
    if (!isArray(this[PROPERTY_CHILDREN])) { this[PROPERTY_CHILDREN] = [this[PROPERTY_CHILDREN]]; }

    // Make it possible to add more than one content at a time.
    const newContents = Array.isArray(content) ? content : [content];
    const newNodes = [];
    newContents.forEach(newContent => {
      while (isFunction(newContent)) {
        newContent = newContent();
      }
      if (isString(newContent)) {
        this[PROPERTY_CHILDREN].push(newContent);
      } else if (newContent instanceof Node) {
        if (this.hasDescendant(newContent)) { // Protect against circular
          throw new Error(`The node:${newContent[PROPERTY_TAG]} already exists in the tree! Not adding to ${this[PROPERTY_TAG]}!`);
        }
        this[PROPERTY_CHILDREN].push(newContent); // Add to exsisting tree.
        newContent.parent = this;
        //console.log(`Setting down from toBeAdded:${toBeAdded[PROPERTY_TAG]}.root to this:${this[PROPERTY_TAG]}.root (in add)`);
        newContent.setDown('root', this.root); // Make sure new tree has correct root. Needed later to apply UE everywhere (new sister trees too).
        // Add path properties:
        const addedNodeTag = newContent[PROPERTY_TAG];
        //if (!UNIQUE_ELEMENTS.includes(addedNodeTag)) { // Path properties for ue added later (avoid conflict)
        if (this[addedNodeTag]) { // Already has path property
          //console.log(`Extending ${this[PROPERTY_TAG]}.${addedNodeTag} (in add)`);
          if (Array.isArray(this[addedNodeTag])) { // Already have more than 1 child with same tag
            if (this[addedNodeTag].includes(newContent)) { throw new Error(`Path property ${addedNodeTag} already contains node!`); }
            this[addedNodeTag].push(newContent);
          } else { // Only have 1 child with same tag, convert to array
            if (this[addedNodeTag] === newContent) { throw new Error(`Path property ${addedNodeTag} already references node!`); }
            this[addedNodeTag] = [this[addedNodeTag], newContent];
          }
        } else { // Don't have that path properties yet
          //console.log(`A ${this[PROPERTY_TAG]} child:${addedNodeTag} is not ue only setting on this:${this[PROPERTY_TAG]}`);
          //console.log(`Setting ${this[PROPERTY_TAG]}.${addedNodeTag} to addedNode (in add)`);
          this[addedNodeTag] = newContent;
        }
        //} // !UNIQUE_ELEMENT
        newNodes.push(newContent);
      } else if (isSet(newContent)) {
        throw new Error(`Unhandeled type when adding newContent:${toStr(newContent)}`);
      }
    }); // forEach newContent

    /*
      When adding, the new stuff can be:
      * A single node
      * A three
      * An array with any number of single nodes or trees

      As such useful properties of any new children, should be added to existing tree (root skip new stuff).
      And useful properties of existing tree (this) should be added to all new chilren.
      But you have to take into consideration all added sibling trees.
    */
    newNodes.forEach(addedNode => {
      UNIQUE_ELEMENTS.forEach(ue => { // Allow direct acces to some unique elements
        if (this[ue]) { // Existing tree has ue
          //if (addedNode[ue]) { throw new Error(`Both existing tree:${this[PROPERTY_TAG]} and added tree:${addedNode[PROPERTY_TAG]} has ue:${ue}!`); }
          if (!addedNode[ue]) {
            //console.log(`Setting down from addedNode:${addedNode[PROPERTY_TAG]}.${ue} to this:${this[PROPERTY_TAG]}.${ue} (in add)`);
            addedNode.setDown(ue, this[ue]); // Apply ue to added tree
          }
        } else if (addedNode[ue]) { // Added tree has ue
          //console.log(`Setting down from this.root:${this.root[PROPERTY_TAG]}.${ue} to addedNode:${addedNode[PROPERTY_TAG]}.${ue} (in add)`);
          this.root.setDown(ue, addedNode[ue], { skip: addedNode }); // Apply to entire tree which includes new siblings, but skip own tree.
        }
      }); // forEach ue
    }); // forEach addedNode

    //console.log(`add children:${toStr(this[PROPERTY_CHILDREN])}`);
    return this;
  } // add


  build({
    autoprefixer = true
  } = {}) {
    const tag = this[PROPERTY_TAG]; // DEBUG && console.log(`tag:${toStr(tag)}`);
    const spec = this[PROPERTY_SPEC] || {}; // DEBUG && console.log(`spec:${toStr(spec)}`);
    if (spec.style) {
      const s = classAppendAndCssFromStyle(spec.style, { autoprefixer });
      spec.class = [].concat(spec.class, s.classAppend).filter(n => n); // Remove null elements;
      this[PROPERTY_CSS] = this[PROPERTY_CSS].concat(s.css);
      spec.style = null;
    }
    if (spec._media) {
      const o = classAppendAndCssFromMedia(spec._media, { autoprefixer });
      spec.class = [].concat(spec.class, o.classAppend).filter(n => n); // Remove null elements;
      this[PROPERTY_CSS] = this[PROPERTY_CSS].concat(o.css);
    }
    const attributes = att2Str({ ...spec, _media: null }); //DEBUG && console.log(`attributes:${toStr(attributes)}`);
    if (isVoid(tag)) { this[PROPERTY_HTML] = `<${tag}${attributes}/>`; return this; }
    const children = this[PROPERTY_CHILDREN]; //DEBUG && console.log(`children:${toStr(children)}`);
    if (!children) { this[PROPERTY_HTML] = `<${tag}${attributes}></${tag}>`; return this; }
    if (isString(children)) { this[PROPERTY_HTML] = `<${tag}${attributes}>${children}</${tag}>`; return this; }
    if (children instanceof Node) {
      children.build();
      this[PROPERTY_HTML] = `<${tag}${attributes}>${children[PROPERTY_HTML]}</${tag}>`;
      this[PROPERTY_CSS] = this[PROPERTY_CSS].concat(children[PROPERTY_CSS]);
      return this;
    }
    if (Array.isArray(children)) {
      let innerHtml = '';
      children.forEach(child => {
        if (child instanceof Node) {
          innerHtml += child.build()[PROPERTY_HTML];
          this[PROPERTY_CSS] = this[PROPERTY_CSS].concat(child[PROPERTY_CSS]);
          //try {} catch (e) {throw new Error(`child doesn't have a build method message:${e.message} child:${toStr(child)} children:${toStr(children)}`);}
        } else if (isString(child)) {
          innerHtml += child;
        }
      }); // forEach(child
      this[PROPERTY_HTML] = `<${tag}${attributes}>${innerHtml}</${tag}>`;
      return this;
    } // childen isArray
    //WARN && console.warn(`NODE: children not String, Node or Array of Nodes!`);
    this[PROPERTY_HTML] = '';
    return this;
  } // build

  getCss() {
    return uniqCss(this.build()[PROPERTY_CSS]);
  }

  render() {
    return this.build()[PROPERTY_HTML];
  }
} // class Node
exports.Node = Node;


class Dom extends Node {
  constructor(spec, content) {
    //TRACE && console.log(`new Dom(${toStr(spec)}, ${toStr(content)})`);
    super('', spec, content);
  }

  build() {
    const children = this[PROPERTY_CHILDREN]; //TRACE && console.log(`children:${toStr(children)}`);
    if (!children) { this[PROPERTY_HTML] = ''; return this; }
    if (isString(children)) { this[PROPERTY_HTML] = children; return this; }
    if (children instanceof Node) {
      this[PROPERTY_HTML] = children.build()[PROPERTY_HTML];
      this[PROPERTY_CSS] = children[PROPERTY_CSS] ? children[PROPERTY_CSS] : [];
      return this;
    }
    if (Array.isArray(children)) {
      let innerHtml = '';
      children.forEach(child => {
        if (child instanceof Node) {
          innerHtml += child.build()[PROPERTY_HTML];
          this[PROPERTY_CSS] = this[PROPERTY_CSS].concat(child[PROPERTY_CSS]);
          //try {} catch (e) {throw new Error(`child doesn't have a build method message:${e.message} child:${toStr(child)} children:${toStr(children)}`);}
        } else if (isString(child)) {
          innerHtml += child;
        }
      }); // forEach(child
      this[PROPERTY_HTML] = innerHtml;
      return this;
    }
    //WARN && console.warn(`DOM: children not String, Node or Array of Nodes!`);
    this[PROPERTY_HTML] = '';
    return this;
  } // build
} // class Dom
exports.Dom = Dom;


ELEMENTS.forEach(k => {
  exports[k] = (...args) => new Node(k, ...args);
});


exports.doctype = (...args) => new Dom(doctype(...args));


export default exports;
