import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AllBlog from '../views/AllBlog.vue'
import BlogDetail from '../views/BlogDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/all-blogs',
      name: 'browse',
      component: AllBlog
    },
    {
      path: '/blog/:name',
      name: 'detail',
      component: BlogDetail
    }
  ]
})

export default router
