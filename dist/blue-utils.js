/*!
 * 
 * blue-utils.js 1.2.11
 * (c) 2016-2024 Blue
 * Released under the MIT License.
 * https://github.com/azhanging/blue-utils
 * time:Sun, 28 Apr 2024 14:42:35 GMT
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
})(typeof self !== 'undefined' ? self : this, function() {
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
/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _count_down__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _regexp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _promise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3);
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
//类型相关

//url相关

//时间相关

//倒计时处理

//正则相关

//promise

//工具类

//导出默认接口
/* harmony default export */ __webpack_exports__["default"] = (__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, _types__WEBPACK_IMPORTED_MODULE_0__), _url__WEBPACK_IMPORTED_MODULE_1__), _count_down__WEBPACK_IMPORTED_MODULE_3__), _time__WEBPACK_IMPORTED_MODULE_2__), _regexp__WEBPACK_IMPORTED_MODULE_4__), _promise__WEBPACK_IMPORTED_MODULE_5__), _tools__WEBPACK_IMPORTED_MODULE_6__));


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmptyPlainObject", function() { return isEmptyPlainObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStr", function() { return isStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return isPlainObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDef", function() { return isDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUndef", function() { return isUndef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmptyStr", function() { return isEmptyStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTrue", function() { return isTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFalse", function() { return isFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isError", function() { return isError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return isBoolean; });
/**
 * 是否为空对象
 * @param object
 * @returns boolean
 */
function isEmptyPlainObject(object) {
    return JSON.stringify(object) === "{}";
}
/**
 * 是否为string
 * @param val string
 * @returns boolean
 */
function isStr(val) {
    return typeof val === "string";
}
/**
 * 是否为obj对象
 * @param object
 * @returns boolean
 */
function isPlainObject(object) {
    return !!(object &&
        !isArray(object) &&
        (isFunction(object.toString)
            ? object.toString() === "[object Object]"
            : true) &&
        object.constructor === Object);
}
/**
 * 是否为数组
 * @param val
 * @returns boolean
 */
function isArray(val) {
    return val instanceof Array;
}
/**
 * 是否为对象Object Object
 * @param object
 * @returns boolean
 */
function isObject(object) {
    return isPlainObject(object) || isArray(object);
}
/**
 * 是否有值
 * @param val
 * @returns boolean
 */
function isDef(val) {
    return val !== undefined && val !== null;
}
/**
 * 是否为undefine 或者 null
 * @param val
 * @returns boolean
 */
function isUndef(val) {
    return val === undefined || val === null;
}
/**
 * 字符串是否为空
 * @param val
 * @returns boolean
 */
function isEmptyStr(val) {
    return val.trim().length === 0;
}
/**
 * 是否为true
 * @param bool
 * @returns boolean
 */
function isTrue(bool) {
    return bool === true;
}
/**
 * 是否为false
 * @param bool
 * @returns
 */
function isFalse(bool) {
    return bool === false;
}
/**
 * 是否为function
 * @param fn
 * @returns
 */
function isFunction(fn) {
    return typeof fn === "function";
}
/**
 * 是否为error
 * @param error
 * @returns
 */
function isError(error) {
    return error instanceof Error;
}
/**
 * 是否为布尔值
 * @param bool
 * @returns
 */
function isBoolean(bool) {
    return typeof bool === "boolean";
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLinkParams", function() { return getLinkParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNotParamsLink", function() { return getNotParamsLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseParams", function() { return parseParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringifyParams", function() { return stringifyParams; });
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);


var LINK_SPLIT_CHAT = "?";
var LINK_PARAMS_SPLIT_CHAT = "&";
var LINK_PARAMS_VALUE_SPLIT_CHAT = "=";
/**
 * 获取链接的query
 * @param link
 * @returns
 */
function getLinkParams(link) {
    var linkType = link.split(LINK_SPLIT_CHAT);
    var queryString = linkType.slice(1).join(LINK_SPLIT_CHAT);
    if (linkType.length > 0 && queryString && queryString !== "") {
        return queryString;
    }
    return "";
}
/**
 * 获取没有参数链接
 * @param link
 * @returns
 */
function getNotParamsLink(link) {
    if (link === void 0) { link = ""; }
    var linkType = link.split(LINK_SPLIT_CHAT);
    return linkType[0];
}
/**
 * query string 转化为 object
 * @param queryString
 * @param decode
 * @returns
 */
function parseParams(queryString, decode) {
    if (decode === void 0) { decode = true; }
    var linkQuery = {};
    if (!queryString)
        return linkQuery;
    //是否存在原query
    (queryString.split(LINK_PARAMS_SPLIT_CHAT) || []).forEach(function (queryItemString) {
        var _a = queryItemString.split(LINK_PARAMS_VALUE_SPLIT_CHAT), key = _a[0], _value = _a.slice(1);
        var value = _value.join(LINK_PARAMS_VALUE_SPLIT_CHAT);
        linkQuery[key] = decode ? decodeURIComponent(value) : value;
    });
    return linkQuery;
}
/**
 * query 转化为 string
 * @param query
 * @param encode
 * @returns
 */
function stringifyParams(query, encode) {
    if (encode === void 0) { encode = true; }
    if (!query)
        return "";
    var _query = [];
    Object(_tools__WEBPACK_IMPORTED_MODULE_0__["each"])(query, function (value, key) {
        if (Object(_types__WEBPACK_IMPORTED_MODULE_1__["isPlainObject"])(value) || Object(_types__WEBPACK_IMPORTED_MODULE_1__["isArray"])(value)) {
            value = JSON.stringify(value);
        }
        _query.push(key + "=" + (encode ? encodeURIComponent(value) : value));
    });
    return _query.join(LINK_PARAMS_SPLIT_CHAT);
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hook", function() { return hook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "each", function() { return each; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepCopy", function() { return deepCopy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genGuid", function() { return genGuid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectToArray", function() { return objectToArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayToObject", function() { return arrayToObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getObjLen", function() { return getObjLen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getObjKeys", function() { return getObjKeys; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

/**
 * 防抖
 * @param hook
 * @param delay
 * @returns
 */
function debounce(hookHandler, delay) {
    if (delay === void 0) { delay = 200; }
    var timer = 0;
    return function (ctx, args) {
        if (args === void 0) { args = []; }
        if (timer)
            clearTimeout(timer);
        timer = setTimeout(function () {
            hook(ctx, hookHandler, args);
            timer = null;
        }, delay);
    };
}
/**
 * 节流
 * @param hook
 * @param delay
 * @returns
 */
function throttle(hookHandler, delay) {
    if (delay === void 0) { delay = 200; }
    var last;
    return function (ctx, args) {
        if (args === void 0) { args = []; }
        var now = +new Date();
        if (!last || (last && now > last + delay)) {
            last = now;
            hook(ctx, hookHandler, args);
        }
    };
}
/**
 * 执行function
 * @param context
 * @param cb
 * @param args
 * @returns
 */
function hook(context, cb, args) {
    if (args === void 0) { args = []; }
    if (Object(_types__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(cb)) {
        return cb.apply(context, args);
    }
    return cb;
}
/**
 * 遍历
 * @param obj
 * @param cb
 * @param isReturn
 * @returns
 */
function each(obj, cb, isReturn) {
    if (isReturn === void 0) { isReturn = false; }
    if (Object(_types__WEBPACK_IMPORTED_MODULE_0__["isUndef"])(obj))
        return;
    var i = 0, index = 0, newVal = [];
    var len = obj.length;
    if (Object(_types__WEBPACK_IMPORTED_MODULE_0__["isArray"])(obj)) {
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
}
/**
 * 深拷贝
 * @param obj
 * @returns
 */
function deepCopy(obj) {
    if (!obj || (!Object(_types__WEBPACK_IMPORTED_MODULE_0__["isArray"])(obj) && !Object(_types__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(obj))) {
        return obj;
    }
    //非纯对象类型，直接返回出去
    if (!Object(_types__WEBPACK_IMPORTED_MODULE_0__["isArray"])(obj) && obj.constructor !== Object)
        return obj;
    var _obj = Object(_types__WEBPACK_IMPORTED_MODULE_0__["isArray"])(obj) ? [] : {};
    for (var key in obj) {
        if (Object(_types__WEBPACK_IMPORTED_MODULE_0__["isArray"])(obj) || Object(_types__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(obj)) {
            _obj[key] = deepCopy(obj[key]);
        }
        else {
            _obj[key] = obj[key];
        }
    }
    return _obj;
}
/**
 * 扩展
 * @param args
 * @returns
 */
function extend() {
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
    if (Object(_types__WEBPACK_IMPORTED_MODULE_0__["isBoolean"])(lastArg)) {
        isDeep = lastArg;
        [].pop.call(objects);
    }
    //默认深拷贝，否则最后一个参数为深拷贝布尔值
    if (isDeep) {
        objects = deepCopy(objects);
    }
    each(objects, function (object, index) {
        //最后一位只做返回处理
        if (index === objects.length - 1) {
            return (extendObject = objects[index]);
        }
        var nextObject = objects[index + 1];
        each(nextObject, function (obj, key) {
            !object && (object = {});
            if (Object(_types__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(obj)) {
                if (!object[key] || !Object(_types__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(object[key])) {
                    object[key] = {};
                }
                object[key] = extend(object[key], obj, isDeep);
            }
            else if ((obj === undefined && object[key] === undefined) ||
                obj !== undefined) {
                object[key] = obj;
            }
        });
        objects[index + 1] = extendObject = object;
        objects[index] = undefined;
    });
    return extendObject;
}
/**
 * 生成一个UUID
 * @returns
 */
function genGuid() {
    function gen() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    return "" + gen() + gen() + "-" + gen() + "-" + gen() + "-" + gen() + "-" + gen() + gen() + gen();
}
/**
 * 对象转数组，对于上面[数组转对象]的转换是相对的
 * @param object
 * @returns
 */
function objectToArray(object) {
    var array = [];
    for (var key in object) {
        array.push(object[key]);
    }
    return array;
}
/**
 * 数组转对象，指定key做承载点
 * @param array
 * @param key
 * @returns
 */
function arrayToObject(array, key) {
    var newObj = {};
    each(array, function (item, index) {
        var keyContent = item[key];
        newObj[keyContent || "$" + index] = item;
    });
    return newObj;
}
/**
 * 获取obj的长度
 * @param obj
 * @returns
 */
function getObjLen(obj) {
    var index = 0;
    each(obj, function () {
        ++index;
    });
    return index;
}
/**
 * 获取obj的keys
 * @param object
 * @returns
 */
function getObjKeys(object) {
    return each(object, function (obj, key) {
        return key;
    }, true);
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefixZero", function() { return prefixZero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genCountDownViewDate", function() { return genCountDownViewDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDate", function() { return getDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getYear", function() { return getYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMonth", function() { return getMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDay", function() { return getDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHours", function() { return getHours; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMinutes", function() { return getMinutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSeconds", function() { return getSeconds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTime", function() { return getTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timestamp", function() { return timestamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diffTime", function() { return diffTime; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

/**
 * 补0操作
 * @param time
 * @returns
 */
function prefixZero(time) {
    if (time < 10) {
        return "0" + time;
    }
    return "" + time;
}
var TICK_TIME = 1000;
/**
 * 生成倒计时的数据
 * @param diffTime
 * @returns
 */
function genCountDownViewDate(diffTime) {
    if (diffTime < TICK_TIME) {
        //毫秒转化为秒
        diffTime = 0;
    }
    //毫秒转化为秒
    diffTime = diffTime / TICK_TIME;
    return {
        day: prefixZero(Math.floor(diffTime / (60 * 60 * 24))),
        hours: prefixZero(Math.floor((diffTime / (60 * 60)) % 24)),
        minutes: prefixZero(Math.floor((diffTime / 60) % 60)),
        second: prefixZero(Math.floor(diffTime % 60)),
    };
}
/**
 * 格式化时间
 * @param date
 * @param format
 * @returns
 */
function formatDate(date, format) {
    var _a = getDate(date), year = _a.year, month = _a.month, day = _a.day, hours = _a.hours, minutes = _a.minutes, seconds = _a.seconds;
    return format
        .replace(/y{4}/g, year)
        .replace(/M{2}/g, month)
        .replace(/d{2}/g, day)
        .replace(/H{2}/g, hours)
        .replace(/m{2}/g, minutes)
        .replace(/s{2}/g, seconds);
}
/**
 * 获取时间
 * @param date
 * @returns
 */
function getDate(date) {
    var time;
    if (Object(_types__WEBPACK_IMPORTED_MODULE_0__["isStr"])(date)) {
        time = +new Date(date.trim().replace(/-/g, "/"));
    }
    else if (date instanceof Date) {
        time = +date;
    }
    else if (typeof date === "number") {
        time = date;
    }
    if (isNaN(time))
        return null;
    return {
        year: "" + getYear(time),
        month: prefixZero(getMonth(time)),
        day: prefixZero(getDay(time)),
        hours: prefixZero(getHours(time)),
        minutes: prefixZero(getMinutes(time)),
        seconds: prefixZero(getSeconds(time)),
        time: time,
    };
}
/**
 * 获取年
 * @param time
 * @returns
 */
function getYear(time) {
    return new Date(getTime(time)).getFullYear();
}
/**
 * 获取月
 * @param time
 * @returns
 */
function getMonth(time) {
    return new Date(getTime(time)).getMonth() + 1;
}
/**
 * 获取日
 * @param time
 * @returns
 */
function getDay(time) {
    return new Date(getTime(time)).getDate();
}
/**
 * 获取时
 * @param time
 * @returns
 */
function getHours(time) {
    return new Date(getTime(time)).getHours();
}
/**
 * 获取分
 * @param time
 * @returns
 */
function getMinutes(time) {
    return new Date(getTime(time)).getMinutes();
}
/**
 * 获取秒
 * @param time
 * @returns
 */
function getSeconds(time) {
    return new Date(getTime(time)).getSeconds();
}
/**
 * 获取时间戳
 * @param time
 * @returns
 */
function getTime(time) {
    if (typeof time !== "number") {
        var resultDate = getDate(time);
        if (!resultDate)
            return 0;
        return resultDate.time;
    }
    return time;
}
/**
 * 转化时间处理
 * @param time
 * @returns
 */
function timestamp(time) {
    var reg = /^\d{13}$/g;
    if (typeof time === "string" && reg.test(time)) {
        return parseInt(time);
    }
    else if (time instanceof Date) {
        return +time;
    }
    else if (reg.test("" + time)) {
        return time;
    }
    return +new Date();
}
/**
 * 对比差异的时间处理
 * @param opts
 * @returns
 */
function diffTime(opts) {
    var currentTime = opts.currentTime, targetTime = opts.targetTime, diffTime = opts.diffTime, _a = opts.condition, condition = _a === void 0 ? ">" : _a;
    currentTime = timestamp(currentTime);
    targetTime = timestamp(targetTime);
    var diff = currentTime - targetTime;
    switch (condition) {
        case ">":
            return diff > diffTime;
        case ">=":
            return diff >= diffTime;
        case "<":
            return diff >= diffTime;
        case "<=":
            return diff <= diffTime;
        default:
            return true;
    }
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountDown", function() { return CountDown; });
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
//钩子命名


/**
 * 倒计时处理
 */
var CountDown = /** @class */ (function () {
    function CountDown(opts) {
        if (opts === void 0) { opts = {
            hooks: {},
        }; }
        this.delay = 1000;
        this.timer = 0;
        this.countDownTime = 0;
        this.options = opts;
    }
    //开始倒计时
    CountDown.prototype.start = function (countDownTime) {
        this.countDownTime = countDownTime;
        this._hookStart();
        this._tick();
    };
    //每阶段的处理
    CountDown.prototype._tick = function (delay) {
        var _this = this;
        if (delay === void 0) { delay = this.delay; }
        var tick = function (type) {
            if (type === void 0) { type = "tick"; }
            if (_this.countDownTime >= _this.delay) {
                _this.countDownTime -= _this.delay;
            }
            else {
                _this.countDownTime = 0;
            }
            if (type === "tick") {
                //开始不进行递减处理
                _this._hookTick();
                if (_this.countDownTime < _this.delay) {
                    _this._tick(_this.countDownTime);
                }
                else {
                    _this._tick();
                }
            }
            else if (type === "end") {
                _this._hookEnd();
            }
        };
        if (this.countDownTime <= 0) {
            tick("end");
        }
        else {
            //@ts-ignore
            this.timer = setTimeout(function () {
                tick();
            }, delay);
        }
    };
    //停止处理
    CountDown.prototype.stop = function () {
        this.resetTimeout();
    };
    //重置
    CountDown.prototype.reset = function () {
        this.countDownTime = 0;
        this.resetTimeout();
    };
    //清除定时处理
    CountDown.prototype.resetTimeout = function () {
        clearTimeout(this.timer);
        this.timer = 0;
    };
    /**
     * 执行制定的hook处理
     * @param type
     * @returns
     */
    CountDown.prototype._hook = function (type) {
        var hooks = this.options.hooks;
        return Object(_tools__WEBPACK_IMPORTED_MODULE_0__["hook"])(this, hooks[type]);
    };
    //递减处理
    CountDown.prototype._hookStart = function () {
        return this._hook("start");
    };
    //结束了
    CountDown.prototype._hookEnd = function () {
        this._hook("end");
        this.resetTimeout();
    };
    //递减处理
    CountDown.prototype._hookTick = function () {
        return this._hook("tick");
    };
    //生成倒计时显示
    CountDown.prototype.genViewDate = function (diffTime) {
        if (diffTime === void 0) { diffTime = this.countDownTime; }
        return Object(_time__WEBPACK_IMPORTED_MODULE_1__["genCountDownViewDate"])(diffTime);
    };
    return CountDown;
}());



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegExp", function() { return getRegExp; });
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

/**
 * 获取表达式
 * @param expr
 * @returns
 */
function getRegExp(expr) {
    var tm = "\\/*.?+$^[](){}|'\"";
    Object(_tools__WEBPACK_IMPORTED_MODULE_0__["each"])(tm, function (tmItem) {
        expr = expr.replace(new RegExp("\\" + tmItem, "g"), "\\" + tmItem);
    });
    return expr;
}


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "promise", function() { return promise; });
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

/**
 * 返回promise
 * @param hook
 * @returns
 */
function promise(hookHandler) {
    var _this = this;
    try {
        return new Promise(function (resolve, reject) {
            Object(_tools__WEBPACK_IMPORTED_MODULE_0__["hook"])(_this, hookHandler, [resolve, reject]);
        });
    }
    catch (e) {
        console.warn(e);
    }
}


/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=blue-utils.js.map