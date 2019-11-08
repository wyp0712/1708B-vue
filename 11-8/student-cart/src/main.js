import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'
Vue.prototype.$http = axios


import data from '../public/Mock/index'
console.log(data, 'data')

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
