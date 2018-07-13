import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test from '../views/test/index.vue'
import test2 from '../views/test/test2.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'test2',
      component: test2
    },
    {
      path:'test',
      component:test
    },
    {
      path:'test2',
      component:test2
    }
  ]
})
