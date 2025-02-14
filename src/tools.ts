import {
  isFunction,
  isUndef,
  isArray,
  isPlainObject,
  isBoolean,
} from "./types";

/**
 * 防抖
 * @hookHandler 方法函数定义
 * @delay 防抖延迟范围
 * @bindContext 是否需要绑定当前方法函数上下文，默认绑定
 */
export function debounce(
  hookHandler: Function,
  delay: number = 200,
  bindContext: boolean = true
): Function {
  let timer: any = 0;

  function handler(args: any[] = []) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      hook(this, hookHandler, args);
      timer = null;
    }, delay);
  }

  //bind context
  if (bindContext) {
    return function (ctx: any = this, args: any[] = []) {
      handler.call(ctx, args);
    };
  } else {
    return function (...args: any[]) {
      handler.call(this, args);
    };
  }
}

/**
 * 节流
 * @hookHandler 方法函数定义
 * @delay 节流延迟范围
 * @bindContext 是否需要绑定当前方法函数上下文，默认绑定
 */
export function throttle(
  hookHandler: Function,
  delay: number = 200,
  bindContext: boolean = true
): Function {
  let last: number;

  function handler(args: any[] = []) {
    const now: number = +new Date();
    if (!last || (last && now > last + delay)) {
      last = now;
      hook(this, hookHandler, args);
    }
  }

  //bind context
  if (bindContext) {
    return function (ctx: any, args: any[] = []) {
      handler.call(ctx, args);
    };
  } else {
    return function (...args: any[]) {
      handler.call(this, args);
    };
  }
}

/**
 * 执行Function
 * @context 执行上下文
 * @cb 执行函数
 * @args 带入到执行行数参数值
 * @return 如果执行为函数，返回最终执行结果，否则返回原始执行回调
 */
export function hook(context: any, cb: any, args: any[] = []) {
  if (isFunction(cb)) {
    return cb.apply(context, args);
  }
  return cb;
}

/**
 * 遍历
 * @obj 遍历对象
 * @cb 遍历回调
 * @isReturn 是否返回所有的遍历回调返回值
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
 * @value 需要深拷贝的指定值
 */
export function deepCopy(value: any): any {
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
export function getObjLen(object: any): number {
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
export function getObjKeys(object: any): any[] | void {
  return each(
    object,
    (obj, key) => {
      return key;
    },
    true
  );
}
