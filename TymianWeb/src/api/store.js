import { defineStore } from "pinia";
  
export const useVideoStore = defineStore('video',{
    state:() =>({
        // 初始化视频地址为空
        currentVideoUrl:' '
    }),
    actions:{
        setCurrentVideoUrl(url){
            this.currentVideoUrl = url;
        }
    }
});