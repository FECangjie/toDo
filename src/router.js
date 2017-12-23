// 路由
import Vue from 'vue'

import sharePage from './pages/share'
import homePage from './pages/home'
import Resume from './pages/Resume'
import errorPage from './pages/error'
import loginPage from './pages/login'
import testPage from './pages/test'
import workPage from './pages/work'

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
          component: homePage,
          children: [{
                  path: '/resume',
                  component: Resume

              }
          ]
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
      },{
          path:'/work',
          component: workPage
      }
  ]
})
