/**
 * main.js这是项目的核心文件。全局的配置都在这个文件里面配置
 * @file: 核心文件
 * @author: qinchao@lianjia.com
 */
import Vue from 'vue'
import App from './pages'
import router from './routes.js'
import ElementUI from 'element-ui'
import './assets/styles/reset.css'
import 'element-ui/lib/theme-default/index.css'
import './assets/styles/index.css'

Vue.config.debug = true // 开启错误提示
Vue.use(ElementUI)

new Vue({
        router,
        el: '#appIndex',
        render: h => h(App)
})
