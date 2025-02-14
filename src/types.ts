/**
 * 是否为空对象
 * @value
 */
export function isEmptyPlainObject(value: any): boolean {
  return JSON.stringify(value) === `{}`;
}
/**
 * 是否为string
 * @value string
 */
export function isStr(value: any): boolean {
  return typeof value === `string`;
}

/**
 * 是否为obj对象
 * @value
 */
export function isPlainObject(value: any): boolean {
  return !!(
    value &&
    !isArray(value) &&
    (isFunction(value.toString)
      ? value.toString() === `[object Object]`
      : true) &&
    value.constructor === Object
  );
}

/**
 * 是否为数组
 * @value
 */
export function isArray(value: any): boolean {
  return value instanceof Array;
}

/**
 * 是否为对象Object Object
 * @value
 */
export function isObject(value: any): boolean {
  return isPlainObject(value) || isArray(value);
}

/**
 * 是否有值
 * @value
 */
export function isDef(value: any): boolean {
  return value !== undefined && value !== null;
}

/**
 * 是否为undefine 或者 null
 * @value
 */
export function isUndef(value: any): boolean {
  return value === undefined || value === null;
}

/**
 * 字符串是否为空
 * @value
 */
export function isEmptyStr(value: string): boolean {
  return value.trim().length === 0;
}

/**
 * 是否为true
 * @value
 */
export function isTrue(value: any): boolean {
  return value === true;
}

/**
 * 是否为false
 * @value
 */
export function isFalse(value: any): boolean {
  return value === false;
}

/**
 * 是否为function
 * @value
 */
export function isFunction(value: any): boolean {
  return typeof value === `function`;
}

/**
 * 是否为error
 * @value
 */
export function isError(value: any): boolean {
  return value instanceof Error;
}

/**
 * 是否为布尔值
 * @value
 */
export function isBoolean(value: any): boolean {
  return typeof value === `boolean`;
}
