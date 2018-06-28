import Vue from 'vue'
import Router from 'vue-router'
import laylout from '@/page/layout'
import market from '@/page/mark'
import show from '@/page/show'
import old from '@/page/old'
import my from '@/page/my'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: laylout,
      redirect:'/',
      children:[{
        path: '/',
        component: show,
      },{
        path: '/market',
        component: market,
      },{
        path: '/old',
        component: old,
      },{
        path: '/my',
        component: my,
      }]
    }
  ]
})
