import { each } from "./tools";
import { isArray, isPlainObject } from "./types";

const LINK_SPLIT_CHAT = `?`;
const LINK_PARAMS_SPLIT_CHAT = `&`;
const LINK_PARAMS_VALUE_SPLIT_CHAT = `=`;

/**
 * 获取链接的query
 * @link 链接值
 */
export function getLinkParams(link: string): string {
  const linkType = link.split(LINK_SPLIT_CHAT);
  const queryString = linkType.slice(1).join(LINK_SPLIT_CHAT);
  if (linkType.length > 0 && queryString && queryString !== ``) {
    return queryString;
  }
  return ``;
}

/**
 * 获取没有参数链接
 * @link 链接值
 */
export function getNotParamsLink(link: string = ``): string {
  const linkType = link.split(LINK_SPLIT_CHAT);
  return linkType[0];
}

/**
 * query string 转化为 object
 * @queryString 参数字符串值
 * @decode 是否解码处理
 */
export function parseParams(queryString: string, decode: boolean = true): any {
  const linkQuery = {};
  if (!queryString) return linkQuery;
  //是否存在原query
  (queryString.split(LINK_PARAMS_SPLIT_CHAT) || []).forEach(
    (queryItemString) => {
      const [key, ..._value]: string[] = queryItemString.split(
        LINK_PARAMS_VALUE_SPLIT_CHAT
      );
      const value: string = _value.join(LINK_PARAMS_VALUE_SPLIT_CHAT);
      linkQuery[key] = decode ? decodeURIComponent(value) : value;
    }
  );
  return linkQuery;
}

/**
 * query 转化为 string
 * @query 参数值
 * @encode 是否转码处理
 */
export function stringifyParams(query: any, encode: boolean = true): string {
  if (!query) return ``;
  let _query: string[] = [];
  each(query, (value: any, key: string) => {
    if (isPlainObject(value) || isArray(value)) {
      value = JSON.stringify(value);
    }
    _query.push(`${key}=${encode ? encodeURIComponent(value) : value}`);
  });
  return _query.join(LINK_PARAMS_SPLIT_CHAT);
}
