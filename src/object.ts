const object = {
	//获取obj的长度
	getObjLen ( obj: any ): number {
		let index: number = 0;
		this.each(obj, () => {
			++index;
		});
		return index;
	},

	//获取obj的keys
	getObjKeys ( object: any ): any[] | void {
		return this.each(object, ( obj, key ) => {
			return key;
		}, true);
	},
};

export default object;