<template>
    <div class="block text-center" m="t-4">
        <el-carousel trigger="click" :autoplay="false" height="100vh">
            <el-carousel-item v-for="(img,index) in bgImages" :key="index">
                <!-- <div :style="{bgStyle}"></div> -->
                 <div div :style="getBgStyle(img)"></div>
                 <div class="foreground-overlay"></div>
            </el-carousel-item>
        </el-carousel>
    </div>

</template>

<script setup>
import { ref } from 'vue'

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
</script>

<style>
html,
body {
    /* 
    * width: 100vw; height: 100vh; 让 body 和 html 填满整个视口
    * margin: 0; padding: 0; 避免额外间距
    * overflow: hidden; 避免滚动条影响布局
    */
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    /* overflow: hidden; */
}

.foreground-overlay {
    position: absolute;
    top: 10%;
    left: 10%;
    right: 10%;
    bottom: 10%;
    border-radius: 25px;
    /* height: 100vh; */
    background-color: rgba(139, 139, 139, 1);
    /* 半透明红色覆盖层 */
    mix-blend-mode: color-burn;
    /* 应用颜色加深混合模式 */
}
</style>