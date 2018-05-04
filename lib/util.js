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
/******/ 	return __webpack_require__(__webpack_require__.s = 83);
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

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isEmptyObject;
function isEmptyObject(value){return Object.keys(value).length===0&&value.constructor===Object}

/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const dict=arr=>Object.assign(...arr.map(([k,v])=>({[k]:v})));
/* harmony export (immutable) */ __webpack_exports__["a"] = dict;


/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isArrayOrString;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isString_es__ = __webpack_require__(0);
function isArrayOrString(value){return Array.isArray(value)||Object(__WEBPACK_IMPORTED_MODULE_0__isString_es__["a" /* isString */])(value)}

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = sortAndRemoveDups;
function sortAndRemoveDups(arr){const sorted=arr.sort();const uniq=[];let prev=null;for(let i=0;i<sorted.length;i+=1){if(sorted[i]!==prev){uniq.push(sorted[i])}prev=sorted[i]}return uniq}

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isObject;
function isObject(value){return value===Object(value)}

/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = toStr;
function toStr(value){return JSON.stringify(value,null,4)}

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_camelize_es__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_dasherize_es__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_dict_es__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_isArray_es__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_isArrayOrFuncOrString_es__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_isArrayOrString_es__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util_isBool_es__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_isEmptyObject_es__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__util_isFunction_es__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__util_isInt_es__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__util_isNumeric_es__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__util_isObject_es__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__util_isSet_es__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__util_isString_es__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__util_sortAndRemoveDups_es__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__util_sortedUniqStr_es__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__util_toStr_es__ = __webpack_require__(8);
exports.camelize=__WEBPACK_IMPORTED_MODULE_0__util_camelize_es__["a" /* camelize */];exports.dasherize=__WEBPACK_IMPORTED_MODULE_1__util_dasherize_es__["a" /* dasherize */];exports.dict=__WEBPACK_IMPORTED_MODULE_2__util_dict_es__["a" /* dict */];exports.isArray=__WEBPACK_IMPORTED_MODULE_3__util_isArray_es__["a" /* isArray */];exports.isArrayOrFuncOrString=__WEBPACK_IMPORTED_MODULE_4__util_isArrayOrFuncOrString_es__["a" /* isArrayOrFuncOrString */];exports.isArrayOrString=__WEBPACK_IMPORTED_MODULE_5__util_isArrayOrString_es__["a" /* isArrayOrString */];exports.isBool=__WEBPACK_IMPORTED_MODULE_6__util_isBool_es__["a" /* isBool */];exports.isEmptyObject=__WEBPACK_IMPORTED_MODULE_7__util_isEmptyObject_es__["a" /* isEmptyObject */];exports.isFunction=__WEBPACK_IMPORTED_MODULE_8__util_isFunction_es__["a" /* isFunction */];exports.isInt=__WEBPACK_IMPORTED_MODULE_9__util_isInt_es__["a" /* isInt */];exports.isNumeric=__WEBPACK_IMPORTED_MODULE_10__util_isNumeric_es__["a" /* isNumeric */];exports.isObject=__WEBPACK_IMPORTED_MODULE_11__util_isObject_es__["a" /* isObject */];exports.isSet=__WEBPACK_IMPORTED_MODULE_12__util_isSet_es__["a" /* isSet */];exports.isString=__WEBPACK_IMPORTED_MODULE_13__util_isString_es__["a" /* isString */];exports.sortAndRemoveDups=__WEBPACK_IMPORTED_MODULE_14__util_sortAndRemoveDups_es__["a" /* sortAndRemoveDups */];exports.sortedUniqStr=__WEBPACK_IMPORTED_MODULE_15__util_sortedUniqStr_es__["a" /* sortedUniqStr */];exports.toStr=__WEBPACK_IMPORTED_MODULE_16__util_toStr_es__["a" /* toStr */];/* harmony default export */ __webpack_exports__["default"] = (exports);

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = camelize;
function camelize(str){return str.replace(/(?:^\w|[A-Z]|\b\w)/g,(letter,index)=>index===0?letter.toLowerCase():letter.toUpperCase()).replace(/(\s|-)+/g,'')}

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isBool;
function isBool(value){return typeof value===typeof true}

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isInt;
function isInt(value){return typeof value==='number'&&isFinite(value)&&Math.floor(value)===value}

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isNumeric;
function isNumeric(value){return!isNaN(parseFloat(value))&&isFinite(value)}

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isFunction;
function isFunction(value){return!!(value&&value.constructor&&value.call&&value.apply)}

/***/ })

/******/ });
//# sourceMappingURL=util.js.map