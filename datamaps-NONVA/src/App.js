import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router';

//import {scaleLinear} from "d3-scale";
//import {Datamap} from "d3";
//import * as d3 from 'd3';
//import {scaleLinear} from "d3-scale";
// https://github.com/d3/d3
//var d3 = require("d3");

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="100" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <Link to="/some/where">Click me</Link>
        </p>
      </header>
    </div>
  );
}



export default App;
