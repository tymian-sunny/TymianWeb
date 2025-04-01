<!-- EpisodeList.vue -->
<template>
    <div class="sidebar">
      <div
        v-for="(episode, index) in episodes"
        :key="index"
        class="episode-button"
        :class="{ active: index === currentEpisode }"
        @click="selectEpisode(index)"
      >
        {{ episode }}
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        episodes: [
          '第01集', '第02集', '第03集', '第04集', '第05集',
          '第06集', '第07集', '第08集', '第09集', '第10集',
          '第11集', '第12集先行'
        ],
        currentEpisode: 0
      };
    },
    methods: {
      selectEpisode(index) {
        this.currentEpisode = index;
        // 这里可以添加逻辑，例如切换视频源
      }
    }
  };
  </script>
  
  <style scoped>
  .sidebar {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    background-color: #111;
  }
  
  .episode-button {
    padding: 10px;
    background-color: #333;
    color: #fff;
    border-radius: 5px;
    text-align: center;
    cursor: pointer;
  }
  
  .episode-button.active {
    background-color: #555;
  }
  </style>