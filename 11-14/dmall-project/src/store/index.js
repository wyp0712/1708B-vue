import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
/**
 *  1. 概念： 数据状态管理器
 *  2. 用处： 组件通讯
 * 
 */
const store = new Vuex.Store({
  state: { // 数据仓库  定义变量的地方 基本  引用
    cartList: JSON.parse(localStorage.getItem('cart')) || [] // 存放其他地方提交给购物车的数据
  },
  mutations: { // 接收同步数据的地方  定义接收函数的地方并且在mutaion中处理数据
    toCart(state, item) { // 第一个参数代表仓库数据 第二个参数 用户提交的数据
      // 去重逻辑
      let goods = state.cartList.find(val => val.spId == item.spId)
      if (goods) {
        goods.data.skuType ++
      } else {
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
    }
  },
  actions: { // 接收异步数据的地方
  },
  getters: { // vuex的计算属性  eg:计算总价，
    getTotalPrice(state) {
      return state.cartList.reduce((prev, next) => {
        console.log(next.data.skuType, next.data.price / 100, '-----------------' )
        return prev += next.data.skuType * next.data.price / 100
      }, 0)
    }
  },
  modules: {
  }
})

// 本地数据持久化
// 监听用户提交给mutaion的数据
store.subscribe((mutations, state) => {
  localStorage.setItem('cart', JSON.stringify(state.cartList))
})

export default store;
