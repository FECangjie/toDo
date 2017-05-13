/**
 * @file: 首页
 * @author: wangshiying@lianjia.com
 */
import Vue from 'vue'
import './style.less'
import tpl from './tpl.vtpl'
// import uiCell from 'ui/components/cell'
// import uiCellGroup from 'ui/components/cellGroup'

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
    fetch("/data.json").then(function(res) {
  // res instanceof Response == true.
  if (res.ok) {
    res.json().then(function(data) {
      console.log(data.entries);
        });
    } else {
      console.log("Looks like the response wasn't perfect, got status", res.status);
    }
  }, function(e) {
    console.log("Fetch failed!", e);
  })


    
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
