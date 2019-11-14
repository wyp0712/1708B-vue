import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home/index.vue'),
    redirect: '/task',
    children: [
      {
        path: 'task',
        name: 'task',
        component: () => import(/* webpackChunkName: "about" */ '../views/Home/pages/Task.vue')
      },
      {
        path: 'note',
        name: 'note',
        component: () => import(/* webpackChunkName: "about" */ '../views/Home/pages/Note.vue')
      },
      {
        path: 'project',
        name: 'project',
        component: () => import(/* webpackChunkName: "about" */ '../views/Home/pages/Project.vue'),
        meta: {
          requireAuth: true // 守卫项目路由
        }
      },
      {
        path: 'position',
        name: 'position',
        component: () => import(/* webpackChunkName: "about" */ '../views/Home/pages/Position.vue')
      },
      {
        path: 'tag',
        name: 'tag',
        
        component: () => import(/* webpackChunkName: "about" */ '../views/Home/pages/Tag.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
