# ![Logo](render-js.png?raw=true "Title") [Render-js](https://github.com/ComLock/render-js) [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) [![npm version](https://img.shields.io/npm/v/react.svg?style=flat)](https://www.npmjs.com/package/render-js)

Render-js is library for generating html from js.

## Examples

### How to include in Enonic XP app (does not apply to Node.js)
```groovy
dependencies {
  include 'com.enonic.lib:render-js:1.0.0'
}
```

### How to use it in Javascript 1.6 (Enonic XP 6.12.2)

```js
var R = require('/lib/render-js/index.js');


exports.get = function(request) {
  return {
    body: R.render([
      R.doctype(),
      R.html([
        R.head(R.title('Page Title')),
        R.body([
          R.main([
            R.h1('Hello World!')
          ]) // main
        ]) // body
      ]) // html
    ]) // render
  }; // return
} // exports.get
```

### How to use it in ECMAscript 2015 (Node.js, Enonic XP 7)

```js
import R, { render, doctype, html, head, title, body, main, h1, form } from 'render-js';
import { checkbox } from 'render-js/input';
import { getPageContributions } from 'pages/default/default';


function myCustomElement(...args) {
  return R.el('custom', ...args);
}


export function get() {
  const {headBegin, headEnd, bodyBegin, bodyEnd} = getPageContributions();
  const model = {
    title: 'Title'
  };
  return {
    body: render([
      doctype(),
      html([
        head([
          headBegin,
          title(model.title)
          headEnd
        ]), // head
        body([
          bodyBegin,
          main([
            h1(model.title),
            form({method: 'post'}, [
              checkbox({name: 'name'}),
              R.button({type: 'submit'}, 'Button text')
            ]), // form
            myCustomElement({ attr: 'value'}, 'Content')
          ]), // main
          bodyEnd
        ]) // body
      ]) // html
    ]), // render
    contentType: 'text/html'
  }; // return
} // function get
```

## Vision / goal

I would like to create a render library that can be used both server/client -side. Which means it must be javascript.

It will be written using es2015 which makes for much nicer code with for instance template strings.

See [doc/server-side.es6](doc/server-side.es6) for an example of how I want a render to look like.

### New IDEA: Non Cascading Scaleable Styling

Autogenerate "css" from element "styling" and pageContribute it.
Which means every element/component function must return both the html string
and an (unique?) array of generated "css". The array must propagate upwards,
so it automatically becomes part of bodyBegin. In terms of extendability,
returning an object with named properties should be the way to go.

## Definition

* All element methods take between, zero and two params.
* There are three types of allowed param types:
  * String
  * Array of String
  * Object
* If you call it using two params, the first one should be of type Object.

## Compatibility

| Lib version | XP version |
| ----------- | ---------- |
| 1.x.x       | 6.12.2     |
| 0.x.x       | 6.12.2     |

## Changelog

### 1.2.0

* Dasherize attribute names.

### 1.1.0

* Style attribute from object. Keep property order. Dasherize property keys.

### 1.0.0

* Javascript 1.6 Example

### 0.0.4

* Input types.
* Icon.
* Use as Enonic XP lib too.

### 0.0.3

* Void elements.

### 0.0.2

* Handle javascript types in attribute values.

### 0.0.1

* Basic functionality. KISS!

## Ideas

* Implement indentation?
* Implement minifying?
