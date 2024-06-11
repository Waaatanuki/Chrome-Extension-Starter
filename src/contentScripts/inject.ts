(() => {
  let eventOn = false
  document.addEventListener('readystatechange', (event) => {
    if (eventOn)
      return
    eventOn = true
    $(document).ajaxSuccess((event, xhr, settings, data) => {
      document.dispatchEvent(
        new CustomEvent('variableRetrieved', {
          detail: JSON.stringify(settings.url),
        }),
      )
    })
  })
})()
