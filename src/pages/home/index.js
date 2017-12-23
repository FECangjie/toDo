/**
 * @file: 首页
 * @author: qinchao@lianjia.com
 */
import Vue from 'vue'
import './style.less'
import tpl from './tpl.vtpl'
import header from 'components/header';

export default Vue.component('home', {
  data () {
    return {
      isLoading: true,
      errorTip: '',
      type: ''
    }
  },
  created () {
    let me = this
  },
  components: {
    header
  },
  template: tpl
})
