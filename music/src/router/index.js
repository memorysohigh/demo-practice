import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/tuijian'
  },
  {
    path:'/tuijian',
    component:()=>import('@/views/Tuijian')
  },
  {
    path:'/geshou',
    component:()=>import('@/views/Geshou')
  },
  {
    path:'/paihang',
    component:()=>import('@/views/Paihang')
  },
  {
    path:'/sousuo',
    component:()=>import('@/views/Sousuo')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
