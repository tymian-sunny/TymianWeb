<template>
  <div>
    <el-row :gutter="10" style="margin-bottom: 40px;">
      <el-col :span="2">
        <el-button>Info</el-button>
      </el-col>
      <el-col :span="2">
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

<script lang="ts" setup>
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'
</script>
