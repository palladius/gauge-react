import React from 'react';
import logo from './logo.svg';
import './App.css';

//import {scaleLinear} from "d3-scale";
//import {Datamap} from "d3";
//import * as d3 from 'd3';
import {scaleLinear} from "d3-scale";
// https://github.com/d3/d3
var d3 = require("d3");


var basic_choropleth = new Datamap({
  element: document.getElementById("basic_choropleth"),
  projection: 'mercator',
  fills: {
    defaultFill: "#ABDDA4",
    authorHasTraveledTo: "#fa0fa0"
  },
  data: {
    USA: { fillKey: "authorHasTraveledTo" },
    JPN: { fillKey: "authorHasTraveledTo" },
    ITA: { fillKey: "authorHasTraveledTo" },
    CRI: { fillKey: "authorHasTraveledTo" },
    KOR: { fillKey: "authorHasTraveledTo" },
    DEU: { fillKey: "authorHasTraveledTo" },
  }
});

var colors = d3.scale.category10();

window.setInterval(function() {
  basic_choropleth.updateChoropleth({
    USA: colors(Math.random() * 10),
    RUS: colors(Math.random() * 100),
    AUS: { fillKey: 'authorHasTraveledTo' },
    BRA: colors(Math.random() * 50),
    CAN: colors(Math.random() * 50),
    ZAF: colors(Math.random() * 50),
    IND: colors(Math.random() * 50),
  });
}, 2000);
          

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="100" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

function SobenmeDatamap() {
    return(
        <script>
            var map = new Datamap({
                element: document.getElementById('container'),
                scope: 'usa'
            });
        </script> 
    )
}
export default App;

