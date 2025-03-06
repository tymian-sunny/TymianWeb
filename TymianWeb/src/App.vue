<!-- <script setup>
  import Test_1 from './Test_1.vue';
  import Home from './views/Home.vue';
</script>

<template>
  <Home/>
</template>
 -->


<template>
  <router-view v-slot="{ Component }">
    <keep-alive :include="['Home', 'Document']">
      <component :is="Component"/>
    </keep-alive>
  </router-view>
</template>

<script setup>
</script>

<style lang="scss">
</style>
