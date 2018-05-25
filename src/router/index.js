import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Destination from '@/components/Destination'
import Admin from '@/components/Admin'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      props: true
    },
    {
      path: '/Destination',
      component: Destination
    },
    {
      path: '/Admin',
      component: Admin
    },
    {
      path: '/Login',
      component: Login
    },
    {
      path: '/:nav',
      component: Home,
      props: true
    }
  ]
})
