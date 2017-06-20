// 路由
import Vue from 'vue'

import sharePage from './pages/share'
import homePage from './pages/home'
import chatPage from './pages/chat'
import aboutPage from './pages/about'
import errorPage from './pages/error'
import loginPage from './pages/login'
import testPage from './pages/test'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
  		{
            path:'/',
            component: loginPage
        },
        {
            path:'/home',
            component: homePage
        },
        {
            path:'/chat',
            component: chatPage
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
        },
        {
            path:'/test',
            component: testPage
        }
  ]
})
