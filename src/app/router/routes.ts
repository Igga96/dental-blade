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
    component: () => import('../../pages/admin/ui/admin-view/index.vue'),
    children: [
      {
        path: '',
        name: 'admin-login',
        component: () => import('../../pages/admin/ui/admin-login/index.vue')  
      },
      {
        path: 'dashboard',
        name: 'admin-dashboard',
        component: () => import('../../pages/admin/ui/admin-dashboard/index.vue'),
        meta: { requiresAuth: true }  
      },
      {
        path: 'users',
        name: 'admin-users',
        component: () => import('../../pages/admin/ui/admin-users/index.vue'),
        meta: { requiresAuth: true }  
      },
      {
        path: 'doctors',
        name: 'admin-doctors',
        component: () => import('../../pages/admin/ui/admin-doctors/index.vue'),
        meta: { requiresAuth: true }  
      },
      {
        path: 'prices',
        name: 'admin-prices',
        component: () => import('../../pages/admin/ui/admin-prices/index.vue'),
        meta: { requiresAuth: true }  
      },
      {
        path: 'cases',
        name: 'admin-cases',
        component: () => import('../../pages/admin/ui/admin-cases/index.vue'),
        meta: { requiresAuth: true }  
      },
      {
        path: 'contacts',
        name: 'admin-contacts',
        component: () => import('../../pages/admin/ui/admin-contacts/index.vue'),
        meta: { requiresAuth: true }  
      },
      {
        path: 'questions',
        name: 'admin-questions',
        component: () => import('../../pages/admin/ui/admin-questions/index.vue'),
        meta: { requiresAuth: true }  
      },
    ]
  },
  {
    path: '/services',
    name: 'Услуги',
    component: () => import('../../pages/services/ui/services-view/index.vue'),
    children: [
      {
        path: '',
        name: 'Услуги',
        component: () => import('../../pages/services/ui/services-list/index.vue'),

      },
      {
        path: ':slug',
        name: 'Имплантация',
        component: () => import('../../pages/services/ui/services-implantatsiya/index.vue'),

      },
    ]
  },
  {
    path: '/prices',
    name: 'Стоимость услуг',
    component: () => import('../../pages/prices/ui/index.vue')
  },
  {
    path: '/cases',
    name: 'Кейсы',
    component: () => import('../../pages/cases/ui/cases-view/ui/index.vue'),
    children: [
      {
        path: '',
        name: 'Кейсы',
        component: () => import('../../pages/cases/ui/cases-list/ui/index.vue'),

      },
      {
        path: ':slug',
        name: 'Кейс',
        component: () => import('../../pages/cases/ui/case-info/ui/index.vue'),
        props: true
      },
    ]
  },

  {
    path: '/doctors',
    name: 'Наши специалисты',
    component: () => import('@/pages/doctors/ui/doctors-view/index.vue'),
    children: [
      {
        path: '',
        name: 'Наши специалисты',
        component: () => import('@/pages/doctors/ui/doctors-list/index.vue'),
      },
      {
        path: ':slug',
        name: 'DoctorsDetail',
        component: () => import('@/pages/doctors/ui/doctor-info/index.vue'),
        props: true,
      }
    ]
  },
  {
    path: '/promotions',
    name: 'Акции',
    component: () => import('@/pages/promotions/ui/promotions-view/index.vue'),
    children: [
      {
        path: '',
        name: 'Акции',
        component: () => import('@/pages/promotions/ui/promotions-list/index.vue'),
      },
      {
        path: ':slug',
        name: 'promotionDetail',
        component: () => import('@/pages/promotions/ui/promotion-info/index.vue'),
        props: true,
      }
    ]
  },
]
