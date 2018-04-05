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
/******/ 	return __webpack_require__(__webpack_require__.s = 57);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isString;
function isString(value){return typeof value==='string'||value instanceof String}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = dasherize;
function dasherize(str){return`${str}`.replace(/([A-Z])/g,'-$1').replace(/[-_\s]+/g,'-').toLowerCase()}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isArray;
function isArray(value){return Array.isArray(value)}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isSet;
function isSet(value){if(typeof value==='boolean'){return true}return value!==null&&typeof value!=='undefined'}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const dict=arr=>Object.assign(...arr.map(([k,v])=>({[k]:v})));
/* harmony export (immutable) */ __webpack_exports__["a"] = dict;


/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__svg_es__ = __webpack_require__(18);
const OBSOLETE_ELEMENTS=['acronym','applet','basefont','big','blink','center','command','dir','element','font','image','listing','marquee','multicol','nextid','plaintext','shadow','spacer','strike','tt','xmp'];const NON_STANDARD_ELEMENTS=['bsgound','nobr','noembed'];const DEPRECATED_ELEMENTS=['content','frame','frameset','isindex','keygen'];const EXPERIMENTAL_ELEMENTS=['dialog','hgroup','menu','menuitem'];const VOID_ELEMENTS=['area','base','br','col','command','embed','hr','input','keygen','link','menuitem','meta','param','source','track','wbr'];
/* harmony export (immutable) */ __webpack_exports__["b"] = VOID_ELEMENTS;
const ELEMENTS=['a','abbr','address','area','article','aside','audio','b','base','bdi','bdo','blockquote','body','br','button','canvas','caption','cite','code','col','colgroup','data','datalist','dd','del','details','dfn','div','dl','dt','em','embed','fieldset','figcaption','figure','footer','form','h1','h2','h3','h4','h5','h6','head','header','hr','html','i','iframe','img','input','ins','kbd','label','legend','li','link','main','map','mark','meta','meter','nav','noframes','noscript','object','ol','optgroup','option','output','p','param','picture','pre','progress','q','rp','rt','rtc','ruby','s','samp','script','section','select','slot','small','source','span','strong','style','sub','summary','sup','table','tbody','td','template','textarea','tfoot','th','thead','time','title','tr','track','u','ul','var','video','wbr'].concat(DEPRECATED_ELEMENTS,NON_STANDARD_ELEMENTS,OBSOLETE_ELEMENTS,EXPERIMENTAL_ELEMENTS);
/* unused harmony export ELEMENTS */
const HTML_AND_SVG_ELEMENTS=ELEMENTS.concat(__WEBPACK_IMPORTED_MODULE_0__svg_es__["a" /* SVG_NOT_HTML_ELEMENTS */]);
/* harmony export (immutable) */ __webpack_exports__["a"] = HTML_AND_SVG_ELEMENTS;


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jss_default_unit__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jss_default_unit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jss_default_unit__);
const addDefaultUnit=__WEBPACK_IMPORTED_MODULE_0_jss_default_unit___default()({'line-height':'px'}).onChangeValue;
/* harmony export (immutable) */ __webpack_exports__["a"] = addDefaultUnit;


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = toStr;
function toStr(value){return JSON.stringify(value,null,4)}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isFunction;
function isFunction(value){return!!(value&&value.constructor&&value.call&&value.apply)}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = classAppendAndCssFromStyle;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__properties_es__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selectors_es__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addDefaultUnit_es__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toClassName_es__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_dasherize_es__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_isSet_es__ = __webpack_require__(3);
function handleProp({prop,value,classAppend=[],css=[],prefix='',postfix='',pseudoPostfix=''}){const dashProp=Object(__WEBPACK_IMPORTED_MODULE_4__util_dasherize_es__["a" /* dasherize */])(prop);const propAbbr=__WEBPACK_IMPORTED_MODULE_0__properties_es__["a" /* CSS_PROP_TO_ABBR */][dashProp]||Object(__WEBPACK_IMPORTED_MODULE_3__toClassName_es__["a" /* toClassName */])(prop);let lastValue=value;value=Object(__WEBPACK_IMPORTED_MODULE_2__addDefaultUnit_es__["a" /* addDefaultUnit */])(value,prop);if(Array.isArray(value)){lastValue=value[value.length-1]}const valueAbbr=__WEBPACK_IMPORTED_MODULE_0__properties_es__["b" /* CSS_PROP_VALUES_TO_ABBR */][prop]&&__WEBPACK_IMPORTED_MODULE_0__properties_es__["b" /* CSS_PROP_VALUES_TO_ABBR */][prop][lastValue]||Object(__WEBPACK_IMPORTED_MODULE_3__toClassName_es__["a" /* toClassName */])(lastValue);const className=`${prefix}${propAbbr}-${valueAbbr}${postfix}`;classAppend.push(className);if(Array.isArray(value)){const props=value.map(v=>`${dashProp}:${v}`).join(';');css.push(`.${className}{${props}}`)}else{css.push(`.${className}${pseudoPostfix}{${dashProp}:${value}}`)}return{css,classAppend}}function handleNested({selector,style,postfix='',prefix=''}){if(selector.startsWith('&')){selector=selector.substring(1)}let className='';const classAppend=[];const css=[];for(let i=0;i<selector.length;){const char=selector[i];if(char===':'){let nextI=i+1;className+=selector.substring(nextI).split(/:/).map(p=>{if(p===''){nextI+=1;return''}p=p.replace(/ .*/,'');if(__WEBPACK_IMPORTED_MODULE_1__selectors_es__["a" /* CSS_PSEUDO_SELECTORS_TO_ABBR */][p]){nextI+=p.length+1;return`${__WEBPACK_IMPORTED_MODULE_1__selectors_es__["a" /* CSS_PSEUDO_SELECTORS_TO_ABBR */][p]}-`}return''}).join('');i=nextI-1}else if(__WEBPACK_IMPORTED_MODULE_1__selectors_es__["b" /* CSS_SELECTORS_TO_ABBR */][char]){className+=`${__WEBPACK_IMPORTED_MODULE_1__selectors_es__["b" /* CSS_SELECTORS_TO_ABBR */][char]}-`;i+=1}else{className+=char;i+=1}}return classAppendAndCssFromStyle(style,{classAppend,css,prefix:`${prefix}${className}-`,postfix,pseudoPostfix:selector})}function classAppendAndCssFromStyle(style,{classAppend=[],css=[],prefix='',postfix='',pseudoPostfix=''}={}){const maybePrefixedStyle=style;Object.keys(style).forEach(prop=>{const value=maybePrefixedStyle[prop];if(Object(__WEBPACK_IMPORTED_MODULE_5__util_isSet_es__["a" /* isSet */])(value)){if(prop.startsWith('&')){const n=handleNested({selector:prop,style:style[prop],postfix,prefix});classAppend.push(...n.classAppend);css.push(...n.css)}else{const p=handleProp({prop,value,prefix,postfix,pseudoPostfix});classAppend.push(...p.classAppend);css.push(...p.css)}}});return{classAppend,css}}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = sortedUniqStr;
function sortedUniqStr(arr){const sorted=arr.sort();let str='';let prev=null;for(let i=0;i<sorted.length;i+=1){if(sorted[i]!==prev){str+=` ${sorted[i]}`}prev=sorted[i]}return str.substr(1)}

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = objToStyleAttr;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__addDefaultUnit_es__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_dasherize_es__ = __webpack_require__(1);
function objToStyleAttr(props){return Object.keys(props).map(k=>`${Object(__WEBPACK_IMPORTED_MODULE_1__util_dasherize_es__["a" /* dasherize */])(k)}:${Object(__WEBPACK_IMPORTED_MODULE_0__addDefaultUnit_es__["a" /* addDefaultUnit */])(props[k],k)}`).join(';')}

/***/ }),
/* 13 */
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
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isVoid;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__elements_es__ = __webpack_require__(6);
function isVoid(tag){return __WEBPACK_IMPORTED_MODULE_0__elements_es__["b" /* VOID_ELEMENTS */].includes(tag)}

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__property_borderStyle_es__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__property_color_es__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__property_display_es__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__property_float_es__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__property_fontFamily_es__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_dict_es__ = __webpack_require__(4);
const CSS_PROP_ABBR={b:'bottom',ba:'border',bc:'border-color',bbc:'border-bottom-color',bbs:'border-bottom-style',bbw:'border-bottom-width',bgc:'background-color',blc:'border-left-color',bls:'border-left-style',blw:'border-left-width',br:'border-radius',brc:'border-right-color',brs:'border-right-style',brw:'border-right-width',bsi:'box-sizing',bsy:'border-spacing',btc:'border-top-color',bts:'border-top-style',btw:'border-top-width',bw:'border-width',c:'color',cl:'clear',d:'display',di:'direction',f:'float',fi:'fill',fio:'fill-opacity',fir:'fill-rule',filt:'filter','fx-b':'flex-basis','fx-d':'flex-direction','fx-g':'flex-grow','fx-s':'flex-shrink','fx-w':'flex-wrap','fl-c':'flood-color','fl-o':'flood-opacity',ff:'font-family',fk:'font-kerning',fs:'font-size',fstr:'font-stretch',fsty:'font-style',fv:'font-variant',fvc:'font-variant-caps',fvl:'font-variant-ligatures',fvn:'font-variant-numeric',fw:'font-weight',h:'height','h-ma':'max-height','h-mi':'min-height',i:'isolation',ir:'image-rendering',jc:'justify-content',l:'left',ls:'letter-spacing',lc:'lighting-color',lh:'line-height',lsi:'list-style-image',lss:'list-style-style',lst:'list-style-type',mb:'margin-bottom',ml:'margin-left',mr:'margin-right',mt:'margin-top','mk-e':'marker-end','mk-i':'marker-imd','mk-t':'marker-top',mask:'mask',maskt:'mask-type',mbm:'mix-blend-mode','mo-o':'motion-offset','mo-p':'motion-path','mo-r':'motion-rotation',obf:'object-fit',obp:'object-position',op:'opacity',or:'order',orp:'orphans','ou-c':'outline-color','ou-o':'outline-offset','ou-s':'outline-style','ou-w':'outline-width',ov:'overflow',ovx:'overflow-x',ovy:'overflow-y',ovw:'overflow-wrap',p:'position',po:'paint-order',pb:'padding-bottom',pl:'padding-left',pr:'padding-right',pt:'padding-top',pba:'page-break-after',pbb:'page-break-before',pp:'perspective',ppo:'perspective-origin',pe:'pointer-event',r:'right',rs:'resize',rx:'rx',ry:'ry',sp:'speak',ta:'text-align',tal:'text-align-last',tan:'text-anchor',td:'text-decoration',ti:'text-indent',to:'text-overflow',tr:'text-rendering',ts:'text-shadow',tsa:'text-size-adjust',tt:'text-transform',t:'top','to-a':'touch-action',tf:'transform','tf-o':'transform-origin','tf-s':'transform-style',v:'visibility',va:'vertical-align',ve:'vector-effect',ws:'white-space',wi:'widows',wc:'will-change',wm:'writing-mode','wo-b':'word-break','wo-s':'word-spacing','wo-w':'word-wrap',w:'width','w-ma':'max-width','w-mi':'min-width',x:'x',y:'y',z:'zoom',zi:'z-index'};
/* unused harmony export CSS_PROP_ABBR */
const CSS_PROP_TO_ABBR=Object(__WEBPACK_IMPORTED_MODULE_5__util_dict_es__["a" /* dict */])(Object.keys(CSS_PROP_ABBR).map(a=>[CSS_PROP_ABBR[a],a]));
/* harmony export (immutable) */ __webpack_exports__["a"] = CSS_PROP_TO_ABBR;
const CSS_PROP_VALUES_ABBR={'background-color':__WEBPACK_IMPORTED_MODULE_1__property_color_es__["a" /* CSS_COLOR_VALUES_ABBR */],'border-bottom-color':__WEBPACK_IMPORTED_MODULE_1__property_color_es__["a" /* CSS_COLOR_VALUES_ABBR */],'border-bottom-style':__WEBPACK_IMPORTED_MODULE_0__property_borderStyle_es__["a" /* CSS_BORDER_STYLE_VALUES_ABBR */],'border-color':__WEBPACK_IMPORTED_MODULE_1__property_color_es__["a" /* CSS_COLOR_VALUES_ABBR */],'border-left-color':__WEBPACK_IMPORTED_MODULE_1__property_color_es__["a" /* CSS_COLOR_VALUES_ABBR */],'border-left-style':__WEBPACK_IMPORTED_MODULE_0__property_borderStyle_es__["a" /* CSS_BORDER_STYLE_VALUES_ABBR */],'border-right-color':__WEBPACK_IMPORTED_MODULE_1__property_color_es__["a" /* CSS_COLOR_VALUES_ABBR */],'border-right-style':__WEBPACK_IMPORTED_MODULE_0__property_borderStyle_es__["a" /* CSS_BORDER_STYLE_VALUES_ABBR */],'border-style':__WEBPACK_IMPORTED_MODULE_0__property_borderStyle_es__["a" /* CSS_BORDER_STYLE_VALUES_ABBR */],'border-top-color':__WEBPACK_IMPORTED_MODULE_1__property_color_es__["a" /* CSS_COLOR_VALUES_ABBR */],'border-top-style':__WEBPACK_IMPORTED_MODULE_0__property_borderStyle_es__["a" /* CSS_BORDER_STYLE_VALUES_ABBR */],color:__WEBPACK_IMPORTED_MODULE_1__property_color_es__["a" /* CSS_COLOR_VALUES_ABBR */],display:__WEBPACK_IMPORTED_MODULE_2__property_display_es__["a" /* CSS_DISPLAY_VALUES_ABBR */],float:__WEBPACK_IMPORTED_MODULE_3__property_float_es__["a" /* CSS_FLOAT_VALUES_ABBR */],'font-family':__WEBPACK_IMPORTED_MODULE_4__property_fontFamily_es__["a" /* CSS_FONT_FAMILY_VALUES_ABBR */]};
/* unused harmony export CSS_PROP_VALUES_ABBR */
const CSS_PROP_VALUES_TO_ABBR=Object(__WEBPACK_IMPORTED_MODULE_5__util_dict_es__["a" /* dict */])(Object.keys(CSS_PROP_VALUES_ABBR).map(prop=>[prop,Object(__WEBPACK_IMPORTED_MODULE_5__util_dict_es__["a" /* dict */])(Object.keys(CSS_PROP_VALUES_ABBR[prop]).map(a=>[CSS_PROP_VALUES_ABBR[prop][a],a]))]));
/* harmony export (immutable) */ __webpack_exports__["b"] = CSS_PROP_VALUES_TO_ABBR;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj};exports["default"]=defaultUnit;var _defaultUnits=__webpack_require__(17);var _defaultUnits2=_interopRequireDefault(_defaultUnits);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function addCamelCasedVersion(obj){var regExp=/(-[a-z])/g;var replace=function replace(str){return str[1].toUpperCase()};var newObj={};for(var key in obj){newObj[key]=obj[key];newObj[key.replace(regExp,replace)]=obj[key]}return newObj}var units=addCamelCasedVersion(_defaultUnits2["default"]);function iterate(prop,value,options){if(!value)return value;var convertedValue=value;var type=typeof value==="undefined"?"undefined":_typeof(value);if(type==="object"&&Array.isArray(value))type="array";switch(type){case"object":if(prop==="fallbacks"){for(var innerProp in value){value[innerProp]=iterate(innerProp,value[innerProp],options)}break}for(var _innerProp in value){value[_innerProp]=iterate(prop+"-"+_innerProp,value[_innerProp],options)}break;case"array":for(var i=0;i<value.length;i++){value[i]=iterate(prop,value[i],options)}break;case"number":if(value!==0){convertedValue=value+(options[prop]||units[prop]||"")}break;default:break;}return convertedValue}function defaultUnit(){var options=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var camelCasedOptions=addCamelCasedVersion(options);function onProcessStyle(style,rule){if(rule.type!=="style")return style;for(var prop in style){style[prop]=iterate(prop,style[prop],camelCasedOptions)}return style}function onChangeValue(value,prop){return iterate(prop,value,camelCasedOptions)}return{onProcessStyle:onProcessStyle,onChangeValue:onChangeValue}}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,'__esModule',{value:true});exports['default']={'animation-delay':'ms','animation-duration':'ms','background-position':'px','background-position-x':'px','background-position-y':'px','background-size':'px',border:'px','border-bottom':'px','border-bottom-left-radius':'px','border-bottom-right-radius':'px','border-bottom-width':'px','border-left':'px','border-left-width':'px','border-radius':'px','border-right':'px','border-right-width':'px','border-spacing':'px','border-top':'px','border-top-left-radius':'px','border-top-right-radius':'px','border-top-width':'px','border-width':'px','border-after-width':'px','border-before-width':'px','border-end-width':'px','border-horizontal-spacing':'px','border-start-width':'px','border-vertical-spacing':'px',bottom:'px','box-shadow':'px','column-gap':'px','column-rule':'px','column-rule-width':'px','column-width':'px','flex-basis':'px','font-size':'px','font-size-delta':'px',height:'px',left:'px','letter-spacing':'px','logical-height':'px','logical-width':'px',margin:'px','margin-after':'px','margin-before':'px','margin-bottom':'px','margin-left':'px','margin-right':'px','margin-top':'px','max-height':'px','max-width':'px','margin-end':'px','margin-start':'px','mask-position-x':'px','mask-position-y':'px','mask-size':'px','max-logical-height':'px','max-logical-width':'px','min-height':'px','min-width':'px','min-logical-height':'px','min-logical-width':'px',motion:'px','motion-offset':'px',outline:'px','outline-offset':'px','outline-width':'px',padding:'px','padding-bottom':'px','padding-left':'px','padding-right':'px','padding-top':'px','padding-after':'px','padding-before':'px','padding-end':'px','padding-start':'px','perspective-origin-x':'%','perspective-origin-y':'%',perspective:'px',right:'px','shape-margin':'px',size:'px','text-indent':'px','text-stroke':'px','text-stroke-width':'px',top:'px','transform-origin':'%','transform-origin-x':'%','transform-origin-y':'%','transform-origin-z':'%','transition-delay':'ms','transition-duration':'ms','vertical-align':'px',width:'px','word-spacing':'px','box-shadow-x':'px','box-shadow-y':'px','box-shadow-blur':'px','box-shadow-spread':'px','font-line-height':'px','text-shadow-x':'px','text-shadow-y':'px','text-shadow-blur':'px'};

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const SVG_AND_HTML_ELEMENTS=['font','image','script','style','title'];const SVG_NOT_HTML_ELEMENTS=['altGlyph','altGlyphDef','altGlyphItem','animate','animateColor','animateMotion','animateTransform','circle','clipPath','color-profile','cursor','defs','desc','discard','ellipse','feBlend','feColorMatrix','feComponentTransfer','feComposite','feConvolveMatrix','feDiffuseLighting','feDisplacementMap','feDistantLight','feDropShadow','feFlood','feFuncA','feFuncB','feFuncG','feFuncR','feGaussianBlur','feImage','feMerge','feMergeNode','feMorphology','feOffset','fePointLight','feSpecularLighting','feSpotLight','feTile','feTurbulence','filter','font-face','font-face-format','font-face-name','font-face-src','font-face-uri','foreignObject','g','glyph','glyphRef','hatch','hatchpath','hkern','line','linearGradient','marker','mask','feTurbulence','filter','font-face','font-face-format','font-face-name','font-face-src','font-face-uri','foreignObject','g','glyph','glyphRef','hatch','hatchpath','hkern','line','linearGradient','marker','mask','mesh','meshgradient','meshpatch','meshrow','metadata','missing-glyph','mpath','path','pattern','polygon','polyline','radialGradient','rect','set','solidcolor','stop','svg','switch','symbol','text','textPath','tref','tspan','unknown','use','view','vkern'];
/* harmony export (immutable) */ __webpack_exports__["a"] = SVG_NOT_HTML_ELEMENTS;
const SVG_ELEMENTS=SVG_AND_HTML_ELEMENTS.concat(SVG_NOT_HTML_ELEMENTS);
/* unused harmony export SVG_ELEMENTS */


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const CSS_FLOAT_VALUES_ABBR={ih:'inherit',ini:'initial',u:'unset',rv:'revert',is:'inline-start',ie:'inline-end',l:'left',n:'none',r:'right'};
/* harmony export (immutable) */ __webpack_exports__["a"] = CSS_FLOAT_VALUES_ABBR;


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const CSS_FONT_FAMILY_VALUES_ABBR={ih:'inherit',ini:'initial',us:'unset',rv:'revert',c:'cursive',f:'fantasy',m:'monospace',s:'serif',ss:'sans-serif',su:'system-ui',a:'Arial',ac:'Apple Chancery',bp:'BrownPro',bpb:'BrownProBold',bsm:'Brush Script MT',bss:'Brush Script Std',con:'Consolas',co:'Courier',cm:'Curlz MT',dsm:'DejaVu Sans Mono',fm:'Fira Mono',fs:'Fira Sans',g:'Georgia',gse:'Gill Sans Extrabold',gs:'Gill Sans',gb1:'"Goudy Bookletter 1911"',ha:'Harrington',h:'Helvetica',he:'Herculanum',lm:'Liberation Mono',lis:'Liberation Sans',lb:'Lucida Bright',lca:'Lucida Calligraphy',lc:'Lucida Console',lf:'Lucida Fax',lh:'Lucida Handwriting',ls:'Lucida Sans',lsu:'Lucida Sans Unicode',me:'Menlo',mo:'Monaco',nsl:'Nimbus Sans L',os:'Open Sans',p:'Palatino',pl:'Palatino Linotype',pa:'Palladio',pap:'Papyrus',pt:'Party LET',t:'Times',tnr:'Times New Roman',tm:'Trebuchet MS',v:'Verdana',u:'URW Palladio',z:'zero-width'};
/* harmony export (immutable) */ __webpack_exports__["a"] = CSS_FONT_FAMILY_VALUES_ABBR;


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = toClassName;
function toClassName(value){return`${value}`.replace(/[\n\r\t]+/gm,'').replace(/([A-Z])/g,'-$1').replace(/[^a-zA-Z0-9]+/g,'-').replace(/^-/,'').replace(/-$/,'').toLowerCase()}

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_dict_es__ = __webpack_require__(4);
const CSS_MEDIA_ABBR={al:'all',a:'and',ap:'any-pointer',ah:'any-hover',ar:'aspect-ratio',c:'color',cg:'color-gamut',ci:'color-index',dw:'device-width',dh:'device-height',dar:'device-aspect-ratio',dm:'display-mode',g:'grid',h:'height','h-ma':'max-height','h-mi':'min-height',ho:'hover',ic:'inverted-colors',ll:'light-level',m:'monochrome',n:'not',o:'only',or:'orientation',ob:'overflow-block',oi:'overflow-inline',p:'pointer',r:'resolution',sa:'scan',s:'screen',sc:'scripting',sp:'speech',u:'update',w:'width','w-ma':'max-width','w-mi':'min-width'};
/* unused harmony export CSS_MEDIA_ABBR */
const CSS_MEDIA_WORD_TO_ABBR=Object(__WEBPACK_IMPORTED_MODULE_0__util_dict_es__["a" /* dict */])(Object.keys(CSS_MEDIA_ABBR).map(a=>[CSS_MEDIA_ABBR[a],a]));
/* harmony export (immutable) */ __webpack_exports__["a"] = CSS_MEDIA_WORD_TO_ABBR;
const CSS_MEDIA_LOGICAL_OPERATORS=['and','not','only'];
/* unused harmony export CSS_MEDIA_LOGICAL_OPERATORS */
const CSS_MEDIA_TYPES=['all','print','screen','speech'];
/* unused harmony export CSS_MEDIA_TYPES */
const CSS_MEDIA_FEATURES=['width','height','aspect-ratio','orientation','resolution','scan','grid','update','overflow-block','overflow-inline','color','color-gamut','color-index','display-mode','monochrome','inverted-colors','pointer','hover','any-pointer','any-hover','light-level','scripting','device-width','device-height','device-aspect-ratio'];
/* unused harmony export CSS_MEDIA_FEATURES */


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = uniqCss;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_isString_es__ = __webpack_require__(0);
function uniqCss(arr){const style=[];const media=[];arr.forEach(line=>{if(Object(__WEBPACK_IMPORTED_MODULE_0__util_isString_es__["a" /* isString */])(line)){if(line.startsWith('@')){if(!media.includes(line)){media.push(line)}}else if(!style.includes(line)){style.push(line)}}});return style.concat(media)}

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = classAppendAndCssFromMedia;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classAppendAndCssFromStyle_es__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__media_es__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_dasherize_es__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_toStr_es__ = __webpack_require__(8);
function classAppendAndCssFromMedia(media,{autoprefixer=true}={}){const classAppend=[];const css=[];Object.keys(media).forEach(mediaRuleKey=>{let postfix='';const mediaQueryList=mediaRuleKey.split('_comma_').map(mediaQueryAbbr=>mediaQueryAbbr.split('_').map(mediaWord=>{if(__WEBPACK_IMPORTED_MODULE_1__media_es__["a" /* CSS_MEDIA_WORD_TO_ABBR */][mediaWord]){postfix=`${postfix}-${__WEBPACK_IMPORTED_MODULE_1__media_es__["a" /* CSS_MEDIA_WORD_TO_ABBR */][mediaWord]}`;return mediaWord}const match=/^(maxWidth|minWidth)(.*)$/.exec(mediaWord);if(match){const property=Object(__WEBPACK_IMPORTED_MODULE_2__util_dasherize_es__["a" /* dasherize */])(match[1]);postfix=`${postfix}-${__WEBPACK_IMPORTED_MODULE_1__media_es__["a" /* CSS_MEDIA_WORD_TO_ABBR */][property]}-${match[2]}`;return`(${property}: ${match[2]}px)`}throw new Error(`No match in mediaWord:${Object(__WEBPACK_IMPORTED_MODULE_3__util_toStr_es__["a" /* toStr */])(mediaWord)} mediaQueryAbbr:${Object(__WEBPACK_IMPORTED_MODULE_3__util_toStr_es__["a" /* toStr */])(mediaQueryAbbr)} mediaQueryList:${Object(__WEBPACK_IMPORTED_MODULE_3__util_toStr_es__["a" /* toStr */])(mediaQueryList)} mediaRuleKey:${Object(__WEBPACK_IMPORTED_MODULE_3__util_toStr_es__["a" /* toStr */])(mediaRuleKey)} media:${Object(__WEBPACK_IMPORTED_MODULE_3__util_toStr_es__["a" /* toStr */])(media)}`)}).join(' '));const s=Object(__WEBPACK_IMPORTED_MODULE_0__classAppendAndCssFromStyle_es__["a" /* classAppendAndCssFromStyle */])(media[mediaRuleKey],{autoprefixer,postfix});classAppend.push(...s.classAppend);s.css.forEach(scss=>css.push(`@media ${mediaQueryList.join(', ')}{${scss}}`))});return{classAppend,css}}

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const CSS_BORDER_STYLE_VALUES_ABBR={ini:'initial',ih:'inherit',u:'unset',rv:'revert',d:'dotted',da:'dashed',du:'double',g:'groove',h:'hidden',i:'inset',o:'outset',n:'none',r:'ridge',s:'solid'};
/* harmony export (immutable) */ __webpack_exports__["a"] = CSS_BORDER_STYLE_VALUES_ABBR;


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const CSS_COLOR_VALUES_ABBR={ini:'initial',ih:'inherit',u:'unset',rev:'revert',cc:'currentColor',t:'transparent',b:'black',s:'silver',gr:'gray',w:'white',m:'maroon',r:'red',p:'purple',f:'fuchsia',g:'green',l:'lime',o:'olive',y:'yellow',n:'navy',bl:'blue',te:'teal',a:'aqua',or:'orange',ab:'aliceblue',aw:'antiquewhite',am:'aquamarine',az:'azure',be:'beige',bi:'bisque',ba:'blanchedalmond',bv:'blueviolet',br:'brown',bw:'burlywood',cb:'cadetblue',c:'chartreuse',ch:'chocolate',co:'coral',cfb:'cornflowerblue',cs:'cornsilk',cr:'crimson',cy:'cyan',db:'darkblue',dc:'darkcyan',dgro:'darkgoldenrod',dgr:'darkgray',dag:'darkgrey',dg:'darkgreen',dk:'darkkhaki',dm:'darkmagenta',dog:'darkolivegreen',do:'darkorange',dor:'darkorchid',dr:'darkred',ds:'darksalmon',dsg:'darkseagreen',gsb:'darkslateblue',dsgr:'darkslategray',dasg:'darkslategrey',dt:'darkturquoise',dv:'darkviolet',dp:'deeppink',dsb:'deepskyblue',dig:'dimgray',dige:'dimgrey',dob:'dodgerblue',fb:'firebrick',fw:'floralwhite',fg:'forestgreen',gb:'gainsboro',gw:'ghostwhite',go:'gold',gor:'goldenrod',ry:'greenyellow',ge:'grey',hd:'honeydew',hp:'hotpink',ir:'indianred',i:'indigo',iv:'ivory',k:'khaki',la:'lavender',lab:'lavenderblush',lag:'lawngreen',lc:'lemonchiffon',lb:'lightblue',lco:'lightcoral',lcy:'lightcyan',lgry:'lightgoldenrodyellow',lgr:'lightgray',lge:'lightgrey',lg:'lightgreen',lp:'lightpink',ls:'lightsalmon',lsg:'lightseagreen',lsb:'lightskyblue',lsgr:'lightslategray',lsge:'lightslategrey',lstb:'lightsteelblue',ly:'lightyellow',lig:'limegreen',li:'linen',ma:'magenta',mam:'mediumaquamarine',mb:'mediumblue',mo:'mediumorchid',mp:'mediumpurple',msg:'mediumseagreen',msb:'mediumslateblue',mspg:'mediumspringgreen',mt:'mediumturquoise',mvr:'mediumvioletred',mnb:'midnightblue',mc:'mintcream',mr:'mistyrose',ms:'moccasin',nw:'navajowhite',ol:'oldlace',od:'olivedrab',orr:'orangered',orc:'orchid',pgr:'palegoldenrod',pg:'palegreen',pt:'paleturquoise',pvr:'palevioletred',pw:'papayawhip',pp:'peachpuff',pe:'peru',pi:'pink',pl:'plum',pb:'powderblue',rbr:'rosybrown',rb:'royalblue',sb:'saddlebrown',sa:'salmon',sab:'sandybrown',sg:'seagreen',ss:'seashell',si:'sienna',sbl:'skyblue',slb:'slateblue',slg:'slategray',sge:'slategrey',sn:'snow',spg:'springgreen',stb:'steelblue',ta:'tan',th:'thistle',to:'tomato',tq:'turquoise',v:'violet',wh:'wheat',ws:'whitesmoke',yg:'yellowgreen',rp:'rebeccapurple'};
/* harmony export (immutable) */ __webpack_exports__["a"] = CSS_COLOR_VALUES_ABBR;


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const CSS_DISPLAY_VALUES_ABBR={ih:'inherit',ini:'initial',u:'unset',rv:'revert',b:'block',f:'flex',fl:'flow',fr:'flow-root',g:'grid',i:'inline',ib:'inline-block',if:'inline-flex',it:'inline-table',li:'list-item',n:'none',r:'ruby',rb:'ruby-base',rt:'ruby-text',rbc:'ruby-base-container',rtc:'ruby-text-container',ri:'run-in',sg:'sub-grid',t:'table',tc:'table-cell',tca:'table-caption',tfg:'table-footer-group',thg:'table-header-group',tr:'table-row',trg:'table-row-group',tcol:'table-column',tcolg:'table-column-group'};
/* harmony export (immutable) */ __webpack_exports__["a"] = CSS_DISPLAY_VALUES_ABBR;


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_dict_es__ = __webpack_require__(4);
const CSS_SELECTORS_ABBR={c:'.',i:'#',a:'*',an:',',in:' ',gt:'>',p:'+',t:'~'};
/* unused harmony export CSS_SELECTORS_ABBR */
const CSS_SELECTORS_TO_ABBR=Object(__WEBPACK_IMPORTED_MODULE_0__util_dict_es__["a" /* dict */])(Object.keys(CSS_SELECTORS_ABBR).map(a=>[CSS_SELECTORS_ABBR[a],a]));
/* harmony export (immutable) */ __webpack_exports__["b"] = CSS_SELECTORS_TO_ABBR;
const CSS_SELECTORS=Object.keys(CSS_SELECTORS_TO_ABBR);
/* unused harmony export CSS_SELECTORS */
const CSS_PSEUDO_CLASSES_ABBR={ac:'active',c:'checked',d:'disabled',em:'empty',en:'enabled',fc:'first-child',fot:'first-of-type',h:'hover',f:'focus',ir:'in-range',i:'invalid',lc:'last-child',lot:'last-of-type',l:'link',oot:'only-of-type',oc:'only-child',o:'optional',oor:'out-of-range',ro:'read-only',rw:'read-write',re:'required',r:'root',t:'target',va:'valid',vi:'visited'};
/* unused harmony export CSS_PSEUDO_CLASSES_ABBR */
const CSS_PSEUDO_CLASSES_TO_ABBR=Object(__WEBPACK_IMPORTED_MODULE_0__util_dict_es__["a" /* dict */])(Object.keys(CSS_PSEUDO_CLASSES_ABBR).map(a=>[CSS_PSEUDO_CLASSES_ABBR[a],a]));
/* unused harmony export CSS_PSEUDO_CLASSES_TO_ABBR */
const CSS_PSEUDO_ELEMENTS_ABBR={af:'after',b:'before',fl:'first-letter',fli:'first-line',s:'selection'};
/* unused harmony export CSS_PSEUDO_ELEMENTS_ABBR */
const CSS_PSEUDO_ELEMENTS_TO_ABBR=Object(__WEBPACK_IMPORTED_MODULE_0__util_dict_es__["a" /* dict */])(Object.keys(CSS_PSEUDO_ELEMENTS_ABBR).map(a=>[CSS_PSEUDO_ELEMENTS_ABBR[a],a]));
/* unused harmony export CSS_PSEUDO_ELEMENTS_TO_ABBR */
const CSS_PSEUDO_SELECTORS_TO_ABBR=Object.assign({},CSS_PSEUDO_CLASSES_TO_ABBR,CSS_PSEUDO_ELEMENTS_TO_ABBR);
/* harmony export (immutable) */ __webpack_exports__["a"] = CSS_PSEUDO_SELECTORS_TO_ABBR;


/***/ }),
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = cdata;
function cdata(content=''){return`/*<![CDATA[*/
${content}
/*]]>*/`}

/***/ }),
/* 35 */
/***/ (function(module, exports) {

exports.doctype=({type='html',system=null,legacy=null}={})=>`<!DOCTYPE ${type}${system?' '+system:''}${legacy?' '+legacy:''}>`;

/***/ }),
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_css_classAppendAndCssFromMedia_es__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_css_classAppendAndCssFromStyle_es__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_css_uniqCss_es__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_html_elements_es__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_html_att2Str_es__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_html_isVoid_es__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_html_cdata_es__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_html_doctype_es__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_html_doctype_es___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__src_html_doctype_es__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_util_isArray_es__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_util_isFunction_es__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_util_isSet_es__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_util_isString_es__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_util_toStr_es__ = __webpack_require__(8);
var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};const PROPERTY_TAG='-t';exports.PROPERTY_TAG=PROPERTY_TAG;const PROPERTY_CHILDREN='-c';exports.PROPERTY_CHILDREN=PROPERTY_CHILDREN;const PROPERTY_CSS='-cs';const PROPERTY_HTML='-h';const PROPERTY_SPEC='-s';const METHODS=['constructor','add','build','getCss','render','setDown','setUp'];const UNIQUE_ELEMENTS=['html','head','body'];class Node{constructor(tag,spec,content){if(METHODS.includes(tag)){throw new Error(`Illegal tag:${tag} matches method name!`)}this.root=this;this[PROPERTY_TAG]=tag;if(UNIQUE_ELEMENTS.includes(tag)){this[tag]=this}if(Object(__WEBPACK_IMPORTED_MODULE_11__src_util_isString_es__["a" /* isString */])(spec)||spec instanceof Node||Object(__WEBPACK_IMPORTED_MODULE_8__src_util_isArray_es__["a" /* isArray */])(spec)||Object(__WEBPACK_IMPORTED_MODULE_9__src_util_isFunction_es__["a" /* isFunction */])(spec)){content=spec;spec={}}this[PROPERTY_SPEC]=spec;this[PROPERTY_CSS]=[];this[PROPERTY_CHILDREN]=[];this.add(content)}setDown(key,value,{skip=null}={}){this[key]=value;this[PROPERTY_CHILDREN].forEach(child=>{if(child instanceof Node){if(child===skip){}else{child.setDown(key,value)}}});return this}hasDescendant(node){if(this[PROPERTY_CHILDREN].includes(node)){return true}this[PROPERTY_CHILDREN].forEach(child=>{if(child instanceof Node&&child.hasDescendant(node)){return true}});return false}add(content){if(!Object(__WEBPACK_IMPORTED_MODULE_10__src_util_isSet_es__["a" /* isSet */])(content)){return this}if(!Object(__WEBPACK_IMPORTED_MODULE_8__src_util_isArray_es__["a" /* isArray */])(this[PROPERTY_CHILDREN])){this[PROPERTY_CHILDREN]=[this[PROPERTY_CHILDREN]]}const newContents=Array.isArray(content)?content:[content];const newNodes=[];newContents.forEach(newContent=>{while(Object(__WEBPACK_IMPORTED_MODULE_9__src_util_isFunction_es__["a" /* isFunction */])(newContent)){newContent=newContent()}if(Object(__WEBPACK_IMPORTED_MODULE_11__src_util_isString_es__["a" /* isString */])(newContent)){this[PROPERTY_CHILDREN].push(newContent)}else if(newContent instanceof Node){if(this.hasDescendant(newContent)){throw new Error(`The node:${newContent[PROPERTY_TAG]} already exists in the tree! Not adding to ${this[PROPERTY_TAG]}!`)}this[PROPERTY_CHILDREN].push(newContent);newContent.parent=this;newContent.setDown('root',this.root);const addedNodeTag=newContent[PROPERTY_TAG];if(this[addedNodeTag]){if(Array.isArray(this[addedNodeTag])){if(this[addedNodeTag].includes(newContent)){throw new Error(`Path property ${addedNodeTag} already contains node!`)}this[addedNodeTag].push(newContent)}else{if(this[addedNodeTag]===newContent){throw new Error(`Path property ${addedNodeTag} already references node!`)}this[addedNodeTag]=[this[addedNodeTag],newContent]}}else{this[addedNodeTag]=newContent}newNodes.push(newContent)}else if(Object(__WEBPACK_IMPORTED_MODULE_10__src_util_isSet_es__["a" /* isSet */])(newContent)){throw new Error(`Unhandeled type when adding newContent:${Object(__WEBPACK_IMPORTED_MODULE_12__src_util_toStr_es__["a" /* toStr */])(newContent)}`)}});newNodes.forEach(addedNode=>{UNIQUE_ELEMENTS.forEach(ue=>{if(this[ue]){if(!addedNode[ue]){addedNode.setDown(ue,this[ue])}}else if(addedNode[ue]){this.root.setDown(ue,addedNode[ue],{skip:addedNode})}})});return this}build({autoprefixer=true}={}){const tag=this[PROPERTY_TAG];const spec=this[PROPERTY_SPEC]||{};if(spec.style){const s=Object(__WEBPACK_IMPORTED_MODULE_1__src_css_classAppendAndCssFromStyle_es__["a" /* classAppendAndCssFromStyle */])(spec.style,{autoprefixer});spec.class=[].concat(spec.class,s.classAppend).filter(n=>n);this[PROPERTY_CSS]=this[PROPERTY_CSS].concat(s.css);spec.style=null}if(spec._media){const o=Object(__WEBPACK_IMPORTED_MODULE_0__src_css_classAppendAndCssFromMedia_es__["a" /* classAppendAndCssFromMedia */])(spec._media,{autoprefixer});spec.class=[].concat(spec.class,o.classAppend).filter(n=>n);this[PROPERTY_CSS]=this[PROPERTY_CSS].concat(o.css)}const attributes=Object(__WEBPACK_IMPORTED_MODULE_4__src_html_att2Str_es__["a" /* att2Str */])(_extends({},spec,{_media:null}));if(Object(__WEBPACK_IMPORTED_MODULE_5__src_html_isVoid_es__["a" /* isVoid */])(tag)){this[PROPERTY_HTML]=`<${tag}${attributes}/>`;return this}const children=this[PROPERTY_CHILDREN];if(!children){this[PROPERTY_HTML]=`<${tag}${attributes}></${tag}>`;return this}if(Object(__WEBPACK_IMPORTED_MODULE_11__src_util_isString_es__["a" /* isString */])(children)){this[PROPERTY_HTML]=`<${tag}${attributes}>${children}</${tag}>`;return this}if(children instanceof Node){children.build();this[PROPERTY_HTML]=`<${tag}${attributes}>${children[PROPERTY_HTML]}</${tag}>`;this[PROPERTY_CSS]=this[PROPERTY_CSS].concat(children[PROPERTY_CSS]);return this}if(Array.isArray(children)){let innerHtml='';children.forEach(child=>{if(child instanceof Node){innerHtml+=child.build()[PROPERTY_HTML];this[PROPERTY_CSS]=this[PROPERTY_CSS].concat(child[PROPERTY_CSS])}else if(Object(__WEBPACK_IMPORTED_MODULE_11__src_util_isString_es__["a" /* isString */])(child)){innerHtml+=child}});this[PROPERTY_HTML]=`<${tag}${attributes}>${innerHtml}</${tag}>`;return this}this[PROPERTY_HTML]='';return this}getCss(){return Object(__WEBPACK_IMPORTED_MODULE_2__src_css_uniqCss_es__["a" /* uniqCss */])(this.build()[PROPERTY_CSS])}render(){return this.build()[PROPERTY_HTML]}}exports.Node=Node;class Dom extends Node{constructor(spec,content){super('',spec,content)}build(){const children=this[PROPERTY_CHILDREN];if(!children){this[PROPERTY_HTML]='';return this}if(Object(__WEBPACK_IMPORTED_MODULE_11__src_util_isString_es__["a" /* isString */])(children)){this[PROPERTY_HTML]=children;return this}if(children instanceof Node){this[PROPERTY_HTML]=children.build()[PROPERTY_HTML];this[PROPERTY_CSS]=children[PROPERTY_CSS]?children[PROPERTY_CSS]:[];return this}if(Array.isArray(children)){let innerHtml='';children.forEach(child=>{if(child instanceof Node){innerHtml+=child.build()[PROPERTY_HTML];this[PROPERTY_CSS]=this[PROPERTY_CSS].concat(child[PROPERTY_CSS])}else if(Object(__WEBPACK_IMPORTED_MODULE_11__src_util_isString_es__["a" /* isString */])(child)){innerHtml+=child}});this[PROPERTY_HTML]=innerHtml;return this}this[PROPERTY_HTML]='';return this}}exports.Dom=Dom;__WEBPACK_IMPORTED_MODULE_3__src_html_elements_es__["a" /* HTML_AND_SVG_ELEMENTS */].forEach(k=>{exports[k]=(...args)=>new Node(k,...args)});exports.cdata=(...args)=>new Dom(Object(__WEBPACK_IMPORTED_MODULE_6__src_html_cdata_es__["a" /* cdata */])(...args));exports.doctype=(...args)=>new Dom(Object(__WEBPACK_IMPORTED_MODULE_7__src_html_doctype_es__["doctype"])(...args));

/***/ })
/******/ ]);
//# sourceMappingURL=dom.js.map