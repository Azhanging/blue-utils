const package = require('./package');

//输出源
const output = {
  library: "BlueUtils",
  libraryTarget: 'umd',
  libraryExport: 'default'
};

const name = `blue-utils`;

module.exports = {
  library: {
    name,
    github: `https://github.com/azhanging/${name}`,
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