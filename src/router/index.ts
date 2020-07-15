import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'index',
    component: () => import(/* webpackChunkName: "about" */ '../views/find/index.vue'),
    redirect:'individuality',
    children: [
      {
        path: 'individuality',
        name: 'individuality',
        component: () => import('../views/find/individuality/index.vue')
      },
      {
        path: 'newest',
        name: 'newest',
        component: () => import('../views/find/newest/index.vue')
      },
      {
        path: 'radio',
        name: 'radio',
        component: () => import('../views/find/radio/index.vue')
      }, {
        path: 'ranking',
        name: 'ranking',
        component: () => import('../views/find/ranking/index.vue')
      }, {
        path: 'singer',
        name: 'singer',
        component: () => import('../views/find/singer/index.vue')
      },
      {
        path: 's_list',
        name: 's_list',
        component: () => import('../views/find/s_list/index.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
