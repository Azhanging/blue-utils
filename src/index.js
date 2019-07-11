class BlueUtils {

  //是否为空对象
  nullPlainObject(object) {
    return JSON.stringify(object) === "{}";
  }

  //是否为string
  isStr(string) {
    return typeof string === 'string';
  }

  //是否为obj对象
  isPlainObject(object) {
    return object && !this.isArray(object) && object !== null && (object.toString() === '[object Object]');
  }

  //是否为数组
  isArray(array) {
    return array instanceof Array;
  }

  //是否为对象Object
  isObjcet(object) {
    return this.isPlainObject(object) || this.isArray(object);
  }

  //是否有值
  isDef(val) {
    return val !== undefined && val !== null;
  }

  //是否为undefine 或者 null
  isUndef(val) {
    return val === undefined || val === null;
  }

  //字符串是否为空
  isBlankSpace(val) {
    return val.trim().length === 0;
  }

  //是否为true
  isTrue(bool) {
    return bool === true;
  }

  //是否为false
  isFalse(bool) {
    return bool === false;
  }

  //是否为function
  isFunction(fn) {
    return typeof fn === 'function';
  }

  //是否为error
  isError(error) {
    return error instanceof Error;
  }

  //是否为布尔值
  isBoolean(bool) {
    return typeof bool === 'boolean';
  }

  //执行function
  hook(context, callback = function () {
  }, args = []) {
    if (typeof callback === 'function') {
      return callback.apply(context, args);
    }
  }

  //遍历
  each(obj, cb, isReturn = false) {
    if (this.isUndef(obj)) return;
    let i = 0,
      index = 0,
      newVal = [];

    const len = obj.length;

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

  definePropertyVal(obj, key, val) {
    Object.defineProperty(obj, key, {
      configurable: false,
      enumerable: false,
      value: val
    });
  }

  //深拷贝
  deepCopy(obj) {
    if (!obj || !(obj instanceof Array) && !(obj.toString() === "[object Object]")) return obj;
    const _obj = obj instanceof Array ? [] : {};
    for (let key in obj) {
      if (!obj.hasOwnProperty(key)) continue;
      if ((obj instanceof Array) || (obj instanceof Object)) {
        _obj[key] = this.deepCopy(obj[key]);
      } else {
        _obj[key] = obj[key];
      }
    }
    return _obj;
  }

  //扩展
  extend() {
    //是否深拷贝
    let isDeep = true;
    //存放arguments的参数
    let objects = [...arguments];
    //合并后的obj
    let extendObject = {};

    const lastArg = objects[objects.length - 1];

    if (this.isBoolean(lastArg)) {
      isDeep = lastArg;
      [].pop.call(objects);
      if (isDeep) {
        objects = this.deepCopy(objects);
      }
    }

    this.each(objects, (object, index) => {

      if (index === (objects.length - 1)) return;

      const nextObject = objects[index + 1];

      this.each(nextObject, (obj, key) => {
        if (this.isPlainObject(obj)) {
          if (!object[key]) {
            object[key] = {};
          }
          object[key] = this.extend(object[key], obj, isDeep);
        } else {
          object[key] = obj;
        }
      });

      extendObject = object;

    });

    return extendObject;
  }

  //把当前key-value复制到对应对象的key-value上
  copy(object, _object) {
    this.each(_object, (obj, key) => {
      object[key] = obj;
    });
  }

  //获取表达式
  getRegExp(expr) {
    const tm = '\\/*.?+$^[](){}|\'\"';
    this.each(tm, (tmItem, index) => {
      expr = expr.replace(new RegExp('\\' + tmItem, 'g'), '\\' + tmItem);
    });
    return expr;
  }

  //获取obj的长度
  getObjLen(obj) {
    let index = 0;
    this.each(obj, () => {
      ++index;
    });
    return index;
  }

  getObjKeys(object) {
    return this.each(object, (obj, key) => {
      return key;
    }, true);
  }

  //get link query string
  getLinkParams(link) {
    const linkType = link.split('?');
    const queryString = linkType[1];
    if (linkType.length > 0 && queryString && queryString !== '') {
      return queryString;
    }
    return '';
  }

  //query string 转化为 object
  parseParams(queryString) {
    const linkQuery = {};
    if (!queryString) return linkQuery;
    //是否存在原query
    (queryString.split('&') || []).forEach((queryItemString) => {
      const splitQueryItem = queryItemString.split('=');
      const key = splitQueryItem[0];
      const value = splitQueryItem[1];
      linkQuery[key] = value;
    });
    return linkQuery;
  }

  //query 转化为 string
  stringifyParams(query) {
    if (!this.isPlainObject(query)) return '';
    let _query = [];
    this.each(query, (value, key) => {
      _query.push(`${key}=${encodeURIComponent(value)}`);
    });
    return _query.join('&');
  }

  //返回promise
  promise(hook) {
    return new Promise((resolve, reject) => {
      this.hook(this, hook, [resolve, reject]);
    });
  }

  //防抖
  debounce(hook, delay = 200) {
    let timer = 0;
    return (ctx, args = []) => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        this.hook(ctx, hook, args);
        timer = null;
      }, delay);
    }
  }

  //节流
  throttle(hook, delay = 200) {
    let last, delayTimer;
    return (ctx, args = []) => {
      const now = +new Date();
      if (!last || (last && (now > (last + delay)))) {
        last = now;
        this.hook(ctx, hook, args);
      }
    }
  }

}

export default BlueUtils;
