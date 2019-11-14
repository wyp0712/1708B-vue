import Vue from 'vue'
import App from './App.vue'
// 引入路由文件
import router from './router'

import EventBus from './eventBus/index'

Vue.prototype.$EventBus = EventBus

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
