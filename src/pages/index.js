/**
 * @file: 页面框架
 * @author: qinchao@lianjia.com
 */
import Vue from 'vue'
import tpl from './tpl.vtpl'
import HeaderTab from '../components/header.vue';
import './style.less'

export default Vue.component('IndexPage', {
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
    let me = this
    me.msg = 'GO!'
  },
  template: tpl
})
