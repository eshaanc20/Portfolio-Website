import React from "react";
import "./Skills.css";
import {
  FaCode,
  FaTools,
  FaBook,
  FaLightbulb,
  FaCloud,
  FaAws,
  FaMicrosoft,
} from "react-icons/fa";
import {
  SiJavascript,
  SiPython,
  SiReact,
  SiNodedotjs,
  SiAngular,
  SiMongodb,
  SiDocker,
  SiGit,
  SiRedis,
  SiApachekafka,
  SiJenkins,
  SiTypescript,
  SiFlask,
  SiPytorch,
  SiNumpy,
  SiOpencv,
  SiExpress,
  SiSpring,
  SiMysql,
  SiDotnet,
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import { TbBrandCpp } from "react-icons/tb";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  // Check if mobile for performance optimizations
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  // Initialize AOS only on larger screens for better mobile performance
  useEffect(() => {
    const checkMobile = window.innerWidth <= 768;
    AOS.init({
      duration: checkMobile ? 0 : 1000,
      delay: checkMobile ? 0 : 100,
      mirror: false,
      once: true,
      disable: checkMobile,
    });
  }, []);

  const skillCategories = [
    {
      title: "Languages",
      icon: <FaCode />,
      color: "rgba(139, 92, 246, 0.8)",
      skills: [
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "Python", icon: <SiPython /> },
        { name: "C", icon: <TbBrandCpp /> },
        { name: "Java", icon: <DiJava /> },
        { name: "HTML", icon: null },
        { name: "CSS", icon: null },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "C#", icon: <SiDotnet /> },
        { name: "MATLAB", icon: null },
        { name: "SQL", icon: <SiMysql /> },
      ],
    },
    {
      title: "Libraries & Frameworks",
      icon: <FaBook />,
      color: "rgba(168, 85, 247, 0.8)",
      skills: [
        { name: "React", icon: <SiReact /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "Angular", icon: <SiAngular /> },
        { name: "Spring", icon: <SiSpring /> },
        { name: "React Native", icon: <SiReact /> },
        { name: "Flask", icon: <SiFlask /> },
        { name: ".NET", icon: null },
        { name: "OpenCV", icon: <SiOpencv /> },
        { name: "NumPy", icon: <SiNumpy /> },
        { name: "PyTorch", icon: <SiPytorch /> },
        { name: "Axios", icon: null },
      ],
    },
    {
      title: "Tools & Platforms",
      icon: <FaTools />,
      color: "rgba(109, 40, 217, 0.8)",
      skills: [
        { name: "Azure", icon: <FaMicrosoft /> },
        { name: "AWS", icon: <FaAws /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Git", icon: <SiGit /> },
        { name: "Docker", icon: <SiDocker /> },
        { name: "Snyk", icon: null },
        { name: "Redis", icon: <SiRedis /> },
        { name: "Kafka", icon: <SiApachekafka /> },
        { name: "Jenkins", icon: <SiJenkins /> },
        { name: "New Relic", icon: null },
        { name: "Devo", icon: null },
      ],
    },
    {
      title: "Core Competencies",
      icon: <FaLightbulb />,
      color: "rgba(147, 51, 234, 0.8)",
      skills: [
        { name: "Web Development", icon: null },
        { name: "Data Structures", icon: null },
        { name: "Front-end Dev", icon: null },
        { name: "Back-end Dev", icon: null },
        { name: "Software Design", icon: null },
        { name: "OOP", icon: null },
        { name: "Cloud Computing", icon: <FaCloud /> },
      ],
    },
  ];

  return (
    <div className="Skills" name="Skills">
      {/* Floating background elements */}
      <div className="skills-bg-shapes">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className={`bg-shape shape-${i}`}></div>
        ))}
        <div className="skills-shape skills-shape-1"></div>
        <div className="skills-shape skills-shape-2"></div>
      </div>
      <div className="skills-inner">
        {/* Section Header */}
        <div className="skills-header" data-aos="fade-down">
          <div className="skills-header-content">
            <div className="skills-icon-wrapper">
              <FaCode className="skills-main-icon" />
              <div className="icon-glow"></div>
            </div>
            <h2 className="skills-title">Technical Skills</h2>
            <p className="skills-subtitle">Technologies & tools I work with</p>
          </div>
          <div className="header-line">
            <div className="line-glow"></div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="skill-category glass-card"
              data-aos="fade-up"
              data-aos-delay={categoryIndex * 100}
            >
              {/* Category Header */}
              <div className="category-header">
                <div
                  className="category-icon-wrapper"
                  style={{
                    background: `linear-gradient(135deg, ${category.color}, rgba(139, 92, 246, 0.4))`,
                  }}
                >
                  {category.icon}
                  <div
                    className="category-icon-glow"
                    style={{ background: category.color }}
                  ></div>
                </div>
                <h3 className="category-title">{category.title}</h3>
                <div className="category-count">{category.skills.length}</div>
              </div>

              {/* Skills Pills */}
              <div className="skills-pills">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="skill-pill"
                    data-aos="zoom-in"
                    data-aos-delay={categoryIndex * 100 + skillIndex * 30}
                  >
                    {skill.icon && (
                      <span className="skill-icon">{skill.icon}</span>
                    )}
                    <span className="skill-name">{skill.name}</span>
                    <div className="pill-glow"></div>
                  </div>
                ))}
              </div>

              {/* Card shine effect */}
              <div className="card-shine"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating particles - hidden on mobile for performance */}
      {!isMobile && (
        <div className="skills-particles">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="skill-particle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 4}s`,
              }}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Skills;
