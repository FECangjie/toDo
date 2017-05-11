/**
 * @file: 配置
 * @author: wangshiying@lianjia.com
 */

module.exports = {
  hr: {
    rd: { // rd 搭建环境
      staticServer: '//fedev.lianjia.com/ehr/hr/asset'
    },
    stage: { // 测试环境
      staticServer: '/resource/asset'
    },
    production: { // 线上
      staticServer: '//s1.ljcdn.com/personnel/resource/asset'
    }
  },
  reservoir: {
    rd: { // rd 搭建环境
      staticServer: '//fedev.lianjia.com/ehr/reservoir/asset'
    },
    stage: { // 测试环境
      staticServer: '/resource/asset'
    },
    production: { // 线上
      staticServer: '//s1.ljcdn.com/cp-reservoir/resource/asset'
    }
  },
  estuary: {
    rd: { // rd 搭建环境
      staticServer: '//fedev.lianjia.com/ehr/estuary/asset'
    },
    stage: { // 测试环境
      staticServer: '//fecdn.off.lianjia.com/cp-estuary/resource/asset'
    },
    production: { // 线上
      staticServer: '//s1.ljcdn.com/cp-estuary/resource/asset'
    }
  }
}
