<template>
    <div class="windowBox">
        <img src="@/resource/img/SideBarImg/AzusaNya.png" style="height: 100%;position: absolute;"/>
        <div class="titleBox">
            <div :style="{color: styles.testColor}">Tymian的互联网小屋</div>
        </div>
        <div class="selectBarBox">
            <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
                <li v-for="button in buttonList" :key="button.id" class="infinite-list-item">
                    <el-button 
                    :color="styles.mainColor" 
                    :dark="false" 
                    @click="handleButtonClick(button.id)"
                    class="button" plain>
                        <div style="font-size: 18px;">
                            {{ button.id }}. {{ button.text }}
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
    import styles from '@/styles/color.module.scss';
    import axios from 'axios';
    import { id } from 'element-plus/es/locale';
    import { useRouter } from "vue-router";
    // import { isDark } from '~/composables/dark'
    const router = useRouter()
    const bodyStyle = ref({
        position: 'relative',
        margin: '100px',
        height: '100vh',
    })

    // Button信息源
    interface ButtonConfig {
        id: number
        text: string
    }

    // const router = useRouter()
    const buttonList = ref<ButtonConfig[]>([])

    // 初始化默认按钮配置
    const defaultButtons: ButtonConfig[] = [
        {
            id: 1,
            text: '🏠 首页',
        },
        {
            id: 2,
            text: '📖 文档',
        },
        {
            id: 3,
            text: 'Stable-Diffusion首页',
        },
        {
            id: 4,
            text: '动漫播放器',
        }
    ]

    function btn_2_beClick(){
        console.log("btn2isCLick");
        
        setTimeout(() => {
            router.push(`/Document`)
        }, 0)
    }
    
    function btn_3_beClick(){
        window.location.href = 'https://stable-diffusion.tymian.xyz/';
    }

    function btn_4_beClick(){
        setTimeout(() => {
            router.push(`/Video`)
        }, 0)
    }

    // 动态按钮ID计数器（从默认按钮之后开始）
    const dynamicButtonId = ref(defaultButtons.length + 1)

    // 组件挂载时初始化
    onMounted(() => {
        // 添加默认按钮
        buttonList.value.push(...defaultButtons)

        // 可选：立即加载第一组动态按钮
        loadInitialDynamicButtons()
    })

    // 初始动态按钮加载
    const loadInitialDynamicButtons = () => {
        const initialButtons = Array.from({ length: 3 }, (_, i) =>
            generateButtonConfig(dynamicButtonId.value + i)
        )
        buttonList.value.push(...initialButtons)
        dynamicButtonId.value += initialButtons.length
    }

    // 修改后的生成函数
    const generateButtonConfig = (id: number): ButtonConfig => {
        // 确保不与默认按钮ID冲突
        const safeId = id > Math.max(...defaultButtons.map(b => b.id))
            ? id
            : Math.max(...defaultButtons.map(b => b.id)) + id

        // 示例生成逻辑（可根据需要修改）
        const isDynamicLink = safeId % 2 === 0
        const lastDigit = safeId % 10

        return {
            id: safeId,
            text: `动态按钮 ${safeId}`,
            ...(isDynamicLink
                ? {
                    externalLink: `https://dynamic.example.com/page/${safeId}`,
                    linkBehavior: '_blank'
                }
                : {
                    routeType: 'path',
                    routeTarget: lastDigit === 5 ? '/special' : '/details',
                    routeParams: { id: safeId }
                })
        }
    }

    // 修改后的加载函数
    const load = () => {
        const newButtons = Array.from({ length: 2 }, (_, i) =>
            generateButtonConfig(dynamicButtonId.value + i)
        )
        buttonList.value.push(...newButtons)
        dynamicButtonId.value += newButtons.length
    }

    // 按钮业务逻辑处理器
    const buttonActions = {
        // 通用操作示例
        openModal(id: number) {
            console.log(`打开模态框，按钮ID: ${id}`)
        },
        navigateTo(id: number) {
            console.log(`执行路由跳转，按钮ID: ${id}`)
        },
        apiRequest(id: number) {
            console.log(`发起API请求，按钮ID: ${id}`)
        },
        
        // 特殊ID定制逻辑
        customAction1(id: number) {
            console.log(`定制操作1，按钮ID: ${id}`)
        },
        customAction2(id: number) {
            console.log(`定制操作2，按钮ID: ${id}`)
        }
    }

    // 智能逻辑分发器
    const actionDispatcher = (id: number) => {
        // 特殊ID优先处理
        const specialHandlers: { [key: number]: () => void } = {
            2: () => btn_2_beClick(),
            3: () => btn_3_beClick(),
            4: () => btn_4_beClick(),
        }

        return specialHandlers[id] || (() => {
            // 常规ID处理策略
            const actionType = id % 3
            switch(actionType) {
            case 0: return buttonActions.openModal
            case 1: return buttonActions.navigateTo
            case 2: return buttonActions.apiRequest
            default: return () => console.log('默认操作')
            }
        })()
    }

    // 点击事件处理
        const handleButtonClick = (id: number) => {
        const action = actionDispatcher(id)
        action(id)
        
        // 异步操作示例
        if (id % 5 === 0) {
            setTimeout(() => {
            console.log(`延迟执行操作，按钮ID: ${id}`)
            }, 1000)
        }
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
        "rule34",
        // "gelbooru-h"
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

<style scoped lang="scss">
    .windowBox {
        position: absolute;
        top: 55%;
        left: 10%;
        right: 10%;
        bottom: 10%;
        border-radius: 25px;
        background-color: rgba(shallowColor($mainColor, 10),0.8);
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
        border: 5px solid $mainColor;
    }

    .infinite-list {
        height: 100%;
        padding: 0;
        margin: 0px;
        border-radius: 20px;
        list-style: none;
        scrollbar-width: none;
        background-color: rgba($mainColor,0.5);
        
    }
    
    .infinite-list .infinite-list-item {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
        margin: 10px 20px;
    }

    .infinite-list .infinite-list-item+.list-item {
        margin-top: 10px;
    }

    .countBox{
        position: absolute;
        left: 81%;
        right: 1%;
        bottom: 10%;
        border-radius: 25px;
    }

    .button{
        height: 100%;
        width: 100%;
        border-radius: 15px;
        border: 3px solid contrastiveColor($mainColor);
    }
</style>