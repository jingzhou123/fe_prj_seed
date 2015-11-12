var webpack = require('webpack');
var path = require('path');

var buildOutputPath = path.join(__dirname, 'build');
var rimraf = require('rimraf');
rimraf.sync(buildOutputPath);

module.exports = {
  devtool: 'source-map',
  context: __dirname + '/src',
  entry: {
    'main': './main',
  },
  output: {
    path: buildOutputPath,
    filename: '[name].js',
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
      {test: /.*\.(gif|png|jpe?g|svg)$/i, loader: 'file'},
      {test: /\.json$/, loader: 'json-loader'},
      {test: /\.css$/, loader: 'style-loader!css-loader?sourceMap'},
      {test: /\.scss$/, loader: 'style!css?sourceMap!sass?sourceMap'}
    ]
  }
};

