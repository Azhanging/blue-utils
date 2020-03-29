/*!
 * 
 * blue-utils.js 1.1.6
 * (c) 2016-2020 Blue
 * Released under the MIT License.
 * https://github.com/azhanging/blue-utils
 * time:Sat, 28 Mar 2020 08:31:30 GMT
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
const blueUtils = {
    //是否为空对象
    isEmptyPlainObject(object) {
        return JSON.stringify(object) === "{}";
    },
    //是否为string
    isStr(val) {
        return typeof val === 'string';
    },
    //是否为obj对象
    isPlainObject(object) {
        return object && !this.isArray(object) && (object.toString() === '[object Object]') && (object.constructor === Object);
    },
    //是否为数组
    isArray(val) {
        return val instanceof Array;
    },
    //是否为对象Object Object
    isObject(object) {
        return this.isPlainObject(object) || this.isArray(object);
    },
    //是否有值
    isDef(val) {
        return val !== undefined && val !== null;
    },
    //是否为undefine 或者 null
    isUndef(val) {
        return val === undefined || val === null;
    },
    //字符串是否为空
    isEmptyStr(val) {
        return val.trim().length === 0;
    },
    //是否为true
    isTrue(bool) {
        return bool === true;
    },
    //是否为false
    isFalse(bool) {
        return bool === false;
    },
    //是否为function
    isFunction(fn) {
        return typeof fn === 'function';
    },
    //是否为error
    isError(error) {
        return error instanceof Error;
    },
    //是否为布尔值
    isBoolean(bool) {
        return typeof bool === 'boolean';
    },
    //执行function
    hook(context, cb, args = []) {
        if (this.isFunction(cb)) {
            return cb.apply(context, args);
        }
        return cb;
    },
    //遍历
    each(obj, cb, isReturn = false) {
        if (this.isUndef(obj))
            return;
        let i = 0, index = 0, newVal = [];
        const len = obj.length;
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
    deepCopy(obj) {
        if (!obj || !(this.isArray(obj)) && !(obj.toString() === "[object Object]"))
            return obj;
        //非纯对象类型，直接返回出去
        if (!(this.isArray(obj)) && (obj.constructor !== Object))
            return obj;
        const _obj = this.isArray(obj) ? [] : {};
        for (let key in obj) {
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
    extend(...args) {
        //是否深拷贝
        let isDeep = true;
        //存放arguments的参数
        let objects = [...args];
        //合并后的obj
        let extendObject = {};
        const lastArg = objects[objects.length - 1];
        //检查最后一个参数是否为深拷贝
        if (this.isBoolean(lastArg)) {
            isDeep = lastArg;
            [].pop.call(objects);
        }
        //默认深拷贝，否则最后一个参数为深拷贝布尔值
        if (isDeep) {
            objects = this.deepCopy(objects);
        }
        this.each(objects, (object, index) => {
            if (index === (objects.length - 1))
                return;
            const nextObject = objects[index + 1];
            this.each(nextObject, (obj, key) => {
                if (this.isPlainObject(obj)) {
                    if (!object[key]) {
                        object[key] = {};
                    }
                    object[key] = this.extend(object[key], obj, isDeep);
                }
                else {
                    object[key] = obj;
                }
            });
            objects[index + 1] = extendObject = object;
            objects[index] = null;
        });
        return extendObject;
    },
    //获取表达式
    getRegExp(expr) {
        const tm = '\\/*.?+$^[](){}|\'\"';
        this.each(tm, (tmItem, index) => {
            expr = expr.replace(new RegExp('\\' + tmItem, 'g'), '\\' + tmItem);
        });
        return expr;
    },
    //获取obj的长度
    getObjLen(obj) {
        let index = 0;
        this.each(obj, () => {
            ++index;
        });
        return index;
    },
    getObjKeys(object) {
        return this.each(object, (obj, key) => {
            return key;
        }, true);
    },
    //get link query string
    getLinkParams(link) {
        const linkType = link.split('?');
        const queryString = linkType[1];
        if (linkType.length > 0 && queryString && queryString !== '') {
            return queryString;
        }
        return '';
    },
    getNoParamsLink(link = '') {
        const linkType = link.split('?');
        return linkType[0];
    },
    //query string 转化为 object
    parseParams(queryString) {
        const linkQuery = {};
        if (!queryString)
            return linkQuery;
        //是否存在原query
        (queryString.split('&') || []).forEach((queryItemString) => {
            const splitQueryItem = queryItemString.split('=');
            linkQuery[splitQueryItem[0]] = splitQueryItem[1];
        });
        return linkQuery;
    },
    //query 转化为 string
    stringifyParams(query) {
        if (!this.isPlainObject(query))
            return '';
        let _query = [];
        this.each(query, (value, key) => {
            if (this.isPlainObject(value) || this.isArray(value)) {
                value = JSON.stringify(value);
            }
            _query.push(`${key}=${encodeURIComponent(value)}`);
        });
        return _query.join('&');
    },
    //返回promise
    promise(hook) {
        return new Promise((resolve, reject) => {
            this.hook(this, hook, [resolve, reject]);
        });
    },
    //防抖
    debounce(hook, delay = 200) {
        let timer = 0;
        return (ctx, args = []) => {
            if (timer)
                clearTimeout(timer);
            timer = setTimeout(() => {
                this.hook(ctx, hook, args);
                timer = null;
            }, delay);
        };
    },
    //节流
    throttle(hook, delay = 200) {
        let last;
        return (ctx, args = []) => {
            const now = +new Date();
            if (!last || (last && (now > (last + delay)))) {
                last = now;
                this.hook(ctx, hook, args);
            }
        };
    }
};
/* harmony default export */ __webpack_exports__["default"] = (blueUtils);


/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=blue-utils.js.map