import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/porto',
    name: 'Portofolio',
    component: () => import('../views/Porto.vue')
  },
  {
    path:'/kisspray',
    name:'kisspray',
    component:()=>import('../views/PortoLink/KissPray.vue')
  },
  {
    path:'/momogi',
    name:'momogi',
    component:()=>import('../views/PortoLink/Momogi.vue')
  },
  {
    path:'/UMKM',
    name:'UMKM',
    component:()=>import('../views/PortoLink/UMKM.vue')
  },
  {
    path:'/Magnum',
    name:'Magnum',
    component:()=>import('../views/PortoLink/Magnum.vue')
  },
  {
    path:'/Kemensos',
    name:'Kemensos',
    component:()=>import('../views/PortoLink/Kemensos.vue')
  },
  {
    path:'/Nextar',
    name:'Nextar',
    component:()=>import('../views/PortoLink/Nextar.vue')
  },
  {
    path:'/Writing',
    name:'Writing',
    component:()=>import('../views/Writing.vue')
  },

]

const router = new VueRouter({
  routes
})

export default router
