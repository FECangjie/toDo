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
  methods: {
     handleSelect(key, keyPath) { // nav select
     }
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
  created () {

  },

  template: tpl
})
