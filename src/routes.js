// 引用模板
import Vue from 'vue';
import Router from 'vue-router';
import indexPage from './views/index.vue'
import homePage from './views/home.vue'
import aboutPage from './views/about.vue'

Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/',
            component: homePage
        },
        {
            path:'/about',
            component: aboutPage
        },
        {
            path:'/index',
            component: indexPage
        }
    ]
})
