import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Menu from '@/views/Menu.vue';
import Products from '@/views/Products.vue';
import Contact from '@/views/Contact.vue';
import About from '@/views/About.vue';

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
      path: '/products/:id',
      name: 'Products',
      component: Products,
      props: true // Parametreyi route üzerinden almak için
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
  ],
});

export default router;
