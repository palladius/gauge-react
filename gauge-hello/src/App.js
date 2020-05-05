import React from 'react';
import logo from './logo.svg';
import Gauge from './Gauge.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <p>
          Sito della madonna: <code>https://wattenberger.com/blog/gauge</code>
          da cui traggo ispirazione come dall'uomo del Giappone
        </p>
        <Gauge/>
       
      </header>
    </div>
  );
}

export default App;
