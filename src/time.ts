//时间参数
type TDateArg = string | number | Date;

interface TResultDate {
	year: string;
	month: string;
	day: string;
	hours: string;
	minutes: string;
	seconds: string;
	time: number;
}

//填充数值
function fill ( val: number ): string {
	if (val < 10) {
		return `0${val}`;
	}
	return `${val}`;
}

const time = {
	//格式化时间
	formatDate ( date: TDateArg, format: string ): string {
		const {
			year,
			month,
			day,
			hours,
			minutes,
			seconds
		} = this.getDate(date);
		return format
			.replace(/y{4}/g, year)
			.replace(/M{2}/g, month)
			.replace(/d{2}/g, day)
			.replace(/H{2}/g, hours)
			.replace(/m{2}/g, minutes)
			.replace(/s{2}/g, seconds);
	},

	getDate ( date: TDateArg ): TResultDate {
		let time: number;
		if (this.isStr(date)) {
			time = +new Date((date as string).trim().replace(/-/g, '/'));
		} else if (date instanceof Date) {
			time = +date;
		} else if (typeof date === 'number') {
			time = date;
		}
		if (isNaN(time)) return null;
		return {
			year: `${this.getYear(time)}`,
			month: fill(this.getMonth(time)),
			day: fill(this.getDay(time)),
			hours: fill(this.getHours(time)),
			minutes: fill(this.getMinutes(time)),
			seconds: fill(this.getSeconds(time)),
			time
		};
	},

	//获取年
	getYear ( time: TDateArg ): number {
		return new Date(this.getTime(time)).getFullYear();
	},

	//获取月
	getMonth ( time: TDateArg ): number {
		return new Date(this.getTime(time)).getMonth() + 1;
	},

	//获取日
	getDay ( time: TDateArg ): number {
		return new Date(this.getTime(time)).getDate();
	},

	//获取时
	getHours ( time: TDateArg ): number {
		return new Date(this.getTime(time)).getHours();
	},

	//获取分
	getMinutes ( time: TDateArg ): number {
		return new Date(this.getTime(time)).getMinutes();
	},

	//获取秒
	getSeconds ( time: TDateArg ): number {
		return new Date(this.getTime(time)).getSeconds();
	},

	//获取时间戳
	getTime ( time: TDateArg ): number {
		if (typeof time !== 'number') {
			const resultDate: TResultDate = this.getDate(time);
			if (!resultDate) return 0;
			return resultDate.time;
		}
		return time;
	}
};

export default time;