import { onMessage } from 'webext-bridge/content-script'

(() => {
  console.info('Hello world from content script')

  onMessage('hello', (msg) => {
    console.log(msg)
    return 'hahah'
  })

  document.addEventListener('foo', (e: any) => {
    console.log('cj', e.detail)
  })
})()
