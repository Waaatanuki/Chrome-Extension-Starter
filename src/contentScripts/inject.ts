(() => {
  function waitForJQuery(cb: () => void, maxWait = 5000) {
    const startTime = Date.now()

    function check() {
      if (typeof $ !== 'undefined') {
        cb()
      }
      else if (Date.now() - startTime < maxWait) {
        setTimeout(check, 100)
      }
      else {
        console.log('jQuery 加载超时')
      }
    }

    check()
  }

  waitForJQuery(() => {
    $(document).ajaxSuccess((event, xhr, settings, data) => {
      document.dispatchEvent(
        new CustomEvent('foo', {
          detail: JSON.stringify(data),
        }),
      )
    })
  })
})()
