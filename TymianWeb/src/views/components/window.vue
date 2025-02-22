<template>
    <div class="box">
        <img src="@/resource/img/SideBarImg/AzusaNya.svg" />
        <div class="titleBox">
            Tymain的互联网小屋
        </div>
        <div class="selectBarBox">
            <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
                <li v-for="i in count" :key="i" class="infinite-list-item">
                    <el-button color="#ffc4c4" :dark="false" plain style="height: 100%;width: 100%;">
                        <div style="font-size: 18px;">
                            {{ i }} ：Test 
                        </div>
                    </el-button>
                </li>
            </ul>
        </div>
        <div class="countBox">
            <img :src="countImgSrc" alt=":name" style="width: 100%;"/>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import {ref, computed, onMounted, onBeforeMount} from 'vue'
    // import { isDark } from '~/composables/dark'
    
    const bodyStyle = ref({
        position: 'relative',
        margin: '100px',
        height: '100vh',
    })
    const count = ref(0)
    const load = () => {
        count.value += 2
    }

    const countImgTypes = [
        "asoul",
        // "booru-jaypee",
        "booru-lewd",
        "booru-lisu",
        "booru-qualityhentais",
        "booru-smtg",
        // "gelbooru",
        "green",
        "kasuterura-4",
        "moebooru",
        "original-new",
        "rule34"
    ]
    const countImgType = ref<number | null>(null)
    onBeforeMount(()=>{
        countImgType.value = Math.floor(Math.random() * countImgTypes.length)
        console.log('生成的随机数：', countImgType.value)
    })

// 使用 computed 根据 countImgType 动态计算图片 URL
const countImgSrc = computed(() => {
  // 确保 countImgType 有值，否则返回一个默认值
  const typeIndex = countImgType.value !== null ? countImgType.value : 0;
  return "https://count.getloli.com/@test?name=test" +
         "&theme=" + countImgTypes[typeIndex] +
         "&padding=1" +
         "&offset=0" +
         "&align=top" +
         "&scale=1" +
         "&pixelated=1" +
         "&darkmode=auto" +
         "&num=404"
})
</script>

<style scoped>
    .box {
        position: absolute;
        top: 55%;
        left: 10%;
        right: 10%;
        bottom: 10%;
        border-radius: 25px;
        background-color: #FFF;
        justify-content: flex-start;
        z-index: 2;
    }

    .titleBox{
        position: absolute;
        left: 0;
        right: 0;
        text-align: center;
        font-size: 32px;
    }

    .selectBarBox{
        position: absolute;
        left: 20%;
        right: 20%;
        top: 50px;
        bottom: 10%;
        border-radius: 25px;
        text-align: center;
        border: 5px solid #ffc4c4;
    }

    .infinite-list {
        height: 100%;
        padding: 0;
        margin: 0px;
        border-radius: 20px;
        list-style: none;
        scrollbar-width: none;
        /* Firefox 隐藏滚动条 */
        background-color: rgba(251, 196, 196, 0.5)
    }
    
    .infinite-list .infinite-list-item {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
        border-radius: 15px;
        /* background: var(--el-color-primary-light-9); */
        margin: 10px;
        color: var(--el-color-primary);
        background-color: #fac0c0;
    }

    .infinite-list .infinite-list-item+.list-item {
        margin-top: 10px;
    }

    .countBox{
        position: absolute;
        left: 81%;
        right: 1%;
        /* top: 50px; */
        bottom: 10%;
        border-radius: 25px;
        /* border: 5px solid #ffc4c4; */
    }
</style>