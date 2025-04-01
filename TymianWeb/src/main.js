import { createApp } from 'vue'
import ElementPlus from 'element-plus'
// import './styles/custom.scss'
import 'element-plus/dist/index.css'
// import './styles/custom.scss'
import App from './App.vue'
import router from './api/router'
import VUeVideoPlayer from '@videojs-player/vue'
import 'video.js/dist/video-js.css'

const app = createApp(App)

app.use(VUeVideoPlayer)
app.use(ElementPlus)
app.use(router)
app.mount('#app')