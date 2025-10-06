import {createRouter, createWebHistory} from 'react-router-dom'
import Contacts from '../pages/Contacts.tsx'
import AboutUs from '../pages/AboutUs.tsx'
import Products from '../pages/Products.tsx'
import Contacts from '../pages/Cart.tsx'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/aboutus',
      name: 'About Us',
      component: AboutUs,
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
    },
    {
      path: '/products',
      name: 'Products',
      component: Products,
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: Contacts,
    },
  ],
})