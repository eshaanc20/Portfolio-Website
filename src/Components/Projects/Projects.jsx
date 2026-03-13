import React, { useEffect, useState } from "react";
import "./Projects.css";
import { FaRocket, FaGithub, FaExternalLinkAlt, FaCode, FaChevronLeft, FaChevronRight } from "react-icons/fa";
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

import Capstone1 from "../../Assets/capstone1.png";
import Capstone2 from "../../Assets/capstone2.png";
import Capstone3 from "../../Assets/capstone3.png";
import Capstone4 from "../../Assets/capstone4.png";
import Capstone5 from "../../Assets/capstone5.png";
import Capstone6 from "../../Assets/capstone6.png";
import StockPlan1 from "../../Assets/StockPlan1.png";
import StockPlan2 from "../../Assets/StockPlan2.png";
import StockPlan3 from "../../Assets/StockPlan3.png";
import StockPlan4 from "../../Assets/StockPlan4.png";
import StockPlan5 from "../../Assets/StockPlan5.png";
import QuickAlert1 from "../../Assets/QuickAlert1.png";
import QuickAlert2 from "../../Assets/QuickAlert2.jpg";
import QuickAlert3 from "../../Assets/QuickAlert3.png";
import Devkit1 from "../../Assets/Devkit1.png";
import Devkit2 from "../../Assets/Devkit2.png";
import Devkit3 from "../../Assets/Devkit3.png";
import Devkit4 from "../../Assets/Devkit4.png";
import Devkit5 from "../../Assets/Devkit5.png";
import eyeSight1 from "../../Assets/eyeSight1.png";
import eyeSight2 from "../../Assets/eyeSight2.png";
import eyeSight3 from "../../Assets/eyeSight3.png";
import eyeSight4 from "../../Assets/eyeSight4.png";
import Inventor1 from "../../Assets/Inventor1.png";
import Inventor2 from "../../Assets/Inventor2.png";

const DemoCarousel = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchDelta, setTouchDelta] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);

  if (!images || images.length === 0) return null;

  const goTo = (index) => {
    setCurrent(Math.max(0, Math.min(index, images.length - 1)));
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
    setIsSwiping(true);
  };

  const handleTouchMove = (e) => {
    if (touchStart === null) return;
    setTouchDelta(e.touches[0].clientX - touchStart);
  };

  const handleTouchEnd = () => {
    if (Math.abs(touchDelta) > 50) {
      if (touchDelta < 0 && current < images.length - 1) {
        goTo(current + 1);
      } else if (touchDelta > 0 && current > 0) {
        goTo(current - 1);
      }
    }
    setTouchStart(null);
    setTouchDelta(0);
    setIsSwiping(false);
  };

  return (
    <div className="demo-carousel">
      <div
        className="demo-carousel-track"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="demo-carousel-slider"
          style={{
            transform: `translateX(calc(-${current * 100}% + ${isSwiping ? touchDelta : 0}px))`,
            transition: isSwiping ? "none" : "transform 0.35s ease",
          }}
        >
          {images.map((img, i) => (
            <div key={i} className="demo-carousel-slide">
              <img src={img} alt={`Demo ${i + 1}`} className="demo-carousel-img" />
            </div>
          ))}
        </div>
      </div>
      {images.length > 1 && (
        <div className="demo-carousel-controls">
          <button
            className="demo-carousel-btn"
            onClick={() => goTo(current - 1)}
            disabled={current === 0}
            aria-label="Previous image"
          >
            <FaChevronLeft />
          </button>
          <div className="demo-carousel-dots">
            {images.map((_, i) => (
              <button
                key={i}
                className={`demo-carousel-dot ${i === current ? "demo-carousel-dot--active" : ""}`}
                onClick={() => goTo(i)}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
          <button
            className="demo-carousel-btn"
            onClick={() => goTo(current + 1)}
            disabled={current === images.length - 1}
            aria-label="Next image"
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </div>
  );
};

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: "ease-out",
    });
  }, []);

  const projectsData = [
    {
      title: "GazeTracker",
      category: "Capstone Project",
      type: "ML/AI",
      featured: true,
      demos: [Capstone1, Capstone2, Capstone3, Capstone4, Capstone5, Capstone6],
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
        { type: "demo", url: "https://d8b60923.gazetracker-demo.pages.dev/", label: "Try Demo" },
      ],
      note: "GitHub repository owned by research lab",
    },
    {
      title: "StockPlan",
      category: "Web Application",
      type: "Full-Stack",
      demos: [StockPlan1, StockPlan2, StockPlan3, StockPlan4, StockPlan5],
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
        { type: "demo", url: "https://stockplanapp.firebaseapp.com", label: "Live Demo" },
        { type: "github", url: "https://github.com/eshaanc20/StockPlan", label: "Source Code" },
      ],
    },
    {
      title: "Quick Alert",
      category: "Web Application",
      type: "Full-Stack",
      demos: [QuickAlert1, QuickAlert2, QuickAlert3],
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
        { type: "demo", url: "https://myquickalert.firebaseapp.com/", label: "Live Demo" },
        { type: "github", url: "https://github.com/eshaanc20/QuickAlert", label: "Source Code" },
      ],
    },
    {
      title: "DevKit",
      category: "Web Application",
      type: "Full-Stack",
      demos: [Devkit1, Devkit2, Devkit3, Devkit4, Devkit5],
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
        { type: "demo", url: "https://devkit-ce752.firebaseapp.com", label: "Live Demo" },
        { type: "github", url: "https://github.com/eshaanc20/DevKit", label: "Source Code" },
      ],
    },
    {
      title: "eyeSight",
      category: "Mobile App",
      type: "Mobile",
      demos: [eyeSight1, eyeSight2, eyeSight3, eyeSight4],
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
        { type: "github", url: "https://github.com/eshaanc20/eyeSight", label: "Source Code" },
      ],
    },
    {
      title: "Finger Prosthetic",
      category: "Engineering Design",
      type: "Hardware",
      demos: [Inventor1, Inventor2],
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
        { type: "demo", url: "https://drive.google.com/drive/folders/1lgBk3KKjjh3j3Jx8eqvFbL17ERNeqIN1?usp=sharing", label: "View Project" },
      ],
    },
  ];

  return (
    <div className="projects-section" name="Projects">
      <div className="projects-header" data-aos="fade-up">
        <div className="projects-icon-wrapper">
          <FaRocket className="projects-main-icon" />
        </div>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Building solutions that make a difference</p>
      </div>

      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className={`project-card ${project.featured ? "project-card--featured" : ""}`}
            data-aos="fade-up"
            data-aos-delay={Math.min(index * 50, 200)}
          >
            <div className="project-header">
              <div className="project-header-top">
                <div>
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-badges">
                    <span className="project-type-badge">{project.type}</span>
                    <span className="project-category-badge">{project.category}</span>
                  </div>
                </div>
              </div>
              <p className="project-description">{project.description}</p>
            </div>

            {project.demos && project.demos.length > 0 && (
              <DemoCarousel images={project.demos} />
            )}

            <div className="project-highlights">
              <ul>
                {project.highlights.slice(0, 6).map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
            </div>

            {project.tech.length > 0 && (
              <div className="project-tech">
                <div className="tech-stack-icons">
                  {project.tech.map((tech, i) => (
                    <div key={i} className="tech-icon-badge" title={tech.name}>
                      {tech.icon ? (
                        <span style={{ color: tech.color }}>{tech.icon}</span>
                      ) : tech.image ? (
                        <img src={tech.image} alt={tech.name} className="tech-image" />
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="project-links">
              {project.links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`project-button ${link.type === "github" ? "project-button--outline" : "project-button--solid"}`}
                >
                  {link.type === "github" ? <FaGithub /> : <FaExternalLinkAlt />}
                  <span>{link.label}</span>
                  <svg className="btn-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              ))}
            </div>

            {project.note && (
              <div className="project-note">
                <FaCode style={{ marginRight: "8px", fontSize: "14px" }} />
                {project.note}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
