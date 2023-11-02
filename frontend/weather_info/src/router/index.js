import { createRouter, createWebHistory } from 'vue-router'
import weatherApp from '../components/weather/weather.vue'
import ForecastTable from '../components/weather/forecastTable.vue'
import Login from '../components/auth/login.vue'
import Register from '../components/auth/register.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: weatherApp
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/forecast/:id',
      name: 'forecast',
      component: ForecastTable,
      props: route => ({ id: parseInt(route.params.id) })
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
  ]
})

export default router
