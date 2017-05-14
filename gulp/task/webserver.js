/**
 * @file: 开发环境的server
 * 主要功能：
 * 1. 同步接口和异步接口的mock
 */
var gulp = require('gulp')
var express = require('express')
var Webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var pageConf = require('./../../webpack.config.js')

var api = require('./../../middleware/mock')
// var vm = require('./../../middleware/vm')
var proxy = require('./../../middleware/proxy')
var child_process = require('child_process')

gulp.task('webserver', function() {

  var config = require('./../../webpack.config.js')

  var staticServer = new WebpackDevServer(Webpack(config), obj)

  // var vmApp = express()
  // vmApp.use(vm)
  staticServer.use(api)

  staticServer.listen(8086,
    function(err, result) {
    if (err) {
      console.log(err);
    }
    console.log('apiServer在8086端口启动！');
  })

  // 静态资源server
  var obj = {
    publicPath: '/asset/',
    hot: true,
    quiet: false,
    noInfo: false,
    // watchOption: {
    //   aggregateTimeout: 300, // 延迟rebuild
    //   poll: true
    // },
    stats: {
      colors: true
    }
  }

  if (process.env.NODE_ENV === 'adjust') {
    config.loader.configEnvironment = 'adjust' // 本地联调
  }

  if (global.project) {
    config.entry = pageConf.getEntry('dev', global.project)
  }

  // staticServer.listen(8086, function(err, result) {
  //   if (err) {
  //     console.log(err);
  //   }
  //   console.log('staticServer在8086端口启动！');
  // })
})
