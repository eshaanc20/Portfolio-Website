import React from "react";
import "./Navigation.css";
import { Link } from "react-scroll";
import { FaHome } from "react-icons/fa";

class Navigation extends React.Component {
  render() {
    return (
      <nav className="modern-nav">
        <div className="nav-background-blur"></div>
        <div className="nav-container">
          <div className="nav-logo">
            <Link to="Homepage" smooth={true} className="logo-link">
              <div className="logo-icon">
                <FaHome />
              </div>
              <span className="logo-text">Eshaan Chaudhari</span>
            </Link>
          </div>

          <div className="nav-links">
            <Link to="Education" smooth={true} className="nav-link" offset={-80}>
              <span className="nav-link-text">Education</span>
              <div className="nav-link-underline"></div>
            </Link>
            <Link to="Experiences" smooth={true} className="nav-link" offset={-80}>
              <span className="nav-link-text">Experience</span>
              <div className="nav-link-underline"></div>
            </Link>
            <Link to="Skills" smooth={true} className="nav-link" offset={-80}>
              <span className="nav-link-text">Skills</span>
              <div className="nav-link-underline"></div>
            </Link>
            <Link to="Projects" smooth={true} className="nav-link" offset={-80}>
              <span className="nav-link-text">Projects</span>
              <div className="nav-link-underline"></div>
            </Link>
            <Link to="Certifications" smooth={true} className="nav-link" offset={-80}>
              <span className="nav-link-text">Certifications</span>
              <div className="nav-link-underline"></div>
            </Link>
            <Link to="Contact" smooth={true} className="nav-link nav-link-cta" offset={-80}>
              <span className="nav-link-text">Contact</span>
              <div className="nav-cta-glow"></div>
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
