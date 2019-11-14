import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/DmallPage/index.vue'),
    redirect: '/home', // 重定向路由
    children: [
      {
        path: 'home',
        name: 'homepage',
        component: () => import(/* webpackChunkName: "about" */ '../views/DmallPage/Pages/Home.vue'),
      },
      {
        path: 'classify',
        name: 'classify',
        component: () => import(/* webpackChunkName: "about" */ '../views/DmallPage/Pages/Classify.vue'),
      },
      {
        path: 'vip',
        name: 'vip',
        component: () => import(/* webpackChunkName: "about" */ '../views/DmallPage/Pages/Vip.vue'),
      },
      {
        path: 'cart',
        name: 'cart',
        component: () => import(/* webpackChunkName: "about" */ '../views/DmallPage/Pages/Cart.vue'),
      },
      {
        path: 'mine',
        name: 'mine',
        component: () => import(/* webpackChunkName: "about" */ '../views/DmallPage/Pages/Mine.vue'),
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutPage/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
