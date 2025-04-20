<template>
  <video-player
    id="vid1"
    ref="videoEl"
    class="video-js vjs-default-skin"
    :options="playerOptions"
    controls
  />
</template>

<script>
import { defineComponent, ref, watch, onMounted } from "vue";
import { VideoPlayer } from "@videojs-player/vue";
import videojs from "video.js"; // ✅ 1. 需要正确引入
import "video.js/dist/video-js.css";
import { useRoute } from 'vue-router';

export default defineComponent({
  components: { VideoPlayer },
  setup() {
    const videoEl = ref(null);
    let player = null; // 存储 Video.js 实例
      const url = useRoute().query.data
    // 视频播放器配置
    const playerOptions = ref({
      autoplay: false,
      volume:0.6,
      controls: true,
      responsive: true,
      fluid: true,
      poster: "/resource/img/1.png",
      sources: [{ src: url, type: "video/mp4" }],
    });

    // ✅ 2. 确保 DOM 渲染后初始化 video.js
    onMounted(() => {
      if (videoEl.value) {
        player = videojs(videoEl.value.$el, {}, () => {
          console.log("Video.js Player Ready!");
        });
      }
    });

    return {
      videoEl,
      playerOptions,
    };
  },
});
</script>

<style scoped>
</style>
