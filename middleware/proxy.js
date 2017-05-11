/**
 * @file: mock 数据
 * @author: wangshiying@lianjia.com
 */
var httpProxy = require('http-proxy')

module.exports = function (req, res, next) {
  var rootPath = process.cwd()
  var proxy = httpProxy.createProxyServer({})
  var url = req.originalUrl.split('?')[0]
  url = url.substr(1, url.length)

  if (process.env.NODE_ENV == 'adjust') { // api数据
    var conf = require('../mock/proxyConf')
    if (/.json/.test(req.originalUrl) || conf.whiteList[req.originalUrl]) {
      console.log('请求proxy-api：' + req.originalUrl)
      if (conf.proxyAll) {
        proxy.web(req, res, { target: conf.proxyAllHost })
      }
      else if (conf.proxyList[url]) {
        proxy.web(req, res, { target: conf.proxyList[url] })
      }
    }

  } else {
    next()
  }
}
