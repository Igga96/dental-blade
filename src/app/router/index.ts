import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { routes } from './routes'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 }; 
    }
  }
})

export default router
