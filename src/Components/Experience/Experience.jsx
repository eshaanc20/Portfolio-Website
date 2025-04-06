import React from "react";
import "./Experience.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoIosBriefcase, IoLogoJavascript, IoLogoCss3 } from "react-icons/io";
import {
  FaReact,
  FaHtml5,
  FaGitSquare,
  FaJava,
  FaPython,
  FaNodeJs,
  FaCloud,
} from "react-icons/fa";
import { SiDotnet, SiPostman, SiSpringboot, SiTeamcity } from "react-icons/si";
import WorkIcon from "@mui/icons-material/Work";

const experience = () => {
  return (
    <div className="timeline" name="Experiences" style={{ paddingTop: "60px" }}>
      <div style={{ display: "flex", height: "100px" }}>
        <WorkIcon
          style={{
            color: "#4a00e0",
            fontSize: "50px",
            marginTop: "30px",
            marginRight: "12px",
          }}
        />
        <div className="experience-title">
          <p>Experience</p>
        </div>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          date="06/2024 - Present"
          iconStyle={{ background: "white" }}
          icon={<IoIosBriefcase />}
        >
          <h3 className="title">Full-Stack Software Engineer</h3>
          <h4 className="subtitle">Manulife</h4>
          <p className="content">
            <ul style={{ fontSize: "18px" }}>
              <li>
                Developed new front-end features using React and back-end
                functionality with C# in .NET framework, applying
                object-oriented design to meet business requirements in an Agile
                web development environment
              </li>
              <li>
                Resolved production defects by analyzing logs in Devo and New
                Relic, reducing defects below 1%
              </li>
              <li>
                Designed and developed a new application using a React-based
                micro frontend and a Node.js microservice
              </li>
              <li>
                Performed security compliance checks on Azure clusters,
                configured proxies for cross-cluster resource access and
                restructured Redis caching to improve memory efficiency and data
                reusability
              </li>
            </ul>
            <div
              style={{
                fontSize: "42px",
                display: "flex",
                width: "450px",
                justifyContent: "space-evenly",
              }}
            >
              <SiDotnet
                style={{
                  color: "#512bd4",
                }}
              />
              <FaReact style={{ color: "#2fc2f7" }} />
              <IoLogoJavascript style={{ color: "#f0cf13" }} />
              <FaCloud style={{ color: "#0078D4" }} />
              <FaHtml5 style={{ color: "#f54c0f" }} />
              <IoLogoCss3 style={{ color: "#0f99f5" }} />
              <FaNodeJs style={{ color: "#339933" }} />
              <SiPostman style={{ color: "#FF6C37" }} />
            </div>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date={
            <>
              <div>May – Aug 2021</div>
              <div>May – Aug 2022</div>
            </>
          }
          iconStyle={{ background: "white" }}
          icon={<IoIosBriefcase />}
        >
          <h3 className="title">Software Engineer Intern</h3>
          <h4 className="subtitle">Ciena</h4>
          <p className="content">
            <ul style={{ fontSize: "18px" }}>
              <li>
                Back-end development for REST API using Java and built unit
                tests using Mockito for development code
              </li>
              <li>
                Developed code using object-oriented programming in a
                microservice architecture
              </li>
              <li>
                Implemented a backend feature from software requirements using
                agile software development and sprints
              </li>
              <li>
                Fixed software bugs, wrote software documentation and developed
                code for multiple software workflows
              </li>
              <li>
                Learned about networks, software design and the process to
                develop software from requirements to release
              </li>
            </ul>
            <div
              style={{
                fontSize: "42px",
                display: "flex",
                width: "300px",
                justifyContent: "space-evenly",
              }}
            >
              <FaJava style={{ color: "#f89820" }} />
              <SiSpringboot style={{ color: "#6DB33F" }} />
              <SiTeamcity style={{ color: "#25a6e2" }} />
              <SiPostman style={{ color: "#FF6C37" }} />
              <FaGitSquare />
            </div>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="09/2020 - 04/2021"
          iconStyle={{ background: "white" }}
          icon={<IoIosBriefcase />}
        >
          <h3 className="title">Software Automation Developer Intern</h3>
          <h4 className="subtitle">Ciena</h4>
          <p className="content">
            <ul style={{ fontSize: "18px" }}>
              <li>
                Designed and created test automation for microservices using
                JavaScript, Postman and TeamCity
              </li>
              <li>
                Created an application using JavaScript and Node.js for
                determining and visualizing microservice dependencies
              </li>
              <li>
                Developed a Python script for validating pull requests and
                created a JavaScript library for representing graphs
              </li>
              <li>
                Created TeamCity builds for continuous integration testing and
                performed manual testing for QA
              </li>
            </ul>
            <div
              style={{
                fontSize: "42px",
                display: "flex",
                width: "350px",
                justifyContent: "space-evenly",
              }}
            >
              <IoLogoJavascript style={{ color: "#f0cf13" }} />
              <FaPython style={{ color: "#306998" }} />
              <FaNodeJs style={{ color: "#339933" }} />
              <SiPostman style={{ color: "#FF6C37" }} />
              <SiTeamcity style={{ color: "#25a6e2" }} />
              <FaGitSquare />
            </div>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="07/2019 - 08/2019"
          iconStyle={{ background: "white" }}
          icon={<IoIosBriefcase />}
        >
          <h3 className="title">Software Developer</h3>
          <h4 className="subtitle">Helping Hands</h4>
          <p className="content">
            <ul style={{ fontSize: "18px" }}>
              <li>Front-end web development using React with Material-UI</li>
              <li>
                Implemented an updated version of the web application from new
                design by updating over 90% of the UI
              </li>
              <li>
                Created responsive UI components using React for new features
                and optimze UX design
              </li>
              <li>
                Improved skills using git such as branches, pull requests and
                code reviews
              </li>
              <li>Created an email filter using App Script</li>
              <li>
                Developed skills writing efficient code, debugging skills and
                problem solving skills
              </li>
            </ul>
          </p>
          <div
            style={{
              fontSize: "42px",
              display: "flex",
              width: "250px",
              justifyContent: "space-evenly",
            }}
          >
            <FaReact style={{ color: "#2fc2f7" }} />
            <IoLogoJavascript style={{ color: "#f0cf13" }} />
            <FaHtml5 style={{ color: "#f54c0f" }} />
            <IoLogoCss3 style={{ color: "#0f99f5" }} />
            <FaGitSquare />
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default experience;
