//时间参数
type TDateArg = string | number | Date;

interface TResultDate {
	year: string;
	month: string;
	day: string;
	hours: string;
	minutes: string;
	seconds: string;
}

//填充数值
function fill ( val: number ): string {
	if (val < 10) {
		return `0${val}`;
	}
	return `${val}`;
}

const time: any = {
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
	},

	//格式化时间
	formatDate ( date: TDateArg, format: string ): string {
		//导出的变量“{0}”具有或正在使用外部模块“{2}”中的名称“{1}”，但不能为其命名。
		const {
			year,
			month,
			day,
			hours,
			minutes,
			seconds
		} = this.getDate(date);
		return format
			.replace(`yyyy`, year)
			.replace(`MM`, month)
			.replace(`dd`, day)
			.replace(`HH`, hours)
			.replace(`mm`, minutes)
			.replace(`ss`, seconds);
	},

	getDate ( date: TDateArg ): TResultDate {
		let time: number;
		if (this.isStr(date)) {
			time = +new Date((date as string).trim().replace(/-/g, '/'));
		} else if (date instanceof Date) {
			time = +date;
		}
		if (isNaN(time)) return null;
		return {
			year: `${this.getYear(time)}`,
			month: fill(this.getMonth(time)),
			day: fill(this.getDay(time)),
			hours: fill(this.getHours(time)),
			minutes: fill(this.getMinutes(time)),
			seconds: fill(this.getSeconds(time))
		};
	},

	//获取年
	getYear ( time: number ): number {
		return new Date(time).getFullYear();
	},

	//获取月
	getMonth ( time: number ): number {
		return new Date(time).getMonth() + 1;
	},

	//获取日
	getDay ( time: number ): number {
		return new Date(time).getDate();
	},

	//获取时
	getHours ( time: number ): number {
		return new Date(time).getHours();
	},

	//获取分
	getMinutes ( time: number ): number {
		return new Date(time).getMinutes();
	},

	//获取秒
	getSeconds ( time: number ): number {
		return new Date(time).getSeconds();
	}
};

export default time;