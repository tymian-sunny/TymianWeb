<!-- <template>
    <div>
      <h1>图片主色调提取</h1>
      <button @click="handleProcessImages">提取主色调</button>
      <div v-if="colorsList.length">
        <div
          v-for="(colors, index) in colorsList"
          :key="index"
          style="margin-bottom: 20px;"
        >
          <h3>图片 {{ index + 1 }}</h3>
          <div style="display: flex;">
            <div
              v-for="(color, idx) in colors"
              :key="idx"
              :style="{ backgroundColor: color, width: '100px', height: '100px', marginRight: '10px' }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { ref } from "vue";
  import { processImages } from "../../api/octree";
  
  export default {
    name: "ColorQuantizer",
    setup() {
      const colorsList = ref<string[][]>([]);
  
      const handleProcessImages = async () => {
        const results = await processImages();
        colorsList.value = results;
      };
  
      return { colorsList, handleProcessImages };
    },
  };
  </script>
  
  <style scoped>
  /* 可根据需要添加样式 */
  </style>
   -->