declare type TDateArg = string | number | Date;
interface TResultDate {
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
 * @param time
 * @returns
 */
export declare function prefixZero(time: number): string;
/**
 * 生成倒计时的数据
 * @param diffTime
 * @returns
 */
export declare function genCountDownViewDate(diffTime: number): {
    day: string;
    hours: string;
    minutes: string;
    second: string;
};
/**
 * 格式化时间
 * @param date
 * @param format
 * @returns
 */
export declare function formatDate(date: TDateArg, format: string): string;
/**
 * 获取时间
 * @param date
 * @returns
 */
export declare function getDate(date: TDateArg): TResultDate;
/**
 * 获取年
 * @param time
 * @returns
 */
export declare function getYear(time: TDateArg): number;
/**
 * 获取月
 * @param time
 * @returns
 */
export declare function getMonth(time: TDateArg): number;
/**
 * 获取日
 * @param time
 * @returns
 */
export declare function getDay(time: TDateArg): number;
/**
 * 获取时
 * @param time
 * @returns
 */
export declare function getHours(time: TDateArg): number;
/**
 * 获取分
 * @param time
 * @returns
 */
export declare function getMinutes(time: TDateArg): number;
/**
 * 获取秒
 * @param time
 * @returns
 */
export declare function getSeconds(time: TDateArg): number;
/**
 * 获取时间戳
 * @param time
 * @returns
 */
export declare function getTime(time: TDateArg): number;
/**
 * 转化时间处理
 * @param time
 * @returns
 */
export declare function timestamp(time: TCommonDate): number;
/**
 * 对比差异的时间处理
 * @param opts
 * @returns
 */
export declare function diffTime(opts: {
    currentTime: TCommonDate;
    targetTime: TCommonDate;
    diffTime: number;
    condition: `>` | `>=` | `<` | `<=`;
}): boolean;
export {};
