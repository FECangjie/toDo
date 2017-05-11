/**
 * @file: nav
 * @author: qinchao@lianjia.com
 */
import Vue from 'vue'
import tpl from './tpl.vtpl'
import './style.less'
const prefix = 'com-chat-header'

export default Vue.component('Com-chat-header', {
  data () {
    return {
      activeIndex: '1',
      isLoading: true,
      msg: ''
    }
  },
  methods: {
     handleSelect(key, keyPath) { // nav select
     }
   },
  created () {
    
  },
  template: tpl
})
