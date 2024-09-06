import { HomePage } from '@/pages/main'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('@/pages/admin/ui/index.vue')
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('@/pages/services/ui/index.vue')
  },
  {
    path: '/prices',
    name: 'prices',
    component: () => import('@/pages/prices/ui/index.vue')
  },

  {
    path: '/doctors',
    name: 'doctors',
    component: () => import('@/pages/doctors/ui/index.vue')
  },
]
