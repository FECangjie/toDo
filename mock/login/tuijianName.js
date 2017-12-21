/**
 * @file: 推荐ip
 */
module.exports = function (path, param, context) {
  var result = {
    "code": 1,
    "msg": "成功",
    "data": {
      "name": [
        { "value": "不一样的", "name": "程鸡鸡" },
        { "value": "屌爆了", "name": "光头凯" },
        { "value": "大炮来袭", "name": "金日天" },
        { "value": "八宝山鬼王", "name": "哔哔虾" },
        { "value": "死肥宅", "name": "回龙观四小龙" },
        { "value": "灵魂画师", "name": "华子" },
        { "value": "哈尼王子", "name": "孙仲谋" },
        { "value": "人中泰迪", "name": "你爸爸" },
        { "value": "光头炮子", "name": "神秘挨揍青年" },
        { "value": "无脑喷子", "name": "呆哥" }
      ]
    }
  }
  return result
}
