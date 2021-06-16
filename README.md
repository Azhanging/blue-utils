# blue-utils
blue-utils

```javascript
const utils = require('blue-utils');
utils.isStr('string');
```

#### Methods

```javascript
//是否为空对象:Boolean
utils.isEmptyPlainObject({});

//是否为string
utils.isStr('string');

//是否为obj对象
utils.isPlainObject({});

//是否为数组
utils.isArray([]);

//是否为对象Object
utils.isObject({}||[]);

//是否有值
utils.isDef('123');

//是否为undefine 或者 null
utils.isUndef(undefined );

//字符串是否为空
utils.isBlankSpace('   string   ');

//是否为true
utils.isTrue(true);

//是否为false
utils.isFalse(false);

//是否为function
utils.isFunction(() => {});

//是否为error
utils.isError(new Error('123'));

//是否为布尔值
utils.isBoolean(true || false);

//执行function
utils.hook(window,(arg1,arg2)=>{
  console.log(this,arg1,arg2);
},['123','456']);

//遍历
utils.each(object || array , (value, index || [key,index]) => {});

//深拷贝
utils.deepCopy(object);

//多个的obj的扩展，最后的一个参数为深拷贝
utils.extend(obj,...objn, isDeep = true);

//处理RegExp
utils.getRegExp(`\s+\d{1,8}`);

//获取obj的长度
utils.getObjLen(object);

//获取obj的keys
utils.getObjKeys(object);

//获取连接中的query string
var paramsString = utils.getLinkParams(`https://github.com/azhanging/blue-utils?params=1&params=2`);

//query string 转化为 object
var params = utils.parseParams(paramsString);

//query 转化为 string
utils.stringifyParams(params);

//实例化promise
utils.promise((resolve,reject)=>{
  if(true){
    resolve();  
  } else {
    reject();
  }
});

//防抖@return function(ctx,args);
const debounceFn = utils.debounce((data)=>{
  console.log(data);
},200);
debounceFn(utils,[`data`]);

//节流
const throttleFn = utils.throttle((data)=>{
  console.log(data);
},200);
throttleFn(window,[`data`]);


debounce(hook: Function, delay?: number): Function;
throttle(hook: Function, delay?: number): Function;
formatDate(date: TDateArg, format: string): string;
getDate(date: TDateArg): TResultDate;
getYear(time: TDateArg): number;
getMonth(time: TDateArg): number;
getDay(time: TDateArg): number;
getHours(time: TDateArg): number;
getMinutes(time: TDateArg): number;
getSeconds(time: TDateArg): number;
getTime(time: TDateArg): number;
