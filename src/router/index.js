import Vue from 'vue'
import Router from 'vue-router'
import main from '../pages/main.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    }
  ]
})
