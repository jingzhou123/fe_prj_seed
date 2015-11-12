var webpack = require('webpack');
var webpackConfigBase = require('./webpack.config.base');
var _ = require('lodash');

module.exports = _.merge({}, webpackConfigBase, {
  output: {
    publicPath: '/build/'
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: true,
      __PRD__: false
    })
  ]
});
