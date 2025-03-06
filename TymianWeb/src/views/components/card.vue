<template >
  <el-card style="max-width: 480px" class="box">
    <template #header>
      <div class="card-header">
        <span>Card name</span>
      </div>
    </template>
    <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>
    <template #footer>Footer content</template>
  </el-card>
</template>

<style>

  .box{
    position: absolute;
    z-index: 1;
    top: 25%;
    left: 10%;
    right: 10%;
    bottom: 10%;
    border-radius: 25px;
    justify-content: flex-start;
  }

</style>