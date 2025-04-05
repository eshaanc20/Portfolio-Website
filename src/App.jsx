import React from "react";
import { Component } from "react";
import Homepage from "./Components/Homepage/Homepage.jsx";
import Navigation from "./Components/Navigation/Navigation.jsx";
import Education from "./Components/Education/Education.jsx";
import Experience from "./Components/Experience/Experience.jsx";
import Skills from "./Components/Skills/Skills.jsx";
import Projects from "./Components/Projects/Projects.jsx";
import Certifications from "./Components/Certifications/Certifications.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navigation />
        <Homepage />
        <div className="app-content">
          <Education />
          <Experience />
          <Skills />
          <Projects />
          <Certifications />
          <Contact />
        </div>
      </div>
    );
  }
}

export default App;
