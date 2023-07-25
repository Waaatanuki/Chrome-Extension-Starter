<script setup lang="ts">
function bar() {
  ElMessage.success('panel')
}
</script>

<template>
  <div>Hello Panel!</div>
  <el-button @click="bar">
    nihao
  </el-button>
</template>

<style scoped></style>
