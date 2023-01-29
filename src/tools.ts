import {
  isFunction,
  isUndef,
  isArray,
  isPlainObject,
  isBoolean,
} from "./types";
/**
 * 防抖
 * @param hook
 * @param delay
 * @returns
 */
export function debounce(hookHandler: Function, delay: number = 200): Function {
  let timer: any = 0;
  return (ctx: any, args: any[] = []) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      hook(ctx, hookHandler, args);
      timer = null;
    }, delay);
  };
}

/**
 * 节流
 * @param hook
 * @param delay
 * @returns
 */
export function throttle(hookHandler: Function, delay: number = 200): Function {
  let last: number;
  return (ctx, args: any[] = []) => {
    const now: number = +new Date();
    if (!last || (last && now > last + delay)) {
      last = now;
      hook(ctx, hookHandler, args);
    }
  };
}

/**
 * 执行function
 * @param context
 * @param cb
 * @param args
 * @returns
 */
export function hook(context: any, cb: any, args: any[] = []) {
  if (isFunction(cb)) {
    return cb.apply(context, args);
  }
  return cb;
}

/**
 * 遍历
 * @param obj
 * @param cb
 * @param isReturn
 * @returns
 */
export function each(
  obj: any,
  cb: Function,
  isReturn: boolean = false
): any[] | void {
  if (isUndef(obj)) return;
  let i: number | string = 0,
    index: number = 0,
    newVal: any[] = [];

  const len: number = obj.length;

  if (isArray(obj)) {
    for (; i < len; i++) {
      if (isReturn) {
        newVal.push(cb(obj[i], i));
      } else {
        cb(obj[i], i);
      }
    }
  } else {
    for (i in obj) {
      if (!obj.hasOwnProperty(i)) continue;
      if (isReturn) {
        newVal.push(cb(obj[i], i, index++));
      } else {
        cb(obj[i], i, index++);
      }
    }
  }

  if (isReturn) return newVal;
}

/**
 * 深拷贝
 * @param obj
 * @returns
 */
export function deepCopy(obj: any): any {
  if (!obj || (!isArray(obj) && !(obj.toString() === "[object Object]")))
    return obj;
  //非纯对象类型，直接返回出去
  if (!isArray(obj) && obj.constructor !== Object) return obj;
  const _obj: any = isArray(obj) ? [] : {};
  for (let key in obj) {
    if (!obj.hasOwnProperty(key)) continue;
    if (isArray(obj) || isPlainObject(obj)) {
      _obj[key] = deepCopy(obj[key]);
    } else {
      _obj[key] = obj[key];
    }
  }
  return _obj;
}

/**
 * 扩展
 * @param args
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

  each(objects, (object, index) => {
    //最后一位只做返回处理
    if (index === objects.length - 1) {
      return (extendObject = objects[index]);
    }
    const nextObject = objects[index + 1];
    each(nextObject, (obj, key) => {
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
 * @returns
 */
export function genGuid(): string {
  function gen(): string {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  }
  return `${gen()}${gen()}-${gen()}-${gen()}-${gen()}-${gen()}${gen()}${gen()}`;
}

/**
 * 对象转数组，对于上面[数组转对象]的转换是相对的
 * @param object
 * @returns
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
 * @param array
 * @param key
 * @returns
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
 * @param obj
 * @returns
 */
export function getObjLen(obj: any): number {
  let index: number = 0;
  each(obj, () => {
    ++index;
  });
  return index;
}

/**
 * 获取obj的keys
 * @param object
 * @returns
 */
export function getObjKeys(object: any): any[] | void {
  return each(
    object,
    (obj, key) => {
      return key;
    },
    true
  );
}
