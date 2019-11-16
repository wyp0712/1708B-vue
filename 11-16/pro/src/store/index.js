import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isContent: 'left'
  },
  mutations: {
    setClass(state, dir) {
      state.isContent = dir 
    }
  },
  actions: {
  },
  modules: {
  }
})
