declare type FormatNumber = number | string;
/**
 * 格式化数字处理
 * @number 数值
 * @fixed 精度值，默认百分位
 */
export declare function formatNumber(number: FormatNumber, fixed?: number): string;
/**
 * 数字精度的控制处理
 * @number 数值
 * @fixed 精度值，默认百分位
 */
export declare function floatNumber(number: FormatNumber, fixed?: number): number;
export {};
