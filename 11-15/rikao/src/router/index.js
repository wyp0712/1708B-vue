import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/HomePage/Home.vue'),
    redirect: '/tab1',
    children: [
      {
        path: 'tab1',
        name: 'tab1',
        component: () => import('../views/HomePage/pages/tab1.vue')
      },
      {
        path: 'tab2',
        name: 'tab2',
        component: () => import('../views/HomePage/pages/tab2.vue')
      },
      {
        path: 'tab3',
        name: 'tab3',
        component: () => import('../views/HomePage/pages/tab3.vue')
      },
      {
        path: 'tab4',
        name: 'tab4',
        component: () => import('../views/HomePage/pages/tab4.vue')
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
