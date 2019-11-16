import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
/**
 *  1. 概念： 数据状态管理器
 *  2. 用处： 组件通讯
 */
const store = new Vuex.Store({
  state: { // 数据仓库  定义变量的地方 基本  引用
    cartList: JSON.parse(localStorage.getItem('cart')) || [] // 存放其他地方提交给购物车的数据
  },
  mutations: { // 接收同步数据的地方  定义接收函数的地方并且在mutaion中处理数据
    toCart(state, item) { // 第一个参数代表仓库数据 第二个参数 用户提交的数据
      // 去重逻辑
      // console.log(item, 'item------------------active提交')
      let goods = state.cartList.find(val => val.spId == item.spId)
        if (goods) {
          goods.data.skuType ++
        } else {
          // item.state = false
          // console.log(Vue, 'Vue')
          state.cartList.push(item)
        }
      console.log(state.cartList, 'cartList-----------vuex')
    },
    // 购物车减减函数
    removeItem(state, index) {
      // console.log(state.cartList[index], 'index')
      if (state.cartList[index].data.skuType <=1) {
        if (window.confirm('你确定删除吗')) {
          state.cartList.splice(index, 1)
          return
        } else {
          return
        }
      }
      state.cartList[index].data.skuType--
    },
    // 购物车加加函数
    addItem(state, item) {
      item.data.skuType ++
    },
    removeAll(state, ind) {
      // if (window.confirm('确定删除')) {
        state.cartList.splice(ind, 1)
      // }
    }
  },
  actions: { // 接收异步数据的地方  接收到异步数据然后提交给mutaion
    toCart({commit}, item) { // action 提交给mutaion commit
      setTimeout(() => {
        commit('toCart', item)
      }, 3000)
    }
  },
  getters: { // vuex的计算属性  eg:计算总价，
    getTotalPrice(state) {
      return state.cartList.reduce((prev, next) => {
        // console.log(next.data.skuType, next.data.price / 100, '-----------------' )
        return prev += next.data.skuType * (next.data.price || next.data.promotionPrice) / 100
      }, 0)
    }
  },
  modules: {
  }
})

// 本地数据持久化
// 监听用户提交给mutaion的数据
store.subscribe((mutations, state) => {
  // 用户提交的每一个动作。这个函数都知道

  localStorage.setItem('cart', JSON.stringify(state.cartList))
})

export default store;
