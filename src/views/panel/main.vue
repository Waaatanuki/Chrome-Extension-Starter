<template>
  <div>Hello Panel!</div>
  <el-button @click="bar">nihao</el-button>
</template>

<script setup lang="ts">
function bar() {
  ElMessage.success('panel')
}
</script>

<style scoped></style>
