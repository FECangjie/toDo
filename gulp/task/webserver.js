/**
 * @file: 开发环境的server
 * 主要功能：
 * 1. 同步接口和异步接口的mock
 */
var http = require('http')
var path = require('path')
var express = require('express')
var Webpack = require('webpack')
var gulp = require('gulp')
var WebpackDevServer = require('webpack-dev-server')
var config = require('./../../webpack.config.js')
var api = require('./../../middleware/mock')


gulp.task('webserver', function() {

  var webApp = new WebpackDevServer(Webpack(config))
  var app = webApp.app
  app.use(api)

  //Express框架的路由访问控制文件server.js，增加路由配置。
  app.use(function (req, res) {
    res.sendfile('index.html')
  })

  app.listen(8086,
    function(err, result) {
      if (err) {
        console.log(err)
      }
      console.log('在8086端口启动')
    }
  )
})
