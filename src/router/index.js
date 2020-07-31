import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import User from '@/pages/User'

Vue.use(Router)

export default new Router({
  
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path:'/User',
      name:'User',
      component:User
    },
  ]
})

