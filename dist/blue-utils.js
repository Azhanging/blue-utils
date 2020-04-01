/*!
 * 
 * blue-utils.js 1.1.6
 * (c) 2016-2020 Blue
 * Released under the MIT License.
 * https://github.com/azhanging/blue-utils
 * time:Wed, 01 Apr 2020 08:56:55 GMT
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["blueUtils"] = factory();
	else
		root["blueUtils"] = factory();
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _regexp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _promise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};







var blueUtils = __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, _types__WEBPACK_IMPORTED_MODULE_0__["default"]), _url__WEBPACK_IMPORTED_MODULE_1__["default"]), _time__WEBPACK_IMPORTED_MODULE_2__["default"]), _object__WEBPACK_IMPORTED_MODULE_3__["default"]), _regexp__WEBPACK_IMPORTED_MODULE_4__["default"]), _promise__WEBPACK_IMPORTED_MODULE_5__["default"]), _tools__WEBPACK_IMPORTED_MODULE_6__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (blueUtils);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//类型相关
var types = {
    //是否为空对象
    isEmptyPlainObject: function (object) {
        return JSON.stringify(object) === "{}";
    },
    //是否为string
    isStr: function (val) {
        return typeof val === 'string';
    },
    //是否为obj对象
    isPlainObject: function (object) {
        return object && !this.isArray(object) && (object.toString() === '[object Object]') && (object.constructor === Object);
    },
    //是否为数组
    isArray: function (val) {
        return val instanceof Array;
    },
    //是否为对象Object Object
    isObject: function (object) {
        return this.isPlainObject(object) || this.isArray(object);
    },
    //是否有值
    isDef: function (val) {
        return val !== undefined && val !== null;
    },
    //是否为undefine 或者 null
    isUndef: function (val) {
        return val === undefined || val === null;
    },
    //字符串是否为空
    isEmptyStr: function (val) {
        return val.trim().length === 0;
    },
    //是否为true
    isTrue: function (bool) {
        return bool === true;
    },
    //是否为false
    isFalse: function (bool) {
        return bool === false;
    },
    //是否为function
    isFunction: function (fn) {
        return typeof fn === 'function';
    },
    //是否为error
    isError: function (error) {
        return error instanceof Error;
    },
    //是否为布尔值
    isBoolean: function (bool) {
        return typeof bool === 'boolean';
    }
};
/* harmony default export */ __webpack_exports__["default"] = (types);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var url = {
    //获取链接的query
    getLinkParams: function (link) {
        var linkType = link.split('?');
        var queryString = linkType[1];
        if (linkType.length > 0 && queryString && queryString !== '') {
            return queryString;
        }
        return '';
    },
    //获取没有参数链接
    getNoParamsLink: function (link) {
        if (link === void 0) { link = ''; }
        var linkType = link.split('?');
        return linkType[0];
    },
    //query string 转化为 object
    parseParams: function (queryString) {
        var linkQuery = {};
        if (!queryString)
            return linkQuery;
        //是否存在原query
        (queryString.split('&') || []).forEach(function (queryItemString) {
            var splitQueryItem = queryItemString.split('=');
            linkQuery[splitQueryItem[0]] = splitQueryItem[1];
        });
        return linkQuery;
    },
    //query 转化为 string
    stringifyParams: function (query) {
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
    },
};
/* harmony default export */ __webpack_exports__["default"] = (url);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//填充数值
function fill(val) {
    if (val < 10) {
        return "0" + val;
    }
    return "" + val;
}
var time = {
    //防抖
    debounce: function (hook, delay) {
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
    },
    //节流
    throttle: function (hook, delay) {
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
    },
    //格式化时间
    formatDate: function (date, format) {
        //导出的变量“{0}”具有或正在使用外部模块“{2}”中的名称“{1}”，但不能为其命名。
        var _a = this.getDate(date), year = _a.year, month = _a.month, day = _a.day, hours = _a.hours, minutes = _a.minutes, seconds = _a.seconds;
        return format
            .replace("yyyy", year)
            .replace("MM", month)
            .replace("dd", day)
            .replace("HH", hours)
            .replace("mm", minutes)
            .replace("ss", seconds);
    },
    getDate: function (date) {
        var time;
        if (this.isStr(date)) {
            time = +new Date(date.trim().replace(/-/g, '/'));
        }
        else if (date instanceof Date) {
            time = +date;
        }
        if (isNaN(time))
            return null;
        return {
            year: "" + this.getYear(time),
            month: fill(this.getMonth(time)),
            day: fill(this.getDay(time)),
            hours: fill(this.getHours(time)),
            minutes: fill(this.getMinutes(time)),
            seconds: fill(this.getSeconds(time))
        };
    },
    //获取年
    getYear: function (time) {
        return new Date(time).getFullYear();
    },
    //获取月
    getMonth: function (time) {
        return new Date(time).getMonth() + 1;
    },
    //获取日
    getDay: function (time) {
        return new Date(time).getDate();
    },
    //获取时
    getHours: function (time) {
        return new Date(time).getHours();
    },
    //获取分
    getMinutes: function (time) {
        return new Date(time).getMinutes();
    },
    //获取秒
    getSeconds: function (time) {
        return new Date(time).getSeconds();
    }
};
/* harmony default export */ __webpack_exports__["default"] = (time);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var object = {
    //获取obj的长度
    getObjLen: function (obj) {
        var index = 0;
        this.each(obj, function () {
            ++index;
        });
        return index;
    },
    //获取obj的keys
    getObjKeys: function (object) {
        return this.each(object, function (obj, key) {
            return key;
        }, true);
    },
};
/* harmony default export */ __webpack_exports__["default"] = (object);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var regexp = {
    //获取表达式
    getRegExp: function (expr) {
        var tm = '\\/*.?+$^[](){}|\'\"';
        this.each(tm, function (tmItem, index) {
            expr = expr.replace(new RegExp('\\' + tmItem, 'g'), '\\' + tmItem);
        });
        return expr;
    },
};
/* harmony default export */ __webpack_exports__["default"] = (regexp);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var promise = {
    //返回promise
    promise: function (hook) {
        var _this = this;
        try {
            return new Promise(function (resolve, reject) {
                _this.hook(_this, hook, [resolve, reject]);
            });
        }
        catch (e) {
            console.warn(e);
        }
    }
};
/* harmony default export */ __webpack_exports__["default"] = (promise);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var tools = {
    //执行function
    hook: function (context, cb, args) {
        if (args === void 0) { args = []; }
        if (this.isFunction(cb)) {
            return cb.apply(context, args);
        }
        return cb;
    },
    //遍历
    each: function (obj, cb, isReturn) {
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
    },
    //深拷贝
    deepCopy: function (obj) {
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
    },
    //扩展
    extend: function () {
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
    }
};
/* harmony default export */ __webpack_exports__["default"] = (tools);


/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=blue-utils.js.map