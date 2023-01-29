/**
 * 是否为空对象
 * @param object
 * @returns boolean
 */
export function isEmptyPlainObject(object: any): boolean {
  return JSON.stringify(object) === "{}";
}
/**
 * 是否为string
 * @param val string
 * @returns boolean
 */
export function isStr(val: any): boolean {
  return typeof val === "string";
}

/**
 * 是否为obj对象
 * @param object
 * @returns boolean
 */
export function isPlainObject(object: any): boolean {
  return !!(
    object &&
    !isArray(object) &&
    (isFunction(object.toString)
      ? object.toString() === "[object Object]"
      : true) &&
    object.constructor === Object
  );
}

/**
 * 是否为数组
 * @param val
 * @returns boolean
 */
export function isArray(val: any): boolean {
  return val instanceof Array;
}

/**
 * 是否为对象Object Object
 * @param object
 * @returns boolean
 */
export function isObject(object: any): boolean {
  return isPlainObject(object) || isArray(object);
}

/**
 * 是否有值
 * @param val
 * @returns boolean
 */
export function isDef(val: any): boolean {
  return val !== undefined && val !== null;
}

/**
 * 是否为undefine 或者 null
 * @param val
 * @returns boolean
 */
export function isUndef(val: any): boolean {
  return val === undefined || val === null;
}

/**
 * 字符串是否为空
 * @param val
 * @returns boolean
 */
export function isEmptyStr(val: string): boolean {
  return val.trim().length === 0;
}

/**
 * 是否为true
 * @param bool
 * @returns boolean
 */
export function isTrue(bool: any): boolean {
  return bool === true;
}

/**
 * 是否为false
 * @param bool
 * @returns
 */
export function isFalse(bool: any): boolean {
  return bool === false;
}

/**
 * 是否为function
 * @param fn
 * @returns
 */
export function isFunction(fn: any): boolean {
  return typeof fn === "function";
}

/**
 * 是否为error
 * @param error
 * @returns
 */
export function isError(error: any): boolean {
  return error instanceof Error;
}

/**
 * 是否为布尔值
 * @param bool
 * @returns
 */
export function isBoolean(bool: any): boolean {
  return typeof bool === "boolean";
}