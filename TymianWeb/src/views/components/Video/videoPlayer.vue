<template>
    <video-player
      src="/resource/video/123.mp4"
      poster="../../resource/img/Avatar/Avatar1.svg"
      controls
      :loop="true"
      :volume="0.6"
      aspectRatio="16:9"
    />
  </template>
  <script>
    import { defineComponent } from 'vue'
    import { VideoPlayer } from '@videojs-player/vue'
    import 'video.js/dist/video-js.css'
    export default defineComponent({
      components: { VideoPlayer }
    })
  </script>
