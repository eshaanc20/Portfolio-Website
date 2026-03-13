import React, { useEffect } from "react";
import "./Experience.css";
import {
  MdBusinessCenter,
  MdLocationOn,
  MdDateRange,
} from "react-icons/md";
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
import AOS from "aos";

const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 600, once: true, easing: "ease-out" });
  }, []);

  const experiences = [
    {
      id: 0,
      title: "DevOps Engineer",
      company: "Manulife",
      location: "Toronto, ON",
      date: "06/2025 - Present",
      type: "Full-Time",
      current: true,
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
      <div className="exp-bg-hex"></div>
      <div className="exp-bg-wash"></div>

      <div className="exp-inner">
        <div className="experience-header" data-aos="fade-up">
          <div className="exp-header-badge">
            <MdBusinessCenter />
          </div>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">Professional Journey & Career Growth</p>
        </div>

        <div className="exp-timeline">
          <div className="exp-timeline-line"></div>

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`exp-step ${exp.current ? "exp-step--current" : ""}`}
              data-aos="fade-up"
              data-aos-delay={index * 60}
            >
              <div className="exp-step-marker">
                <span className="exp-step-num">{String(index + 1).padStart(2, "0")}</span>
              </div>

              <div className="exp-card">
                {exp.current && <div className="exp-card-glow"></div>}
                <div className="exp-card-top-accent"></div>

                <div className="exp-card-head">
                  <div className="exp-card-titles">
                    <h3 className="exp-role">{exp.title}</h3>
                    <span className="exp-company-name">{exp.company}</span>
                  </div>
                  <div className="exp-card-badges">
                    {exp.current && (
                      <span className="exp-badge exp-badge--current">
                        <span className="exp-badge-dot"></span>
                        Current
                      </span>
                    )}
                    <span className="exp-badge exp-badge--type">{exp.type}</span>
                  </div>
                </div>

                <div className="exp-card-meta">
                  <span className="exp-meta">
                    <MdDateRange />
                    {exp.date}
                  </span>
                  <span className="exp-meta">
                    <MdLocationOn />
                    {exp.location}
                  </span>
                </div>

                <ul className="exp-bullets">
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>

                <div className="exp-stack">
                  {exp.technologies.map((tech, idx) => (
                    <span key={idx} className="exp-tech" title={tech.name}>
                      <span className="exp-tech-icon" style={{ color: tech.color }}>
                        {tech.icon}
                      </span>
                      <span className="exp-tech-name">{tech.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
