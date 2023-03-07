//类型相关
import * as types from "./types";
//url相关
import * as url from "./url";
//时间相关
import * as time from "./time";
//倒计时处理
import * as countDown from "./count-down";
//正则相关
import * as regexp from "./regexp";
//promise
import * as promise from "./promise";
//工具类
import * as tools from "./tools";

//导出默认接口
export default {
  ...types,
  ...url,
  ...countDown,
  ...time,
  ...regexp,
  ...promise,
  ...tools,
};
