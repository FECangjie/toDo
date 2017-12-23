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

  methods: {
    goPath () {
      router.push('/home')
    },
  },
  mounted() {
    let me = this
    $http.get('/api/login.json', {
      params: { user: '7nxo'}
    }).then(
      (res) => {
        let result = res.data
        if (result.code === 1) {
          this.name = '神秘' + result.data.count + '号访客'
        }
      }
    )
  },
  beforeUpdate: function () {
  },
  updated: function () {
  },
  created () {

  },
  template: tpl
})
