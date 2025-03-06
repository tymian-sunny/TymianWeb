import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    meta: {
      title: '首页-Tymian小屋'
    },
    component: () => import("@/views/Home.vue")
  },
  {
    path: '/Document',
    meta: {
      title: '文档-Tymian小屋'
    },
    name: 'Library',
    component: () => import("@/views/Document.vue"),
  }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach(async to => {
  const title = to.meta.title
  // 动态修改标题
  if (title) {
    document.title = title
  }
})

export default router
