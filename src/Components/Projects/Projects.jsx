import React from "react";
import CreateIcon from "@mui/icons-material/Create";
import Button from "@mui/material/Button";
import Project from "./Project.jsx";
import "./Projects.css";
import { IoLogoJavascript, IoLogoCss3 } from "react-icons/io";
import {
  SiJupyter,
  SiNumpy,
  SiPytorch,
  SiTeamcity,
  SiTypescript,
} from "react-icons/si";
import {
  FaReact,
  FaHtml5,
  FaPython,
  FaGitSquare,
  FaNpm,
  FaNodeJs,
  FaAngular,
  FaJsSquare,
} from "react-icons/fa";
import { DiHeroku } from "react-icons/di";
import MongoDBIcon from "../../Assets/MongoDB-icon.png";

const Projects = () => {
  return (
    <div className="Projects" name="Projects" style={{ paddingTop: "60px" }}>
      <div style={{ display: "flex", height: "100px" }}>
        <CreateIcon
          style={{
            color: "#4a00e0",
            fontSize: "50px",
            marginTop: "30px",
            marginRight: "12px",
          }}
        />
        <div className="experience-title">
          <p>Projects</p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: "10px",
          paddingRight: "50px",
          justifyContent: "space-evenly",
        }}
        data-aos="fade-up"
      >
        <div className="project-info">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "-40px",
            }}
          >
            <p style={{ fontSize: "26px", fontWeight: "bold" }}>GazeTracker</p>
          </div>
          <p style={{ fontSize: "20px", opacity: "0.6" }}>Capstone Project</p>
          <ul style={{ fontSize: "18px" }}>
            <li>
              Collaborated with psychology researchers to develop a
              browser-based gaze estimation plugin using JavaScript and jsPsych
              for remote psychology experiments.
            </li>
            <li>
              Designed a real-time pipeline that combines face detection, neural
              gaze estimation (pitch/yaw), and user-specific calibration to
              predict on-screen gaze coordinates at 30 FPS.
            </li>
            <li>
              Trained lightweight CNN models (EfficientNet, MobileNet) in
              PyTorch on custom eye-tracking datasets; optimized architectures
              and hyperparameters using Weights & Biases.
            </li>
            <li>
              Converted trained PyTorch models to ONNX for fast, browser-based
              inference using ONNX Runtime Web.
            </li>
            <li>
              Developed a runtime calibration UI to collect user gaze data and
              train a local regression model for personalized screen mapping.
            </li>
            <li>
              Built a data preprocessing pipeline with Python, NumPy, and
              Jupyter to normalize and merge multiple datasets into a unified
              training format.
            </li>
            <li>
              Integrated Google’s face landmark detection to isolate facial
              regions and minimize background noise before inference.
            </li>
            <li>
              Achieved ~3° angular accuracy with fully on-device processing,
              ensuring real-time performance and preserving user privacy by
              avoiding video uploads.
            </li>
            <li>
              Enabled researchers to run eye-tracking experiments remotely
              without expensive hardware, making data collection more accessible
              and scalable.
            </li>
          </ul>
          <p>Note: GitHub repository owned by research lab</p>
          <div
            style={{
              fontSize: "40px",
              display: "flex",
              maxWidth: "450px",
              flexWrap: "wrap",
              justifyContent: "space-between",
              gap: "10px",
            }}
          >
            <IoLogoJavascript style={{ color: "#f0cf13" }} />
            <SiPytorch style={{ color: "#ee4c2c" }} />
            <FaPython style={{ color: "#3776AB" }} />
            <SiJupyter style={{ color: "#f37726" }} />
            <SiNumpy style={{ color: "#013243" }} />
            <IoLogoCss3 style={{ color: "#0f99f5" }} />
            <FaHtml5 style={{ color: "#f54c0f" }} />
          </div>
          <div
            style={{
              textAlign: "right",
              paddingRight: "5px",
              paddingBottom: "20px",
              marginTop: "20px",
            }}
          >
            <Button
              href="https://d8b60923.gazetracker-demo.pages.dev/"
              variant="contained"
              target="_blank"
              style={{
                backgroundColor: "#0972b8",
                color: "white",
                fontSize: "14px",
              }}
            >
              Try Demo
            </Button>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <Project
            project="Capstone"
            height="270px"
            width="400px"
            height2="350px"
            width2="200px"
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: "10px",
          paddingRight: "50px",
          justifyContent: "space-evenly",
        }}
        data-aos="fade-up"
      >
        <div className="project-info">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "-40px",
            }}
          >
            <p style={{ fontSize: "26px", fontWeight: "bold" }}>StockPlan</p>
          </div>
          <p style={{ fontSize: "20px", opacity: "0.6" }}>Web Application</p>
          <ul style={{ fontSize: "18px" }}>
            <li>
              Web application to plan portfolio by setting goals for stocks and
              organizing stocks
            </li>
            <li>Goals include the stock price to buy or sell a stock</li>
            <li>Automate the process of waiting for stocks to reach a price</li>
            <li>Receive notification when goals for stocks are completed</li>
            <li>
              Organize stocks into lists and view important data about each
              stock
            </li>
            <li>
              Plan portfolio and view important statistics about portfolio
            </li>
            <li>
              Used Angular for front-end and worked on UI design to improve user
              experience
            </li>
            <li>
              Created back-end REST API using Node.js and Express.js and used
              MongoDB for database
            </li>
          </ul>
          <div
            style={{
              fontSize: "40px",
              display: "flex",
              maxWidth: "600px",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <FaAngular style={{ color: "#dd0031" }} />
            <FaNodeJs style={{ color: "green" }} />
            <SiTypescript style={{ color: "#3178c6" }} />
            <FaHtml5 style={{ color: "#f54c0f" }} />
            <IoLogoCss3 style={{ color: "#0f99f5" }} />
            <FaNpm style={{ color: "#ff524f" }} />
            <FaGitSquare />
            <img
              src={MongoDBIcon}
              style={{ height: "40px", width: "100px" }}
              alt=""
            />
          </div>
          <div
            style={{
              textAlign: "right",
              paddingRight: "5px",
              paddingBottom: "20px",
              marginTop: "20px",
            }}
          >
            <Button
              href="https://stockplanapp.firebaseapp.com"
              variant="contained"
              target="_blank"
              style={{
                backgroundColor: "#0972b8",
                color: "white",
                fontSize: "14px",
              }}
            >
              Project
            </Button>
            <Button
              href="https://github.com/eshaanc20/StockPlan"
              variant="contained"
              target="_blank"
              style={{
                color: "white",
                backgroundColor: "#0889a3",
                marginLeft: "12px",
                fontSize: "14px",
              }}
            >
              Github
            </Button>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Project
            project="StockPlan"
            height="270px"
            width="400px"
            height2="350px"
            width2="200px"
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: "10px",
          justifyContent: "space-evenly",
          paddingRight: "50px",
        }}
        data-aos="fade-up"
      >
        <div className="project-info">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "-40px",
            }}
          >
            <p style={{ fontSize: "26px", fontWeight: "bold" }}>Quick Alert</p>
            <p style={{ fontSize: "18px" }}>01/2020</p>
          </div>
          <p style={{ fontSize: "20px", opacity: "0.6" }}>Web Application</p>
          <ul style={{ fontSize: "18px" }}>
            <li>
              Web application that helps users efficiently send their
              information to the nearest emergency service through a single SMS
              message of their address
            </li>
            <li>
              Emergency service will receive user information on their dashboard
              on their account
            </li>
            <li>
              Intended to quickly contact hospitals and help hospitals know more
              about their patient such as allergies before an ambulance is sent
            </li>
            <li>Used React with material-UI for front-end</li>
            <li>Utilized Twilio SMS API to handle SMS messages</li>
            <li>Created REST API for back-end using Node.js and Express.js</li>
            <li>Back-end manages MongoDB database using Mongoose</li>
            <li>Deployed the app to firebase and the back-end to Heroku</li>
          </ul>
          <div
            style={{
              fontSize: "40px",
              display: "flex",
              maxWidth: "600px",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <FaReact style={{ color: "#2fc2f7" }} />
            <FaNodeJs style={{ color: "green" }} />
            <IoLogoJavascript style={{ color: "#f0cf13" }} />
            <FaHtml5 style={{ color: "#f54c0f" }} />
            <IoLogoCss3 style={{ color: "#0f99f5" }} />
            <FaNpm style={{ color: "#ff524f" }} />
            <FaGitSquare />
            <img
              src={MongoDBIcon}
              style={{ height: "40px", width: "100px" }}
              alt=""
            />
          </div>
          <div
            style={{
              textAlign: "right",
              paddingRight: "5px",
              paddingBottom: "20px",
              marginTop: "20px",
            }}
          >
            <Button
              href="https://myquickalert.firebaseapp.com/"
              variant="contained"
              target="_blank"
              style={{
                backgroundColor: "#0972b8",
                color: "white",
                fontSize: "14px",
              }}
            >
              Project
            </Button>
            <Button
              href="https://github.com/eshaanc20/QuickAlert"
              variant="contained"
              target="_blank"
              style={{
                color: "white",
                backgroundColor: "#0889a3",
                marginLeft: "12px",
                fontSize: "14px",
              }}
            >
              Github
            </Button>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Project
            project="QuickAlert"
            height="270px"
            width="400px"
            height2="350px"
            width2="200px"
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: "60px",
          justifyContent: "space-evenly",
          paddingRight: "50px",
        }}
        data-aos="fade-up"
      >
        <div className="project-info">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "-40px",
            }}
          >
            <p style={{ fontSize: "26px", fontWeight: "bold" }}>DevKit</p>
            <p style={{ fontSize: "18px" }}>08/2019 – 01/2020</p>
          </div>
          <p style={{ fontSize: "20px", opacity: "0.6" }}>Web Application</p>
          <ul style={{ fontSize: "18px" }}>
            <li>
              Web application that helps software developers find an optimal
              software tool such as API or library for a project based on
              requirements
            </li>
            <li>
              Used React with material-UI for front-end with axios for making
              asynchronous requests to the back-end
            </li>
            <li>Created REST API for back-end using Node.js and Express.js</li>
            <li>
              Back-end manages MongoDB database using Mongoose and allows users
              to request to add software tools
            </li>
            <li>Deployed the app to firebase and the back-end to Heroku</li>
          </ul>
          <div
            style={{
              fontSize: "40px",
              display: "flex",
              maxWidth: "600px",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <FaReact style={{ color: "#2fc2f7" }} />
            <FaNodeJs style={{ color: "green" }} />
            <IoLogoJavascript style={{ color: "#f0cf13" }} />
            <FaHtml5 style={{ color: "#f54c0f" }} />
            <IoLogoCss3 style={{ color: "#0f99f5" }} />
            <FaNpm style={{ color: "#ff524f" }} />
            <FaGitSquare />
            <img
              src={MongoDBIcon}
              style={{ height: "40px", width: "100px" }}
              alt=""
            />
          </div>
          <div
            style={{
              textAlign: "right",
              paddingRight: "5px",
              paddingBottom: "20px",
              marginTop: "20px",
            }}
          >
            <Button
              href="https://devkit-ce752.firebaseapp.com"
              variant="contained"
              target="_blank"
              style={{
                backgroundColor: "#0972b8",
                color: "white",
                fontSize: "14px",
              }}
            >
              Project
            </Button>
            <Button
              href="https://github.com/eshaanc20/DevKit"
              variant="contained"
              target="_blank"
              style={{
                color: "white",
                backgroundColor: "#0889a3",
                marginLeft: "12px",
                fontSize: "14px",
              }}
            >
              Github
            </Button>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Project project="Devkit" height="270px" width="400px" />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: "60px",
          justifyContent: "space-evenly",
          paddingRight: "50px",
        }}
        data-aos="fade-up"
      >
        <div className="project-info">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "-40px",
            }}
          >
            <p style={{ fontSize: "26px", fontWeight: "bold" }}>eyeSight</p>
            <p style={{ fontSize: "18px" }}>05/2019 – 11/2019</p>
          </div>
          <p style={{ fontSize: "20px", opacity: "0.6" }}>Mobile App</p>
          <ul style={{ fontSize: "18px" }}>
            <li>
              App detects the most dominant colors in an image and provides
              information about other colors
            </li>
            <li>Helps individuals that have difficulties identifying colors</li>
            <li>
              Used React Native with Expo’s camera module for front-end and used
              base64 to send images to the back-end
            </li>
            <li>
              Created a python back-end algorithm using Flask and deployed it to
              Heroku
            </li>
            <li>Used OpenCV and NumPy</li>
          </ul>
          <div
            style={{
              fontSize: "40px",
              display: "flex",
              maxWidth: "280px",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <FaReact style={{ color: "#2fc2f7" }} />
            <FaPython style={{ color: "#1868c4" }} />
            <DiHeroku style={{ color: "#b655f2" }} />
            <FaNpm style={{ color: "#ff524f" }} />
            <FaGitSquare />
          </div>
          <div
            style={{
              textAlign: "right",
              paddingRight: "5px",
              paddingBottom: "15px",
              marginTop: "20px",
            }}
          >
            <Button
              href="https://github.com/eshaanc20/eyeSight"
              target="_blank"
              variant="contained"
              style={{
                color: "white",
                backgroundColor: "#0889a3",
                marginLeft: "12px",
                fontSize: "14px",
              }}
            >
              Github
            </Button>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Project project="eyeSight" height="320px" width="180px" />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: "60px",
          justifyContent: "space-evenly",
          paddingRight: "50px",
        }}
        data-aos="fade-up"
      >
        <div className="project-info">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "-40px",
            }}
          >
            <p style={{ fontSize: "26px", fontWeight: "bold" }}>
              Finger Prosthetic
            </p>
            <p style={{ fontSize: "18px" }}>02/2019 – 04/2019</p>
          </div>
          <p style={{ fontSize: "20px", opacity: "0.6" }}>
            Autodesk Inventor Project
          </p>
          <ul style={{ fontSize: "18px" }}>
            <li>
              Designed a finger prosthetic using Autodesk Inventor and 3D
              printed it to verify the functionality
            </li>
            <li>
              Created a gear train to achieve a given output speed from input
              speed with error less than 1%
            </li>
            <li>Group project for an enginnering design class</li>
            <li>Learned the basics of CAD</li>
          </ul>
          <div
            style={{
              textAlign: "right",
              paddingRight: "5px",
              paddingBottom: "20px",
            }}
          >
            <Button
              href="https://drive.google.com/drive/folders/1lgBk3KKjjh3j3Jx8eqvFbL17ERNeqIN1?usp=sharing"
              variant="contained"
              target="_blank"
              style={{
                color: "white",
                backgroundColor: "#0972b8",
                marginLeft: "12px",
                fontSize: "14px",
              }}
            >
              Project
            </Button>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Project project="Inventor" height="240px" width="400px" />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: "60px",
          justifyContent: "space-evenly",
          paddingRight: "50px",
        }}
        data-aos="fade-up"
      >
        <div className="project-info">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "-40px",
            }}
          >
            <p style={{ fontSize: "26px", fontWeight: "bold" }}>Announce</p>
            <p style={{ fontSize: "18px" }}>02/2017 – 02/2019</p>
          </div>
          <p style={{ fontSize: "20px", opacity: "0.6" }}>Web Application</p>
          <ul style={{ fontSize: "18px" }}>
            <li>
              Account based web application allows for clubs to communicate with
              their members through announcements
            </li>
            <li>Multiple HTML, JavaScript and CSS files</li>
            <li>
              Heavy focus on JSON, string indexing, UI design and using local
              storage
            </li>
            <li>
              First software project which helped me learn web development
            </li>
            <li>
              Developed skills such as problem solving and analytical skills
            </li>
          </ul>
          <div
            style={{
              fontSize: "40px",
              display: "flex",
              maxWidth: "200px",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <FaHtml5 style={{ color: "#f54c0f" }} />
            <IoLogoCss3 style={{ color: "#0f99f5" }} />
            <IoLogoJavascript style={{ color: "#f0cf13" }} />
          </div>
          <div
            style={{
              textAlign: "right",
              paddingRight: "5px",
              paddingBottom: "20px",
              marginTop: "20px",
            }}
          >
            <Button
              href="https://github.com/eshaanc20/Announce"
              variant="contained"
              target="_blank"
              style={{
                color: "white",
                backgroundColor: "#0889a3",
                marginLeft: "12px",
                fontSize: "14px",
              }}
            >
              Github
            </Button>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Project project="Announce" height="240px" width="400px" />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: "60px",
          justifyContent: "space-evenly",
          paddingRight: "50px",
        }}
        data-aos="fade-up"
      >
        <div className="project-info">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "-40px",
            }}
          >
            <p style={{ fontSize: "26px", fontWeight: "bold" }}>Fit Together</p>
            <p style={{ fontSize: "18px" }}>01/2019 (DeltaHacks)</p>
          </div>
          <p style={{ fontSize: "20px", opacity: "0.6" }}>Mobile App</p>
          <ul style={{ fontSize: "18px" }}>
            <li>
              App promotes exercise by helping users post/view events in
              community to get involved in
            </li>
            <li>
              Demoed the app at DeltaHacks as a prototype and won best use of
              Google Cloud Platform challenge
            </li>
            <li>Worked on the UI design for the app using dart with Flutter</li>
          </ul>
          <div
            style={{
              textAlign: "right",
              paddingRight: "5px",
              paddingBottom: "20px",
              marginTop: "20px",
            }}
          >
            <Button
              href="https://devpost.com/eshaanc20"
              variant="contained"
              target="_blank"
              style={{
                color: "white",
                backgroundColor: "#0972b8",
                marginLeft: "12px",
                fontSize: "14px",
              }}
            >
              Devpost
            </Button>
            <Button
              href="https://github.com/eshaanc20/Fit-Together"
              variant="contained"
              target="_blank"
              style={{
                color: "white",
                backgroundColor: "#0889a3",
                marginLeft: "12px",
                fontSize: "14px",
              }}
            >
              Github
            </Button>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Project project="FitTogether" height="280px" width="160px" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
