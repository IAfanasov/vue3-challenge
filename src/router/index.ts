import { createRouter, createWebHistory } from 'vue-router'
import ExploreView from '../views/ExploreView/ExploreView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'explore',
      component: ExploreView
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/SearchView/SearchView.vue')
    },
    {
      path: '/show/:id',
      name: 'show details',
      component: () => import('../views/ShowDetailsView/ShowDetailsView.vue')
    }
  ]
})

export default router
