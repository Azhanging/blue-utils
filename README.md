# blue-utils
引用与使用

### CommonJs
```javascript
const utils = require('blue-utils');
utils.isStr('string');
```

### ES Module
```javascript
import utils from "blue-utils";
utils.isStr('string');
```

### 直接引用
```html
<script src="blue-utils.js" />
<script>
  window.blueUtils.isStr(`string`);
</script>
```

### Methods相关使用

#### isEmptyPlainObject 是否为空对象
```javascript
//是否为空对象:Boolean
utils.isEmptyPlainObject({});
```

#### isStr 是否为string
```javascript
//是否为string
utils.isStr('string');
```

#### isPlainObject 是否为obj对象
```javascript
//是否为obj对象
utils.isPlainObject({});
```

#### isArray 是否为数组
```javascript
//是否为数组
utils.isArray([]);
```

#### isObject 是否为对象Object
```javascript
//是否为对象Object
utils.isObject({}||[]);
```

#### isDef 是否有值
```javascript
//是否有值
utils.isDef('123');
```

#### isUndef 是否为undefine 或者 null
```javascript
//是否为undefine 或者 null
utils.isUndef(undefined );
```

#### isBlankSpace 字符串是否为空
```javascript
//字符串是否为空
utils.isBlankSpace('   string   ');
```

#### isTrue 是否为true
```javascript
//是否为true
utils.isTrue(true);
```

#### isFalse 是否为false
```javascript
//是否为false
utils.isFalse(false);
```

#### isFunction 是否为function
```javascript
//是否为function
utils.isFunction(() => {});
```

#### isError 是否为error
```javascript
//是否为error
utils.isError(new Error('123'));
```

#### isBoolean 是否布尔值
```javascript
//是否为布尔值
utils.isBoolean(true || false);
```

#### hook 执行function
```javascript
//执行function
utils.hook(window,(arg1,arg2)=>{
  console.log(this,arg1,arg2);
},['123','456']);
```

#### each 遍历
```javascript
//遍历
utils.each(object || array , (value, index || [key,index]) 
//遍历存在返回值
utils.each(object || array , (value, index || [key,index]) => {}, true);
```

#### deepCopy 深拷贝
```javascript
//深拷贝
utils.deepCopy(object);
```

#### extend 多个的obj的扩展，最后的一个参数为深拷贝
```javascript
//多个的obj的扩展，最后的一个参数为深拷贝
utils.extend(obj,...objn, isDeep = true);
```

#### getRegExp str转正则
```javascript
//处理RegExp
utils.getRegExp(`\s+\d{1,8}`);
```

####  getObjLen 获取obj的长度
```javascript
//获取obj的长度
utils.getObjLen(object);
```

#### getObjKeys 获取obj的keys
```javascript
//获取obj的keys
utils.getObjKeys(object);
```

#### getLinkParams 获取连接中的query string
```javascript
//获取连接中的query string
const paramsString = utils.getLinkParams(`https://github.com/azhanging/blue-utils?params=1&params=2`);
```

#### parseParams 参数字符串转化为Object
```javascript
//参数字符串转化为Object
const params = utils.parseParams(paramsString);
```

#### stringifyParams 参数转化为string
```javascript
//query 转化为 string
utils.stringifyParams(params);
```

#### promise 实例化promise
```javascript
//实例化promise
utils.promise((resolve,reject)=>{
  if(true){
    resolve();  
  } else {
    reject();
  }
});
```

#### debounce 防抖处理
```javascript
//防抖@return function(ctx,args,bindContext);
const debounceFn = utils.debounce((data)=>{
  console.log(data);
},200);

debounceFn(utils,[`data`]);

//不绑定上下文
const debounceFnNoContext = utils.debounce((data)=>{
  console.log(data);
},200, false);

debounceFnNoContext.apply(window, [`data`]);
```

#### throttle 节流处理
```javascript
//节流
const throttleFn = utils.throttle((data)=>{
  console.log(data);
},200);

throttleFn(window,[`data`]);

//不绑定上下文
const throttleFn = utils.throttle((data)=>{
  console.log(data);
},200, false);

throttleFn.apply(window,[`data`]);
```

#### CountDown 倒计时类 
```javascript
//倒计时
const countDown = new utils.CountDown({
  hooks: {
    tick(){
      tick(){},
      start(){},
      end(){}
    }
  }
});

//ms时间差
countDown.start(diffTime);
countDown.stop();
countDown.reset();

//生成显示数据 {day,hours,minutes,second}
countDown.genViewDate();
```

#### jsonStringify 转为json字符串
```javascript
//json转化
console.log(utils.jsonStringify({ a: 1 }));
console.log(utils.jsonStringify([1, 2, 3, 4]));
```

#### jsonParse 字符串转为Object
```javascript
console.log(utils.jsonParse(`{"a":1}`));
console.log(utils.jsonParse(`{a:1}`));
```

#### accAdd 加法计算
```javascript
utils.accAdd(1,2);
utils.accAdd(4,6);
```

#### accSub 减法计算
```javascript
utils.accSub(1,2);
utils.accSub(4,6);
```

#### accDiv 除法计算
```javascript
utils.accDiv(1,2);
utils.accDiv(4,6);
```

#### accMul 乘法计算
```javascript
utils.accMul(1,2);
utils.accMul(4,6);
```
