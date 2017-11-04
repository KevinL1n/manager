import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '../views/index/index'
import Manage from '../views/index/manage/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Index',
      component: Index
    },
    {
    	path: '/manage',
      name: 'Manage',
      component: Manage
    }
  ]
})
