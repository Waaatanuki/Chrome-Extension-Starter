import { onMessage } from 'webext-bridge/content-script'

(() => {
  console.info('Hello world from content script')

  onMessage('hello', (msg) => {
    console.log(msg)
    return 'hahah'
  })

  function injectScript() {
    const script = document.createElement('script')
    script.src = chrome.runtime.getURL('inject.js')
    script.async = true
    const doc = document.head || document.documentElement
    doc.appendChild(script)

    document.addEventListener('variableRetrieved', (e) => {
      console.log('cj', e.detail)
    })
  }

  injectScript()
})()
