import types from './types';
import url from './url';
import time from './time';
import object from './object';
import regexp from "./regexp";
import promise from "./promise";
import tools from "./tools";
declare type utils = typeof types & typeof url & typeof time & typeof object & typeof regexp & typeof promise & typeof tools;
declare const blueUtils: utils;
export default blueUtils;
