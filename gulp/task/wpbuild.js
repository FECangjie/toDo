/**
 * @file: webpack build
 * @author: wangshiying@lianjia.com
 */
var gulp = require('gulp')
var Webpack = require('webpack')
var fs = require('fs')
var path = require('path')
var child_process = require('child_process')
var pageConf = require('./../../webpack.config')

gulp.task('wpbuild', ['vendor'],function (cb) {
  var conf
  if (process.env.NODE_ENV === 'production') {
    conf = require('./../../webpackConf/wp.config.production')
  }
  else if (process.env.NODE_ENV === 'rd') {
    conf = require('./../../webpackConf/wp.config.rd')
  }
  else if (process.env.NODE_ENV === 'sync') {
    conf = require('./../../webpackConf/wp.config.sync')
  }
  else { // (process.env.NODE_ENV === 'stage') {
    conf = require('./../../webpackConf/wp.config.stage')
  }

  if (global.project) {
    conf.entry = pageConf.getEntry(process.env.NODE_ENV, global.project)
  }

  Webpack(conf, function (err, stats) {
    if (err) {
      console.log(err)
    }

    gulp.src(['asset/*.js', 'src/client/favicon.ico'])
      .pipe(gulp.dest(path.resolve(conf.output.path)))
      .on('end', function () {
        // 将 asset 根据不同项目 拆分
        global.projects = []
        var hashJson = {}
        var files = fs.readdirSync(conf.output.path)

        // 如果是目录，表示 是个project 创建目录
        // 同时 处理版本号
        files.map(function (file) {
          var stat = fs.statSync(conf.output.path + '/' + file)
          if (stat.isDirectory()) {
            global.projects.push(file)
            fs.mkdirSync(path.resolve(conf.output.path, '../' + file))
            fs.mkdirSync(path.resolve(conf.output.path, '../' + file + '/asset'))

            // 读project目录中的 文件 记录版本号
            var subFiles = fs.readdirSync(conf.output.path + '/' + file + '/')
            subFiles.forEach(function (subfile) {
              var tempArr = subfile.split('.')
              hashJson[tempArr[0] + '.' + tempArr[tempArr.length - 1]] = subfile
            })
          } else {
            var tempArr = file.split('.')
            hashJson[tempArr[0] + '.' + tempArr[tempArr.length - 1]] = file
          }
        })

        console.log('版本号:')
        console.log(hashJson)

        fs.writeFileSync(
          path.join(conf.output.path, 'hash.json'),
          JSON.stringify(hashJson)
        )

        var filesOk = fs.readdirSync(conf.output.path)

        // cp 文件
        filesOk.map(function (fileOk) {
          var stat = fs.statSync(conf.output.path + '/' + fileOk)

          if (stat.isDirectory()) { // 如果是目录，表示 是个project

            var projectFiles = fs.readdirSync(conf.output.path + '/' + fileOk)

            projectFiles.map(function (projectFile) {
              child_process.spawn('cp', ['-rf',
                conf.output.path + '/' + fileOk + '/' + projectFile,
                path.resolve(conf.output.path, '../' + fileOk + '/asset/')]
              )
            })

          } else {
            global.projects.map(function (name) {
              child_process.spawn('cp', ['-rf',
                conf.output.path + '/' + fileOk,
                path.resolve(conf.output.path, '../' + name + '/asset/')]
              )
            })
          }
        })
        cb(err)
      })
  })
})
