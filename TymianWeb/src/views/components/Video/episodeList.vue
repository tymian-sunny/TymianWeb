<template>
  <div class="anime-selector">
 <el-button-group >
   <el-button
     v-for="num in episodeCount"
     :key="num"
     :type="selectedEpisode === num ? 'primary' : 'default'"
     @click="selectEpisode(num)"
   >
     第{{ num }}集
   </el-button>
 </el-button-group>
</div>

<!-- <div class="controls">
 <el-slider
   v-model="episodeCount"
   :min="1"
   :max="50"
   :step="1"
   show-input
 />
</div> -->

</template>
 

<script setup>
  import { ref } from "vue";
  import { useVideoStore } from "@/api/store";

  // 全局变量
  const videoUrl = useVideoStore();
  
  // 总按钮数（总集数）
  const episodeCount = ref(24);
  // 当前按钮位置（当前集数）
  const selectedEpisode = ref(1)


  // 点击调用，修改视频播放地址为按钮对应地址
  const selectEpisode = (num) => {
    selectedEpisode.value = num;
    videoUrl.setCurrentVideoUrl("/resource/video/"+ num +".mp4");
    console.log("/resource/video/12"+ num +".mp4");
  }

</script>

<style scoped>
  
  .el-button{
    width: 50px;
    margin-top: 5px;
    margin-right: 5px;
  }

  .anime-selector {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    padding: 10px;
  }

  .controls {
    margin-top: 15px;
    width: 300px;
  }
</style>