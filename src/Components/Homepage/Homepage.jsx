import React from "react";
import "./Homepage.css";
import ProfilePicture from "../../Assets/profilePicture.jpeg";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io";
import Button from "@mui/material/Button";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";
import Resume from "../../Assets/Eshaan_Chaudhari_Resume.pdf";
import { Typewriter } from "react-simple-typewriter";

AOS.init();

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="homepage-title">
        <div className="homepage-content" data-aos="fade-up">
          <p className="name">Eshaan Chaudhari</p>
          <div className="p1">
            <Typewriter
              words={[
                "Software Engineer",
                "Full-Stack Engineer at Manulife",
                "McMaster Engineering Graduate",
                "Software Engineering & Management",
                "Always Building, Always Learning",
                "Creative Problem Solver",
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </div>
          <div className="more-info">
            <a
              className="connect"
              href="https://linkedin.com/in/eshaan-chaudhari"
            >
              <IoLogoLinkedin />
            </a>
            <a className="connect" href="https://github.com/eshaanc20">
              <IoLogoGithub />
            </a>
          </div>
          <div className="buttons">
            <Button
              variant="contained"
              className="resume-button"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                color: "white",
                fontSize: "20px",
                borderRadius: "30px",
                paddingTop: "10px",
                paddingLeft: "20px",
                paddingBottom: "10px",
                paddingRight: "20px",
              }}
              href={Resume}
              target="_blank"
            >
              View Resume
            </Button>
            <Button
              variant="contained"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                color: "white",
                fontSize: "20px",
                borderRadius: "30px",
                paddingTop: "10px",
                paddingLeft: "20px",
                paddingBottom: "10px",
                paddingRight: "20px",
              }}
              className="info-button"
            >
              <Link to="Contact" smooth={true}>
                Contact
              </Link>
            </Button>
          </div>
        </div>
        <div className="homepage-photo">
          <div className="profile-circle">
            <img className="profile" alt="" src={ProfilePicture} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
