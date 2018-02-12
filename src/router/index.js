import Vue from 'vue'
import Router from 'vue-router'

import Top from '@/components/Top'
import User from '@/components/User'
import UserGist from '@/components/UserGist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/user',
      name: 'User',
      component: User,
      children: [
        {
          path: 'gist',
          name: 'UserGist',
          component: UserGist
        }
      ]
    }
  ]
})