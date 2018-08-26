import React, { Component } from 'react';
import './App.css';

import AuthenticationContainer from './auth/AuthenticationContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AuthenticationContainer />
      </div>
    );
  }
}

export default App;
