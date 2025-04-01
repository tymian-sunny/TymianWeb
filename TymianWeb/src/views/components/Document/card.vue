<template >
  <el-card style="max-width: " class="box">
    <template #header>
      <div class="card-header">
        <span>关于我们：</span>
      </div>
    </template>
      <p>本项目为一个大学生的全栈开发学习项目</p>
      <p>内容涵盖：</p>
      <p>1. Stable-Diffusion&nbsp;(AI绘画工具)&nbsp;的在线使用。</p>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        此服务使用3060 10G版本搭建,目前拥有4个模型和一个Lora
      </p>
      <p>2. 开发中......</p>
      
    <!-- <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p> -->
    <template #footer>项目作者：Tymian&nbsp;&nbsp;&nbsp;&nbsp;-2025</template>
  </el-card>
</template>

<style>

  .box{
    position: absolute;
    z-index: 1;
    top: 25%;
    left: 10%;
    right: 10%;
    bottom: 10%;
    border-radius: 25px;
    justify-content: flex-start;
  }

</style>