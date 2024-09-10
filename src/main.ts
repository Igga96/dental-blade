import { createApp } from 'vue'
import App from '../src/app/App.vue'
import './registerServiceWorker'
import router from '@/app/router'
import { store } from '@/app/store'

createApp(App).use(store).use(router).mount('#app')
