/**
 * @value 需要转换为string的json值
 */
export function jsonStringify<T>(value: T): string | T {
  try {
    return JSON.stringify(value);
  } catch (e) {
    return value;
  }
}

/**
 * @value 需要转换为实体对象的json值
 */
export function jsonParse<T>(value: T): object | any[] | T {
  try {
    if (typeof value === `string`) {
      return JSON.parse(value);
    }
    return value;
  } catch (e) {
    return value;
  }
}
