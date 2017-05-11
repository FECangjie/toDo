// 路由
import Vue from 'vue';
import Router from 'vue-router';
import sharePage from './pages/share'
import homePage from './pages/home'
import aboutPage from './pages/about'
import errorPage from './pages/error'
import loginPage from './pages/login'

Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/',
            component: loginPage
        },
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
        },
        {
            path:'/error',
            component: errorPage
        }
    ]
})
