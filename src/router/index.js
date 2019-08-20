import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/liys'
    },
    {
      path: '/liys',
      component: resolve => require(['../components/common/Home.vue'],resolve)
    }
  ]
})
