import React from 'react';
import {Component} from 'react';
import NameCard from './Components/NameCard.js';
import InfoCard from './Components/InfoCard.js';

class App extends Component{
  render() {
    return (
      <div>
        <NameCard/>
        <InfoCard/>
      </div>
    );
  }
}

export default App;
