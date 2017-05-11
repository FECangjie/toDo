/**
 * @file: webpack build
 * @author: wangshiying@lianjia.com
 */
var gulp = require('gulp')
var Webpack = require('webpack')
var fs = require('fs')
var path = require('path')
var child_process = require('child_process')

gulp.task('vendor', function (cb) {
  var conf
  if (
    process.env.NODE_ENV === 'production' ||
    process.env.NODE_ENV === 'rd' ||
    process.env.NODE_ENV === 'stage'
  ) {
    conf = require('./../../webpackConf/wp.dll.prod')
  } 
  else {
    conf = require('./../../webpackConf/wp.dll')
  }

  Webpack(conf, function (err, stats) {
    if (err) {
      console.log(err)
    }
    cb && cb()
  })
})
