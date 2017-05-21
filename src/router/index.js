import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import Login from '@/views/login'
import Chatting from '@/views/chatting'
import NotFound from '@/views/404page'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component:Index
    },
    {
      path: '/login',
      name: 'Login',
      component:Login
    },
    {
      path: '/chatting',
      name: 'Chatting',
      component:Chatting
    },
    {
      path:'*',
      name:'NotFound',
      component:NotFound
    }
  ],
  mode:'history'
})
