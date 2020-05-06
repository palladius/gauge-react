import React from 'react';
import logo from './logo.svg';
import Gauge from './Gauge.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Gauge test</h2>
        <table>
          <tr>
          <td>
            <Gauge               colorRangeStart="black"  />
            </td>
            <td>
            <Gauge value="90" label="seno"  units="cm" 
              colorRangeStart="blue" 
              colorRangeEnd="green" 
            />
            </td>
            <td>
            <Gauge value="62" label="vita"  units="cm" 
              //backgroundColor="black" // a destra 
              colorRangeStart="#aaffaa" // light green
              colorRangeEnd="#00aa00" // dark green
              unitsAndLabelColor="red" 
              arrowColor="teal" // fill color for arrow
            />
            </td>
            <td>
            <Gauge value="90"  label="fianchi" units="cm" 
              colorRangeStart="white" 
              colorRangeEnd="red" 
              arrowColor="yellow" 
            />
            </td>
          </tr>
        </table>
        <img src={logo} className="App-logo" alt="logo" />
          <p>
          <code>https://wattenberger.com/blog/gauge</code>
          </p>
          <p>
          sito da cui traggo ispirazione come dall'uomo del Giappone
        </p>
       
      </header>
    </div>
  );
}

export default App;
