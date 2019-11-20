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

class App extends Component{
  render() {
    return (
        <div style={{display: 'flex', flexDirection: 'column', backgroundColor: '#f0f0f0', height: '100%'}}>
          <Navigation/>
          <Homepage/>
          <Education/>
          <Experience/>
          <Skills/>
          <Projects/>
          <Certifications/>
          <Contact/>
        </div>
    );
  }
}

export default App;
