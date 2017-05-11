/**
 * @file: cp 自动cp到rd的工程 并提交修改
 * @author: wangshiying@lianjia.com
 */
var gulp = require('gulp')
var fs = require('fs')
var path = require('path')
var child_process = require('child_process');
// ['staticServerConf'],
gulp.task('cp', ['vmbuild'], function(cb) {
  var conf = require('./../conf/conf')

  conf.cpAddress.map(function (cpConf) {
    var cpTo = path.resolve(process.cwd(), cpConf.cpPath)
    var cpVmTo = cpTo + '/WEB-INF/template/'
    var cpStaticTo = cpTo + '/resource/asset/'

    var source = path.resolve(process.cwd(), './release/' + cpConf.projectName)
    var sourceVm = source + '/template'
    var sourceStatic = source + '/asset'

    child_process.spawn('cd', [cpTo])
    child_process.spawn('git', ['pull'])

    console.log('移除：'+ cpVmTo )
    console.log('移除：'+ cpStaticTo )

    // 移除旧的
    child_process.spawn('rm', ['-rf', cpVmTo])
    child_process.spawn('rm', ['-rf', cpStaticTo])

    // mv 模板
    console.log('将模板从：'+ sourceVm + '移动到：' + cpVmTo)
    child_process.spawn('cp', ['-rf', sourceVm, cpVmTo])

    // mv 静态资源
    console.log('将静态资源从：'+ sourceStatic + '移动到：' + cpStaticTo)
    child_process.spawn('cp', ['-rf', sourceStatic, cpStaticTo])

    // 强制提交代码
    // TODO !! 不好用
    child_process.spawn('git', ['add', '--all'])
    child_process.spawn('git', ['commit', '-m', '模板静态资源同步'])
    child_process.spawn('git', ['pull'])
    child_process.spawn('git', ['push', 'origin', cpConf.branch])
  })
})
