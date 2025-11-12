import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
import AppView from '../views/AppView.vue'

const routes = [
  { path: '/', component: Login },
  { path: '/app', component: AppView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
