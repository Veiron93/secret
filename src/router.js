import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Errors from './views/Errors.vue'
import Companies from './views/Companies.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/companies',
      name: 'companies',
      component: Companies
    },
    {
      path: '/errors',
      name: 'errors',
      component: Errors
    },
  ]
})
