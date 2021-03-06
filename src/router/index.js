import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', name: 'login', component: Login },
    { path: '/register', component: Register },
  ],
})

// 导出路由
export default router
