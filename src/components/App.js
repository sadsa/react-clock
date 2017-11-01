import React, { Component } from 'react';
import Clock from './Clock/Clock';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Clock startTime={Date.now()} />
      </div>
    );
  }
}

export default App;
