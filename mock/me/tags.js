module.exports = function (path, param, context) {
  var result = {
    "code": 1,
    "msg": "成功",
    "data": {
      tags: [
  				{
						title:'个人标签',
						tags:[
								{name:'弱智',count:1,id:1},
								{name:'土豪',count:11,id:2},
								]
  				},
  				{
  						title:'技术标签',
  						tags:[
  								{name:'弱智',count:1,id:1},
                ]
  				},
  				{
  						title:'生活标签',
  						tags:[
  								{name:'弱智',count:1,id:1},
                ]
  				}
  		]
    }
  }
  return result
}
