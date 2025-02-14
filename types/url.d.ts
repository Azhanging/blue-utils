/**
 * 获取链接的query
 * @link 链接值
 */
export declare function getLinkParams(link: string): string;
/**
 * 获取没有参数链接
 * @link 链接值
 */
export declare function getNotParamsLink(link?: string): string;
/**
 * query string 转化为 object
 * @queryString 参数字符串值
 * @decode 是否解码处理
 */
export declare function parseParams(queryString: string, decode?: boolean): any;
/**
 * query 转化为 string
 * @query 参数值
 * @encode 是否转码处理
 */
export declare function stringifyParams(query: any, encode?: boolean): string;
