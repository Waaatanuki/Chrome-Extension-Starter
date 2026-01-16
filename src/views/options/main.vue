<script setup lang="ts">
import { storageDemo } from '~/logic/storage'

function hi() {
  ElMessage.success(storageDemo.value)
}
</script>

<template>
  <div h-50 w-50 fc flex-col gap-5 p-10>
    <div w-full flex items-center justify-end>
      <div class="icon-btn" i-carbon-sun dark:i-carbon-moon @click="toggleDark()" />
    </div>
    <h1>options</h1>
    <h1>Hello {{ storageDemo }}!</h1>
    <el-input v-model="storageDemo" />
    <div btn type="primary" @click="hi">
      👋
    </div>
  </div>
</template>
