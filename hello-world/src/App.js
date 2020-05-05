import React from 'react';
import logo from './logo.svg';
import HelloWorld from './HelloWorld.js';
import './App.css';


function App() {
  return (
    <div className="App">
      <p>Check the click button below</p>
      <HelloWorld />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
