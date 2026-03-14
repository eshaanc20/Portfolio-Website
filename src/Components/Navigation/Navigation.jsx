import React, { useEffect, useState } from "react";
import "./Navigation.css";
import { Link, scroller } from "react-scroll";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import {
  MdHome,
  MdSchool,
  MdBusinessCenter,
  MdCode,
  MdFolder,
  MdVerified,
  MdMail,
  MdRocketLaunch,
} from "react-icons/md";

const navItems = [
  { to: "Homepage", label: "Home", icon: <MdHome /> },
  { to: "Experiences", label: "Experience", icon: <MdBusinessCenter /> },
  { to: "PenroseFoundry", label: "Penrose Foundry", icon: <MdRocketLaunch /> },
  { to: "Education", label: "Education", icon: <MdSchool /> },
  { to: "Skills", label: "Skills", icon: <MdCode /> },
  { to: "Projects", label: "Projects", icon: <MdFolder /> },
  { to: "Certifications", label: "Certifications", icon: <MdVerified /> },
];

const Navigation = ({ introComplete }) => {
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

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const handleMobileSelect = (value) => {
    if (!value) return;
    setMobileMenuOpen(false);
    setTimeout(() => {
      scroller.scrollTo(value, {
        smooth: true,
        offset: -80,
        duration: 400,
      });
    }, 50);
  };

  return (
    <>
      <nav className={`nav ${isScrolled ? "nav--scrolled" : ""} ${introComplete ? "" : "nav--intro-waiting"}`}>
        <div className="nav__glow"></div>
        <div className="nav__bar">
          <Link to="Homepage" smooth={true} className="nav__brand" style={{ cursor: "pointer" }}>
            <span className="brand-logo">
              <span className="brand-logo__text">EC</span>
            </span>
          </Link>

          <div className="nav__pill">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                spy={true}
                duration={500}
                offset={-80}
                activeClass="is-active"
                className="nav-link"
              >
                <span className="nav-link__text">{item.label}</span>
                <span className="nav-link__dot"></span>
              </Link>
            ))}
          </div>

          <Link
            to="Contact"
            smooth={true}
            spy={true}
            duration={500}
            offset={-80}
            className="nav-cta"
          >
            <span className="nav-cta__text">Contact</span>
            <span className="nav-cta__shine"></span>
          </Link>

          <button
            className="nav__menu-btn"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            <span className={`hamburger ${isMobileMenuOpen ? "hamburger--open" : ""}`}>
              <span className="hamburger__line"></span>
              <span className="hamburger__line"></span>
              <span className="hamburger__line"></span>
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile overlay backdrop */}
      <div
        className={`mobile-backdrop ${isMobileMenuOpen ? "mobile-backdrop--open" : ""}`}
        onClick={() => setMobileMenuOpen(false)}
      ></div>

      {/* Mobile bottom sheet menu */}
      <div className={`mobile-sheet ${isMobileMenuOpen ? "mobile-sheet--open" : ""}`}>
        <div className="mobile-sheet__handle"></div>

        <div className="mobile-sheet__header">
          <span className="mobile-sheet__title">Navigation</span>
          <button
            className="mobile-sheet__close"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <HiX />
          </button>
        </div>

        <div className="mobile-sheet__list">
          {navItems.map((item, i) => (
            <button
              key={`mobile-${item.to}`}
              className="mobile-sheet__item"
              onClick={() => handleMobileSelect(item.to)}
              style={{ animationDelay: isMobileMenuOpen ? `${i * 60 + 100}ms` : "0ms" }}
            >
              <span className="mobile-sheet__icon">{item.icon}</span>
              <span className="mobile-sheet__label">{item.label}</span>
              <span className="mobile-sheet__arrow">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
          ))}
        </div>

        <div className="mobile-sheet__footer">
          <button
            className="mobile-sheet__cta"
            onClick={() => handleMobileSelect("Contact")}
          >
            <MdMail />
            <span>Get In Touch</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navigation;
