import React, { Component } from 'react'
import './App.css'
import Onfido from 'onfido-sdk-ui'
import { Button } from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Onfido sample</h1>
        </header>
        <div id="onfido-mount"></div>
        <Button bsStyle="primary" onClick={this._handleOnfido}>Onfido</Button>
      </div>
    )
  }

  _handleOnfido = () => {
    Onfido.init({
      // the JWT token that you generated earlier on
      token: 'YOUR_JWT_TOKEN',
      // id of the element you want to mount the component on
      containerId: 'onfido-mount',
      onComplete: function() {
        console.log("everything is complete")
        // You can now trigger your backend to start a new check
      }
    }) 
  }
}

export default App;
