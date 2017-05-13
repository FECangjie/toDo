/**
 * main.js这是项目的核心文件。全局的配置都在这个文件里面配置
 * @file: 核心文件
 * @author: qinchao@lianjia.com
 */
import Vue from 'vue'
import App from './pages'
import Axios from 'axios'
import Fetch from 'common/fetch.js'

import { router } from './router.js'
import ElementUI from 'element-ui'
import './assets/styles/reset.css'
import 'element-ui/lib/theme-default/index.css'
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
        el: '#appIndex',
        render: h => h(App)
})
