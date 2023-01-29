import { each } from "./tools";
import { isArray, isPlainObject } from "./types";

/**
 * 获取链接的query
 * @param link
 * @returns
 */
export function getLinkParams(link: string): string {
  const linkType = link.split("?");
  const queryString = linkType[1];
  if (linkType.length > 0 && queryString && queryString !== "") {
    return queryString;
  }
  return "";
}

/**
 * 获取没有参数链接
 * @param link
 * @returns
 */
export function getNotParamsLink(link: string = ""): string {
  const linkType = link.split("?");
  return linkType[0];
}

/**
 * query string 转化为 object
 * @param queryString
 * @param decode
 * @returns
 */
export function parseParams(queryString: string, decode: boolean = true): any {
  const linkQuery = {};
  if (!queryString) return linkQuery;
  //是否存在原query
  (queryString.split("&") || []).forEach((queryItemString) => {
    const [key, value]: string[] = queryItemString.split("=");
    linkQuery[key] = decode ? decodeURIComponent(value) : value;
  });
  return linkQuery;
}

/**
 * query 转化为 string
 * @param query
 * @param encode
 * @returns
 */
export function stringifyParams(query: any, encode: boolean = true): string {
  if (!query) return "";
  let _query: string[] = [];
  each(query, (value: any, key: string) => {
    if (isPlainObject(value) || isArray(value)) {
      value = JSON.stringify(value);
    }
    _query.push(`${key}=${encode ? encodeURIComponent(value) : value}`);
  });
  return _query.join("&");
}
