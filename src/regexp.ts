const regexp: any = {
	//获取表达式
	getRegExp ( expr ): string {
		const tm = '\\/*.?+$^[](){}|\'\"';
		this.each(tm, ( tmItem, index ) => {
			expr = expr.replace(new RegExp('\\' + tmItem, 'g'), '\\' + tmItem);
		});
		return expr;
	},
};

export default regexp;