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
    component: () => import('../../pages/admin/ui/index.vue')
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('../../pages/services/ui/index.vue')
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
  }
]
