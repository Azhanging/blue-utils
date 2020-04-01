const promise: any = {
	//返回promise
	promise ( hook: Function ): Promise<any> {
		try {
			return new Promise(( resolve?: Function, reject?: Function ) => {
				this.hook(this, hook, [resolve, reject]);
			});
		} catch (e) {
			console.warn(e);
		}
	}
};

export default promise;