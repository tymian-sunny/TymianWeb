<template>

  <div class="box">

    <Transition name="nested" v-on="drawer" :duration="1000" :style="{width: process+'%'}">
      <div class="navigation">
        <el-collapse-transition>
          <div v-show="drawer" class="navigationBar">
            <el-menu
            menu-trigger="click"
            close-on-click-outside="true"
            class="el-menu-demo" 
            mode="horizontal" 
            :background-color="styles.mainColor"
            :text-color="styles.testColor"
            :active-text-color="styles.contrastiveColor" 
            hide-timeout=300
            >
              <el-menu-item index="0" disabled>&nbsp;&nbsp;</el-menu-item>
              <el-menu-item index="1">Processing Center</el-menu-item>
              <el-sub-menu index="2">
                <template #title >Workspace</template>
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
              <el-menu-item index="3" disabled>Info</el-menu-item>
              <el-menu-item index="4">Orders</el-menu-item>
              <el-menu-item index="5">Hi</el-menu-item>
            </el-menu>
          </div>
        </el-collapse-transition>
      </div>
    </Transition>

    <el-button type="primary" class="el-button1" @click="beClick" :color="styles.secondaryColor">
      
      <el-avatar :size="60">
        <img
          src="@/resource/img/Avatar/Avatar1.svg"
        />
      </el-avatar>
    </el-button>
    

  </div>
</template>

<script lang="ts" setup>
  import { ref, Transition } from 'vue'
  import icons from './icons/icons.vue'
  import styles from '@/styles/color.module.scss';
  
  const errorHandler = () => true
  const drawer = ref(false)
  let process = ref(0)
  let imgControl = ref("center")

  function beClick(){
    drawer.value = !drawer.value
    if(drawer.value){
      process.value = 90
    }else{
      process.value = 0
    }

    if(imgControl.value == "center"){
        imgControl.value = "left"
    }else{
      imgControl.value = "center"
    }
  }

</script>

<style lang="scss">

  .box{
    position:relative;
    display: flex;
    justify-content: center;
  }
  
  .navigation{
    position: absolute;
    height: 50px;
    margin-top: 30px;
    border-radius: 35px;
    transition: width 0.5s ease;
    z-index: 1;
  }

  .el-button1{
    position: absolute;
    margin-top: 20px;
    border-radius: 100%;
    width: 70px;
    height: 70px;
    z-index: 1;
  }

  $head: 80px;


  .el-menu-demo{
    height: 50px;
    border-radius: 35px;
  }

  .el-menu--horizontal {
    --el-menu-horizontal-height: 80px;
  }
  .navigationBar{
    height: $head;
  }

</style>