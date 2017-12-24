module.exports = function (path, param, context) {
  var result = {
    "code": 1,
    "msg": "成功",
    "data": {
      tags: [
  				{
						title:'个人标签',
						tags:[
								{name:'弱智',count:1},
								{name:'土豪',count:11},
								{name:'挂逼',count:1111},
								{name:'弱智',count:1},
								{name:'弱智',count:1},
								{name:'土豪',count:11},
								{name:'挂逼',count:1111},
								{name:'弱智',count:1},
                {name:'弱智',count:1},
								{name:'土豪',count:11},
								{name:'挂逼',count:1111},
								{name:'弱智',count:1},
								]
  				},
  				{
  						title:'技术标签',
  						tags:[
  								{name:'弱智',count:1},
  								{name:'土豪',count:11},
  								{name:'挂逼',count:111111112},
  								{name:'脑残',count:134}]
  				},
  				{
  						title:'生活标签',
  						tags:[
  								{name:'弱智',count:1},
  								{name:'土豪',count:11},
  								{name:'挂逼',count:111111112},
  								{name:'脑残',count:134}]
  				}
  		]
    }
  }
  return result
}
