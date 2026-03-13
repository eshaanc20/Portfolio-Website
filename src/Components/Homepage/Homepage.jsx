import { useEffect } from "react";
import "./Homepage.css";
import ProfilePicture from "../../Assets/profilePicture.jpeg";
import PenroseLogo from "../../Assets/PenroseFoundryLogo.png";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io";
import { MdRocketLaunch } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";
import Resume from "../../Assets/Eshaan_Chaudhari_Resume.pdf";
import { Typewriter } from "react-simple-typewriter";

const Homepage = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <div className="homepage" name="Homepage">
      {/* Background — few bold elements */}
      <div className="hero-mesh"></div>
      <div className="hero-gradient-arc"></div>
      <div className="hero-grid"></div>

      <div className="homepage-layout">
        <div className="homepage-content" data-aos="fade-up">
          <div className="greeting-badge">
            <span className="greeting-dot"></span>
            <span>Hello World, I'm</span>
          </div>

          <h1 className="name">Eshaan Chaudhari</h1>

          <div className="role-container">
            <Typewriter
              words={[
                "Software Engineer",
                "3+ years of work experience building and shipping software",
                "Full-Stack Engineer at Manulife",
                "Founder of Penrose Foundry",
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

          <div className="stats-row">
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">20+</span>
              <span className="stat-label">Projects Built</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Tech Skills</span>
            </div>
          </div>

          <div className="cta-buttons">
            <a
              className="cta-button cta-button--primary"
              href={Resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>View Resume</span>
              <svg className="cta-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <Link to="Contact" smooth={true} duration={800} className="cta-button cta-button--secondary">
              <span>Let's Talk</span>
            </Link>
          </div>

          <div className="social-links">
            <a
              className="social-button"
              href="https://linkedin.com/in/eshaan-chaudhari"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoLinkedin />
              <span>LinkedIn</span>
            </a>
            <a
              className="social-button"
              href="https://github.com/eshaanc20"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoGithub />
              <span>GitHub</span>
            </a>
          </div>

          <a
            className="founder-card"
            href="https://penrosefoundry.ca"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={PenroseLogo} alt="Penrose Foundry" className="founder-card__logo" />
            <div className="founder-card__text">
              <span className="founder-card__role">Founder</span>
              <span className="founder-card__company">Penrose Foundry</span>
            </div>
            <MdRocketLaunch className="founder-card__arrow" />
          </a>
        </div>

        <div className="homepage-photo" data-aos="fade-left" data-aos-delay="200">
          <img className="profile-image" alt="Eshaan Chaudhari" src={ProfilePicture} />
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span className="scroll-text">Scroll</span>
      </div>
    </div>
  );
};

export default Homepage;
