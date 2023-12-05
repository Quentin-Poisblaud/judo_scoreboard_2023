import { createRouter, createWebHistory } from 'vue-router'

import parent from '../views/parent.vue'
import enfant from '../views/enfant.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/p',
      name: 'p',
      component: parent
    },
    {
      path: '/e',
      name: 'e',
      component: enfant
    }
  ]
})

export default router
