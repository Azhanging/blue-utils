import blueUtils from "./src/index";

const res = blueUtils.extend(
  {
    a: 1,
    c: {
      d: [1, 2, 3],
      a: `some string`,
    },
  },
  {
    a: undefined,
    b: undefined,
    c: {
      d: undefined,
      a: {
        b: 1,
        c: 2,
      },
    },
  }
);

console.log(
  blueUtils.isPlainObject(1),
  blueUtils.isPlainObject(null),
  blueUtils.isPlainObject(undefined),
  blueUtils.isPlainObject({}),
  blueUtils.isPlainObject([]),
  blueUtils.isPlainObject(`123`)
);

const countDown = new blueUtils.CountDown();

console.log(res, countDown);

countDown.start(1200);

var data = {
  aa: 123,
  ttt: 34534,
};
var res1 = blueUtils.extend(
  {
    data: {
      a: 1,
      c: 6,
    },
    mounted() {},
  },
  {
    created() {},
    children: [
      {
        a: 1,
      },
      {
        b: 2,
      },
    ],
    data: {
      b: 2,
      d() {},
    },
    methods: {
      get() {},
    },
  }
);
console.log(res);

const debounceFn = blueUtils.debounce(function (event) {
  console.log(event, +new Date());
  console.log(`current this:`, this);
});

const throttleFn = blueUtils.throttle(function (event) {
  console.log(event, +new Date());
  console.log(`current this:`, this);
}, 1000);

document
  .querySelector(`#debounce`)
  .addEventListener("click", function (event) {
    debounceFn(this, [event]);
  });

document
  .querySelector(`#throttle`)
  .addEventListener("click", function (event) {
    throttleFn(this, [event]);
  });

document.querySelector(`#debounceUnbindCtx`).addEventListener(
  "click",
  blueUtils.debounce(
    function (event) {
      console.log(event, +new Date());
      console.log(`current this:`, this);
    },
    200,
    false
  )
);

document.querySelector(`#throttleUnbindCtx`).addEventListener(
  "click",
  blueUtils.throttle(
    function (event) {
      console.log(event, +new Date());
      console.log(`current this:`, this);
    },
    1000,
    false
  )
);

function A() {
  this.a = 11;
  this.b = 22;
}

const obj1 = {};

const obj2 = {
  c: 3,
  cc: 4,
  ccc: new A(),
};

const obj3 = {
  d: 4,
  e: 5,
  ccc: 5,
};
console.log(blueUtils.extend(obj1, undefined, null, obj2, obj3));

//时间处理
console.log(`getDate`, blueUtils.getDate(new Date()));
console.log(`getDate`, blueUtils.getDate(+new Date()));
console.log(`getDate`, blueUtils.getDate("2020-03-01"));
console.log(
  `formatDate`,
  blueUtils.formatDate(new Date(), "yyyy/MM/dd HH:mm:ss")
);
console.log(
  `formatDate`,
  blueUtils.formatDate(+new Date(), "yyyy/MM/dd HH:mm")
);
console.log(`formatDate`, blueUtils.formatDate("2020-03-01", "yyyy/MM"));

//倒计时
console.log(
  new blueUtils.CountDown({
    hooks: {
      start() {
        const some = this.genViewDate();
        console.log(
          `start 开始了 ${this.countDownTime},${some.day} ${some.hours} ${
            some.minutes
          } ${some.second} ${+new Date()}`
        );
      },
      tick() {
        const some = this.genViewDate();
        console.log(
          `tick 进行中 ${this.countDownTime},${some.day} ${some.hours} ${
            some.minutes
          } ${some.second} ${+new Date()}`
        );
      },
      end() {
        console.log(`end 结束了 ${this.countDownTime} ${+new Date()}`);
      },
    },
  }).start(1500)
);

//链接处理
const url = `https://github.com/azhanging?program_name=blue-utils&error_name=blue_utilss?other_params=other_params_value&somename=_deasd?=123312`;
console.log(blueUtils.getNotParamsLink(url));
console.log(blueUtils.getLinkParams(url));
console.log(blueUtils.parseParams(blueUtils.getLinkParams(url)));
console.log(blueUtils.parseParams(blueUtils.getLinkParams(``)));
console.log(blueUtils.parseParams(blueUtils.getLinkParams(`?`)));
console.log(blueUtils.parseParams(blueUtils.getLinkParams(`?a`)));

//json处理
console.log(blueUtils.jsonStringify({ a: 1 }));
console.log(blueUtils.jsonStringify([1, 2, 3, 4]));
console.log(blueUtils.jsonParse(`{"a":1}`));
console.log(blueUtils.jsonParse(`{a:1}`));

//计算处理
console.log(`加法计算`, blueUtils.accAdd(2.22, 3.11));
console.log(`减法计算`, blueUtils.accSub(2.22, 3.11));
console.log(`除法计算`, blueUtils.accDiv(2.22, 3.11));
console.log(`乘法计算`, blueUtils.accMul(2.22, 3.11));
