//类型相关
const types = {
  //是否为空对象
  isEmptyPlainObject(object: any): boolean {
    return JSON.stringify(object) === "{}";
  },

  //是否为string
  isStr(val: string): boolean {
    return typeof val === "string";
  },

  //是否为obj对象
  isPlainObject(object: any): boolean {
    return !!(
      object &&
      !this.isArray(object) &&
      (this.isFunction(object.toString)
        ? object.toString() === "[object Object]"
        : true) &&
      object.constructor === Object
    );
  },

  //是否为数组
  isArray(val: any): boolean {
    return val instanceof Array;
  },

  //是否为对象Object Object
  isObject(object: any): boolean {
    return this.isPlainObject(object) || this.isArray(object);
  },

  //是否有值
  isDef(val: any): boolean {
    return val !== undefined && val !== null;
  },

  //是否为undefine 或者 null
  isUndef(val: any): boolean {
    return val === undefined || val === null;
  },

  //字符串是否为空
  isEmptyStr(val: string): boolean {
    return val.trim().length === 0;
  },

  //是否为true
  isTrue(bool: any): boolean {
    return bool === true;
  },

  //是否为false
  isFalse(bool: any): boolean {
    return bool === false;
  },

  //是否为function
  isFunction(fn: any): boolean {
    return typeof fn === "function";
  },

  //是否为error
  isError(error: any): boolean {
    return error instanceof Error;
  },

  //是否为布尔值
  isBoolean(bool: any): boolean {
    return typeof bool === "boolean";
  },
};

export default types;
