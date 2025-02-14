declare type TDateArg = string | number | Date;
export interface TResultDate {
    year: string;
    month: string;
    day: string;
    hours: string;
    minutes: string;
    seconds: string;
    time: number;
}
declare type TCommonDate = number | string | Date;
/**
 * 补0操作
 * @number 数值
 */
export declare function prefixZero(number: number): string;
/**
 * 生成倒计时的数据
 * @diffTime 时间戳
 */
export declare function genCountDownViewDate(diffTime: number): {
    day: string;
    hours: string;
    minutes: string;
    second: string;
};
/**
 * 格式化时间
 * @date 时间
 * @format 格式化值
 */
export declare function formatDate(date: TDateArg, format?: string): string;
/**
 * 获取时间
 * @date 时间值
 */
export declare function getDate(date?: TDateArg): TResultDate;
/**
 * 获取年
 * @time 时间值
 * @returns
 */
export declare function getYear(time?: TDateArg): number;
/**
 * 获取月
 * @time 时间值
 */
export declare function getMonth(time?: TDateArg): number;
/**
 * 获取日
 * @time 时间值
 */
export declare function getDay(time?: TDateArg): number;
/**
 * 获取时
 * @time 时间值
 */
export declare function getHours(time?: TDateArg): number;
/**
 * 获取分
 * @time 时间值
 */
export declare function getMinutes(time?: TDateArg): number;
/**
 * 获取秒
 * @time 时间值
 */
export declare function getSeconds(time?: TDateArg): number;
/**
 * 获取时间戳
 * @time 时间值
 */
export declare function getTime(time?: TDateArg): number;
/**
 * 转化时间处理
 * @time 时间值
 */
export declare function timestamp(time: TCommonDate): number;
/**
 * 对比差异的时间处理
 * @opts 对比时间配置
 */
export declare function diffTime(opts: {
    currentTime: TCommonDate;
    targetTime: TCommonDate;
    diffTime: number;
    condition: `>` | `>=` | `<` | `<=`;
}): boolean;
export {};
