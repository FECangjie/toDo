import Vue from 'vue'
import App from './pages'
import Axios from 'axios'
import Fetch from 'common/fetch.js'
import store from './store'

import { router } from './router.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/styles/reset.css'
import './assets/styles/index.css'

window.$http = Axios.create({
  baseURL: '/',
  timeout: 25000
})

Vue.config.devtools = true
Vue.config.debug = true // 开启错误提示
Vue.use(ElementUI)

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
