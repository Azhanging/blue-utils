const package = require('./package');

//输出源
const output = {
  library: "BlueUtils",
  libraryTarget: 'umd',
  libraryExport: 'default'
};

module.exports = {
  library: {
    name: 'blue-utils',
    github: `https://github.com/azhanging/blue-utils`,
    date: `2016-2020`,
    version: package.version,
    author: package.author
  },
  webpackConfig: {
    dev: {
      output
    },
    prod: {
      output
    }
  }
};