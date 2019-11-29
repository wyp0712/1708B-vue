import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    type: ''
  },
  mutations: {
    changeType(state, type) {
      state.type = type
      console.log(state.type, 'vuex----type')
    }
  },
  actions: {
    changeType({commit}, type) {
      commit('changeType', type)
    }
  },
  modules: {
  }
})
