import Vue from 'vue'
import tpl from './tpl.vtpl'
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

  template: tpl
})
