declare const url: {
    getLinkParams(link: string): string;
    getNotParamsLink(link?: string): string;
    parseParams(queryString: string, decode?: boolean): any;
    stringifyParams(query: any, encode?: boolean): string;
};
export default url;
