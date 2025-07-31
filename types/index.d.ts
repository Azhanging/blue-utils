import * as time from "./time";
import * as countDown from "./count-down";
declare const utils: {
    accAdd(num1: string | number, num2: string | number): number;
    accSub(num1: string | number, num2: string | number): number;
    accDiv(num1: string | number, num2: string | number): number;
    accMul(num1: string | number, num2: string | number): number;
    jsonStringify<T>(value: T): string | T;
    jsonParse<T_1>(value: T_1): object | any[] | T_1;
    debounce<T_2 extends boolean>(hookHandler: Function, delay?: number, bindContext?: T_2): T_2 extends true ? (ctx?: any, args?: any[]) => void : (...args: any[]) => void;
    throttle<T_3 extends boolean>(hookHandler: Function, delay?: number, bindContext?: T_3): T_3 extends true ? (ctx?: any, args?: any[]) => void : (...args: any[]) => void;
    hook(context: any, cb: any, args?: any[]): any;
    each<T_4 extends string | {
        [key: string]: F;
    } | F[], F>(value: T_4, callback: T_4 extends string | F[] ? (item?: F, index?: number) => any : (item?: F, key?: string, index?: number) => any, isReturn?: boolean): void | any[];
    deepCopy<T_5>(value: T_5): T_5;
    extend(...args: any[]): any;
    genGuid(): string;
    objectToArray<V>(object: {
        [key: string]: V;
    }): V[];
    arrayToObject<Item, Key extends keyof Item>(array: Item[], key: Key): { [key in keyof Item]?: Item; };
    getObjLen(object: {
        [key: string]: any;
    }): number;
    getObjKeys(object: {
        [key: string]: any;
    }): void | string[];
    promise(hookHandler: Function): Promise<any>;
    getRegExp(expr: any): string;
    prefixZero(number: number): string;
    genCountDownViewDate(diffTime: number): {
        day: string;
        hours: string;
        minutes: string;
        second: string;
    };
    formatDate(date: string | number | Date, format?: string): string;
    getDate(date?: string | number | Date): time.TResultDate;
    getYear(time?: string | number | Date): number;
    getMonth(time?: string | number | Date): number;
    getDay(time?: string | number | Date): number;
    getHours(time?: string | number | Date): number;
    getMinutes(time?: string | number | Date): number;
    getSeconds(time?: string | number | Date): number;
    getTime(time?: string | number | Date): number;
    timestamp(time: string | number | Date): number;
    diffTime(opts: {
        currentTime: string | number | Date;
        targetTime: string | number | Date;
        diffTime: number;
        condition: ">" | ">=" | "<" | "<=";
    }): boolean;
    CountDown: typeof countDown.CountDown;
    getLinkParams(link: string): string;
    getNotParamsLink(link?: string): string;
    parseParams(queryString: string, decode?: boolean): any;
    stringifyParams(query: any, encode?: boolean): string;
    isEmptyPlainObject(value: any): boolean;
    isStr(value: any): value is string;
    isPlainObject(value: any): value is object;
    isArray(value: any): value is any[];
    isObject(value: any): boolean;
    isDef(value: any): boolean;
    isUndef(value: any): boolean;
    isEmptyStr(value: string): boolean;
    isTrue(value: any): boolean;
    isFalse(value: any): boolean;
    isFunction(value: any): value is Function;
    isError(value: any): boolean;
    isBoolean(value: any): value is boolean;
};
export default utils;
