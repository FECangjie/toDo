/**
 * @file: vm build
 * @author: wangshiying@lianjia.com
 */
var gulp = require('gulp')
var fs = require('fs')
var path = require('path')
var replaceAssets = require('gulp-replace-assets')
var child_process = require('child_process')
var buildServerConf = require('../buildConf/conf')

gulp.task('vmbuild', ['wpbuild'], function (cb) {
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

  // template cp
  var hashJson = fs.readFileSync(
    path.join(conf.output.path, 'hash.json'),
    {encoding: 'utf-8'}
  )

  hashJson = JSON.parse(hashJson || {})

  gulp.src('src/vm/**/**/*.vm')
    .pipe(replaceAssets(hashJson)) // 根据版本号，把vm文件里的静态资源路径进行替换
    .pipe(gulp.dest(path.resolve(conf.output.path, '../template'))) // 输出到目标目录
    .on('end', function () {
      // 更新 static server
      var staticServer = '/resource/asset'
      if (buildServerConf[process.env.NODE_PROJECT]
          && buildServerConf[process.env.NODE_PROJECT][process.env.NODE_ENV]
          && buildServerConf[process.env.NODE_PROJECT][process.env.NODE_ENV].staticServer) {
        staticServer = buildServerConf[process.env.NODE_PROJECT][process.env.NODE_ENV].staticServer
      }

      console.log('静态资源的域名：'+ staticServer)

      fs.writeFileSync(
        require('path').resolve(__dirname, '../../release/template/conf/conf.vm'),
        "#set($staticServer = '" + staticServer +"')"
      )

      // 拆分项目
      global.projects.map(function (name) {
        child_process.spawn(
          'mkdir',
          [path.resolve(conf.output.path, '../' + name + '/template/')]
        )

        child_process.spawn('cp', ['-rf',
          path.resolve(conf.output.path, '../template/pages/' + name + '/'),
          path.resolve(conf.output.path, '../' + name + '/template/pages/')]
        )
      })

      var files = fs.readdirSync(path.resolve(conf.output.path, '../template'))

      files.map(function (file) {
        var stat = fs.statSync(path.resolve(conf.output.path, '../template/' + file))

        if (stat.isDirectory() && file !== 'pages') {
          global.projects.map(function (name) {

            child_process.spawn('cp', ['-rf',
              path.resolve(conf.output.path, '../template/' + file + '/'),
              path.resolve(conf.output.path, '../' + name + '/template/')]
            )
          })
        }
      })

      cb()
    })
})
