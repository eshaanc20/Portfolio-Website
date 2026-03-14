import React from "react";
import { Component } from "react";
import Homepage from "./Components/Homepage/Homepage.jsx";
import Navigation from "./Components/Navigation/Navigation.jsx";
import Education from "./Components/Education/Education.jsx";
import Experience from "./Components/Experience/Experience.jsx";
import PenroseFoundry from "./Components/PenroseFoundry/PenroseFoundry.jsx";
import Skills from "./Components/Skills/Skills.jsx";
import Projects from "./Components/Projects/Projects.jsx";
import Certifications from "./Components/Certifications/Certifications.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { introComplete: false };
  }

  componentDidMount() {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      this.setState({ introComplete: true });
      return;
    }

    document.body.style.overflow = "hidden";
    this.introTimer = setTimeout(() => {
      this.setState({ introComplete: true });
      document.body.style.overflow = "";
    }, 3500);
  }

  componentWillUnmount() {
    clearTimeout(this.introTimer);
    document.body.style.overflow = "";
  }

  render() {
    const { introComplete } = this.state;

    return (
      <div className="app">
        <Navigation introComplete={introComplete} />
        <Homepage introComplete={introComplete} />
        <div className="app-content">
          <Experience />
          <PenroseFoundry />
          <Education />
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
