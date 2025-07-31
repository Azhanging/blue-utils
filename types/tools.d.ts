declare type DebounceThrottleCallback<T = true> = T extends true ? (ctx?: any, args?: any[]) => void : (...args: any[]) => void;
/**
 * 防抖
 * @hookHandler 方法函数定义
 * @delay 防抖延迟范围
 * @bindContext 是否需要绑定当前方法函数上下文，默认绑定
 */
export declare function debounce<T extends boolean>(hookHandler: Function, delay?: number, bindContext?: T): DebounceThrottleCallback<T>;
/**
 * 节流
 * @hookHandler 方法函数定义
 * @delay 节流延迟范围
 * @bindContext 是否需要绑定当前方法函数上下文，默认绑定
 */
export declare function throttle<T extends boolean>(hookHandler: Function, delay?: number, bindContext?: T): DebounceThrottleCallback<T>;
/**
 * 执行Function
 * @context 执行上下文
 * @cb 执行函数
 * @args 带入到执行行数参数值
 * @return 如果执行为函数，返回最终执行结果，否则返回原始执行回调
 */
export declare function hook(context: any, cb: any, args?: any[]): any;
declare type EachArrayOrStringCallback<F> = (item?: F, index?: number) => any;
declare type EachObjectCallback<F> = (item?: F, key?: string, index?: number) => any;
declare type EachData<T> = T[] | {
    [key: string]: T;
} | string;
declare type EachCallback<T extends EachData<F>, F> = T extends F[] | string ? EachArrayOrStringCallback<F> : EachObjectCallback<F>;
/**
 * 遍历
 * @obj 遍历对象
 * @cb 遍历回调
 * @isReturn 是否返回所有的遍历回调返回值
 */
export declare function each<T extends EachData<F>, F>(value: T, callback: EachCallback<T, F>, isReturn?: boolean): any[] | void;
/**
 * 深拷贝
 * @value 需要深拷贝的指定值
 */
export declare function deepCopy<T>(value: T): T;
/**
 * 扩展
 * @args 扩展值，最后一个为布尔值来决定是否需要深拷贝进行处理
 * @returns
 */
export declare function extend(...args: any[]): any;
/**
 * 生成一个UUID
 */
export declare function genGuid(): string;
/**
 * 对象转数组，对于上面[数组转对象]的转换是相对的
 * @object 对象值
 */
export declare function objectToArray<V>(object: {
    [key: string]: V;
}): V[];
/**
 * 数组转对象，指定key做承载点
 * @array 数组值
 * @key 提取的key值
 */
export declare function arrayToObject<Item, Key extends keyof Item>(array: Item[], key: Key): {
    [key in keyof Item]?: Item;
};
/**
 * 获取obj的长度
 * @object 对象值
 */
export declare function getObjLen(object: {
    [key: string]: any;
}): number;
/**
 * 获取obj的keys
 * @object 对象值
 */
export declare function getObjKeys(object: {
    [key: string]: any;
}): string[] | void;
export {};
