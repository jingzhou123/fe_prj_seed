var webpackConfig = require('./webpack.config');
var _ = require('lodash');

module.exports = _.extend(webpackConfig, {
    entry: undefined,//overwrite
    output: undefined, 
    devtool: 'inline-source-map'//for debugging
});
