import types from './types';
import url from './url';
import time from './time';
import object from './object';
import regexp  from "./regexp";
import promise  from "./promise";
import tools  from "./tools";

const blueUtils = {
	//类型相关
	...types,
	//url相关
	...url,
	//时间相关
	...time,
	//对象相关
	...object,
	//正则相关
	...regexp,
	//promise
	...promise,
	//工具类
	...tools
};

export default blueUtils;
