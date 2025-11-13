import React from "react";
import "./Experience.css";
import {
  MdWork,
  MdBusinessCenter,
  MdLocationOn,
  MdDateRange,
} from "react-icons/md";
import { BsBriefcaseFill } from "react-icons/bs";
import { IoIosBriefcase } from "react-icons/io";
import {
  FaReact,
  FaHtml5,
  FaGitSquare,
  FaJava,
  FaPython,
  FaNodeJs,
  FaCloud,
  FaCode,
} from "react-icons/fa";
import {
  SiDotnet,
  SiPostman,
  SiSpringboot,
  SiTeamcity,
  SiJavascript,
  SiCss3,
} from "react-icons/si";

const Experience = () => {
  const experiences = [
    {
      id: 0,
      title: "Data Engineer – Platform Team",
      company: "Manulife",
      location: "Toronto, ON",
      date: "06/2025 - Present",
      type: "Full-Time",
      description: [
        "Built 20+ Jenkins pipelines with Terraform to provision Azure resources (Key Vault, ADLS, Web Apps, Cosmos, AI Foundry) following THR networking/security standards with VNets, NSGs, Private Endpoints, and RBAC.",
        "Standardized pipeline setup via a centralized Groovy-based shared library to manage az cli authentication and shared environment configuration for consistent provisioning.",
        "Created tower stand-up automation that pre-configures Azure resource groups, networking, and access controls—reducing project bootstrap time and accelerating infrastructure delivery.",
        "Supported data engineering and AI projects for their Azure infrastructure needs such as AI Foundry, Web Apps and ADLS",
        "Fixed existing security and compliance issues from Prisma scans.",
      ],
      technologies: [
        { name: "Azure", icon: <FaCloud />, color: "#0078D4" },
        { name: "Terraform", icon: <FaCode />, color: "#844FBA" },
        { name: "Jenkins", icon: <SiTeamcity />, color: "#25a6e2" },
        { name: "Groovy", icon: <FaCode />, color: "#E64A19" },
        { name: "az cli", icon: <FaCode />, color: "#00A4EF" },
      ],
    },
    {
      id: 1,
      title: "Full-Stack Software Engineer",
      company: "Manulife",
      location: "Toronto, ON",
      date: "06/2024 - 06/2025",
      type: "Full-Time",
      description: [
        "Developed new front-end features using React and back-end functionality with C# in .NET framework, applying object-oriented design to meet business requirements in an Agile web development environment",
        "Resolved production defects by analyzing logs in Devo and New Relic, reducing defects below 1%",
        "Designed and developed a new application using a React-based micro frontends and Node.js microservices",
        "Performed security compliance checks on Azure clusters, configured proxies for cross-cluster resource access and restructured Redis caching to improve memory efficiency and data reusability",
      ],
      technologies: [
        { name: ".NET", icon: <SiDotnet />, color: "#512bd4" },
        { name: "React", icon: <FaReact />, color: "#2fc2f7" },
        { name: "JavaScript", icon: <SiJavascript />, color: "#f0cf13" },
        { name: "Azure", icon: <FaCloud />, color: "#0078D4" },
        { name: "HTML5", icon: <FaHtml5 />, color: "#f54c0f" },
        { name: "CSS3", icon: <SiCss3 />, color: "#0f99f5" },
        { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
        { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
      ],
    },
    {
      id: 2,
      title: "Software Engineer Intern",
      company: "Ciena",
      location: "Ottawa, ON",
      date: "May – Aug 2021 & May – Aug 2022",
      type: "Internship",
      description: [
        "Back-end development for REST API using Java and built unit tests using Mockito for development code",
        "Developed code using object-oriented programming in a microservice architecture",
        "Implemented a backend feature from software requirements using agile software development and sprints",
        "Fixed software bugs, wrote software documentation and developed code for multiple software workflows",
        "Learned about networks, software design and the process to develop software from requirements to release",
      ],
      technologies: [
        { name: "Java", icon: <FaJava />, color: "#f89820" },
        { name: "Spring Boot", icon: <SiSpringboot />, color: "#6DB33F" },
        { name: "TeamCity", icon: <SiTeamcity />, color: "#25a6e2" },
        { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
        { name: "Git", icon: <FaGitSquare />, color: "#F05032" },
      ],
    },
    {
      id: 3,
      title: "Software Automation Developer Intern",
      company: "Ciena",
      location: "Ottawa, ON",
      date: "09/2020 - 04/2021",
      type: "Internship",
      description: [
        "Designed and created test automation for microservices using JavaScript, Postman and TeamCity",
        "Created an application using JavaScript and Node.js for determining and visualizing microservice dependencies",
        "Developed a Python script for validating pull requests and created a JavaScript library for representing graphs",
        "Created TeamCity builds for continuous integration testing and performed manual testing for QA",
      ],
      technologies: [
        { name: "JavaScript", icon: <SiJavascript />, color: "#f0cf13" },
        { name: "Python", icon: <FaPython />, color: "#306998" },
        { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
        { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
        { name: "TeamCity", icon: <SiTeamcity />, color: "#25a6e2" },
        { name: "Git", icon: <FaGitSquare />, color: "#F05032" },
      ],
    },
    {
      id: 4,
      title: "Software Developer",
      company: "Helping Hands",
      location: "Remote",
      date: "07/2019 - 08/2019",
      type: "Internship",
      description: [
        "Front-end web development using React with Material-UI",
        "Implemented an updated version of the web application from new design by updating over 90% of the UI",
        "Created responsive UI components using React for new features and optimize UX design",
        "Improved skills using git such as branches, pull requests and code reviews",
        "Created an email filter using App Script",
        "Developed skills writing efficient code, debugging skills and problem solving skills",
      ],
      technologies: [
        { name: "React", icon: <FaReact />, color: "#2fc2f7" },
        { name: "JavaScript", icon: <SiJavascript />, color: "#f0cf13" },
        { name: "HTML5", icon: <FaHtml5 />, color: "#f54c0f" },
        { name: "CSS3", icon: <SiCss3 />, color: "#0f99f5" },
        { name: "Git", icon: <FaGitSquare />, color: "#F05032" },
      ],
    },
  ];

  return (
    <div className="experience-section" name="Experiences">
      {/* Floating orbs for visual continuity */}
      {[1, 2, 3, 4, 5].map((i) => (
        <div className={`experience-orb exp-orb-${i}`} key={i}></div>
      ))}
      <div className="experience-shape exp-shape-1"></div>
      <div className="experience-shape exp-shape-2"></div>

      {/* Section Header */}
      <div className="experience-header" data-aos="fade-up">
        <div className="exp-header-icon-wrapper">
          <BsBriefcaseFill className="exp-header-icon" />
        </div>
        <h2 className="experience-main-title">Experience</h2>
        <p className="experience-subtitle">
          Professional Journey & Career Growth
        </p>
      </div>

      {/* Timeline */}
      <div className="experience-timeline">
        <div className="timeline-line-exp"></div>

        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className="experience-item"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            {/* Timeline Dot */}
            <div className="timeline-dot">
              <div className="dot-inner"></div>
              <div className="dot-pulse"></div>
            </div>

            {/* Experience Card */}
            <div className="experience-card glass-card-exp">
              <div className="exp-card-glow"></div>

              {/* Header */}
              <div className="exp-card-header">
                <div className="exp-header-left">
                  <div className="exp-icon-wrapper">
                    <IoIosBriefcase className="exp-briefcase-icon" />
                  </div>
                  <div className="exp-title-section">
                    <h3 className="exp-job-title">{exp.title}</h3>
                    <h4
                      className={`exp-company ${
                        exp.company === "Manulife"
                          ? "exp-company--manulife"
                          : exp.company === "Ciena"
                          ? "exp-company--ciena"
                          : ""
                      }`}
                    >
                      {exp.company}
                    </h4>
                  </div>
                </div>
                <div className="exp-type-badge">
                  <MdBusinessCenter className="type-icon" />
                  <span>{exp.type}</span>
                </div>
              </div>

              {/* Meta Info */}
              <div className="exp-meta-info">
                <div className="meta-item">
                  <MdDateRange className="meta-icon" />
                  <span>{exp.date}</span>
                </div>
                <div className="meta-item">
                  <MdLocationOn className="meta-icon" />
                  <span>{exp.location}</span>
                </div>
              </div>

              {/* Description */}
              <div className="exp-description">
                <ul>
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="exp-technologies">
                <div className="tech-header">
                  <FaCode className="tech-header-icon" />
                  <span>Technologies</span>
                </div>
                <div className="tech-list">
                  {exp.technologies.map((tech, idx) => (
                    <div
                      key={idx}
                      className="tech-item"
                      style={{ "--tech-color": tech.color }}
                    >
                      <div
                        className="tech-icon-wrapper"
                        style={{ color: tech.color }}
                      >
                        {tech.icon}
                      </div>
                      <span className="tech-name">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
