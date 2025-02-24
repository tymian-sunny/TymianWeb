<template>
    <div class="block text-center" m="t-4">
        <el-carousel trigger="click" :autoplay="false" height="100vh">
            <el-carousel-item v-for="(img,index) in bgImages" :key="index">
                 <div div :style="getBgStyle(img)"></div>
                 <div class="foreground-overlay"></div>
            </el-carousel-item>
        </el-carousel>
    </div>

</template>

<script setup>
import { ref } from 'vue'
// import colorGetter from '../../api/bgColorgetter.js'
// import * as colorGetter from '../../test/bgColorgetter.js'


const bgUrl = new URL('@/resource/img/Background/Background1.png', import.meta.url).href;
const bgStyle = ref({
    backgroundColor: 'lightblue',
    backgroundImage: `url(${bgUrl})`,  // 使用反引号而非单引号
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
});

const bgImages = [
    new URL('@/resource/img/Background/Background1.jpg', import.meta.url).href,
    new URL('@/resource/img/Background/Background2.png', import.meta.url).href,
    new URL('@/resource/img/Background/Background3.png', import.meta.url).href,
    new URL('@/resource/img/Background/Background4.png', import.meta.url).href,
    new URL('@/resource/img/Background/Background5.jpg', import.meta.url).href,
]
function getBgStyle(imgUrl){
    return{
        backgroundColor: 'lightblue',
        backgroundImage: `url(${imgUrl})`,  // 使用反引号而非单引号
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
    }
}

// console.log(colorGetter.getMainColor(bgImages[3]));
</script>

<style lang="scss">
html,
body {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
}

.foreground-overlay {
    position: absolute;
    top: 10%;
    left: 10%;
    right: 10%;
    bottom: 10%;
    border-radius: 25px;
    // 半透明覆盖层
    background-color: rgba(139, 139, 139, 1);
    // 应用颜色加深混合模式
    mix-blend-mode: color-burn;
}
</style>