<template>

  <div class="navigationBarBox">

    <Transition name="nested" :duration="1000" :style="{width: process+'%'}" ref="targetElement">
      <div class="navigation">
        <div v-show="isNavigation">
          <el-menu 
          ellipsis-icon="null" 
          close-on-click-outside="true" 
          mode="horizontal"
          :background-color="styles.mainColor" 
          :text-color="styles.testColor"
          :active-text-color="styles.contrastiveColor"
          >
            <el-menu-item disabled>&nbsp;&nbsp;&nbsp;&nbsp;</el-menu-item>
            <el-menu-item :index="navigationIndexList[0]">{{ navigationIndexList[0] }}</el-menu-item>
            <el-sub-menu :index="navigationIndexList[1]">
              <template #title>{{navigationIndexList[1]}}</template>
              <el-menu-item index="2-1">item one</el-menu-item>
              <el-menu-item index="2-2">item two</el-menu-item>
              <el-menu-item index="2-3">item three</el-menu-item>
              <el-sub-menu index="2-4">
                <template #title>item four</template>
                <el-menu-item index="2-4-1">item one</el-menu-item>
                <el-menu-item index="2-4-2">item two</el-menu-item>
                <el-menu-item index="2-4-3">item three</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
            <el-menu-item :index="navigationIndexList[2]" disabled>{{navigationIndexList[2]}}</el-menu-item>
            <el-menu-item :index="navigationIndexList[3]">{{navigationIndexList[3]}}</el-menu-item>
            <el-menu-item :index="navigationIndexList[4]">{{navigationIndexList[4]}}</el-menu-item>
            <el-menu-item  disabled>&nbsp;&nbsp;</el-menu-item>
          </el-menu>
        </div>
      </div>
    </Transition>

    <el-button type="primary" class="el-button1" @click="beClick" :color="styles.secondaryColor">
      <el-avatar :size="60">
        <img src="@/resource/img/Avatar/Avatar1.svg" />
      </el-avatar>
    </el-button>


  </div>
</template>

<script lang="js" setup>
  import { ref, Transition, onMounted, onBeforeUnmount, watch } from 'vue'
  import styles from '@/styles/color.module.scss';
  
  const drawer = ref(false)
  const isNavigation = ref(false)
  let process = ref(0)
  let imgControl = ref("center")
  const navigationIndexList = [
    "Processing Center",
    "Workspace",
    "Info",
    "Orders",
    "Hi"
  ]

  const targetElement = ref(null); // 模板引用
  let observer = null;             // ResizeObserver 实例



  onMounted(() => {
    // 初始化 ResizeObserver
    observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        // 更新宽度值（entry.contentRect 包含尺寸信息）
        // 监测tragetElement的witdh，当<10时将Navigation关掉
        
        if(entry.contentRect.width < 100){
          isNavigation.value = false;
        }else{
          isNavigation.value = true;
        }
      }
    });

    // 开始观察目标元素
    if (targetElement.value) {
      observer.observe(targetElement.value);
    }
  });

  onBeforeUnmount(() => {
    // 组件卸载时停止观察
    if (observer) {
      observer.disconnect();
    }
  });

  function beClick(){
    drawer.value = !drawer.value
    if(drawer.value){
      process.value = 90;
    }else{
      process.value = 0;
    }

    if(imgControl.value == "center"){
        imgControl.value = "left"
    }else{
      imgControl.value = "center"
    }
  }

</script>

<style lang="scss">

  $avatarSize:70px;

  .navigationBarBox{
    position: relative;
    display: flex;
    justify-content: left;
    padding-left: 5%;
  }
  
  .navigation{
    position: absolute;
    height: 50px;
    margin-top: 30px;
    border-radius: 35px;
    transition: width 1s ease;
    
    z-index: 1;

    background-color: $mainColor;
  }

  .el-button1 {
    position: absolute;
    margin-top: 20px;
    margin-left: (- $avatarSize)*0.5;
    border-radius: 100%;
    width: $avatarSize;
    height: $avatarSize;
    z-index: 1;
  }
  
  .el-menu--horizontal{
    height: 50px;
    border-radius: 35px;
  }

  .el-menu-item.is-active {
  background-color: transparent !important;
  color: inherit !important;
  }
</style>