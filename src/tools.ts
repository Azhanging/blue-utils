import {
  isFunction,
  isUndef,
  isArray,
  isStr,
  isPlainObject,
  isBoolean,
} from "./types";

//防抖与节流的返回回调处理
type DebounceThrottleCallback<T = true> = T extends true
  ? (ctx?: any, args?: any[]) => void
  : (...args: any[]) => void;

//防抖与节流回调
function debounceThrottleCallback<T>(
  bindContext: T,
  handler: Function
): DebounceThrottleCallback<T> {
  //bind context
  if (bindContext) {
    return function (ctx = this, args = []) {
      handler.call(ctx, args);
    } as DebounceThrottleCallback<T>;
  } else {
    return function (...args) {
      handler.call(this, args);
    } as DebounceThrottleCallback<T>;
  }
}

/**
 * 防抖
 * @hookHandler 方法函数定义
 * @delay 防抖延迟范围
 * @bindContext 是否需要绑定当前方法函数上下文，默认绑定
 */
export function debounce<T extends boolean>(
  hookHandler: Function,
  delay: number = 200,
  bindContext: T = true as T
): DebounceThrottleCallback<T> {
  let timer: any = 0;
  return debounceThrottleCallback(bindContext, function (args: any[] = []) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      hook(this, hookHandler, args);
      timer = null;
    }, delay);
  });
}

/**
 * 节流
 * @hookHandler 方法函数定义
 * @delay 节流延迟范围
 * @bindContext 是否需要绑定当前方法函数上下文，默认绑定
 */
export function throttle<T extends boolean>(
  hookHandler: Function,
  delay: number = 200,
  bindContext: T = true as T
): DebounceThrottleCallback<T> {
  let last: number;
  return debounceThrottleCallback(bindContext, function (args: any[] = []) {
    const now: number = +new Date();
    if (!last || (last && now > last + delay)) {
      last = now;
      hook(this, hookHandler, args);
    }
  });
}

/**
 * 执行Function
 * @context 执行上下文
 * @cb 执行函数
 * @args 带入到执行行数参数值
 * @return 如果执行为函数，返回最终执行结果，否则返回原始执行回调
 */
export function hook(context: any = this, cb: any, args: any[] = []): any {
  if (isFunction(cb)) {
    return cb.apply(context, args);
  }
  return cb;
}

type EachArrayOrStringCallback<F> = (item?: F, index?: number) => any;
type EachObjectCallback<F> = (item?: F, key?: string, index?: number) => any;
type EachData<T> = T[] | { [key: string]: T } | string;
type EachCallback<T extends EachData<F>, F> = T extends F[] | string
  ? EachArrayOrStringCallback<F>
  : EachObjectCallback<F>;
/**
 * 遍历
 * @obj 遍历对象
 * @cb 遍历回调
 * @isReturn 是否返回所有的遍历回调返回值
 */
export function each<T extends EachData<F>, F>(
  value: T,
  callback: EachCallback<T, F>,
  isReturn: boolean = false
): any[] | void {
  if (isUndef(value)) return;
  let returnValue: any[] = [];
  //数组 || 字符串
  if (isArray(value) || isStr(value)) {
    //遍历数据为数组类型
    const len: number = value.length;
    for (let i = 0; i < len; i++) {
      const callbackValue = (callback as EachArrayOrStringCallback<F | string>)(
        value[i],
        i
      );
      if (isReturn) {
        returnValue.push(callbackValue);
      }
    }
  } else if (isPlainObject(value)) {
    //遍历数据为Object类型
    let index: number = 0;
    for (let key in value) {
      const callbackValue = (callback as EachObjectCallback<F>)(
        value[key as string],
        key,
        index++
      );
      if (isReturn) {
        returnValue.push(callbackValue);
      }
    }
  }
  //返回值
  if (isReturn) return returnValue;
}

/**
 * 深拷贝
 * @value 需要深拷贝的指定值
 */
export function deepCopy<T>(value: T): T {
  if (!value || (!isArray(value) && !isPlainObject(value))) {
    return value;
  }
  //非纯对象类型，直接返回出去
  if (!isArray(value) && value.constructor !== Object) return value;
  const _value: any = isArray(value) ? [] : {};
  for (let key in value) {
    if (isArray(value) || isPlainObject(value)) {
      _value[key] = deepCopy(value[key]);
    } else {
      _value[key] = value[key];
    }
  }
  return _value;
}

/**
 * 扩展
 * @args 扩展值，最后一个为布尔值来决定是否需要深拷贝进行处理
 * @returns
 */
export function extend(...args: any[]): any {
  //是否深拷贝
  let isDeep: boolean = true;
  //存放arguments的参数
  let objects = [...args];
  //合并后的obj
  let extendObject = {};

  const lastArg: any = objects[objects.length - 1];

  //检查最后一个参数是否为深拷贝
  if (isBoolean(lastArg)) {
    isDeep = lastArg;
    [].pop.call(objects);
  }

  //默认深拷贝，否则最后一个参数为深拷贝布尔值
  if (isDeep) {
    objects = deepCopy(objects);
  }

  each(objects, (object: any, index: number) => {
    //最后一位只做返回处理
    if (index === objects.length - 1) {
      return (extendObject = objects[index]);
    }
    const nextObject = objects[index + 1];
    each(nextObject, (obj: any, key: string) => {
      !object && (object = {});
      if (isPlainObject(obj)) {
        if (!object[key] || !isPlainObject(object[key])) {
          object[key] = {};
        }
        object[key] = extend(object[key], obj, isDeep);
      } else if (
        (obj === undefined && object[key] === undefined) ||
        obj !== undefined
      ) {
        object[key] = obj;
      }
    });
    objects[index + 1] = extendObject = object;
    objects[index] = undefined;
  });

  return extendObject;
}

/**
 * 生成一个UUID
 */
export function genGuid(): string {
  function gen(): string {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  }
  return `${gen()}${gen()}-${gen()}-${gen()}-${gen()}-${gen()}${gen()}${gen()}`;
}

/**
 * 对象转数组，对于上面[数组转对象]的转换是相对的
 * @object 对象值
 */
export function objectToArray<V>(object: { [key: string]: V }): V[] {
  const array: any[] = [];
  for (let key in object) {
    array.push(object[key]);
  }
  return array;
}

/**
 * 数组转对象，指定key做承载点
 * @array 数组值
 * @key 提取的key值
 */
export function arrayToObject<Item, Key extends keyof Item>(
  array: Item[],
  key: Key
): {
  [key in keyof Item]?: Item;
} {
  const newObj = {};
  each(array, (item: any, index: number) => {
    const keyContent: string | number = item[key];
    newObj[keyContent || `$${index}`] = item;
  });
  return newObj;
}

/**
 * 获取obj的长度
 * @object 对象值
 */
export function getObjLen(object: { [key: string]: any }): number {
  let index: number = 0;
  each(object, () => {
    ++index;
  });
  return index;
}

/**
 * 获取obj的keys
 * @object 对象值
 */
export function getObjKeys(object: { [key: string]: any }): string[] | void {
  return each(
    object,
    (obj, key) => {
      return key;
    },
    true
  );
}
