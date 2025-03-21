import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Menu from '@/views/Menu.vue'
import Products from '@/views/Products.vue'
import Contact from '@/views/Contact.vue' // Contact sayfasını ekledik
import About from '@/views/About.vue' // About sayfasını ekledik

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu,
    },
    {
      path: '/product',
      name: 'Products',
      component: Products, // Ürün sayfasını burada belirtiyoruz
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact, // Contact sayfasını ekledik
    },
    {
      path: '/about',
      name: 'About',
      component: About, // About sayfasını ekledik
    }
  ],
})

export default router
