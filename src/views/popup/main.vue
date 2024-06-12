<script setup lang="ts">
import { sendMessage } from 'webext-bridge/popup'
import { storageDemo } from '~/logic/storage'

async function hi() {
  ElMessage.success(storageDemo.value)

  const [tab] = await chrome.tabs.query({ currentWindow: true, active: true })
  console.log(tab)

  const resp = await sendMessage('hello', { title: 'tab.title!!!!' }, { context: 'content-script', tabId: tab.id! })
  console.log(resp)

  const AUDIO_URL = 'https://prd-game-a5-granbluefantasy.akamaized.net/assets/sound/se/treasure_se_2.mp3'
  const audio = new Audio(AUDIO_URL)
  chrome.notifications.create({
    iconUrl: '/assets/logo.png',
    message: 'hi!!',
    type: 'basic',
    title: '通知',
  })
  audio.play()
}
</script>

<template>
  <div h-50 w-50 fc flex-col gap-5 p-10>
    <div w-full flex items-center justify-end>
      <div class="icon-btn" i-carbon-sun dark:i-carbon-moon @click="toggleDark()" />
    </div>
    <h1>Hello {{ storageDemo }}!</h1>
    <el-input v-model="storageDemo" />
    <div btn type="primary" @click="hi">
      👋
    </div>
  </div>
</template>
