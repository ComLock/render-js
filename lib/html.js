/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 79);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isString;
function isString(value){return typeof value==='string'||value instanceof String}

/***/ }),

/***/ 1:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = dasherize;
function dasherize(str){return`${str}`.replace(/([A-Z])/g,'-$1').replace(/[-_\s]+/g,'-').toLowerCase()}

/***/ }),

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = sortedUniqStr;
function sortedUniqStr(arr){const sorted=arr.sort();let str='';let prev=null;for(let i=0;i<sorted.length;i+=1){if(sorted[i]!==prev){str+=` ${sorted[i]}`}prev=sorted[i]}return str.substr(1)}

/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = objToStyleAttr;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__addDefaultUnit_es__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_dasherize_es__ = __webpack_require__(1);
function objToStyleAttr(props){return Object.keys(props).map(k=>`${Object(__WEBPACK_IMPORTED_MODULE_1__util_dasherize_es__["a" /* dasherize */])(k)}:${Object(__WEBPACK_IMPORTED_MODULE_0__addDefaultUnit_es__["a" /* addDefaultUnit */])(props[k],k)}`).join(';')}

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = att2Str;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_objToStyleAttr_es__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_dasherize_es__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_isSet_es__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_isString_es__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_sortedUniqStr_es__ = __webpack_require__(11);
function att2Str(attributes){if(!attributes){return''}const attrs=Object.keys(attributes).sort().map(a=>{if(Object(__WEBPACK_IMPORTED_MODULE_2__util_isSet_es__["a" /* isSet */])(attributes[a])){const property=a==='viewBox'?'viewBox':Object(__WEBPACK_IMPORTED_MODULE_1__util_dasherize_es__["a" /* dasherize */])(a);if(Object(__WEBPACK_IMPORTED_MODULE_3__util_isString_es__["a" /* isString */])(attributes[a])){if(a==='class'){return`class="${Object(__WEBPACK_IMPORTED_MODULE_4__util_sortedUniqStr_es__["a" /* sortedUniqStr */])(attributes[a].split(' '))}"`}return attributes[a].length?`${property}="${attributes[a]}"`:`${property}`}if(Array.isArray(attributes[a])){if(a==='class'){return`class="${Object(__WEBPACK_IMPORTED_MODULE_4__util_sortedUniqStr_es__["a" /* sortedUniqStr */])(attributes[a].join(' ').split(' '))}"`}return`${property}='${JSON.stringify(attributes[a])}'`}if(a==='style'){return`style="${Object(__WEBPACK_IMPORTED_MODULE_0__css_objToStyleAttr_es__["a" /* objToStyleAttr */])(attributes[a])}"`}return`${property}='${JSON.stringify(attributes[a])}'`}return null}).filter(n=>n).join(' ');return attrs.length?` ${attrs}`:attrs}

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isVoid;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__elements_es__ = __webpack_require__(6);
function isVoid(tag){return __WEBPACK_IMPORTED_MODULE_0__elements_es__["b" /* VOID_ELEMENTS */].includes(tag)}

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj};exports["default"]=defaultUnit;var _defaultUnits=__webpack_require__(17);var _defaultUnits2=_interopRequireDefault(_defaultUnits);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function addCamelCasedVersion(obj){var regExp=/(-[a-z])/g;var replace=function replace(str){return str[1].toUpperCase()};var newObj={};for(var key in obj){newObj[key]=obj[key];newObj[key.replace(regExp,replace)]=obj[key]}return newObj}var units=addCamelCasedVersion(_defaultUnits2["default"]);function iterate(prop,value,options){if(!value)return value;var convertedValue=value;var type=typeof value==="undefined"?"undefined":_typeof(value);if(type==="object"&&Array.isArray(value))type="array";switch(type){case"object":if(prop==="fallbacks"){for(var innerProp in value){value[innerProp]=iterate(innerProp,value[innerProp],options)}break}for(var _innerProp in value){value[_innerProp]=iterate(prop+"-"+_innerProp,value[_innerProp],options)}break;case"array":for(var i=0;i<value.length;i++){value[i]=iterate(prop,value[i],options)}break;case"number":if(value!==0){convertedValue=value+(options[prop]||units[prop]||"")}break;default:break;}return convertedValue}function defaultUnit(){var options=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var camelCasedOptions=addCamelCasedVersion(options);function onProcessStyle(style,rule){if(rule.type!=="style")return style;for(var prop in style){style[prop]=iterate(prop,style[prop],camelCasedOptions)}return style}function onChangeValue(value,prop){return iterate(prop,value,camelCasedOptions)}return{onProcessStyle:onProcessStyle,onChangeValue:onChangeValue}}

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,'__esModule',{value:true});exports['default']={'animation-delay':'ms','animation-duration':'ms','background-position':'px','background-position-x':'px','background-position-y':'px','background-size':'px',border:'px','border-bottom':'px','border-bottom-left-radius':'px','border-bottom-right-radius':'px','border-bottom-width':'px','border-left':'px','border-left-width':'px','border-radius':'px','border-right':'px','border-right-width':'px','border-spacing':'px','border-top':'px','border-top-left-radius':'px','border-top-right-radius':'px','border-top-width':'px','border-width':'px','border-after-width':'px','border-before-width':'px','border-end-width':'px','border-horizontal-spacing':'px','border-start-width':'px','border-vertical-spacing':'px',bottom:'px','box-shadow':'px','column-gap':'px','column-rule':'px','column-rule-width':'px','column-width':'px','flex-basis':'px','font-size':'px','font-size-delta':'px',height:'px',left:'px','letter-spacing':'px','logical-height':'px','logical-width':'px',margin:'px','margin-after':'px','margin-before':'px','margin-bottom':'px','margin-left':'px','margin-right':'px','margin-top':'px','max-height':'px','max-width':'px','margin-end':'px','margin-start':'px','mask-position-x':'px','mask-position-y':'px','mask-size':'px','max-logical-height':'px','max-logical-width':'px','min-height':'px','min-width':'px','min-logical-height':'px','min-logical-width':'px',motion:'px','motion-offset':'px',outline:'px','outline-offset':'px','outline-width':'px',padding:'px','padding-bottom':'px','padding-left':'px','padding-right':'px','padding-top':'px','padding-after':'px','padding-before':'px','padding-end':'px','padding-start':'px','perspective-origin-x':'%','perspective-origin-y':'%',perspective:'px',right:'px','shape-margin':'px',size:'px','text-indent':'px','text-stroke':'px','text-stroke-width':'px',top:'px','transform-origin':'%','transform-origin-x':'%','transform-origin-y':'%','transform-origin-z':'%','transition-delay':'ms','transition-duration':'ms','vertical-align':'px',width:'px','word-spacing':'px','box-shadow-x':'px','box-shadow-y':'px','box-shadow-blur':'px','box-shadow-spread':'px','font-line-height':'px','text-shadow-x':'px','text-shadow-y':'px','text-shadow-blur':'px'};

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const SVG_AND_HTML_ELEMENTS=['font','image','script','style','title'];const SVG_NOT_HTML_ELEMENTS=['altGlyph','altGlyphDef','altGlyphItem','animate','animateColor','animateMotion','animateTransform','circle','clipPath','color-profile','cursor','defs','desc','discard','ellipse','feBlend','feColorMatrix','feComponentTransfer','feComposite','feConvolveMatrix','feDiffuseLighting','feDisplacementMap','feDistantLight','feDropShadow','feFlood','feFuncA','feFuncB','feFuncG','feFuncR','feGaussianBlur','feImage','feMerge','feMergeNode','feMorphology','feOffset','fePointLight','feSpecularLighting','feSpotLight','feTile','feTurbulence','filter','font-face','font-face-format','font-face-name','font-face-src','font-face-uri','foreignObject','g','glyph','glyphRef','hatch','hatchpath','hkern','line','linearGradient','marker','mask','feTurbulence','filter','font-face','font-face-format','font-face-name','font-face-src','font-face-uri','foreignObject','g','glyph','glyphRef','hatch','hatchpath','hkern','line','linearGradient','marker','mask','mesh','meshgradient','meshpatch','meshrow','metadata','missing-glyph','mpath','path','pattern','polygon','polyline','radialGradient','rect','set','solidcolor','stop','svg','switch','symbol','text','textPath','tref','tspan','unknown','use','view','vkern'];
/* harmony export (immutable) */ __webpack_exports__["a"] = SVG_NOT_HTML_ELEMENTS;
const SVG_ELEMENTS=SVG_AND_HTML_ELEMENTS.concat(SVG_NOT_HTML_ELEMENTS);
/* unused harmony export SVG_ELEMENTS */


/***/ }),

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isArray;
function isArray(value){return Array.isArray(value)}

/***/ }),

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isSet;
function isSet(value){if(typeof value==='boolean'){return true}return value!==null&&typeof value!=='undefined'}

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isArrayOrFuncOrString;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isFunction_es__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isString_es__ = __webpack_require__(0);
function isArrayOrFuncOrString(value){return Array.isArray(value)||Object(__WEBPACK_IMPORTED_MODULE_1__isString_es__["a" /* isString */])(value)||Object(__WEBPACK_IMPORTED_MODULE_0__isFunction_es__["a" /* isFunction */])(value)}

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = cdata;
function cdata(content=''){return`/*<![CDATA[*/
${content}
/*]]>*/`}

/***/ }),

/***/ 51:
/***/ (function(module, exports) {

exports.doctype=({type='html',system=null,legacy=null}={})=>`<!DOCTYPE ${type}${system?' '+system:''}${legacy?' '+legacy:''}>`;

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isArrayOrString;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isString_es__ = __webpack_require__(0);
function isArrayOrString(value){return Array.isArray(value)||Object(__WEBPACK_IMPORTED_MODULE_0__isString_es__["a" /* isString */])(value)}

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = el;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__html_att2Str_es__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__html_isVoid_es__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_isArray_es__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_isArrayOrString_es__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_isArrayOrFuncOrString_es__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_isFunction_es__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util_toStr_es__ = __webpack_require__(8);
function el(tag,attributes=null,content=null){if(Object(__WEBPACK_IMPORTED_MODULE_4__util_isArrayOrFuncOrString_es__["a" /* isArrayOrFuncOrString */])(attributes)){if(Object(__WEBPACK_IMPORTED_MODULE_4__util_isArrayOrFuncOrString_es__["a" /* isArrayOrFuncOrString */])(content)){throw new Error(`When called with two arguments one must be an object! ${Object(__WEBPACK_IMPORTED_MODULE_6__util_toStr_es__["a" /* toStr */])(tag)}(${Object(__WEBPACK_IMPORTED_MODULE_6__util_toStr_es__["a" /* toStr */])(attributes)}, ${Object(__WEBPACK_IMPORTED_MODULE_6__util_toStr_es__["a" /* toStr */])(content)})`)}const tmp=content;content=attributes;attributes=tmp}attributes=Object(__WEBPACK_IMPORTED_MODULE_0__html_att2Str_es__["a" /* att2Str */])(attributes);if(!Object(__WEBPACK_IMPORTED_MODULE_2__util_isArray_es__["a" /* isArray */])(content)){content=[content]}content=content.map(item=>{while(Object(__WEBPACK_IMPORTED_MODULE_5__util_isFunction_es__["a" /* isFunction */])(item)){item=item()}if(Object(__WEBPACK_IMPORTED_MODULE_3__util_isArrayOrString_es__["a" /* isArrayOrString */])(item)){item=[].concat(item).join('')}else{item=''}return item}).join('');return Object(__WEBPACK_IMPORTED_MODULE_1__html_isVoid_es__["a" /* isVoid */])(tag)?`<${tag}${attributes}/>`:`<${tag}${attributes}>${content}</${tag}>`}const elFn=tag=>(...args)=>el(tag,...args);
/* harmony export (immutable) */ __webpack_exports__["b"] = elFn;


/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__svg_es__ = __webpack_require__(18);
const OBSOLETE_ELEMENTS=['acronym','applet','basefont','big','blink','center','command','dir','element','font','image','listing','marquee','multicol','nextid','plaintext','shadow','spacer','strike','tt','xmp'];const NON_STANDARD_ELEMENTS=['bsgound','nobr','noembed'];const DEPRECATED_ELEMENTS=['content','frame','frameset','isindex','keygen'];const EXPERIMENTAL_ELEMENTS=['dialog','hgroup','menu','menuitem'];const VOID_ELEMENTS=['area','base','br','col','command','embed','hr','img','input','keygen','link','menuitem','meta','param','source','track','wbr'];
/* harmony export (immutable) */ __webpack_exports__["b"] = VOID_ELEMENTS;
const ELEMENTS=['a','abbr','address','area','article','aside','audio','b','base','bdi','bdo','blockquote','body','br','button','canvas','caption','cite','code','col','colgroup','data','datalist','dd','del','details','dfn','div','dl','dt','em','embed','fieldset','figcaption','figure','footer','form','h1','h2','h3','h4','h5','h6','head','header','hr','html','i','iframe','input','ins','kbd','label','legend','li','link','main','map','mark','meta','meter','nav','noframes','noscript','object','ol','optgroup','option','output','p','param','picture','pre','progress','q','rp','rt','rtc','ruby','s','samp','script','section','select','slot','small','source','span','strong','style','sub','summary','sup','table','tbody','td','template','textarea','tfoot','th','thead','time','title','tr','track','u','ul','var','video','wbr'].concat(DEPRECATED_ELEMENTS,NON_STANDARD_ELEMENTS,OBSOLETE_ELEMENTS,EXPERIMENTAL_ELEMENTS,VOID_ELEMENTS);
/* unused harmony export ELEMENTS */
const HTML_AND_SVG_ELEMENTS=ELEMENTS.concat(__WEBPACK_IMPORTED_MODULE_0__svg_es__["a" /* SVG_NOT_HTML_ELEMENTS */]);
/* harmony export (immutable) */ __webpack_exports__["a"] = HTML_AND_SVG_ELEMENTS;


/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jss_default_unit__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jss_default_unit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jss_default_unit__);
const addDefaultUnit=__WEBPACK_IMPORTED_MODULE_0_jss_default_unit___default()({'line-height':'px'}).onChangeValue;
/* harmony export (immutable) */ __webpack_exports__["a"] = addDefaultUnit;


/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__html_att2Str_es__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__html_cdata_es__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__html_doctype_es__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__html_doctype_es___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__html_doctype_es__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__html_el_es__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__html_elements_es__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__html_isVoid_es__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__html_render_es__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__html_render_es___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__html_render_es__);
exports.att2Str=__WEBPACK_IMPORTED_MODULE_0__html_att2Str_es__["a" /* att2Str */];exports.cdata=__WEBPACK_IMPORTED_MODULE_1__html_cdata_es__["a" /* cdata */];exports.doctype=__WEBPACK_IMPORTED_MODULE_2__html_doctype_es__["doctype"];exports.el=__WEBPACK_IMPORTED_MODULE_3__html_el_es__["a" /* el */];exports.isVoid=__WEBPACK_IMPORTED_MODULE_5__html_isVoid_es__["a" /* isVoid */];exports.render=__WEBPACK_IMPORTED_MODULE_6__html_render_es__["render"];__WEBPACK_IMPORTED_MODULE_4__html_elements_es__["a" /* HTML_AND_SVG_ELEMENTS */].forEach(t=>{exports[t]=Object(__WEBPACK_IMPORTED_MODULE_3__html_el_es__["b" /* elFn */])(t)});

/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = toStr;
function toStr(value){return JSON.stringify(value,null,4)}

/***/ }),

/***/ 80:
/***/ (function(module, exports) {

exports.render=array=>[].concat(array).join('\n');

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isFunction;
function isFunction(value){return!!(value&&value.constructor&&value.call&&value.apply)}

/***/ })

/******/ });
//# sourceMappingURL=html.js.map