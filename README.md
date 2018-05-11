# ![Logo](render-js.png?raw=true "Title") [Render-js](https://github.com/ComLock/render-js) [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) [![npm version](https://img.shields.io/npm/v/react.svg?style=flat)](https://www.npmjs.com/package/render-js)

Render-js is library for generating html and non cascading styling in js.

It's a can be used to build simple websites or advanced frontend frameworks, alleviating typical css complexity problems.

Typically a framework starts out simple, but quickly reaches a point where it becomes hard to change anything because of ever increasing CSS entanglement.

Render-js keeps specificity extremely low by generating tachyons (single purpose classes).

The programmer simply defines what css properties an HTML element should have. You can even define media queries for responsive styling.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Contents

- [Genesis](#genesis)
- [Generation 1: HTML](#generation-1-html)
  - [Core concepts (syntax)](#core-concepts-syntax)
    - [HTML element functions](#html-element-functions)
    - [HTML attribute object](#html-attribute-object)
    - [Style attribute object](#style-attribute-object)
  - [HTML: Examples:](#html-examples)
    - [HTML: ECMAscript 2015 example](#html-ecmascript-2015-example)
    - [HTML: Javascript 1.6 example](#html-javascript-16-example)
    - [HTML: Result](#html-result)
- [Generation 2: NCSS](#generation-2-ncss)
- [Generation 3: DOM](#generation-3-dom)
    - [DOM: ECMAscript 2015 example](#dom-ecmascript-2015-example)
- [Generation 4: OBJ](#generation-4-obj)
- [Generation 5: CLASS (current generation)](#generation-5-class-current-generation)
- [Examples](#examples)
  - [How to include in Enonic XP app (does not apply to Node.js)](#how-to-include-in-enonic-xp-app-does-not-apply-to-nodejs)
  - [HTML: How to use it in Javascript 1.6 (Enonic XP 6.12.2)](#html-how-to-use-it-in-javascript-16-enonic-xp-6122)
  - [HTML: How to use it in ECMAscript 2015 (Node.js, Enonic XP 7)](#html-how-to-use-it-in-ecmascript-2015-nodejs-enonic-xp-7)
- [Vision / goal](#vision--goal)
  - [New IDEA: Non Cascading Scaleable Styling](#new-idea-non-cascading-scaleable-styling)
- [Definition](#definition)
- [Compatibility](#compatibility)
- [Changelog](#changelog)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Genesis

I started programming Render-js as an alternative to thymeleaf, but it quickly grew into much more. Everytime I got a major idea I developed it as a new variant without changing the previous one:

## Generation 1: HTML

Use this if you only want to generate html. It should be highly performant.

### Core concepts (syntax)

#### HTML element functions

An HTML element consists of three things:
* tagName
* attributes
* content

Which rather naturally gives this syntax in js:

```js
tagName(attributes, content);
```

The attributes is an object with properties, while the content can be a string or a function reference or an array of them.
Both the attributes and content parameter are optional.

```js
tagName();
tagName('String');
tagName({key: 'value'});
tagName({key: 'value'}, 'String');
```

You build a dom by nesting html element functions.

```js
tagName(
  tagName()
);
```

For example:
```js
p({
  class: 'className'
}, [
  'Text before ',
  a({href: 'https://www.example.com'}, 'link'),
  ' text after.'
]);
```

#### HTML attribute object

An html attribute looks like this (EBNF):
```ebnf
<html-attribute> :== <name> <equalSign> <quoteMark> <value> <quoteMark>
<name> :== <case insensitive string sometimes with dashes>
<quoteMark> :== ' | "
```

Which lead to the following syntax in js:

```js
{ name: value, ... }
```

Too avoid having to quote js property names, any dashes must be removed.
This can be achieved since html attribute names are case insensitive, while js property names are case sensitive. So we use camelcase in JS and later dasherize into html attribute names.

```js
{dataProp: 'value'}
```

```html
data-prop="value"
```

I have found an exception: The SVG attribute named viewBox. It is case-sensitive. So I simply don't dasherize that one. Make an issue on github if you run into any other case-sensitive HTML/SVG attributes.

#### Style attribute object

An html style attribute consists of is a semicolon seperated key value pair list. (EBNF):

```ebnf
<style-attribute> ::= <declaration> {<semicolon> <declaration>}
<declaration> ::= <property> <colon> <value>
<property> :== <case insensitive string sometimes with dashes>
<value> :== <string>
```

Which lead to the following syntax in js:

```js
{ property: value, ... }
```

CSS property names contains dashes, which JS property names also can, but needs to be quotes. This can be avoided since CSS property names are case insensitive, while JS property names are case sensitive. So we use camelcase in JS and later dasherize into CSS property name.

```js
{
  color: 'white',
  backgroundColor: 'black'
}
```

```html
style="color:white;background-color:black"
```

### HTML: Examples:

#### HTML: ECMAscript 2015 example

```js
import {p, render} from 'render-js/html.es';
render(p({style: {backgroundColor: 'white'}}, 'Hello world'));
```

#### HTML: Javascript 1.6 example

```js
var R = require('render-js/dist/html.js');
var render = R.render;
var p = R.p;
render(p({style: {backgroundColor: 'white'}}, 'Hello world'));
```

#### HTML: Result
```html
<p style="background-color:white">Hello world</p>
```


## Generation 2: NCSS
This is when I figured out that it would be nice to generate css too.

All the features of this generation is present in the newest generation, so you should probably use that instead.

## Generation 3: DOM
This is when I figured out accessing and modify the dom could be useful.

All the features of this generation should be present in the newest generation, so you should probably use that instead.

#### DOM: ECMAscript 2015 example

```js
import { Dom, doctype, html, head, title, style,
  body, main, h1, div, p, span } from 'render-js/dom.es';

const view = new Dom([ // Things that are always the same
  doctype(),
  html([
    head([
      title(),
      style({ type: 'text/css' })
    ]), // head
    body([
      main([
        h1(),
        div({
          style: {
            display: 'flex'
          }
        },
          p(
            span({
              style: {
                display: 'none',
                '&:hover': {
                  color: 'red'
                }
              },
              _media: {
                minWidth480: {
                  display: 'block'
                }
              }
            })
          ) // p
        ) // div
      ]) // main
    ]) // body
  ]) // html
]); // view

const model = { // Things that change
  title: 'Title',
  heading: 'Heading',
  text: 'Only visible from tablet up'
}; // model

// Controller
view.head.title.add(model.title);
view.body.main.h1.add(model.heading);
view.body.main.div.p.span.add(model.text);

// This will trigger build on body only:
view.head.style.add(view.body.getCss().join('')); // pageContributions

const html = view.render(); // Will trigger build on entire DOM.
```

Which will give you this html (without whitespace and indentation):

```html
<!DOCTYPE html>
<html>
<head>
  <title>Title</title>
  <style type="text/css">
    .d-f{display:flex}
    .d-n{display:none}
    .h--c-r:hover{color:red}
    @media (min-width:480px) {
      .d-b-w-mi-480{display:block}
    }
  </style>
</head>
<body>
  <main>
    <h1>Heading</h1>
    <div class="d-f">
      <p>
        <span class="d-b-w-mi-480 d-n h--c-r:hover"
        >Only visible from tablet up</span>
      </p>
    </div>
  </main>
  </body>
</html>
```

## Generation 4: OBJ
This is when I started thinking about elements with "shared" styling, such as list elements. It would be wasteful to generate the same css many times. Which meant I needed to keep some state.

All the features of this generation should be present in the newest generation, so you should probably use that instead.

## Generation 5: CLASS (current generation)
This is when I started thinking about keeping the Dom object as small as possible so it could be transferred efficiently to the browser.


## Examples


### How to include in Enonic XP app (does not apply to Node.js)
```groovy
dependencies {
  include 'com.enonic.lib:render-js:1.20.0'
}
```

### HTML: How to use it in Javascript 1.6 (Enonic XP 6.12.2)

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

### HTML: How to use it in ECMAscript 2015 (Node.js, Enonic XP 7)

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
and an (unique?) array of generated "css". The array must propagate upwards.
In terms of extendability, returning an object with named properties should be the way to go.

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

##### 1.29.0

* FEATURE encodeHtmlEntity() and decodeHtmlEntity()

##### 1.28.0

* FEATURE options (doesn't seem to improve speed)
*  abbreviateCssPropertyNames = true
*  abbreviateCssPropertyValues = true
*  addDefaultUnits = true
* Profiled toClassName()

##### 1.27.0

* FEATURE: CSS abbreviations for:
*  animation
*  animation-delay
*  animation-direction
*  animation-duration
*  animation-fill-mode
*  animation-iteration-count
*  animation-name
*  animation-play-state
*  animation-timing-function

##### 1.26.0

* FEATURE: CSS abbreviations for:
*  list-style
*  list-style-image
*  list-style-position
*  list-style-type
*  pointer-events

##### 1.25.0

* FEATURE: CSS abbreviations for: cursor, margin, padding

##### 1.24.0

* BUG: Wrong key used to lookup CSS value abbreviations (prop -> dashProp)
* FEATURE: CSS value abbreviations for:
*  border-style
*  box-sizing
*  clear
*  fill
*  font-weight
*  line-height
*  outline
*  outline-color
*  outline-style
*  outline-width
*  overflow
*  overflow-wrap
*  overflow-x
*  overflow-y
*  position
*  text-decoration
*  text-decoration-color
*  text-decoration-line
*  text-decoration-style
*  transition
*  transition-delay
*  transition-duration
*  transition-property
*  transition-timing-function
*  vertical-align
*  white-space

##### 1.23.1

* BUG: VOID_ELEMENTS was not part of ELEMENTS

##### 1.23.0

* BUG: img is an empty element https://developer.mozilla.org/en-US/docs/Glossary/Empty_element
* CLASS FEATURE: chainable build()
* CLASS FEATURE: src/class/reset/comlock.es Personal flavour css defaults
* CLASS FEATURE: src/class/reset.es Elements with reset css

##### 1.22.0

* Class FEATURE: access()
* FEATURE: Abbreviations for alignContent, alignItems, gridColumnGap, gridRowGap, gridTemplateColumns, gridTemplateRows, justifyContent, justifyItems
* BUG: Add /lib to npm package.

##### 1.21.0

* CLASS BUG: domPath() did not support elements without content.
* CLASS BUG: domPath() did not support an array as first parameter.
* addStyle()
* Transpile to and include dist folder (JavaScript 1.6)
* Webpack to and include lib folder (ECMAscript 2015)
* Refactor index.js -> html.es -> src/html.es -> lib/html.js -> dist/util.js
* Refactor util.es -> src/util.es -> lib/util.js -> dist/util.js
* Refactor input.js -> src/html/input.es -> lib/html/input.js -> dist/html/input.js
* Make tests use the lib folder.
* Documentation improvements.

##### 1.20.0

* Class FEATURE: addClass()
* Class FEATURE: Chainable setters
* Class BUG: domPath() must be external since clone doesn't rebuild self-references.
* Class BUG: setAttribute() failed when no previous attributes

##### 1.19.1

* Deepmerge is a runtime dependancy.

##### 1.19.0

* Class syntax (semantic, path, style, build, clone, content, render)
* Remove useless space in html style attribute after property colon.
* BUG: src/obj.es and src/svg.es wasn't transpiled in gradle.build.

##### 1.18.0

* SVG elements
* Handle SVG´s case sensitive viewBox attribute

##### 1.17.1

* Recursive modifyStyleAndMediaToClassAndCss()

##### 1.17.0

* modifyStyleAndMediaToClassAndCss()

##### 1.16.0

* Function to object syntax.

##### 1.15.0

* Obj

##### 1.14.0

* cdata function (https://www.w3.org/TR/REC-xml/#dt-chardata)

##### 1.13.0

* Default units in style attribute when using index.es
* Deprecated objectToCssDeclarations in favour of objToStyleAttr
* Profiling led to sortedUniqStr

##### 1.12.1

* Fix #9 Css order

##### 1.12.0

* Limited support for nested selectors (&:hover div)
* Apply default units to css property values using jss-default-unit.

##### 1.11.0

* You can now pass a function as content. Or an array of functions++.

##### 1.10.0

* html, head and body accessible as property on any node

##### 1.9.0

* Parent and root

##### 1.8.0

* Path -- Makes it possible to access and manipulate the DOM.
* Node.add() -- Makes it possible to manipulate the DOM.

##### 1.7.0

* Nested pseudo styling
* Comment out autoprefixer as it introduced many problems.

##### 1.6.0

* Autoprefixer

##### 1.5.0

* Generate CSS from style too, so !important can be avoided.
* Some Dom fixes

##### 1.4.0

* Dom

##### 1.3.0

* Non Cascading Scaleable Styling

##### 1.2.0

* Dasherize attribute names.

##### 1.1.0

* Style attribute from object. Keep property order. Dasherize property keys.

##### 1.0.0

* Javascript 1.6 Example

##### 0.0.4

* Input types.
* Icon.
* Use as Enonic XP lib too.

##### 0.0.3

* Void elements.

##### 0.0.2

* Handle javascript types in attribute values.

##### 0.0.1

* Basic functionality. KISS!
