/**
 * 防抖
 * @param hook
 * @param delay
 * @returns
 */
export declare function debounce(hookHandler: Function, delay?: number): Function;
/**
 * 节流
 * @param hook
 * @param delay
 * @returns
 */
export declare function throttle(hookHandler: Function, delay?: number): Function;
/**
 * 执行function
 * @param context
 * @param cb
 * @param args
 * @returns
 */
export declare function hook(context: any, cb: any, args?: any[]): any;
/**
 * 遍历
 * @param obj
 * @param cb
 * @param isReturn
 * @returns
 */
export declare function each(obj: any, cb: Function, isReturn?: boolean): any[] | void;
/**
 * 深拷贝
 * @param obj
 * @returns
 */
export declare function deepCopy(obj: any): any;
/**
 * 扩展
 * @param args
 * @returns
 */
export declare function extend(...args: any[]): any;
/**
 * 生成一个UUID
 * @returns
 */
export declare function genGuid(): string;
/**
 * 对象转数组，对于上面[数组转对象]的转换是相对的
 * @param object
 * @returns
 */
export declare function objectToArray<V>(object: {
    [key: string]: V;
}): V[];
/**
 * 数组转对象，指定key做承载点
 * @param array
 * @param key
 * @returns
 */
export declare function arrayToObject<Item, Key extends keyof Item>(array: Item[], key: Key): {
    [key in keyof Item]?: Item;
};
/**
 * 获取obj的长度
 * @param obj
 * @returns
 */
export declare function getObjLen(obj: any): number;
/**
 * 获取obj的keys
 * @param object
 * @returns
 */
export declare function getObjKeys(object: any): any[] | void;
