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

// 启动hr项目
gulp.task('hr', function () {
  console.log('项目：hr' )

  global.project = 'hr'
  gulp.start('webserver')
})

// 启动薪酬项目
gulp.task('estuary', function () {
  console.log('项目：estuary' )

  global.project = 'estuary'
  gulp.start('webserver')
})

// 启动社保项目
gulp.task('reservoir', function () {
  console.log('项目：reservoir' )

  global.project = 'reservoir'
  gulp.start('webserver')
})

// 构建 线上环境
gulp.task('pro', ['wpbuild', 'vmbuild'])

// 构建 测试环境
gulp.task('stage', ['wpbuild', 'vmbuild'], function (cb) {
  console.log('构建结束')
  cb()
})

// 构建 rd 环境
gulp.task('rd', ['wpbuild', 'vmbuild'], function (cb) {
  console.log('构建结束')
  cb()
})

// 同步代码
gulp.task('syncrd', ['wpbuild', 'vmbuild', 'cp'], function (cb) {
  console.log('syncrd over')
  cb()
})
