import React, { useEffect, useState } from "react";
import "./Navigation.css";
import { Link, scroller } from "react-scroll";
import {
  FaHome,
  FaGraduationCap,
  FaBriefcase,
  FaCode,
  FaRocket,
  FaCertificate,
  FaEnvelope,
} from "react-icons/fa";
import { HiOutlineArrowNarrowRight, HiMenuAlt3 } from "react-icons/hi";

const navItems = [
  { to: "Homepage", label: "Home", icon: <FaHome />, number: "01" },
  { to: "Education", label: "Education", icon: <FaGraduationCap />, number: "02" },
  { to: "Experiences", label: "Experience", icon: <FaBriefcase />, number: "03" },
  { to: "Skills", label: "Skills", icon: <FaCode />, number: "04" },
  { to: "Projects", label: "Projects", icon: <FaRocket />, number: "05" },
  { to: "Certifications", label: "Certifications", icon: <FaCertificate />, number: "06" },
  { to: "Contact", label: "Contact", icon: <FaEnvelope />, number: "07" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileSelect = (value) => {
    if (!value) return;
    scroller.scrollTo(value, {
      smooth: true,
      offset: -80,
      duration: 600,
    });
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`stellar-nav ${isScrolled ? "stellar-nav--scrolled" : ""}`}>
        <div className="stellar-nav__aura"></div>
        <div className="stellar-nav__orbs">
          <span className="orb orb--one"></span>
          <span className="orb orb--two"></span>
        </div>

        <div className="stellar-nav__inner">
          <div className="stellar-nav__brand">
            <div className="brand-copy">
              <span className="brand-name">Eshaan Chaudhari</span>
              <span className="brand-role">Software Engineer</span>
            </div>
          </div>

          <button
            className={`stellar-nav__menu-btn ${isMobileMenuOpen ? "is-open" : ""}`}
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            <HiMenuAlt3 />
          </button>

          <div className="stellar-nav__right">
            <div className="stellar-nav__links">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  smooth={true}
                  spy={true}
                  offset={-80}
                  activeClass="is-active"
                  className={`nav-pill ${item.label === "Contact" ? "nav-pill--cta" : ""}`}
                >
                  <span className="pill-index">{item.number}</span>
                  <span className="pill-icon">{item.icon}</span>
                  <span className="pill-label">{item.label}</span>
                  {item.label === "Contact" && (
                    <span className="pill-arrow">
                      <HiOutlineArrowNarrowRight />
                    </span>
                  )}
                  <span className="pill-underline"></span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <div className={`mobile-dropdown ${isMobileMenuOpen ? "mobile-dropdown--open" : ""}`}>
        <div className="mobile-dropdown__header">
          <span>Jump to section</span>
        </div>
        <div className="mobile-dropdown__list">
          {navItems.map((item) => (
            <button
              key={`dropdown-${item.to}`}
              className={`mobile-dropdown__option ${
                item.label === "Contact" ? "mobile-dropdown__option--cta" : ""
              }`}
              onClick={() => handleMobileSelect(item.to)}
            >
              <div className="mobile-dropdown__copy">
                <span className="mobile-dropdown__icon">{item.icon}</span>
                <span>{item.label}</span>
              </div>
              <HiOutlineArrowNarrowRight />
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;
