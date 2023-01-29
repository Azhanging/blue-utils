//格式化数值的类型
type FormatNumber = number | string;

/**
 * 格式化数字处理
 * @param number
 * @param fixed
 * @returns 
 */
export function formatNumber(number: FormatNumber, fixed: number = 2): string {
  if (typeof number === `string`) {
    number = parseFloat(number);
    //非正常数值
    if (isNaN(number)) {
      number = 0;
    }
  }
  return (number as number).toFixed(fixed);
}

/**
 * 数字精度的控制处理
 * @param number
 * @param fixed
 * @returns
 */
export function floatNumber(number: FormatNumber, fixed: number = 2) {
  return parseFloat(formatNumber(number, fixed));
}
