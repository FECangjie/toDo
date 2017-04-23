/**
 * @file: 首页
 * @author: wangshiying@lianjia.com
 */
import Vue from 'vue'
import './style.less'
import tpl from './tpl.vtpl'

export default Vue.component('IndexPage', {
  data () {
    return {
      isLoading: true,
      errorTip: '',
      lastContactedNum: '-',
      ownerCompletedRate: '-',
      ownerConfirmedRate: '-',
      collectedNum: '-',
      relatedRegionList: []
    }
  },
  created () {
    let me = this
    $http.get('api/linkApp/index.json').then(
      (res) => {
        me.isLoading = false
        let data = res.data
        if (data && data.code) {
          me.errorTip = ''
          me.lastContactedNum = data.data.lastContactedNum
          me.ownerCompletedRate = data.data.ownerCompletedRate
          me.ownerConfirmedRate = data.data.ownerConfirmedRate
          me.collectedNum = data.data.collectedNum
          me.relatedRegionList = data.data.relatedRegionList
        } else {
          me.errorTip = data.msg || '数据获取失败'
        }
      },
      (res) => {
        me.isLoading = false
      }
    )
  },
  template: tpl
})
