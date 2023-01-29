declare type FormatNumber = number | string;
/**
 * 格式化数字处理
 * @param number
 * @param fixed
 * @returns
 */
export declare function formatNumber(number: FormatNumber, fixed?: number): string;
/**
 * 数字精度的控制处理
 * @param number
 * @param fixed
 * @returns
 */
export declare function floatNumber(number: FormatNumber, fixed?: number): number;
export {};
