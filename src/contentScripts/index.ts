import { onMessage } from 'webext-bridge/content-script'

(() => {
  console.info('Hello world from content script')

  onMessage('hello', (msg) => {
    console.log(msg)
    return 'hahah'
  })
})()
