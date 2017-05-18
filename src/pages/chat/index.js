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
      name: decodeURI(Url.query('name')),
      pageType: 'home',
    }
  },
  methods: {
    /**
     * 选择加载页面
     */
    setPageType (type) {
      let me = this
      me.pageType = type || 'home'
    }
  },
  created () {
    let me = this

  },
  template: tpl
})