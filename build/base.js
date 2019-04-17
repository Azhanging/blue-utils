const path = require('path');

module.exports = {

  //file start path
  context: path.resolve(__dirname, '../'),

  devtool: 'source-map',

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    publicPath: './dist'
  },

  //alias path
  resolve: {
    extensions: ['.js']
  },

  // devDependencies require no in entry
  externals: {},

  // use loader
  module: {
    rules: [{
      test: /\.html$/,
      use: [
        'html-loader'
      ]
    }, {
      test: /\.js$/,
      use: [
        'babel-loader'
      ]
    }]
  },

  // map file
  /*devtool: '#source-map'*/
};