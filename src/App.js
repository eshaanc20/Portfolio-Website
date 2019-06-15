import React from 'react';
import {Component} from 'react';
import Homepage from './Components/Homepage/Homepage.js';
import Navigation from './Components/Navigation/Navigation.js';

class App extends Component{
  render() {
    return (
      <div>
        <Navigation/>
        <Homepage/>
      </div>
    );
  }
}

export default App;
