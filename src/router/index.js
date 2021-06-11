import { createRouter, createWebHistory } from "vue-router";

import Home from "@/pages/Home/index.vue";
import Product from "@/pages/Product/index.vue";
import User from "@/pages/User/index.vue";

// Auth
import Signup from "@/pages/Authentication/Signup/index.vue";
import Login from "@/pages/Authentication/Login/index.vue";
import ForgetPassword from "@/pages/Authentication/ForgetPassword/index.vue";

const routes = [
  { 
    path: '/',
    name: 'home',
    component: Home 
  },
  {
    path: '/product/:name',
    name: 'product',
    component: Product
  },
  {
    path: '/user/profile/:id',
    name: 'user_profile',
    component: User
  },
  { 
    path: '/signup',
    name: 'signup',
    component: Signup 
  },
  { 
    path: '/login',
    name: 'login',
    component: Login 
  },
  { 
    path: '/forget-password',
    name: 'forget_password',
    component: ForgetPassword 
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router