import React, { Component } from 'react';
import './App.css';

import Authentication from './pages/Authentication'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Authentication />
      </div>
    );
  }
}

export default App;
