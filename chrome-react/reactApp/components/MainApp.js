import React from 'react';
import ChromePromise from 'chrome-promise';
const chromep = new ChromePromise();

class MainApp extends React.Component {
  constructor() {
    super()
    this.state = {
      text: '',
      h2Elems: 'Loading...'
    }
  }

  handleClick() {
    this.props.port.postMessage({
      msg: this.state.text
    })
    chrome.tabs.executeScript(null, {
      file: '../js/content_script.js'
    })
  }

  handleType(text) {
    this.setState({
      text: text
    })
  }

  componentDidMount() {
    this.props.port.onMessage.addListener(response => {
      this.setState({
        h2Elems: response.h2s
      })
      chrome.browserAction.setBadgeText({
        text: this.state.h2Elems.toString()
      });
    });
  }

  render() {
    return (
      <div>
        <h4>Number of h2 elements on page: {this.state.h2Elems}</h4>
        <input type="text" onChange={(e) => this.handleType(e.target.value)} value={this.state.text}></input>
        <button onClick={() => this.handleClick()}>Click me!</button>
      </div>
    )
  }
}

export default MainApp;
