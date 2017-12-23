// 路由
import Vue from 'vue'

import Index from './pages/Index/'
import Home from './pages/home'
import Resume from './pages/Resume'
import workPage from './pages/work'
import Blog from './pages/Resume'
import Book from './pages/Book'


import VueRouter from 'vue-router'
Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
      {
          path:'/',
          redirect: '/home',
          component: Index,
          children: [{
                  path: '/resume',
                  component: Resume

              },{
                  path:'/work',
                  component: workPage
              },{
                  path:'/blog',
                  component: Blog
              },{
                  path:'/book',
                  component: Book
              },{
                  path:'/home',
                  component: Home
              }
          ]
      },
  ]
})
