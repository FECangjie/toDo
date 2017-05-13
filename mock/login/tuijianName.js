/**
 * @file: 推荐ip
 */
module.exports = function (path, param, context) {
  var result = {
    "code": 1,
    "msg": "成功",
    "data": {
      "name": [
        { "value": "金日天", "address": "" },
        { "value": "屌爆了", "address": "" },
        { "value": "大炮来袭", "address": "" },
        { "value": "逼逼侠", "address": "" },
        { "value": "栓子", "address": "" },
      ]
    }
  }
  return result
}
