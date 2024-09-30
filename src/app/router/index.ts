import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/pages/Main/ui/MainPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('@/pages/Admin/ui/Admin.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/pages/About/ui/about.vue')
  },
  {
    path: '/services',
    name: 'services',
    component: () => import( '@/pages/Services/ui/services.vue')
  },
  {
    path: '/prices',
    name: 'prices',
    component: () => import( '@/pages/Prices/ui/prices.vue')
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import('@/pages/Contacts/ui/contacts.vue')
  },
  {
    path: '/doctors',
    name: 'doctors',
    component: () => import('@/pages/Doctors/ui/doctors.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
