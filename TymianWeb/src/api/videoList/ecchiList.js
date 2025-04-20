import { ref, watch, computed } from 'vue';
import { getEcchiDate } from '@/api/data_to_web.js';
import { useRouter } from "vue-router";

const videoList = ref([]); // 定义响应式数组存储视频数据
const date = getEcchiDate();
const router = useRouter()
const sortMethod = ref('views');
// 控制显示对象（1：下载成功，2：下载失败，3：全部对象）
export const radio = ref(1)

// 定义函数来读取所有数据并更新 videoList
export function readAllData(json) {
  if (!json) {
    console.log("数据尚未加载");
    return;
  }
  if (json.error) {
    console.log(json.error);
    return;
  }

  // 读取总数并输出到控制台（可选）
  console.log("总数:", json.total.number);

  // 清空 videoList
  videoList.value = [];

  // 遍历 JSON 对象的所有属性
  for (const key in json) {
    if (key !== "total") { // 排除 total 属性
      const video = json[key];

      // 设置视频地址
      if (video.video_path != null) {
        let path = video.video_path;
        let relativePath;
        if(path.includes('srv')){
          // 替换路径为相对地址
          relativePath = path.replace(
            '/srv/video_downloader/data/downloads/',
            '/ecchi/media/videos/'
          );
        }else{
          relativePath = path.replace(
            'F:\\WorkFile\\2025\\iwaraTvAutoDownload\\downloads\\',
            '/ecchi/media/videos/'
          )
        }
        // ✅ 正确设置路径
        video.video_path = relativePath;
      }
      
      // 设置图片地址
      if(video.thumbnail_path != null){
        let path = video.thumbnail_path;
        let relativePath;
        if(path.includes('srv')){
            // 替换路径为相对地址
            relativePath = path.replace(
            '/srv/video_downloader/data/downloads/thumbnail',
            '/ecchi/media/img/thumbnail'
          )
        }else{
          relativePath = path.replace(
            'F:\\WorkFile\\2025\\iwaraTvAutoDownload\\downloads\\thumbnails\\',
            '/ecchi/media/img/thumbnail/'
          )
        }

        
        // ✅ 正确设置路径
        video.thumbnail_path = relativePath;
      }

      videoList.value.push(video); // 添加到列表中
      console.log(videoList.value)
    }
  }
}

// 设置排序方式
export function setSortMethod(method) {
  sortMethod.value = method; // 更新排序方式
}

const sortedVideoList = computed(() => {
  if (sortMethod.value === 'views') {
    // 按观看数降序排序
    return [...videoList.value].sort((a, b) => b.video_numViews - a.video_numViews);

  } else if (sortMethod.value === 'likes') {
    // 按点赞数降序排序
    return [...videoList.value].sort((a, b) => b.video_numLikes - a.video_numLikes);

  } else if (sortMethod.value === 'download_time'){
    // 按下载时间降序排序
    return [...videoList.value.sort(function(oldTime, newTime){

      let time1 = new Date(oldTime.download_time);
      let time2 = new Date(newTime.download_time)

      return time2.getTime() - time1.getTime();
    })];
    
  } else if(sortMethod.value === 'local_id'){
    // 按本地ID排序
    return [...videoList.value].sort((a, b) => b.local_id - a.local_id);
  }
  
  return videoList.value; // 默认返回未排序的数据
});

// 监视 date 的变化，并在数据更新时调用 readAllData
watch(date, (newValue) => {
  if (newValue) {
    readAllData(newValue);
  }
}, { immediate: true });

export function getVideo(data){
  setTimeout(() => {
          router.push({
            path:'/ecchi',
            query:{
              data:data
            }
          })
      }, 0)
}

// 计算属性：根据按钮状态过滤数据
export const filteredVideoList = computed(() => {
  if (radio.value == 1) {
    return sortedVideoList.value.filter(video => video.success)
  }else if(radio.value == 2){
    return sortedVideoList.value.filter(video => !video.success)
  } else {
    return sortedVideoList.value
  }
})