/**
 * @file: 主处理流程
 */

var fs = require('fs')
var gulp = require('gulp')
var files = fs.readdirSync('./gulp/task')

files.forEach(function (file) {
  require(__dirname + '/task/' + file)
})

var child_process = require('child_process')

if (process.env.NODE_PROJECT) {
  global.project = process.env.NODE_PROJECT
}

gulp.task('default', ['webserver'])

// 构建 线上环境
gulp.task('pro', ['wpbuild', 'vmbuild'])

// 构建 rd 环境
gulp.task('rd', ['wpbuild'], function (cb) {
  console.log('构建结束')
  cb()
})

// 同步代码
gulp.task('syncrd', ['wpbuild', 'vmbuild', 'cp'], function (cb) {
  console.log('syncrd over')
  cb()
})
