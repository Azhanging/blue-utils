const blueUtils = require('./dist/blue-utils');

const res = blueUtils.extend({
  a: 1,
  c: {
    d: [1, 2, 3],
    a: `some string`
  }
}, {
  a: undefined,
  b: undefined,
  c: {
    d: undefined,
    a: {
      b: 1,
      c: 2
    }
  }
});

console.log(res);