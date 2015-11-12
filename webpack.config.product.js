var webpack = require('webpack');
var webpackConfigBase = require('./webpack.config.base');
var _ = require('lodash');

module.exports = _.merge({}, webpackConfigBase, {
  output: {
    publicPath: '/build/'
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: false,
      __PRD__: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress : {
        warnings: false,
      }
    })
  ],
});
