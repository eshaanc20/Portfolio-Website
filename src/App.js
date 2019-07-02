import React from 'react';
import {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage.js';
import Navigation from './Components/Navigation/Navigation.js';
import Education from './Components/Education/Education.js';
import Experience from './Components/Experience/Experience.js';
import Skills from './Components/Skills/Skills.js';
import Projects from './Components/Projects/Projects.js'

class App extends Component{
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation/>
          <Route path='/' exact render={()=> <Homepage/>}/>
          <Route path='/Education' exact render={()=> <Education/>}/>
          <Route path='/Experience' exact render={()=> <Experience/>}/>
          <Route path='/Skills' exact render={()=> <Skills/>}/>
          <Route path='/Projects' exact render={()=> <Projects/>}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
