import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/movie' // 路由重定向
  },
  {
    path: '/movie',
    name: 'movie',
    component: () => import(/* webpackChunkName: "movie" */ '../views/Movie/MoviePage.vue'),
    redirect: '/movie/released',

    // 子路由
    children: [
      {
        path: 'released',
        name: 'released',
        component: () => import(/* webpackChunkName: "movie" */ '../views/Movie/pages/Released.vue'),
        meta: {
          title: '电影'
        },
      },
      {
        path: 'upcoming',
        name: 'upcoming',
        component: () => import(/* webpackChunkName: "movie" */ '../views/Movie/pages/Upcoming/index.vue'),
        children: [
          {
            path: 'tab1',
            name: 'tab1',
            component: () => import(/* webpackChunkName: "movie" */ '../views/Movie/pages/Upcoming/pages/tab1.vue'),
          },
          {
            path: 'tab2',
            name: 'tab2',
            component: () => import(/* webpackChunkName: "movie" */ '../views/Movie/pages/Upcoming/pages/tab2.vue'),
          }
        ]
      }
    ]
  },
  {
    path: '/cinema',
    name: 'cinema',
    component: () => import(/* webpackChunkName: "cinema" */ '../views/Cinema/CinemaPage.vue'),
    meta: {
      title: '影院'
    },
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import(/* webpackChunkName: "mine" */ '../views/Mine/MinePage.vue'),
    meta: {
      title: '我的',
      requireAuth: true // 是否需要授权登陆
    },
  },
  {
    path: '/detail/:id', // 动态路由
    name: 'detail',
    component: () => import(/* webpackChunkName: "mine" */ '../views/DetailPage/index.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "mine" */ '../views/Login/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior: function (to, from, savedPosition) {
    console.log(to,from, savedPosition)
     return savedPosition || { x: 0, y: 0 }
  },
})

// 导航守卫 我的 页面
router.beforeEach((to, from, next) => {
  console.log(to)
  if (to.meta.requireAuth) { // 如果为true说明需要授权登陆
    // 检测是否登陆
    if (localStorage.getItem('token')) {
      next()
    } else {
      next({  // 如果没有登陆就跳转登陆页面
        path: '/login',
        query: {
          path: to.fullPath
        }
      })
    }
  } else {
    next()
  }
})



export default router
