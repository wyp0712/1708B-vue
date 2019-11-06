import Vue from 'vue'
import App from './App.vue'
// 引入axios 
import axios from 'axios'

Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
