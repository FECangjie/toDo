import Vue from 'vue'
import './style.less'
import tpl from './tpl.vtpl'
import { router } from 'router'

export default Vue.component('home', {
  data () {
    return {
      name: '神秘x号访客',
      currentDate: moment(new Date()).format('YYYY-MM-DD'),
      btuText: '进入',
      loading: false
    }
  },
  computed: {
    getInfo() {
      return this.$store.state.Me.login.count
    }
  },

  methods: {
    goPath () {
      router.push('/home')
    },
  },
  mounted() {
    let me = this
    this.$store.dispatch('set_Login', {})
  },
  beforeUpdate: function () {
  },
  updated: function () {
  },
  created () {

  },
  template: tpl
})
