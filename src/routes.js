// 路由
import Vue from 'vue';
import Router from 'vue-router';
import sharePage from './pages/share'
import homePage from './pages/share'
import aboutPage from './pages/share'

Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/home',
            component: homePage
        },
        {
            path:'/about',
            component: aboutPage
        },
        {
            path:'/share',
            component: sharePage
        }
    ]
})
