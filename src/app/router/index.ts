import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { routes } from './routes'
import { store } from '@/app/store';


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
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.state.auth.isAuthenticated) {
    next({ name: 'admin-login' });
  } else {
    next();
  }
});

export default router
