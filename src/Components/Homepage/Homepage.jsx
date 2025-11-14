import { useEffect, useState } from "react";
import "./Homepage.css";
import ProfilePicture from "../../Assets/profilePicture.jpeg";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io";
import {
  FaCode,
  FaRocket,
  FaBrain,
  FaLaptopCode,
  FaAward,
  FaServer,
  FaCloud,
  FaAws,
  FaMicrosoft,
} from "react-icons/fa";
import {
  SiReact,
  SiJavascript,
  SiPython,
  SiNodedotjs,
  SiAngular,
} from "react-icons/si";
import { MdDevices } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";
import Resume from "../../Assets/Eshaan_Chaudhari_Resume.pdf";
import { Typewriter } from "react-simple-typewriter";

const Homepage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse position for parallax and interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const initAOS = () => {
      const disableAnimations = window.matchMedia("(max-width: 768px)").matches;
      AOS.init({
        duration: 1000,
        delay: 100,
        mirror: false,
        once: true,
        disable: disableAnimations,
      });
    };

    initAOS();
    window.addEventListener("resize", initAOS);
    return () => window.removeEventListener("resize", initAOS);
  }, []);

  // Background animations removed for cleaner look

  return (
    <div className="homepage" name="Homepage">
      {/* Floating geometric shapes with neon glow */}
      <div className="floating-shapes">
        <div className="shape shape-1">
          <div className="shape-glow"></div>
        </div>
        <div className="shape shape-2">
          <div className="shape-glow"></div>
        </div>
        <div className="shape shape-3">
          <div className="shape-glow"></div>
        </div>
        <div className="shape shape-4">
          <div className="shape-glow"></div>
        </div>
        <div className="shape shape-5">
          <div className="shape-glow"></div>
        </div>
        <div className="shape shape-6">
          <div className="shape-glow"></div>
        </div>
        <div className="shape shape-7">
          <div className="shape-glow"></div>
        </div>
        <div className="shape shape-8">
          <div className="shape-glow"></div>
        </div>
      </div>

      {/* Enhanced gradient orbs with darker purple */}
      <div className="gradient-orb orb-1"></div>
      <div className="gradient-orb orb-2"></div>
      <div className="gradient-orb orb-3"></div>
      <div className="gradient-orb orb-4"></div>

      {/* Floating tech icons */}
      <div className="floating-tech-icons">
        <div
          className="tech-icon"
          style={{ top: "15%", left: "8%", animationDelay: "0s" }}
        >
          <SiReact />
        </div>
        <div
          className="tech-icon"
          style={{ top: "70%", left: "12%", animationDelay: "1.5s" }}
        >
          <SiJavascript />
        </div>
        <div
          className="tech-icon"
          style={{ top: "25%", right: "10%", animationDelay: "3s" }}
        >
          <SiPython />
        </div>
        <div
          className="tech-icon"
          style={{ bottom: "25%", right: "15%", animationDelay: "4.5s" }}
        >
          <SiNodedotjs />
        </div>
      </div>

      {/* Ambient particles */}
      <div className="particles-container">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          ></div>
        ))}
      </div>

      <div
        className="homepage-title"
        style={{
          transform: `translate(${mousePosition.x * 5}px, ${
            mousePosition.y * 5
          }px)`,
        }}
      >
        <div className="homepage-content" data-aos="fade-up">
          <div className="greeting-badge neon-border">
            <span className="wave">👋</span>
            <span>Hello World, I'm</span>
          </div>

          <h1 className="name">
            <span className="name-text glitch" data-text="Eshaan Chaudhari">
              Eshaan Chaudhari
            </span>
            <div className="name-underline neon-glow"></div>
          </h1>

          <div className="role-container glass-card">
            <div className="role-icon pulse-glow">
              <FaCode />
            </div>
            <div className="role-text">
              <Typewriter
                words={[
                  "Software Engineer",
                  "3+ years of work experience building and shipping software",
                  "Full-Stack Engineer at Manulife",
                  "McMaster Engineering Graduate",
                  "Software Engineering & Management",
                  "Always Building, Always Learning",
                  "Creative Problem Solver. Architect.",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </div>
          </div>

          <div className="stats-row">
            <div
              className="stat-card glass-card"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="stat-icon-wrapper">
                <FaRocket className="stat-icon" />
              </div>
              <div className="stat-content">
                <div className="stat-value counter">3+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="card-shine"></div>
            </div>
            <div
              className="stat-card glass-card"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="stat-icon-wrapper">
                <FaBrain className="stat-icon" />
              </div>
              <div className="stat-content">
                <div className="stat-value counter">20+</div>
                <div className="stat-label">Projects Built</div>
              </div>
              <div className="card-shine"></div>
            </div>
            <div
              className="stat-card glass-card"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="stat-icon-wrapper">
                <FaAward className="stat-icon" />
              </div>
              <div className="stat-content">
                <div className="stat-value counter">10+</div>
                <div className="stat-label">
                  <span className="stat-label-full">
                    Technologies & Frameworks
                  </span>
                  <span className="stat-label-short">Tech Skills</span>
                </div>
              </div>
              <div className="card-shine"></div>
            </div>
          </div>

          <div className="mobile-expertise-highlight">
            <div className="highlight-pill">
              <FaBrain />
              <span>Full-Stack Expert</span>
            </div>
            <p>
              Bridging front-end craft with scalable backend systems and cloud
              solutions to deliver value for customers
            </p>
          </div>

          <div className="expertise-section">
            <div className="expertise-cards">
              <div
                className="expertise-card glass-card"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className="expertise-icon-wrapper">
                  <MdDevices className="expertise-main-icon" />
                </div>
                <div className="expertise-content">
                  <h3 className="expertise-card-title">Frontend</h3>
                  <p className="expertise-card-desc">
                    Modern UI/UX Development
                  </p>
                </div>
                <div className="expertise-tech-icons">
                  <div className="tech-badge">
                    <SiReact />
                  </div>
                  <div className="tech-badge">
                    <SiAngular />
                  </div>
                </div>
                <div className="card-shine"></div>
              </div>

              <div
                className="expertise-card glass-card"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <div className="expertise-icon-wrapper">
                  <FaServer className="expertise-main-icon" />
                </div>
                <div className="expertise-content">
                  <h3 className="expertise-card-title">Backend</h3>
                  <p className="expertise-card-desc">
                    Microservice Architecture
                  </p>
                </div>
                <div className="expertise-tech-icons">
                  <div className="tech-badge">
                    <SiNodedotjs />
                  </div>
                  <div className="tech-badge">
                    <SiPython />
                  </div>
                </div>
                <div className="card-shine"></div>
              </div>

              <div
                className="expertise-card glass-card"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <div className="expertise-icon-wrapper">
                  <FaCloud className="expertise-main-icon" />
                </div>
                <div className="expertise-content">
                  <h3 className="expertise-card-title">Cloud</h3>
                  <p className="expertise-card-desc">
                    AWS & Azure Infrastructure
                  </p>
                </div>
                <div className="expertise-tech-icons">
                  <div className="tech-badge" title="Amazon Web Services">
                    <FaAws />
                  </div>
                  <div className="tech-badge" title="Microsoft Azure">
                    <FaMicrosoft />
                  </div>
                </div>
                <div className="card-shine"></div>
              </div>
            </div>
          </div>

          <div className="actions-section">
            <div className="cta-buttons">
              <a
                className="cta-button primary"
                href={Resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>View Resume</span>
                <svg
                  className="arrow"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M7.5 15L12.5 10L7.5 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <Link
                to="Contact"
                smooth={true}
                duration={800}
                className="cta-button secondary"
              >
                <span>Let's Talk</span>
              </Link>
            </div>

            <div className="social-links">
              <a
                className="social-button linkedin"
                href="https://linkedin.com/in/eshaan-chaudhari"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoLinkedin />
                <span>LinkedIn</span>
              </a>
              <a
                className="social-button github"
                href="https://github.com/eshaanc20"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoGithub />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>

        <div className="homepage-photo" data-aos="fade-up" data-aos-delay="200">
          <div className="profile-container">
            <div className="profile-glow-outer"></div>
            <div className="profile-glow"></div>
            <div className="profile-border neon-ring">
              <img
                className="profile"
                alt="Eshaan Chaudhari"
                src={ProfilePicture}
              />
            </div>
            <div className="floating-badge badge-1 glass-badge">
              <FaLaptopCode />
            </div>
            <div className="floating-badge badge-2 glass-badge">
              <FaRocket />
            </div>
            <div className="floating-badge badge-3 glass-badge">
              <FaBrain />
            </div>
            <div className="profile-float profile-float--one">
              <FaCode />
            </div>
            <div className="profile-float profile-float--two">
              <FaCloud />
            </div>
            <div className="profile-square profile-square--one"></div>
            <div className="profile-square profile-square--two"></div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <Link to="About" smooth={true} duration={800} offset={-80}>
        <div className="scroll-indicator">
          <div className="mouse neon-border-thin">
            <div className="wheel"></div>
          </div>
          <div className="scroll-text">Scroll to explore</div>
          <div className="scroll-arrow">↓</div>
        </div>
      </Link>
    </div>
  );
};

export default Homepage;
