import Vue from 'vue'
import './style.less'
import tpl from './tpl.vtpl'
import store from 'store'

export default Vue.component('resume', {
  data () {
    return {
      info: {},
      imgUrl: 'src/assets/img/vue.png',
    }
  },
  computed: {
    getInfo () {
      return this.$store.getters.getMeInfo
    }
  },
  created () {
    let me = this
    store.dispatch('set_Info', {})
  },
  components: {
  },
  template: tpl
})
