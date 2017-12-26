import Vue from 'vue'
import tpl from './tpl.vtpl'
import './style.less'

export default Vue.component('c-header', {
  data () {
    return {
      activeIndex: '1',
      isLoading: true,
      name: '神秘x号访客',
      currentDate: moment(new Date()).format('YYYY-MM-DD'),
      msg: ''
    }
  },
  computed: {
    getInfo() {
      return this.$store.getters.getLogin.count
    }
  },
  methods: {
     handleSelect(key, keyPath) { // nav select
     }
   },

  mounted() {
  },
  created () {
  },

  template: tpl
})
