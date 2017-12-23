import Vue from 'vue'
import './style.less'
import tpl from './tpl.vtpl'
import Header from 'components/header';

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
    Header
  },
  template: tpl
})
