'use strict';
var gulp = require('gulp');
var gutil = require('gulp-util')
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var src_dir = 'src';
var build_dir = 'build';
var _ = require('lodash');
var webpack = require('webpack');
var webpackConfigDev = require('./webpack.config.dev');
var webpackConfigProduct = require('./webpack.config.product');

var logger = function(err, stats, category) {
  if(err) throw new gutil.PluginError("webpack", err);
  gutil.log(category, stats.toString({
    colors: true,
    chunks: false
  }));
};

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
});

gulp.task('webpack:product', ['browserSync'], function(cb) {
  var initialCompile = false;

  webpack(webpackConfigProduct).watch(200, function(err, stats) {
    logger(err, stats, '[webpack:prd]');
    browserSync.reload();
    // On the initial compile, let gulp know the task is done
    if(!initialCompile) {
      initialCompile = true;
      cb();
    }
  });
});

gulp.task('clean', require('del').bind(null, [build_dir]));

gulp.task('webpack:dev', ['browserSync'], function (cb) {
  var initialCompile = false;

  webpack(webpackConfigDev).watch(200, function(err, stats) {
    logger(err, stats, '[webpack:prd]');
    browserSync.reload();
    // On the initial compile, let gulp know the task is done
    if(!initialCompile) {
      initialCompile = true;
      cb();
    }
  });
});

gulp.task('serve', ['webpack:dev'], function(callback) {
});

gulp.task('serve:prd', ['webpack:product'], function(callback) {
});

gulp.task('default', function() {
  gulp.start('serve');
});

gulp.task('product', ['clean', 'webpack:product'], function() {
});
