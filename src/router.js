// 路由
import Vue from 'vue'

import Index from './pages/Index/'
import Home from './pages/home'
import Resume from './pages/Resume'
import Work from './pages/work'
import Blog from './pages/Resume'
import Book from './pages/Book'
import Tag from './pages/tag'

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
                  component: Work
              },{
                  path:'/blog',
                  component: Blog
              },{
                  path:'/git',
                  component: Blog
              },{
                  path:'/book',
                  component: Book
              },{
                  path:'/home',
                  component: Home
              },{
                path:'/tag',
                component: Tag
              }
          ]
      },
  ]
})
