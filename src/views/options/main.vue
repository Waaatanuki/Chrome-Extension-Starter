<script setup lang="ts">
import { storageDemo } from '~/logic/storage'

const foo = ref('123')

function bar() {
  ElMessage.success('yes')
}
</script>

<template>
  <div w-50 h-50>
    <h1>Hello Popup!</h1>
    <h2>{{ foo }}</h2>
    <el-button type="primary" @click="bar">
      nihao
    </el-button>
    <el-input v-model="storageDemo" />
    <div class="mt-2">
      <span class="opacity-50"> Storage:</span> {{ storageDemo }}
    </div>
    <div class="icon-btn" i-carbon-sun dark:i-carbon-moon @click="toggleDark()" />
  </div>
</template>
