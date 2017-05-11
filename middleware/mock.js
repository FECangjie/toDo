/**
 * @file: mock 数据
 * @author: qinchao@lianjia.com
 */

var cacheASync = {}

module.exports = function (req, res, next) {
  var rootPath = process.cwd()
  if (/.json/.test(req.originalUrl)) { // api数据
    console.log('接到mock-api：' + req.originalUrl + '的请求')
    var simplePath = req.originalUrl.split('?')[0].replace('.json', '')
    if (simplePath[0] == '/') {
      simplePath = simplePath.substr(1, simplePath.length)
    }
    var temp = simplePath.replace(/\//g, '_')
    var apiPath = rootPath + '/mock/async/' + temp + '.js'
    var api = require(apiPath)
    res.send(api(null, req.body || req.query))
  } else {
    next()
  }
}
