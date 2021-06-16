declare const types: {
    isEmptyPlainObject(object: any): boolean;
    isStr(val: string): boolean;
    isPlainObject(object: any): boolean;
    isArray(val: any): boolean;
    isObject(object: any): boolean;
    isDef(val: any): boolean;
    isUndef(val: any): boolean;
    isEmptyStr(val: string): boolean;
    isTrue(bool: any): boolean;
    isFalse(bool: any): boolean;
    isFunction(fn: any): boolean;
    isError(error: any): boolean;
    isBoolean(bool: any): boolean;
};
export default types;
