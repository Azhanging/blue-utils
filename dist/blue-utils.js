/*!
 * 
 * blue-utils.js 1.1.2
 * (c) 2016-2020 Blue
 * Released under the MIT License.
 * https://github.com/azhanging/blue-utils
 * time:Sat, 21 Mar 2020 14:12:13 GMT
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["BlueUtils"] = factory();
	else
		root["BlueUtils"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "./static";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(__webpack_require__(1), exports);
        if (v !== undefined) module.exports = v;
    }
    else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BlueUtils = /** @class */ (function () {
        function BlueUtils() {
        }
        //是否为空对象
        BlueUtils.prototype.isEmptyPlainObject = function (object) {
            return JSON.stringify(object) === "{}";
        };
        //是否为string
        BlueUtils.prototype.isStr = function (val) {
            return typeof val === 'string';
        };
        //是否为obj对象
        BlueUtils.prototype.isPlainObject = function (object) {
            return object && !this.isArray(object) && (object.toString() === '[object Object]') && (object.constructor === Object);
        };
        //是否为数组
        BlueUtils.prototype.isArray = function (val) {
            return val instanceof Array;
        };
        //是否为对象Object Object
        BlueUtils.prototype.isObject = function (object) {
            return this.isPlainObject(object) || this.isArray(object);
        };
        //是否有值
        BlueUtils.prototype.isDef = function (val) {
            return val !== undefined && val !== null;
        };
        //是否为undefine 或者 null
        BlueUtils.prototype.isUndef = function (val) {
            return val === undefined || val === null;
        };
        //字符串是否为空
        BlueUtils.prototype.isEmptyStr = function (val) {
            return val.trim().length === 0;
        };
        //是否为true
        BlueUtils.prototype.isTrue = function (bool) {
            return bool === true;
        };
        //是否为false
        BlueUtils.prototype.isFalse = function (bool) {
            return bool === false;
        };
        //是否为function
        BlueUtils.prototype.isFunction = function (fn) {
            return typeof fn === 'function';
        };
        //是否为error
        BlueUtils.prototype.isError = function (error) {
            return error instanceof Error;
        };
        //是否为布尔值
        BlueUtils.prototype.isBoolean = function (bool) {
            return typeof bool === 'boolean';
        };
        //执行function
        BlueUtils.prototype.hook = function (context, cb, args) {
            if (args === void 0) { args = []; }
            if (this.isFunction(cb)) {
                return cb.apply(context, args);
            }
            return cb;
        };
        //遍历
        BlueUtils.prototype.each = function (obj, cb, isReturn) {
            if (isReturn === void 0) { isReturn = false; }
            if (this.isUndef(obj))
                return;
            var i = 0, index = 0, newVal = [];
            var len = obj.length;
            if (this.isArray(obj)) {
                for (; i < len; i++) {
                    if (isReturn) {
                        newVal.push(cb(obj[i], i));
                    }
                    else {
                        cb(obj[i], i);
                    }
                }
            }
            else {
                for (i in obj) {
                    if (!obj.hasOwnProperty(i))
                        continue;
                    if (isReturn) {
                        newVal.push(cb(obj[i], i, index++));
                    }
                    else {
                        cb(obj[i], i, index++);
                    }
                }
            }
            if (isReturn)
                return newVal;
        };
        //深拷贝
        BlueUtils.prototype.deepCopy = function (obj) {
            if (!obj || !(this.isArray(obj)) && !(obj.toString() === "[object Object]"))
                return obj;
            //非纯对象类型，直接返回出去
            if (!(this.isArray(obj)) && (obj.constructor !== Object))
                return obj;
            var _obj = this.isArray(obj) ? [] : {};
            for (var key in obj) {
                if (!obj.hasOwnProperty(key))
                    continue;
                if ((this.isArray(obj)) || (this.isPlainObject(obj))) {
                    _obj[key] = this.deepCopy(obj[key]);
                }
                else {
                    _obj[key] = obj[key];
                }
            }
            return _obj;
        };
        //扩展
        BlueUtils.prototype.extend = function () {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            //是否深拷贝
            var isDeep = true;
            //存放arguments的参数
            var objects = __spreadArrays(args);
            //合并后的obj
            var extendObject = {};
            var lastArg = objects[objects.length - 1];
            //检查最后一个参数是否为深拷贝
            if (this.isBoolean(lastArg)) {
                isDeep = lastArg;
                [].pop.call(objects);
            }
            //默认深拷贝，否则最后一个参数为深拷贝布尔值
            if (isDeep) {
                objects = this.deepCopy(objects);
            }
            this.each(objects, function (object, index) {
                if (index === (objects.length - 1))
                    return;
                var nextObject = objects[index + 1];
                _this.each(nextObject, function (obj, key) {
                    if (_this.isPlainObject(obj)) {
                        if (!object[key]) {
                            object[key] = {};
                        }
                        object[key] = _this.extend(object[key], obj, isDeep);
                    }
                    else {
                        object[key] = obj;
                    }
                });
                objects[index + 1] = extendObject = object;
                objects[index] = null;
            });
            return extendObject;
        };
        //获取表达式
        BlueUtils.prototype.getRegExp = function (expr) {
            var tm = '\\/*.?+$^[](){}|\'\"';
            this.each(tm, function (tmItem, index) {
                expr = expr.replace(new RegExp('\\' + tmItem, 'g'), '\\' + tmItem);
            });
            return expr;
        };
        //获取obj的长度
        BlueUtils.prototype.getObjLen = function (obj) {
            var index = 0;
            this.each(obj, function () {
                ++index;
            });
            return index;
        };
        BlueUtils.prototype.getObjKeys = function (object) {
            return this.each(object, function (obj, key) {
                return key;
            }, true);
        };
        //get link query string
        BlueUtils.prototype.getLinkParams = function (link) {
            var linkType = link.split('?');
            var queryString = linkType[1];
            if (linkType.length > 0 && queryString && queryString !== '') {
                return queryString;
            }
            return '';
        };
        BlueUtils.prototype.getNoParamsLink = function (link) {
            if (link === void 0) { link = ''; }
            var linkType = link.split('?');
            return linkType[0];
        };
        //query string 转化为 object
        BlueUtils.prototype.parseParams = function (queryString) {
            var linkQuery = {};
            if (!queryString)
                return linkQuery;
            //是否存在原query
            (queryString.split('&') || []).forEach(function (queryItemString) {
                var splitQueryItem = queryItemString.split('=');
                linkQuery[splitQueryItem[0]] = splitQueryItem[1];
            });
            return linkQuery;
        };
        //query 转化为 string
        BlueUtils.prototype.stringifyParams = function (query) {
            var _this = this;
            if (!this.isPlainObject(query))
                return '';
            var _query = [];
            this.each(query, function (value, key) {
                if (_this.isPlainObject(value) || _this.isArray(value)) {
                    value = JSON.stringify(value);
                }
                _query.push(key + "=" + encodeURIComponent(value));
            });
            return _query.join('&');
        };
        //返回promise
        BlueUtils.prototype.promise = function (hook) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.hook(_this, hook, [resolve, reject]);
            });
        };
        //防抖
        BlueUtils.prototype.debounce = function (hook, delay) {
            var _this = this;
            if (delay === void 0) { delay = 200; }
            var timer = 0;
            return function (ctx, args) {
                if (args === void 0) { args = []; }
                if (timer)
                    clearTimeout(timer);
                timer = setTimeout(function () {
                    _this.hook(ctx, hook, args);
                    timer = null;
                }, delay);
            };
        };
        //节流
        BlueUtils.prototype.throttle = function (hook, delay) {
            var _this = this;
            if (delay === void 0) { delay = 200; }
            var last;
            return function (ctx, args) {
                if (args === void 0) { args = []; }
                var now = +new Date();
                if (!last || (last && (now > (last + delay)))) {
                    last = now;
                    _this.hook(ctx, hook, args);
                }
            };
        };
        return BlueUtils;
    }());
    exports.default = BlueUtils;
});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 1;

/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=blue-utils.js.map