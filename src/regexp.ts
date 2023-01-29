import { each } from "./tools";
/**
 * 获取表达式
 * @param expr
 * @returns
 */
export function getRegExp(expr): string {
  const tm = "\\/*.?+$^[](){}|'\"";
  each(tm, (tmItem) => {
    expr = expr.replace(new RegExp("\\" + tmItem, "g"), "\\" + tmItem);
  });
  return expr;
}
