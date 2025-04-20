<template>

    <div class="sort-options">
      <el-button @click="setSortMethod('views')">按观看数排序</el-button>
      <el-button @click="setSortMethod('likes')">按点赞数排序</el-button>
      <el-button @click="setSortMethod('download_time')">按下载时间排序</el-button>
      <el-button @click="setSortMethod('local_id')">按本地Id排序</el-button>
    </div>

    <div class="mb-2 ml-4">
    <el-radio-group v-model="radio">
      <el-radio value="1" size="large">下载成功</el-radio>
      <el-radio value="2" size="large">下载失败</el-radio>
      <el-radio value="3" size="large">显示全部</el-radio>
    </el-radio-group>
  </div>

    <div class="card-container">
      <el-card v-for="video in filteredVideoList" :key="video.video_id" class="card-item">
        <template #header>{{ video.video_title }}</template>
        <img @click="getVideo(video.video_path)"
          :src="video.thumbnail_path"
          class="card-image"
        />
        <p>作者: {{ video.avatar_name }}</p>
        <p>评论数: {{ video.video_numComments }}</p>
        <p>点赞数: {{ video.video_numLikes }}</p>
        <p>观看数: {{ video.video_numViews }}</p>
        <p>标签: {{ video.video_tagList.join(', ') }}</p>
        <p>下载时间: {{ video.download_time }}</p>
        <p>视频大小: {{ video.video_size_mb }} MB</p>
        <p>下载成功: {{ video.success ? '是' : '否' }}</p>
        <p>本地Id：{{ video.local_id }}</p>
      </el-card>
    </div>
  </template>
  
  <script setup lang="ts">
    import { setSortMethod,getVideo,filteredVideoList,radio } from '@/api/videoList/ecchiList'   
  </script>
  
  <style lang="scss">
    $cardSize:360px;
  
    .card-container {
      display: flex;
      flex-wrap: wrap;
      gap: 16px; /* 可调整卡片间距 */
      justify-content: center;
    }
  
    .card-item {
      min-width: $cardSize;
      max-width: $cardSize;
      flex: 1 0 auto; /* 允许换行但不缩小 */
    }
  
    .card-image {
      width: 100%;
      height: auto;
    }
  </style>