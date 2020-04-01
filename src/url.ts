const url: any = {
	//获取链接的query
	getLinkParams ( link: string ): string {
		const linkType = link.split('?');
		const queryString = linkType[ 1 ];
		if (linkType.length > 0 && queryString && queryString !== '') {
			return queryString;
		}
		return '';
	},

	//获取没有参数链接
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
};

export default url;