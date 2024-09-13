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
    name: 'Стоимость услуг',
    component: () => import('@/pages/prices/ui/index.vue')
  },
  {
    path: '/cases',
    name: 'Кейсы',
    component: () => import('@/pages/cases/ui/index.vue'),
    children: [
      {
        path: 'id',  // динамический параметр id
        name: 'caseDetail',
        component: () => import('@/pages/case/ui/index.vue'),
        props: true,  // Передаем параметр id как пропс
      }
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
        path: ':id', 
        name: 'DoctorsDetail',
        component: () => import('@/pages/doctors/ui/doctor-info/index.vue'), 
        props: true,
      }
    ]
  }
]
