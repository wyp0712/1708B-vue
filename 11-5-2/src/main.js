/**
 * 主入口文件
 * 1. 引入vue
 * 2. 引入.vue文件
 * 3. 实例化vue 挂载dom元素
 */

import Vue from 'vue'
import App from './App.vue'
// 配置axios
import axios from 'axios'
// 全局绑定
Vue.prototype.$http = axios

const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
  // 渲染函数
  render: (h) => h(App)
}).$mount(root)


