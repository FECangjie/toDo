/**
 * @file: 首页
 * @author: qinchao@lianjia.com
 */
import Vue from 'vue'
import tpl from './tpl.vtpl'
import './style.less'

export default Vue.component('SharePage', {
  data () {
    return {
      isLoading: true,
      msg: ''
    }
  },
  created () {
    let me = this
    me.msg = '分享'
  },
  template: tpl
})
