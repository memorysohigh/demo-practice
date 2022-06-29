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
    component:()=>import('@/views/Tuijian/Tuijian'),
    children:[
      {
        path:'gedanlist/:id/:type',
        component:()=>import('@/views/Tuijian/GeDanList')
      },
      {
        path:'zhuanjilist/:id/:type',
        component:()=>import('@/views/Tuijian/GeDanList')
      }
    ]
  },
  {
    path:'/geshou',
    component:()=>import('@/views/Geshou/Geshou')
  },
  {
    path:'/paihang',
    component:()=>import('@/views/Paihang/Paihang')
  },
  {
    path:'/sousuo',
    component:()=>import('@/views/Sousuo/Sousuo')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
