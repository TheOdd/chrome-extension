$('h2').text(msg)
chromePort.postMessage({
  h2s: $('h2').length
})
