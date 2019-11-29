import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: '/table',
    children: [
      {
        path: '/table',
        name: 'table',
        component: () => import(/* webpackChunkName: "about" */ '../views/Table.vue')
      },
      {
        path: '/article',
        name: 'article',
        component: () => import(/* webpackChunkName: "about" */ '../views/TablePages/Table.vue')
      }
    ]
  },
  {
    path: '/ele',
    name: 'ele',
    component: () => import(/* webpackChunkName: "about" */ '../views/EleCom.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
