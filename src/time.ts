import { isStr } from "./types";

//时间参数
type TDateArg = string | number | Date;

interface TResultDate {
  year: string;
  month: string;
  day: string;
  hours: string;
  minutes: string;
  seconds: string;
  time: number;
}

//通用的时间类型
type TCommonDate = number | string | Date;

/**
 * 补0操作
 * @param time
 * @returns
 */
export function prefixZero(time: number): string {
  if (time < 10) {
    return `0${time}`;
  }
  return `${time}`;
}

const TICK_TIME = 1000;

/**
 * 生成倒计时的数据
 * @param diffTime
 * @returns
 */
export function genCountDownViewDate(diffTime: number): {
  day: string;
  hours: string;
  minutes: string;
  second: string;
} {
  if (diffTime < TICK_TIME) {
    //毫秒转化为秒
    diffTime = 0;
  }
  //毫秒转化为秒
  diffTime = diffTime / TICK_TIME;
  return {
    day: prefixZero(Math.floor(diffTime / (60 * 60 * 24))),
    hours: prefixZero(Math.floor((diffTime / (60 * 60)) % 24)),
    minutes: prefixZero(Math.floor((diffTime / 60) % 60)),
    second: prefixZero(Math.floor(diffTime % 60)),
  };
}

/**
 * 格式化时间
 * @param date
 * @param format
 * @returns
 */
export function formatDate(date: TDateArg, format: string): string {
  const { year, month, day, hours, minutes, seconds } = getDate(date);
  return format
    .replace(/y{4}/g, year)
    .replace(/M{2}/g, month)
    .replace(/d{2}/g, day)
    .replace(/H{2}/g, hours)
    .replace(/m{2}/g, minutes)
    .replace(/s{2}/g, seconds);
}

/**
 * 获取时间
 * @param date
 * @returns
 */
export function getDate(date: TDateArg): TResultDate {
  let time: number;
  if (isStr(date)) {
    time = +new Date((date as string).trim().replace(/-/g, "/"));
  } else if (date instanceof Date) {
    time = +date;
  } else if (typeof date === "number") {
    time = date;
  }
  if (isNaN(time)) return null;
  return {
    year: `${getYear(time)}`,
    month: prefixZero(getMonth(time)),
    day: prefixZero(getDay(time)),
    hours: prefixZero(getHours(time)),
    minutes: prefixZero(getMinutes(time)),
    seconds: prefixZero(getSeconds(time)),
    time,
  };
}

/**
 * 获取年
 * @param time
 * @returns
 */
export function getYear(time: TDateArg): number {
  return new Date(getTime(time)).getFullYear();
}

/**
 * 获取月
 * @param time
 * @returns
 */
export function getMonth(time: TDateArg): number {
  return new Date(getTime(time)).getMonth() + 1;
}

/**
 * 获取日
 * @param time
 * @returns
 */
export function getDay(time: TDateArg): number {
  return new Date(getTime(time)).getDate();
}

/**
 * 获取时
 * @param time
 * @returns
 */
export function getHours(time: TDateArg): number {
  return new Date(getTime(time)).getHours();
}

/**
 * 获取分
 * @param time
 * @returns
 */
export function getMinutes(time: TDateArg): number {
  return new Date(getTime(time)).getMinutes();
}

/**
 * 获取秒
 * @param time
 * @returns
 */
export function getSeconds(time: TDateArg): number {
  return new Date(getTime(time)).getSeconds();
}

/**
 * 获取时间戳
 * @param time
 * @returns
 */
export function getTime(time: TDateArg): number {
  if (typeof time !== "number") {
    const resultDate: TResultDate = getDate(time);
    if (!resultDate) return 0;
    return resultDate.time;
  }
  return time;
}

/**
 * 转化时间处理
 * @param time
 * @returns
 */
export function timestamp(time: TCommonDate): number {
  const reg = /^\d{13}$/g;
  if (typeof time === `string` && reg.test(time)) {
    return parseInt(time);
  } else if (time instanceof Date) {
    return +time;
  } else if (reg.test(`${time}`)) {
    return time as number;
  }
  return +new Date();
}

/**
 * 对比差异的时间处理
 * @param opts
 * @returns
 */
export function diffTime(opts: {
  currentTime: TCommonDate;
  targetTime: TCommonDate;
  diffTime: number;
  condition: `>` | `>=` | `<` | `<=`;
}): boolean {
  let { currentTime, targetTime, diffTime, condition = `>` } = opts;
  currentTime = timestamp(currentTime);
  targetTime = timestamp(targetTime);
  const diff: number = currentTime - targetTime;
  switch (condition) {
    case `>`:
      return diff > diffTime;
    case `>=`:
      return diff >= diffTime;
    case `<`:
      return diff >= diffTime;
    case `<=`:
      return diff <= diffTime;
    default:
      return true;
  }
}
