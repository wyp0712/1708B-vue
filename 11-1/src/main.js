import App from './App.vue'
import Vue from 'vue'

const root = document.createElement('div');
root.id ='app'
document.body.appendChild(root)

new Vue({
  render: h => (h()),
}).$mount('#app')