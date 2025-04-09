import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Root',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/resume',
    name: 'Resume',
    component: () => import(/* webpackChunkName: "about" */ '../views/Resume.vue')
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import(/* webpackChunkName: "about" */ '../views/Projects.vue')
  },
  {
    path: '/research',
    name: 'Research',
    component: () => import(/* webpackChunkName: "about" */ '../views/Research.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "about" */ '../views/404.vue')
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  routes
})

export default router
