import React, { useState } from "react";
import "./Projects.css";
import { FaRocket, FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import { IoLogoJavascript, IoLogoCss3 } from "react-icons/io";
import { SiJupyter, SiNumpy, SiPytorch, SiTypescript } from "react-icons/si";
import {
  FaReact,
  FaHtml5,
  FaPython,
  FaGitSquare,
  FaNpm,
  FaNodeJs,
  FaAngular,
} from "react-icons/fa";
import { DiHeroku } from "react-icons/di";
import MongoDBIcon from "../../Assets/MongoDB-icon.png";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1000,
  delay: 100,
  mirror: false,
  once: true,
});

const Projects = () => {
  const projectsData = [
    {
      title: "GazeTracker",
      category: "Capstone Project",
      type: "ML/AI",
      description:
        "Worked with a Psychology lab to create a browser-based gaze estimation plugin using JavaScript and jsPsych for remote psychology experiments with real-time neural gaze estimation.",
      highlights: [
        "Real-time face detection and neural gaze estimation at 30 FPS",
        "Trained lightweight CNN models (EfficientNet, MobileNet) in PyTorch",
        "Converted models to ONNX for browser-based inference",
        "Achieved ~3° angular accuracy with fully on-device processing",
        "Built data preprocessing pipeline with Python, NumPy, and Jupyter",
      ],
      tech: [
        { icon: <IoLogoJavascript />, color: "#f0cf13", name: "JavaScript" },
        { icon: <SiPytorch />, color: "#ee4c2c", name: "PyTorch" },
        { icon: <FaPython />, color: "#3776AB", name: "Python" },
        { icon: <SiJupyter />, color: "#f37726", name: "Jupyter" },
        { icon: <SiNumpy />, color: "#013243", name: "NumPy" },
        { icon: <IoLogoCss3 />, color: "#0f99f5", name: "CSS3" },
        { icon: <FaHtml5 />, color: "#f54c0f", name: "HTML5" },
      ],
      links: [
        {
          type: "demo",
          url: "https://d8b60923.gazetracker-demo.pages.dev/",
          label: "Try Demo",
        },
      ],
      note: "GitHub repository owned by research lab",
    },
    {
      title: "StockPlan",
      category: "Web Application",
      type: "Full-Stack",
      description:
        "Portfolio planning application to set goals for stocks, organize watchlists, and receive notifications when price targets are reached.",
      highlights: [
        "Plan portfolio by setting buy/sell price goals for stocks",
        "Automate tracking and receive notifications when goals are met",
        "Organize stocks into lists with real-time market data",
        "Built with Angular front-end and Node.js/Express.js REST API",
        "MongoDB database integration with Mongoose",
      ],
      tech: [
        { icon: <FaAngular />, color: "#dd0031", name: "Angular" },
        { icon: <FaNodeJs />, color: "#68a063", name: "Node.js" },
        { icon: <SiTypescript />, color: "#3178c6", name: "TypeScript" },
        { icon: <FaHtml5 />, color: "#f54c0f", name: "HTML5" },
        { icon: <IoLogoCss3 />, color: "#0f99f5", name: "CSS3" },
        { icon: <FaNpm />, color: "#ff524f", name: "npm" },
        { icon: <FaGitSquare />, color: "#f54d27", name: "Git" },
        { icon: null, image: MongoDBIcon, name: "MongoDB" },
      ],
      links: [
        {
          type: "demo",
          url: "https://stockplanapp.firebaseapp.com",
          label: "Live Demo",
        },
        {
          type: "github",
          url: "https://github.com/eshaanc20/StockPlan",
          label: "Source Code",
        },
      ],
    },
    {
      title: "Quick Alert",
      category: "Web Application",
      type: "Full-Stack",
      date: "01/2020",
      description:
        "Emergency alert system that helps users efficiently send their information to the nearest emergency service through a single SMS message.",
      highlights: [
        "Send user information to emergency services via SMS",
        "Emergency dashboard for hospitals to view patient data",
        "Twilio SMS API integration for message handling",
        "React with Material-UI front-end",
        "Node.js/Express.js REST API with MongoDB database",
        "Deployed on Firebase and Heroku",
      ],
      tech: [
        { icon: <FaReact />, color: "#2fc2f7", name: "React" },
        { icon: <FaNodeJs />, color: "#68a063", name: "Node.js" },
        { icon: <IoLogoJavascript />, color: "#f0cf13", name: "JavaScript" },
        { icon: <FaHtml5 />, color: "#f54c0f", name: "HTML5" },
        { icon: <IoLogoCss3 />, color: "#0f99f5", name: "CSS3" },
        { icon: <FaNpm />, color: "#ff524f", name: "npm" },
        { icon: <FaGitSquare />, color: "#f54d27", name: "Git" },
        { icon: null, image: MongoDBIcon, name: "MongoDB" },
      ],
      links: [
        {
          type: "demo",
          url: "https://myquickalert.firebaseapp.com/",
          label: "Live Demo",
        },
        {
          type: "github",
          url: "https://github.com/eshaanc20/QuickAlert",
          label: "Source Code",
        },
      ],
    },
    {
      title: "DevKit",
      category: "Web Application",
      type: "Full-Stack",
      date: "08/2019 – 01/2020",
      description:
        "Platform to help developers find optimal software tools, APIs, and libraries based on project requirements.",
      highlights: [
        "React with Material-UI front-end",
        "Axios for asynchronous API requests",
        "Node.js/Express.js REST API",
        "MongoDB database with Mongoose ODM",
        "User-driven tool recommendation system",
      ],
      tech: [
        { icon: <FaReact />, color: "#2fc2f7", name: "React" },
        { icon: <FaNodeJs />, color: "#68a063", name: "Node.js" },
        { icon: <IoLogoJavascript />, color: "#f0cf13", name: "JavaScript" },
        { icon: <FaHtml5 />, color: "#f54c0f", name: "HTML5" },
        { icon: <IoLogoCss3 />, color: "#0f99f5", name: "CSS3" },
        { icon: <FaNpm />, color: "#ff524f", name: "npm" },
        { icon: <FaGitSquare />, color: "#f54d27", name: "Git" },
        { icon: null, image: MongoDBIcon, name: "MongoDB" },
      ],
      links: [
        {
          type: "demo",
          url: "https://devkit-ce752.firebaseapp.com",
          label: "Live Demo",
        },
        {
          type: "github",
          url: "https://github.com/eshaanc20/DevKit",
          label: "Source Code",
        },
      ],
    },
    {
      title: "eyeSight",
      category: "Mobile App",
      type: "Mobile",
      date: "05/2019 – 11/2019",
      description:
        "Mobile app that detects dominant colors in images to help individuals with color identification difficulties.",
      highlights: [
        "React Native with Expo camera module",
        "Base64 image encoding for API transmission",
        "Python Flask backend with OpenCV and NumPy",
        "Real-time color detection algorithm",
        "Deployed on Heroku",
      ],
      tech: [
        { icon: <FaReact />, color: "#2fc2f7", name: "React Native" },
        { icon: <FaPython />, color: "#1868c4", name: "Python" },
        { icon: <DiHeroku />, color: "#b655f2", name: "Heroku" },
        { icon: <FaNpm />, color: "#ff524f", name: "npm" },
        { icon: <FaGitSquare />, color: "#f54d27", name: "Git" },
      ],
      links: [
        {
          type: "github",
          url: "https://github.com/eshaanc20/eyeSight",
          label: "Source Code",
        },
      ],
    },
    {
      title: "Finger Prosthetic",
      category: "Engineering Design",
      type: "Hardware",
      date: "02/2019 – 04/2019",
      description:
        "CAD-designed finger prosthetic with precision gear train for controlled movement.",
      highlights: [
        "Designed using Autodesk Inventor",
        "3D printed and tested for functionality",
        "Precision gear train with <1% error in speed ratio",
        "Group engineering design project",
      ],
      tech: [],
      links: [
        {
          type: "demo",
          url: "https://drive.google.com/drive/folders/1lgBk3KKjjh3j3Jx8eqvFbL17ERNeqIN1?usp=sharing",
          label: "View Project",
        },
      ],
    },
    {
      title: "Announce",
      category: "Web Application",
      type: "Frontend",
      date: "02/2017 – 02/2019",
      description:
        "Club communication platform allowing organizations to share announcements with members.",
      highlights: [
        "Account-based web application",
        "Focus on JSON, string manipulation, and UI design",
        "Local storage for data persistence",
        "First software project - learned web development fundamentals",
      ],
      tech: [
        { icon: <FaHtml5 />, color: "#f54c0f", name: "HTML5" },
        { icon: <IoLogoCss3 />, color: "#0f99f5", name: "CSS3" },
        { icon: <IoLogoJavascript />, color: "#f0cf13", name: "JavaScript" },
      ],
      links: [
        {
          type: "github",
          url: "https://github.com/eshaanc20/Announce",
          label: "Source Code",
        },
      ],
    },
    {
      title: "Fit Together",
      category: "Mobile App",
      type: "Mobile",
      date: "01/2019 (DeltaHacks)",
      description:
        "Social fitness app promoting exercise by connecting users with local fitness events.",
      highlights: [
        "Post and discover community fitness events",
        "Won Best Use of Google Cloud Platform at DeltaHacks",
        "Flutter UI development",
        "Hackathon project",
      ],
      tech: [],
      links: [
        {
          type: "demo",
          url: "https://devpost.com/eshaanc20",
          label: "Devpost",
        },
        {
          type: "github",
          url: "https://github.com/eshaanc20/Fit-Together",
          label: "Source Code",
        },
      ],
    },
  ];

  return (
    <div className="Projects" name="Projects">
      {/* Floating background elements */}
      <div className="projects-bg-shapes">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className={`bg-shape shape-${i}`}></div>
        ))}
        <div className="projects-shape projects-shape-1"></div>
        <div className="projects-shape projects-shape-2"></div>
      </div>

      {/* Section Header */}
      <div className="projects-header" data-aos="fade-down">
        <div className="projects-header-content">
          <div className="projects-icon-wrapper">
            <FaRocket className="projects-main-icon" />
            <div className="icon-glow"></div>
          </div>
          <h2 className="projects-title">Featured Projects</h2>
          <p className="projects-subtitle">
            Building solutions that make a difference
          </p>
        </div>
        <div className="header-line">
          <div className="line-glow"></div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="project-card glass-card"
            data-aos="fade-up"
            data-aos-delay={Math.min(index * 20, 100)}
          >
            {/* Project Header */}
            <div className="project-header">
              <div className="project-header-top">
                <div>
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-type-badge">{project.type}</div>
                  <p className="project-category">{project.category}</p>
                  <div className="project-meta-row">
                    <span className="project-chip chip-type">{project.type}</span>
                    <span className="project-chip chip-category">{project.category}</span>
                  </div>
                </div>
                {project.date && (
                  <span className="project-date">{project.date}</span>
                )}
              </div>
              <p className="project-description">{project.description}</p>
            </div>

            {/* Project Highlights */}
            <div className="project-highlights">
              <ul>
                {project.highlights.slice(0, 6).map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            {project.tech.length > 0 && (
              <div className="project-tech">
                <div className="tech-stack-icons">
                  {project.tech.map((tech, i) => (
                    <div
                      key={i}
                      className="tech-icon-wrapper"
                      title={tech.name}
                    >
                      {tech.icon ? (
                        <span style={{ color: tech.color }}>{tech.icon}</span>
                      ) : tech.image ? (
                        <img
                          src={tech.image}
                          alt={tech.name}
                          className="tech-image"
                        />
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Project Links */}
            <div className="project-links">
              {project.links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`project-button ${
                    link.type === "github" ? "github-button" : "demo-button"
                  }`}
                >
                  {link.type === "github" ? (
                    <FaGithub />
                  ) : (
                    <FaExternalLinkAlt />
                  )}
                  <span>{link.label}</span>
                </a>
              ))}
            </div>

            {/* Note if exists */}
            {project.note && (
              <div className="project-note">
                <FaCode style={{ marginRight: "8px", fontSize: "14px" }} />
                {project.note}
              </div>
            )}

            {/* Card shine effect */}
            <div className="card-shine"></div>
          </div>
        ))}
      </div>

      {/* Floating particles */}
      <div className="projects-particles">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="project-particle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
