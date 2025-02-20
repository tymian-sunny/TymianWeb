<template>
  <div>
    <el-row :gutter="10" style="margin-bottom: 40px;">
      <el-col :span="2">
        <el-button>Info</el-button>
      </el-col>
      <el-col :span="2">
        <!-- <button @click="changeName">nihao</button> -->
        <!-- <el-button type="primary">Warning{{ name }}</el-button> -->
        <el-button type="primary">Warning</el-button>
      </el-col>
      <el-col :span="2">
        <el-button type="success">Danger</el-button>
      </el-col>
      <el-col :span="2">
        <el-button type="info">Info</el-button>
      </el-col>
      <el-col :span="2">
        <el-button type="warning">Warning</el-button>
      </el-col>
      <el-col :span="2">
        <el-button type="danger">Danger</el-button>
      </el-col>
    </el-row>

    <el-row :gutter="10" style="margin-bottom: 40px;">
      <el-col :span="2">
        <el-button plain>Plain</el-button>
      </el-col>
      <el-col :span="2">
        <el-button type="primary" plain>Primary</el-button>
      </el-col>
      <el-col :span="2">
        <el-button type="success" plain>Success</el-button>
      </el-col>
      <el-col :span="2">
        <el-button type="info" plain>Info</el-button>
      </el-col>
      <el-col :span="2">
        <el-button type="warning" plain>Warning</el-button>
      </el-col>
      <el-col :span="2">
        <el-button type="danger" plain>Danger</el-button>
      </el-col>
    </el-row>

    <el-row :gutter="10" style="margin-bottom: 40px;">
      <el-col :span="2">
        <el-button round>Round</el-button>
      </el-col>
      <el-col :span="2">
        <el-button type="primary" round>Primary</el-button>
      </el-col>
      <el-col :span="2">
        <el-button type="success" round>Success</el-button>
      </el-col>
      <el-col :span="2">
        <el-button type="info" round>Info</el-button>
      </el-col>
      <el-col :span="2">
        <el-button type="warning" round>Warning</el-button>
      </el-col>
      <el-col :span="2">
        <el-button type="danger" round>Danger</el-button>
      </el-col>
    </el-row>

    <el-row :gutter="10" style="margin-bottom: 40px;">
      <el-col :span="2">
        <el-button :icon="Search" circle />
      </el-col>
      <el-col :span="2">
        <el-button type="primary" :icon="Edit" circle />
      </el-col>
      <el-col :span="2">
        <el-button type="success" :icon="Check" circle />
      </el-col>
      <el-col :span="2">
        <el-button type="info" :icon="Message" circle />
      </el-col>
      <el-col :span="2">
        <el-button type="warning" :icon="Star" circle />
      </el-col>
      <el-col :span="2">
        <el-button type="danger" :icon="Delete" circle />
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">

</script>

<script lang="ts" setup>
  import { Check, Delete, Edit, Message, Search, Star, } from '@element-plus/icons-vue'
import { tr } from 'element-plus/es/locale';
import { preprocessCSS } from 'vite';
  // 响应式数据：ref内写基本类型，reactive内写对象类型
  // ref: 可以定义基本类型,对象类型的响应式数据(定义对象由调用reactive的接口实现)
  // reactive: 只能定义对象类型的响应式数据 
  // reactive重新分配一个对象,会失去响应式(可以使用Object.assign(obj1, obj2)的方式去整体替换)
  // watch:监视数据的变化(只能监视4种类型: ref, reactive, 函数返回一个值(getter函数), 包含上述内容的数组)
  import { ref, reactive, toRefs, toRef, computed, watch } from 'vue';
  let name = ref("张三")
  let person = reactive({genter:'man', age:100})
  // toRefs: 把person中的每一个值都变成响应式对象
  let {genter, age} = toRefs(person)
  let lw = toRef(person, 'age')

  function changeName(){
    name.value = "zhang-san"
    console.log(name.value)
  }

  // 计算属性(计算属性有缓存,方法没有缓存),只读
  let fullName = computed(()=>{
    return 0
  })

  // 计算属性,可读/写
  let fullName2 = computed({
    get(){
      return 1
    },
    set(val) {
      // 添加逻辑来处理赋值操作
      console.log('fullName2被赋值为：', val);
    }
  })

  function test(){
    fullName2.value = 123;
  }

  // 监视

  // 监视情况一：监视【ref】定义的【基本类型】数据
  let sum = ref(1);
  // watch(监视对象,回调函数,（配置对象（deep、immediate、...））)
  const stopWatch = watch(sum, (newValue, oldValue)=>{
    console.log("监视sum");
    console.log('sum变化了' + newValue, oldValue);
    
    if(newValue >= 10){
      stopWatch()
    }
  })

  // 监视情况二：监视【ref】定义的【对象类型】数据
  let refObj = ref({
    name: 'name',
    age: 'age'
  })
  // 监视的为对象的地址值
  watch(refObj, (newValue,oldValue)=>{
    console.log('refObj变化了', newValue, oldValue);
  })
  // 深度监视，可监视对象内部属性的变化
  watch(refObj, (newValue,oldValue)=>{
    console.log('refObj变化了', newValue, oldValue);
  },{deep:true})

  // 监视情况三：监视【reactive】定义的【对象类型】数据，默认开启深度监视
  let reactiveObj = reactive({
    name: 'name',
    age: 'age'
  })
  watch(reactiveObj, (newValue,oldValue)=>{
    console.log('reactiveObj变化了',newValue, oldValue);
  })

  // 监视情况四：监视【ref】或【reactive】定义的【对象类型】数据中的某个属性
  let watchObj4 = reactive({
    name: 'zhangsan',
    age: '12',
    car: {
      c1: 'bench',
      c2: 'aude'
    }
  })
  // 监视基本属性(使用getter函数，此时监视的是函数返回的值)
  watch(()=>{return watchObj4.name}, (value)=>{
    console.log(value);
    
  })
  watch(()=>watchObj4.name,(value)=>{
    console.log(value);
  })
  // 监视对象属性中的属性
  watch(watchObj4.car, (value)=>{
    console.log(value);
  })
  // 监视对象属性本身（浅监视）
  watch(()=>watchObj4.car, (value)=>{
    console.log(value);
  })
  // 监视对象属性本身和其中的属性（打开深度监视）
  watch(()=>watchObj4.car, (value)=>{
    console.log(value);
  },{deep:true})

  // 监视情况五：监视上述多个数据
  let watchPbj5 = reactive({
    name: 'zhangsan',
    age: '12',
    car: {
      c1: 'bench',
      c2: 'aude'
    }
  })
  watch([()=>watchPbj5.name,()=>watchPbj5.car.c1], (value)=>{
    console.log(value);
  })

</script>
