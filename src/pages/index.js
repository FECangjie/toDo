/**
 * @file: 首页
 * @author: qinchao@lianjia.com
 */
import Vue from 'vue'
import tpl from './tpl.vtpl'
import HeaderTab from '../components/header.vue';

export default Vue.component('IndexPage', {
  data () {
    return {
      activeIndex: '1',
      isLoading: true,
      msg: ''
    }
  },
  methods: {
     handleSelect(key, keyPath) {
       console.log(key, keyPath);
     }
   },
  created () {
    let me = this
    me.msg = 'GO!'
  },
  template: tpl
})
