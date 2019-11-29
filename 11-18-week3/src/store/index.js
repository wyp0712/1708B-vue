import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList: [],
    showDialog: false,
  },
  mutations: {
    setDialog(state, flag) {
      state.showDialog = flag
    },
    toCart(state, item) {
      let goods = state.cartList.find(val => val.id == item.id)
      if (goods) {
        goods.count++
      } else {
        item.count = 1
        state.cartList.push(item)
      }
    },
    removeItem(state, index) {
      if ( state.cartList[index].count <=1 ) {
          state.showDialog = true
          return
      }
      state.cartList[index].count--
    },
  },
  getters: {
    TotalCount(state) {
      return state.cartList.reduce((num, next) => {
          return num += next.count   
      }, 0)
    }
  },
  actions: {
  },
  modules: {
  }
})
