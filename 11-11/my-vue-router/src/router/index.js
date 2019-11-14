import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入home组件

Vue.use(VueRouter)
// 展示性组件 用来展示页面的
const routes = [
  {
    path: '/', // 访问路径
    name: 'home', // 访问名字  编程式导航跳转（js控制）
    component: () => import(/* webpackChunkName: "home" */'../views/Home.vue') // 组件路径
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

console.log(process.env.BASE_URL, 'process.env.BASE_URL')
const router = new VueRouter({
  mode: 'history', // 路由模式
  base: process.env.BASE_URL,
  routes
})

export default router
