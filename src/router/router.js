import { createRouter, createWebHistory } from "vue-router";
import Home from '@/views/HomeView.vue'
import Services from "@/components/Services.vue";
import Gallery from "@/components/Gallery.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import ContactUs from "@/components/ContactUs.vue";
import AboutUs from "@/components/AboutUs.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/services',
      name: "services",
      component: Services,
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: Gallery
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component: ContactUs
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: AboutUs
    },
    {
      path: '/:catchAll(.*)',
      name: "not-found",
      component: NotFoundView,
    }
  ],
});

export default router