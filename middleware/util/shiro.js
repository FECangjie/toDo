/**
 * @file: 处理权限标签
 * 处理规则：
 * （1）<shiro:hasRole name="administrator">
 * （2）<shiro:lacksRole name="administrator">
 * （3）<shiro:hasAnyRole name="developer, project manager, administrator">
 * （4）<shiro:hasPermission name="user:create">
 * （5）<shiro:lacksPermission name="user:delete">
 * （6）<shiro:authenticated>
 * （7）<shiro:notAuthenticated>
 * （8）<shiro:user>
 */
var cheerio = require('cheerio');
var htmlparser = require("htmlparser2");
var tags = {
  hasRole: 1,
  lacksRole: 1,
  hasAnyRole: 1,
  hasPermission: 1,
  lacksPermission: 1,
  authenticated: 1,
  notAuthenticated: 1
};
var cacheShiroDate = {};

module.exports = function (context, page, dir) {
  // 判断context中是否有shiro, 没有，则goon
  var keyword = '</shiro:'

  if (context.indexOf(keyword) < 0 || !context) {
     return context;
  }

  // 获得权限数据
  var shiroDataPath = dir + '/mock/shiro' + page + '.js'
  var shiroData = cacheShiroDate[page] ? cacheShiroDate[page] : require(shiroDataPath)()

  if (!cacheShiroDate[page]) {
    cacheShiroDate[page] = shiroData
  }

  function process (flag) {

    if (flag) { // 有权限，只去掉shiro标签
      context = context.replace(/<shiro:[\s\S].*?>/,'')
      context = context.replace(/<\/shiro:[a-zA-Z]{1,}>/,'')
    }
    else { // 无权限, shiro内的全部内容全部去除掉 .*? 最短匹配 .*? 会排除换行符
      context = context.replace(/<shiro:[\s\S]*?<\/shiro:[a-zA-Z]{1,}>/,'')
    }
  }

  while(context.indexOf(keyword) > 0) {
    var temp = context.match(/<shiro:([a-zA-Z]{0,})\s{0,}name=(\'|\")([\s\S]*?)(\'|\")/);
    var optType = temp[1];
    if (!tags[optType]) {
      optType = 'simpleHasRole';
    }
    var attrName = temp[3];
    var flag = true; // 默认都有权限

    switch (optType) {
      case 'hasRole':
      case 'simpleHasRole':
        if (!shiroData.roles[attrName]) {
          flag = false
        }
        process(flag);
        break;
      case 'lacksRole':
        if (shiroData.roles[attrName]) {
          flag = false
        }
        process(flag);
        break;
      case 'hasAnyRole':
        flag = false
        attrName = attrName.replace(/\s{1,}/g, ''); // 去掉空格
        var attrArr = attrName.split(',');
        for (var i = 0, len = attrArr.length; i < len; i++) {
          if (shiroData.roles[attrArr[i]]) {
            flag = true;
            break;
          }
        }
        process(flag);
        break;
      case 'hasPermission':
        if (!shiroData.permission[attrName]) {
          flag = false
        }
        process(flag);
        break;
      case 'lacksPermission':
        if (shiroData.permission[attrName]) {
          flag = false
        }
        process(flag);
        break;
      case 'authenticated':
        if (!shiroData.authenticated) {
          flag = false
        }
        process(flag);
        break;
      case 'notAuthenticated':
        if (shiroData.authenticated) {
          flag = false
        }
        process(flag);
        break;
      default:
        process(flag);
        break;
    }
  }

  return context;
}
