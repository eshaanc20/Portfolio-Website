import React, { useEffect } from "react";
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
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: "ease-out",
    });
  }, []);

  const skillCategories = [
    {
      title: "Languages",
      icon: <FaCode />,
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
    <div className="skills-section" name="Skills">
      <div className="skills-inner">
        <div className="skills-header" data-aos="fade-up">
          <div className="skills-icon-wrapper">
            <FaCode className="skills-main-icon" />
          </div>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">Technologies & tools I work with</p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="skill-category"
              data-aos="fade-up"
              data-aos-delay={categoryIndex * 50}
            >
              <div className="category-header">
                <div className="category-icon-wrapper">
                  {category.icon}
                </div>
                <h3 className="category-title">{category.title}</h3>
                <div className="category-count">{category.skills.length}</div>
              </div>

              <div className="skills-pills">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-pill">
                    {skill.icon && (
                      <span className="skill-icon">{skill.icon}</span>
                    )}
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
