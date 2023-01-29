/**
 * 获取链接的query
 * @param link
 * @returns
 */
export declare function getLinkParams(link: string): string;
/**
 * 获取没有参数链接
 * @param link
 * @returns
 */
export declare function getNotParamsLink(link?: string): string;
/**
 * query string 转化为 object
 * @param queryString
 * @param decode
 * @returns
 */
export declare function parseParams(queryString: string, decode?: boolean): any;
/**
 * query 转化为 string
 * @param query
 * @param encode
 * @returns
 */
export declare function stringifyParams(query: any, encode?: boolean): string;
