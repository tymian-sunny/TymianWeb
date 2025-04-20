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
  },
  {
    path: '/video',
    meta: {
      title: '视频-Tymian小屋'
    },
    name: 'video',
    component: () => import("@/views/video.vue"),
  },
  {
    path: '/videoPlayer',
    meta: {
      title: 'ecchi-Tymian小屋'
    },
    name: 'videoPlayer',
    component: () => import("@/views/components/Video/videoPlayer.vue")
  },
  {
    path: '/ecchiVideo',
    meta: {
      title: 'ecchiVideo-Tymian小屋'
    },
    name: 'ecchiVideo',
    component: () => import("@/views/ecchiVideo.vue")
  },
  {
    path: '/animeVideo',
    meta: {
      title: 'ecchiVideo-Tymian小屋'
    },
    name: 'animeVideo',
    component: () => import("@/views/animeVideo.vue")
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
