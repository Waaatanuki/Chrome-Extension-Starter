import { sendMessage } from 'webext-bridge/background'

chrome.tabs.onUpdated.addListener(async (tabId) => {
  const resp = await sendMessage('hello', { title: 'tab.title' }, { context: 'content-script', tabId })
  console.log(resp)
})
