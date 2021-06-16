declare const tools: {
    debounce(hook: Function, delay?: number): Function;
    throttle(hook: Function, delay?: number): Function;
    hook(context: any, cb: any, args?: any[]): any;
    each(obj: any, cb: Function, isReturn?: boolean): any[] | void;
    deepCopy(obj: any): any;
    extend(...args: any[]): any;
};
export default tools;
