const tools: any = {
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
		let objects = [...args];
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
	}
};

export default tools;