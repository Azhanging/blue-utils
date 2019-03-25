//blue utils 常用工具类 ES5
function BlueUtils() {
}

//工具方法
BlueUtils.prototype = {

  constructor: BlueUtils,

  //是否为空的对象
  nullPlainObject: function (val) {
    return JSON.stringify(val) === "{}";
  },

  //是否为字符串
  isStr: function (val) {
    return typeof val === 'string';
  },

  //是否为对象类型
  isPlainObject: function (val) {
    return val && val !== null && (val.toString() === '[object Object]');
  },

  //是否为数组
  isArray: function (val) {
    return val instanceof Array;
  },

  //是否为对象
  isObjcet: function (val) {
    return this.isPlainObject(val) || this.isArray(val);
  },

  //是否为定义
  isDef: function (val) {
    return val !== undefined && val !== null;
  },

  //是否为未定义
  isUndef: function (val) {
    return val === undefined || val === null;
  },

  //val是否为空
  isBlankSpace: function (val) {
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

  //执行某一段在context 中的 function ，带上指定的arguments
  hook: function (context, callback, args) {

    if (callback === undefined) callback = function () {
    };

    if (args === undefined) args = [];

    if (this.isFunction(callback)) {
      return callback.apply(context, args);
    }
  },

  //遍历
  each: function (obj, cb, isReturn) {

    if (!isReturn) isReturn = false;

    if (this.isUndef(obj)) return;

    var i = 0,
      index = 0,
      newVal = [],
      len = obj.length;

    if (this.isArray(obj) || this.isStr(obj)) {
      for (; i < len; i++) {
        if (isReturn) {
          newVal.push(cb(obj[i], i));
        } else {
          cb(obj[i], i);
        }
      }
    } else if (this.isPlainObject(obj)) {
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
  },

  //深拷贝
  deepCopy: function (obj) {
    if (!obj || !(obj instanceof Array) && !(obj.toString() === "[object Object]")) return obj;
    var _obj = obj instanceof Array ? [] : {};
    for (var key in obj) {
      if (!obj.hasOwnProperty(key)) continue;
      if ((obj instanceof Array) || (obj instanceof Object)) {
        _obj[key] = this.deepCopy(obj[key]);
      } else {
        _obj[key] = obj[key];
      }
    }
    return _obj;
  },

  //扩展
  extend: function (object, _object, isDeep) {

    if (isDeep === undefined) isDeep = true;

    if (isDeep) object = this.deepCopy(object);

    var oldObjKeys = this.each(object, function (obj, key) {
      return key;
    }, true);

    this.each(_object, function (obj, key) {

      var findIndexInOld = oldObjKeys.indexOf(key);

      if (findIndexInOld != -1) {
        oldObjKeys.splice(findIndexInOld, 1);
      }

      if (this.isPlainObject(obj)) {
        if (!object[key]) {
          object[key] = {};
        }
        this.extend(object[key], obj, isDeep);
      }
      object[key] = obj;
    }.bind(this));

    this.each(oldObjKeys, function (key) {
      _object[key] = object[key];
    });

    return object;
  },

  //把当前key-value复制到对应对象的key-value上
  copy: function (object, _object) {
    this.each(_object, function (obj, key) {
      object[key] = obj;
    });
  },

  //获取表达式
  getRegExp: function (expr) {
    var tm = '\\/*.?+$^[](){}|\'\"';
    this.each(tm, function (tmItem, index) {
      expr = expr.replace(new RegExp('\\' + tmItem, 'g'), '\\' + tmItem);
    });
    return expr;
  },

  //或者object的长度
  getObjLen: function (obj) {
    var index = 0;
    this.each(obj, function () {
      ++index;
    });
    return index;
  },

  //获取链接中的参数
  getLinkParams: function (link) {
    var linkType = link.split('?');
    var queryString = linkType[1];
    if (linkType.length > 0 && queryString && queryString !== '') {
      return queryString;
    }
    return '';
  },

  //query string 转化为 object
  parseParams: function (queryString) {
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
  },

  //query 转化为 string
  stringifyParams: function (query) {
    if (!this.isPlainObject(query)) return '';
    var _query = [];
    this.each(query, function (value, key) {
      _query.push(key + '=' + encodeURIComponent(value));
    });
    return _query.join('&');
  }
};

var blueUtils = new BlueUtils();

module.exports = blueUtils;
