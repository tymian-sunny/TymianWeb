import { createApp } from 'vue'
import ElementPlus from 'element-plus'
// import './styles/custom.scss'
import 'element-plus/dist/index.css'
// import './styles/custom.scss'
import App from './App.vue'
import router from './api/router'
import VueVideoPlayer from '@videojs-player/vue'
import 'video.js/dist/video-js.css'
import { createPinia } from "pinia";


const pinia = createPinia();
const app = createApp(App)

app.use(pinia)
app.use(VueVideoPlayer)
app.use(ElementPlus)
app.use(router)
app.mount('#app')