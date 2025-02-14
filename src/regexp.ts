import { each } from "./tools";
/**
 * 获取表达式
 * @expr 正则表达式
 */
export function getRegExp(expr): string {
  const tm = `\\/*.?+$^[](){}|'\"`;
  each(tm, (tmItem: any) => {
    expr = expr.replace(new RegExp(`\\` + tmItem, `g`), `\\` + tmItem);
  });
  return expr;
}
