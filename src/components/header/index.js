/**
 * @file: nav
 * @author: qinchao@lianjia.com
 */
import Vue from 'vue'
import tpl from './header.vue'
import './style.less'

export default Vue.component('header', {
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
  components: {
    header
  },
  template: tpl
})
