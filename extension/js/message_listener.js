let chromePort, msg;
chrome.runtime.onConnect.addListener(function(port) {
  chromePort = port;
  chromePort.postMessage({
    h2s: $('h2').length
  })
  port.onMessage.addListener(function(recMsg) {
    msg = recMsg.msg
  });
});

$('html').change(function() {
  chromePort.postMessage({
    h2s: $('h2').length
  })
})
