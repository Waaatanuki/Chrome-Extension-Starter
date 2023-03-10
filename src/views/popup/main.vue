<template>
  <div w-50 h-50>
    <h1>Hello Popup!</h1>
    <h2>{{ foo }}</h2>
    <el-button @click="bar" type="primary">nihao</el-button>
    <div
      class="icon-btn"
      i-carbon-sun
      dark:i-carbon-moon
      @click="toggleDark()"
    ></div>
  </div>
</template>

<script setup lang="ts">
const foo = ref('123')

function bar() {
  ElMessage.success('yes')
}
</script>

<style scoped></style>
