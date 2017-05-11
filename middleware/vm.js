/**
 * @file: mock 数据
 * @author: wangshiying@lianjia.com
 */
var fs = require('fs')
var Velocity = require('velocity')
var processShiro = require('./util/shiro')

var cacheSync = {}
var cacheCommonData = {}
var cachePath = {}

/**
 * vm 路径 缓存
 */
function vmPath () {

  var projects = fs.readdirSync(process.cwd() + '/src/vm/pages/')

  projects.map(function (project) {

    var stat = fs.statSync(process.cwd() + '/src/vm/pages/' + project)

    if (stat.isDirectory()) {

      function loop (dir, root, project) {

        var ms = fs.readdirSync(root + project + dir)

        ms.map(function (m) {
          var statms = fs.statSync(root + project + dir + '/' + m)

          if (statms.isDirectory()) {
            loop(dir + '/' + m, root, project)

          } else {
            cachePath[dir + '/' + m.replace('.vm', '')] = {
              path: project + dir + '/' + m.replace('.vm', ''),
              project: project
            }
          }
        })

      }

      loop('', process.cwd() + '/src/vm/pages/', project)
    }
  })
}

vmPath()

module.exports = function (req, res, next) {
  var rootPath = process.cwd()
  var simplePath = cachePath[req.originalUrl.split('?')[0]] && cachePath[req.originalUrl.split('?')[0]].path
  var filePath = rootPath + '/src/vm/pages/' + simplePath + '.vm'
  console.log(req.originalUrl)

  if (req.originalUrl == '/common/400'
    || req.originalUrl == '/common/404'
    || req.originalUrl == '/common/500'
    || req.originalUrl == '/common/noauth'
    || req.originalUrl == '/common/noauth') {
      filePath = rootPath + '/src/vm' + req.originalUrl + '.vm'
    }

  if (fs.existsSync(filePath)) { // 模版数据

    // 渲染vm的数据
    var vmDataPath = rootPath + '/mock/sync/' + simplePath + '.js'
    var vmData = cacheSync[vmDataPath] ? cacheSync[vmDataPath] :
      fs.existsSync(vmDataPath) ? require(vmDataPath)() : {}

    var project = cachePath[req.originalUrl.split('?')[0]] && cachePath[req.originalUrl.split('?')[0]].project
    var commonDataPath = rootPath + '/mock/sync/' + project + '/commonPage.js'
    console.log(commonDataPath)
    var commonData = cacheCommonData[project] ? cacheCommonData[project] :
      fs.existsSync(commonDataPath) ? require(commonDataPath)() : {}
      console.log(commonData)

    if (!cacheSync[vmDataPath]) {
      cacheSync[vmDataPath] = vmData
    }

    if (!cacheCommonData[project]) {
      cacheSync[project] = commonData
    }

    var engine = new Velocity.Engine({
      root: rootPath + '/src/vm',
      template: filePath
    })

    var compiled = engine.render(Object.assign(commonData, vmData))
    var html = processShiro(compiled, simplePath, rootPath)
    res.send(html)
  } else {
    next()
  }
}
