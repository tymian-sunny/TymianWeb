// data_to_web.js
import { ref } from 'vue';

export function getDate() {
    let dataRef = ref(null); // 初始值为 null，表示数据尚未加载
    fetch('/data')
        .then(response => response.json())
        .then(data => {
            dataRef.value = data; // 直接存储 JSON 对象
        })
        .catch(error => {
            console.error('数据获取失败：', error);
            dataRef.value = { error: '出错了：' + error }; // 错误处理
        });
    return dataRef;
}

export function getEcchiDate() {
    let dataRef = ref(null); // 初始值为 null，表示数据尚未加载
    fetch('/ecchiData')
        .then(response => response.json())
        .then(data => {
            dataRef.value = data; // 直接存储 JSON 对象
        })
        .catch(error => {
            console.error('数据获取失败：', error);
            dataRef.value = { error: '出错了：' + error }; // 错误处理
        });
    return dataRef;
}