import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Destination from '@/components/Destination'

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
      path: '/:nav',
      component: Home,
      props: true
    }
  ]
})
