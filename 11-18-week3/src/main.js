import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入外部插件  必须use
import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)

// 引入element-ui框架
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import axios from 'axios'
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
