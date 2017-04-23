// 路由
import Vue from 'vue'
import Test from './pages/test/index.js'
import Index from './pages/index/index.js'
import Detail from './pages/detail/index.js'
import OwnerList from './pages/ownerlist/index.js'
import CollectList from './pages/collectlist/index.js'
import ContactList from './pages/contactlist/index.js'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
  ]
})
