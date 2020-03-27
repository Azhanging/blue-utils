const blueUtils = {

	//是否为空对象
	isEmptyPlainObject ( object: any ): boolean {
		return JSON.stringify(object) === "{}";
	},

	//是否为string
	isStr ( val: string ): boolean {
		return typeof val === 'string';
	},

	//是否为obj对象
	isPlainObject ( object: any ): boolean {
		return object && !this.isArray(object) && (object.toString() === '[object Object]') && (object.constructor === Object);
	},

	//是否为数组
	isArray ( val: any ): boolean {
		return val instanceof Array;
	},

	//是否为对象Object Object
	isObject ( object: any ): boolean {
		return this.isPlainObject(object) || this.isArray(object);
	},

	//是否有值
	isDef ( val: any ): boolean {
		return val !== undefined && val !== null;
	},

	//是否为undefine 或者 null
	isUndef ( val: any ): boolean {
		return val === undefined || val === null;
	},

	//字符串是否为空
	isEmptyStr ( val: string ): boolean {
		return val.trim().length === 0;
	},

	//是否为true
	isTrue ( bool: any ): boolean {
		return bool === true;
	},

	//是否为false
	isFalse ( bool: any ): boolean {
		return bool === false;
	},

	//是否为function
	isFunction ( fn: any ): boolean {
		return typeof fn === 'function';
	},

	//是否为error
	isError ( error: any ): boolean {
		return error instanceof Error;
	},

	//是否为布尔值
	isBoolean ( bool: any ): boolean {
		return typeof bool === 'boolean';
	},

	//执行function
	hook ( context: any, cb: any, args: any[] = [] ) {
		if (this.isFunction(cb)) {
			return cb.apply(context, args);
		}
		return cb;
	},

	//遍历
	each ( obj: any, cb: Function, isReturn: boolean = false ): any[] | void {
		if (this.isUndef(obj)) return;
		let i: number | string = 0,
			index: number = 0,
			newVal: any[] = [];

		const len: number = obj.length;

		if (this.isArray(obj)) {
			for (; i < len; i++) {
				if (isReturn) {
					newVal.push(cb(obj[ i ], i));
				} else {
					cb(obj[ i ], i);
				}
			}
		} else {
			for (i in obj) {
				if (!obj.hasOwnProperty(i)) continue;
				if (isReturn) {
					newVal.push(cb(obj[ i ], i, index++));
				} else {
					cb(obj[ i ], i, index++);
				}
			}
		}

		if (isReturn) return newVal;
	},

	//深拷贝
	deepCopy ( obj: any ): any {
		if (!obj || !(this.isArray(obj)) && !(obj.toString() === "[object Object]")) return obj;
		//非纯对象类型，直接返回出去
		if (!(this.isArray(obj)) && (obj.constructor !== Object)) return obj;
		const _obj: any = this.isArray(obj) ? [] : {};
		for (let key in obj) {
			if (!obj.hasOwnProperty(key)) continue;
			if ((this.isArray(obj)) || (this.isPlainObject(obj))) {
				_obj[ key ] = this.deepCopy(obj[ key ]);
			} else {
				_obj[ key ] = obj[ key ];
			}
		}
		return _obj;
	},

	//扩展
	extend ( ...args: any[] ): any {
		//是否深拷贝
		let isDeep: boolean = true;
		//存放arguments的参数
		let objects = [ ...args ];
		//合并后的obj
		let extendObject = {};

		const lastArg: any = objects[ objects.length - 1 ];

		//检查最后一个参数是否为深拷贝
		if (this.isBoolean(lastArg)) {
			isDeep = lastArg;
			[].pop.call(objects);
		}

		//默认深拷贝，否则最后一个参数为深拷贝布尔值
		if (isDeep) {
			objects = this.deepCopy(objects);
		}

		this.each(objects, ( object, index ) => {
			if (index === (objects.length - 1)) return;
			const nextObject = objects[ index + 1 ];
			this.each(nextObject, ( obj, key ) => {
				if (this.isPlainObject(obj)) {
					if (!object[ key ]) {
						object[ key ] = {};
					}
					object[ key ] = this.extend(object[ key ], obj, isDeep);
				} else {
					object[ key ] = obj;
				}
			});
			objects[ index + 1 ] = extendObject = object;
			objects[ index ] = null;
		});

		return extendObject;
	},

	//获取表达式
	getRegExp ( expr ): string {
		const tm = '\\/*.?+$^[](){}|\'\"';
		this.each(tm, ( tmItem, index ) => {
			expr = expr.replace(new RegExp('\\' + tmItem, 'g'), '\\' + tmItem);
		});
		return expr;
	},

	//获取obj的长度
	getObjLen ( obj: any ): number {
		let index: number = 0;
		this.each(obj, () => {
			++index;
		});
		return index;
	},

	getObjKeys ( object: any ): any[] | void {
		return this.each(object, ( obj, key ) => {
			return key;
		}, true);
	},

	//get link query string
	getLinkParams ( link: string ): string {
		const linkType = link.split('?');
		const queryString = linkType[ 1 ];
		if (linkType.length > 0 && queryString && queryString !== '') {
			return queryString;
		}
		return '';
	},

	getNoParamsLink ( link: string = '' ): string {
		const linkType = link.split('?');
		return linkType[ 0 ];
	},

	//query string 转化为 object
	parseParams ( queryString: string ): any {
		const linkQuery = {};
		if (!queryString) return linkQuery;
		//是否存在原query
		(queryString.split('&') || []).forEach(( queryItemString ) => {
			const splitQueryItem: string[] = queryItemString.split('=');
			linkQuery[ splitQueryItem[ 0 ] ] = splitQueryItem[ 1 ];
		});
		return linkQuery;
	},

	//query 转化为 string
	stringifyParams ( query: any ): string {
		if (!this.isPlainObject(query)) return '';
		let _query = [];
		this.each(query, ( value: any, key: string ) => {
			if (this.isPlainObject(value) || this.isArray(value)) {
				value = JSON.stringify(value);
			}
			_query.push(`${key}=${encodeURIComponent(value)}`);
		});
		return _query.join('&');
	},

	//返回promise
	promise ( hook: Function ): Promise<any> {
		return new Promise(( resolve?: Function, reject?: Function ) => {
			this.hook(this, hook, [ resolve, reject ]);
		});
	},

	//防抖
	debounce ( hook: Function, delay: number = 200 ): Function {
		let timer: any = 0;
		return ( ctx: any, args: any[] = [] ) => {
			if (timer) clearTimeout(timer);
			timer = setTimeout(() => {
				this.hook(ctx, hook, args);
				timer = null;
			}, delay);
		}
	},

	//节流
	throttle ( hook: Function, delay: number = 200 ): Function {
		let last: number;
		return ( ctx, args: any[] = [] ) => {
			const now: number = +new Date();
			if (!last || (last && (now > (last + delay)))) {
				last = now;
				this.hook(ctx, hook, args);
			}
		}
	}
};

export default blueUtils;
