# ![Logo](render-js.svf?raw=true "Title") [Render-js](https://github.com/ComLock/render-js) [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) [![npm version](https://img.shields.io/npm/v/react.svg?style=flat)](https://www.npmjs.com/package/render-js)

Render-js is library for generating html from js.

## Examples

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
| 0.0.4       | 6.12.2     |

## Changelog

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
