import React from 'react';
import logo from './logo.svg';
import Gauge from './Gauge.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Parametri ideali</h2>
        <table>
          <tr>
          <td>
            <Gauge />
            </td>
            <td>
            <Gauge value="50" label="seno"  units="cm" color1="blue" color2="green" circleColor="orange" />
            </td>
            <td>
            <Gauge value="62" label="vita"  units="cm" 
              backgroundColor="yellow" // a destra 
              color1="azure" 
              color2="blue" // color range 2
              circleColor="green" // inutile
              unitsAndLabelColor="red" 
              arrowColor="teal" // fill color for arrow
            />
            </td>
            <td>
            <Gauge value="90"  label="fianchi" units="cm"color2="green" arrowColor="yellow" />
            </td>
          </tr>
        </table>
        <img src={logo} className="App-logo" alt="logo" />
          <p>
          Sito della madonna: <code>https://wattenberger.com/blog/gauge</code>, 
          da cui traggo ispirazione come dall'uomo del Giappone
        </p>
       
      </header>
    </div>
  );
}

export default App;
