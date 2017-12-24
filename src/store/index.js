import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { router } from '../router.js'

import * as actions from './actions'
import * as getters from './getter'

import Me from './modules/me.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  actions,
  getters,
  modules: {
    Me
  }
})

export default store
