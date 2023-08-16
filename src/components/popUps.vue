<template>
  <el-button text @click="dialogTableVisible = true">
    <slot name="clickName"></slot>
  </el-button>

  <el-dialog v-model="dialogTableVisible" title="信息页面">

  </el-dialog>
</template>

<script setup>
import {ref} from "vue";

const dialogTableVisible = ref(false)
</script>

<style scoped>

</style>