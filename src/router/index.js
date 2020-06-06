import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/configurator',
    name: 'Configurator',
    component: () => import('../views/Configurator.vue')
  },
  {
    path: '/service',
    name: 'Service',
    component: () => import('../views/Service.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/ContactUs.vue')
  },
  {
    path: '/impressum',
    name: 'Impressum',
    component: () => import('../views/Impressum.vue')
  },
  {
    path: '/dataprotection',
    name: 'Dataprotection',
    component: () => import('../views/Dataprotection.vue')
  },
  {
    path: '/'
  }
]

const router = new VueRouter({
  routes
})

export default router
