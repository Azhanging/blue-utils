import { hook } from "./tools";

/**
 * 返回promise
 * @param hook
 * @returns
 */
export function promise(hookHandler: Function): Promise<any> {
  try {
    return new Promise((resolve?: Function, reject?: Function) => {
      hook(this, hookHandler, [resolve, reject]);
    });
  } catch (e) {
    console.warn(e);
  }
}
