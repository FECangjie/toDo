import Vue from 'vue'
import './style.less'
import tpl from './tpl.vtpl'

export default Vue.component('resume', {
  data () {
    return {
      isLoading: true,
      imgUrl: 'src/assets/img/vue.png',
    }
  },
  created () {
    let me = this
    debugger
    console.log(1)
  },
  components: {
  },
  template: tpl
})
