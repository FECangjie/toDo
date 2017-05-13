/**
 * @file: 聊天室
 * @author: qinchaolianjia.com
 */
import Vue from 'vue'
import './style.less'
import tpl from './tpl.vtpl'
import comHeader from '../../components/chatHeader'
import ChatHome from './home'
import ChatRoom from './room'
import Url from '../../common/url.js'

export default Vue.component('ChatPage', {
  props: [],

  data () {

    return {
      isLoading: true,
      errorTip: '',
      name: decodeURI(Url.query('name')),
      switchRoom: false//v-if绑定
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
