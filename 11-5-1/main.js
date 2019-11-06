import Vue from 'vue'
import App from './app.vue'
// 引入axios
import axios from 'axios'

// 把axios方法挂在vue的原型上
Vue.prototype.$axios = axios

const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
  render: (h) => h(App)
}).$mount(root)