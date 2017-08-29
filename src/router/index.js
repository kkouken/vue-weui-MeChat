import Vue from 'vue'
import Router from 'vue-router'
import MeChatApp from '@/components/MeChatApp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MeChatApp',
      component: MeChatApp
    }
  ]
})
