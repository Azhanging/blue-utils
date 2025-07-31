/**
 * @value 需要转换为string的json值
 */
export declare function jsonStringify<T>(value: T): string | T;
/**
 * @value 需要转换为实体对象的json值
 */
export declare function jsonParse<T>(value: T): object | any[] | T;
