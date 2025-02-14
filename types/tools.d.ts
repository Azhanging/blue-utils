/**
 * 防抖
 * @hookHandler 方法函数定义
 * @delay 防抖延迟范围
 * @bindContext 是否需要绑定当前方法函数上下文，默认绑定
 */
export declare function debounce(hookHandler: Function, delay?: number, bindContext?: boolean): Function;
/**
 * 节流
 * @hookHandler 方法函数定义
 * @delay 节流延迟范围
 * @bindContext 是否需要绑定当前方法函数上下文，默认绑定
 */
export declare function throttle(hookHandler: Function, delay?: number, bindContext?: boolean): Function;
/**
 * 执行Function
 * @context 执行上下文
 * @cb 执行函数
 * @args 带入到执行行数参数值
 * @return 如果执行为函数，返回最终执行结果，否则返回原始执行回调
 */
export declare function hook(context: any, cb: any, args?: any[]): any;
/**
 * 遍历
 * @obj 遍历对象
 * @cb 遍历回调
 * @isReturn 是否返回所有的遍历回调返回值
 */
export declare function each(obj: any, cb: Function, isReturn?: boolean): any[] | void;
/**
 * 深拷贝
 * @value 需要深拷贝的指定值
 */
export declare function deepCopy(value: any): any;
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
export declare function getObjLen(object: any): number;
/**
 * 获取obj的keys
 * @object 对象值
 */
export declare function getObjKeys(object: any): any[] | void;
