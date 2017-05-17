/**
 * @file: 主处理流程
 */

var fs = require('fs')
var gulp = require('gulp')
require(__dirname + '/task/webserver.js')

if (process.env.NODE_PROJECT) {
  global.project = process.env.NODE_PROJECT
}

gulp.task('default', ['webserver'])
