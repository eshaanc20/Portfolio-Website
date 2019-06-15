import React from 'react';
import {Component} from 'react';
import Homepage from './Components/Homepage/Homepage.js';
import Navigation from './Components/Navigation/Navigation.js';
import {BrowserRouter, Route} from 'react-router-dom'

class App extends Component{
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation/>
          <Route path='/' exact render={()=> <Homepage/>}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
