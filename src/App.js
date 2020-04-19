import React from 'react';
import {Component} from 'react';
import Homepage from './Components/Homepage/Homepage';
import Navigation from './Components/Navigation/Navigation';
import Education from './Components/Education/Education';
import Experience from './Components/Experience/Experience';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Certifications from './Components/Certifications/Certifications';
import Contact from './Components/Contact/Contact';
import './App.css';

class App extends Component{
  render() {
    return (
        <div>
          <Navigation/>
          <Homepage/>
          <div className='app'>
            <Education/>
            <Experience/>
            <Skills/>
            <Projects/>
            <Certifications/>
            <Contact/>
          </div>
        </div>
    );
  }
}

export default App;
