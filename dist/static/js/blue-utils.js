/*!
 * 
 * blue-utils.js 1.1.1
 * (c) 2016-2020 Blue
 * Released under the MIT License.
 * https://github.com/azhanging/blue-utils
 * time:Tue, 24 Dec 2019 09:51:49 GMT
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
/******/ 	__webpack_require__.p = "./static";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BlueUtils = function () {
  function BlueUtils() {
    _classCallCheck(this, BlueUtils);
  }

  _createClass(BlueUtils, [{
    key: 'nullPlainObject',


    //是否为空对象
    value: function nullPlainObject(object) {
      return JSON.stringify(object) === "{}";
    }

    //是否为string

  }, {
    key: 'isStr',
    value: function isStr(string) {
      return typeof string === 'string';
    }

    //是否为obj对象

  }, {
    key: 'isPlainObject',
    value: function isPlainObject(object) {
      return object && !this.isArray(object) && object !== null && object.toString() === '[object Object]' && object.constructor === Object;
    }

    //是否为数组

  }, {
    key: 'isArray',
    value: function isArray(array) {
      return array instanceof Array;
    }

    //是否为对象Object

  }, {
    key: 'isObjcet',
    value: function isObjcet(object) {
      return this.isPlainObject(object) || this.isArray(object);
    }

    //是否有值

  }, {
    key: 'isDef',
    value: function isDef(val) {
      return val !== undefined && val !== null;
    }

    //是否为undefine 或者 null

  }, {
    key: 'isUndef',
    value: function isUndef(val) {
      return val === undefined || val === null;
    }

    //字符串是否为空

  }, {
    key: 'isBlankSpace',
    value: function isBlankSpace(val) {
      return val.trim().length === 0;
    }

    //是否为true

  }, {
    key: 'isTrue',
    value: function isTrue(bool) {
      return bool === true;
    }

    //是否为false

  }, {
    key: 'isFalse',
    value: function isFalse(bool) {
      return bool === false;
    }

    //是否为function

  }, {
    key: 'isFunction',
    value: function isFunction(fn) {
      return typeof fn === 'function';
    }

    //是否为error

  }, {
    key: 'isError',
    value: function isError(error) {
      return error instanceof Error;
    }

    //是否为布尔值

  }, {
    key: 'isBoolean',
    value: function isBoolean(bool) {
      return typeof bool === 'boolean';
    }

    //执行function

  }, {
    key: 'hook',
    value: function hook(context) {
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
      var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

      if (typeof callback === 'function') {
        return callback.apply(context, args);
      }
      return callback;
    }

    //遍历

  }, {
    key: 'each',
    value: function each(obj, cb) {
      var isReturn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (this.isUndef(obj)) return;
      var i = 0,
          index = 0,
          newVal = [];

      var len = obj.length;

      if (this.isArray(obj)) {
        for (; i < len; i++) {
          if (isReturn) {
            newVal.push(cb(obj[i], i));
          } else {
            cb(obj[i], i);
          }
        }
      } else {
        for (i in obj) {
          if (!obj.hasOwnProperty(i)) continue;
          if (isReturn) {
            newVal.push(cb(obj[i], i, index++));
          } else {
            cb(obj[i], i, index++);
          }
        }
      }

      if (isReturn) return newVal;
    }
  }, {
    key: 'definePropertyVal',
    value: function definePropertyVal(obj, key, val) {
      Object.defineProperty(obj, key, {
        configurable: false,
        enumerable: false,
        value: val
      });
    }

    //深拷贝

  }, {
    key: 'deepCopy',
    value: function deepCopy(obj) {
      if (!obj || !(obj instanceof Array) && !(obj.toString() === "[object Object]")) return obj;
      //非纯对象类型，直接返回出去
      if (!(obj instanceof Array) && obj.constructor !== Object) return obj;
      var _obj = obj instanceof Array ? [] : {};
      for (var key in obj) {
        if (!obj.hasOwnProperty(key)) continue;
        if (obj instanceof Array || obj instanceof Object) {
          _obj[key] = this.deepCopy(obj[key]);
        } else {
          _obj[key] = obj[key];
        }
      }
      return _obj;
    }

    //扩展

  }, {
    key: 'extend',
    value: function extend() {
      var _this = this;

      //是否深拷贝
      var isDeep = true;
      //存放arguments的参数
      var objects = [].concat(Array.prototype.slice.call(arguments));
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
        if (index === objects.length - 1) return;
        var nextObject = objects[index + 1];
        _this.each(nextObject, function (obj, key) {
          if (_this.isPlainObject(obj)) {
            if (!object[key]) {
              object[key] = {};
            }
            object[key] = _this.extend(object[key], obj, isDeep);
          } else {
            object[key] = obj;
          }
        });
        objects[index + 1] = extendObject = object;
        objects[index] = null;
      });

      return extendObject;
    }

    //把当前key-value复制到对应对象的key-value上

  }, {
    key: 'copy',
    value: function copy(object, _object) {
      this.each(_object, function (obj, key) {
        object[key] = obj;
      });
    }

    //获取表达式

  }, {
    key: 'getRegExp',
    value: function getRegExp(expr) {
      var tm = '\\/*.?+$^[](){}|\'\"';
      this.each(tm, function (tmItem, index) {
        expr = expr.replace(new RegExp('\\' + tmItem, 'g'), '\\' + tmItem);
      });
      return expr;
    }

    //获取obj的长度

  }, {
    key: 'getObjLen',
    value: function getObjLen(obj) {
      var index = 0;
      this.each(obj, function () {
        ++index;
      });
      return index;
    }
  }, {
    key: 'getObjKeys',
    value: function getObjKeys(object) {
      return this.each(object, function (obj, key) {
        return key;
      }, true);
    }

    //get link query string

  }, {
    key: 'getLinkParams',
    value: function getLinkParams(link) {
      var linkType = link.split('?');
      var queryString = linkType[1];
      if (linkType.length > 0 && queryString && queryString !== '') {
        return queryString;
      }
      return '';
    }
  }, {
    key: 'getNoParamsLink',
    value: function getNoParamsLink() {
      var link = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      var linkType = link.split('?');
      return linkType[0];
    }

    //query string 转化为 object

  }, {
    key: 'parseParams',
    value: function parseParams(queryString) {
      var linkQuery = {};
      if (!queryString) return linkQuery;
      //是否存在原query
      (queryString.split('&') || []).forEach(function (queryItemString) {
        var splitQueryItem = queryItemString.split('=');
        var key = splitQueryItem[0];
        var value = splitQueryItem[1];
        linkQuery[key] = value;
      });
      return linkQuery;
    }

    //query 转化为 string

  }, {
    key: 'stringifyParams',
    value: function stringifyParams(query) {
      if (!this.isPlainObject(query)) return '';
      var _query = [];
      this.each(query, function (value, key) {
        _query.push(key + '=' + encodeURIComponent(value));
      });
      return _query.join('&');
    }

    //返回promise

  }, {
    key: 'promise',
    value: function promise(hook) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        _this2.hook(_this2, hook, [resolve, reject]);
      });
    }

    //防抖

  }, {
    key: 'debounce',
    value: function debounce(hook) {
      var _this3 = this;

      var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;

      var timer = 0;
      return function (ctx) {
        var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

        if (timer) clearTimeout(timer);
        timer = setTimeout(function () {
          _this3.hook(ctx, hook, args);
          timer = null;
        }, delay);
      };
    }

    //节流

  }, {
    key: 'throttle',
    value: function throttle(hook) {
      var _this4 = this;

      var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;

      var last = void 0,
          delayTimer = void 0;
      return function (ctx) {
        var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

        var now = +new Date();
        if (!last || last && now > last + delay) {
          last = now;
          _this4.hook(ctx, hook, args);
        }
      };
    }
  }]);

  return BlueUtils;
}();

BlueUtils.config = {
  jsonp: {
    callbackParamName: 'jsonp_callback'
  }
};

BlueUtils.prototype.jsonp = function () {

  var jsonpConfig = BlueUtils.config.jsonp;

  var options = {
    url: '',
    params: {},
    callbackParamName: jsonpConfig.callbackParamName,
    callback: function callback() {}
  };

  return function () {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};


    if (!window.BlueJsonp) {
      window.BlueJsonp = {
        id: 0,
        callback: {}
      };
    }

    var BlueJsonp = window.BlueJsonp;
    var utils = this;
    var _opts = this.extend(options, opts);
    var script = document.createElement('script');
    var callbackParamName = _opts.callbackParamName,
        callback = _opts.callback,
        url = _opts.url,
        params = _opts.params;

    var id = ++BlueJsonp.id;
    var JsonpCallback = BlueJsonp.callback;

    JsonpCallback[id] = callback;

    params[callbackParamName] = 'BlueJsonp.callback[' + id + ']';

    var linkParams = this.stringifyParams(this.extend(this.parseParams(this.getLinkParams(url)), params));

    var link = this.getNoParamsLink(url);

    script.src = link + (this.getObjKeys(linkParams).length > 0 ? '?' + linkParams : '');

    return this.promise(function (resolve, reject) {
      script.onload = function () {
        delete JsonpCallback[id - 1];
        document.head.removeChild(this);
        resolve();
      };
      script.onerror = function (error) {
        delete JsonpCallback[id];
        document.head.removeChild(this);
        reject();
      };
      document.head.appendChild(script);
    });
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (BlueUtils);

/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=blue-utils.js.map