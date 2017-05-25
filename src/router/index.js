import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import Login from '@/views/login'
import Chatting from '@/views/chatting'
import NotFound from '@/views/404page'
import Register from '@/views/register'
import UserList from '@/views/userList'
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
      path: '/register',
      name: 'Register',
      component:Register
    },
    {
      path: '/userlist',
      name: 'UserList',
      component:UserList
    },
    {
      path:'*',
      name:'NotFound',
      component:NotFound
    }
  ],
  mode:'history'
})
