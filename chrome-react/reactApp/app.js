import React from 'react';
import ReactDOM from 'react-dom';
import MainApp from './components/MainApp';
import ChromePromise from 'chrome-promise';
const chromep = new ChromePromise();
// chromep.storage.local.get(null, items => {
//   console.log(items)
// })
// chromep.storage.local.set({
//   test: 'test string'
// })
//
chromep.tabs.query({active: true, currentWindow: true})
.then(tabs => {
  let port = chrome.tabs.connect(tabs[0].id);
  ReactDOM.render(<MainApp port={port} />, document.getElementById('root'));
})
