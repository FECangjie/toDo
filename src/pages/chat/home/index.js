/**
 * @file: 首页
 * @author: qinchao@lianjia.com
 */
import Vue from 'vue'
import './style.less'
import tpl from './tpl.vtpl'

export default Vue.component('ChatHomePage', {
    props: ['name'],
  data () {
    return {
      isLoading: true,
      errorTip: '',
      title: '欢迎来到虾哔哔',
      imgUrl: 'src/assets/img/od.jpeg',
      rooms: 3,
      currentDate: moment(new Date()).format('MM-DD hh:mm')
　　 }
  },
  created () {
    let me = this

    /** ajax例子
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
    ) **/
  },
  template: tpl
})
