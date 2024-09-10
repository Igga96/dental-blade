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
    path: '/cases',
    name: 'cases',
    component: () => import('@/pages/cases/ui/index.vue'),
    children: [
      {
        path: 'slug',  // динамический параметр id
        name: 'caseDetail',
        component: () => import('@/pages/case/ui/index.vue'),
        props: true,  // Передаем параметр id как пропс
      }
    ]
  },

  {
    path: '/doctors',
    name: 'doctors',
    component: () => import('@/pages/doctors/ui/index.vue')
  },
]
