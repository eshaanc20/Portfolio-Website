import React, { useEffect, useState } from "react";
import "./PenroseFoundry.css";
import PenroseLogo from "../../Assets/PenroseFoundryLogo.png";
import TravitaLogo from "../../Assets/TravitaAppLogo.png";
import {
  MdAutoAwesome,
  MdRocketLaunch,
  MdHandshake,
  MdFlightTakeoff,
  MdSavings,
  MdHowToVote,
  MdChecklist,
  MdFolderShared,
  MdLightbulb,
  MdLanguage,
  MdEmail,
  MdCalendarToday,
} from "react-icons/md";
import { FaApple } from "react-icons/fa";
import AOS from "aos";

/* ---- Penrose Staircase geometry ---- */
const STEPS_PER_SIDE = 5;
const TOTAL_STEPS = 4 * STEPS_PER_SIDE;
const SIDE_HALF = 60;
const STEP_W = 24;
const STEP_H = 6;
const STEP_D = 18;
const TEAL = [120, 215, 198];
const PURPLE = [183, 148, 244];

const stairSteps = [];
for (let side = 0; side < 4; side++) {
  for (let s = 0; s < STEPS_PER_SIDE; s++) {
    const idx = side * STEPS_PER_SIDE + s;
    const t = idx / (TOTAL_STEPS - 1);
    const r = Math.round(TEAL[0] + (PURPLE[0] - TEAL[0]) * t);
    const g = Math.round(TEAL[1] + (PURPLE[1] - TEAL[1]) * t);
    const b = Math.round(TEAL[2] + (PURPLE[2] - TEAL[2]) * t);
    // Darken for side face
    const sideR = Math.round(r * 0.55);
    const sideG = Math.round(g * 0.55);
    const sideB = Math.round(b * 0.55);
    // Lighten for top face
    const topR = Math.min(255, Math.round(r * 1.15));
    const topG = Math.min(255, Math.round(g * 1.15));
    const topB = Math.min(255, Math.round(b * 1.15));
    stairSteps.push({
      transform: `rotateY(${side * 90}deg) translate3d(${-SIDE_HALF + STEP_W * s + STEP_W / 2}px, ${-idx * STEP_H}px, ${SIDE_HALF}px)`,
      bg: `rgb(${r} ${g} ${b})`,
      sideBg: `rgb(${sideR} ${sideG} ${sideB})`,
      topBg: `rgb(${topR} ${topG} ${topB})`,
      opacity: 0.75 + 0.25 * t,
      delay: idx * 0.06,
    });
  }
}

const PenroseFoundry = () => {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 600, once: true, easing: "ease-out" });
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
  }, []);

  const pillars = [
    {
      icon: <MdAutoAwesome />,
      num: "01",
      title: "AI Products",
      text: "Intelligent tools that solve real problems — not demos, not proofs of concept.",
    },
    {
      icon: <MdHandshake />,
      num: "02",
      title: "Consulting",
      text: "Strategy and engineering grounded in measurable outcomes for your team.",
    },
    {
      icon: <MdRocketLaunch />,
      num: "03",
      title: "Ship Fast",
      text: "From concept to production — products people actually use, delivered now.",
    },
  ];

  const travitaFeatures = [
    { icon: <MdFlightTakeoff />, label: "AI Itineraries", desc: "Personalized day-by-day plans" },
    { icon: <MdSavings />, label: "Finance Planning", desc: "Track budgets & expenses" },
    { icon: <MdHowToVote />, label: "Group Polls", desc: "Vote on group decisions" },
    { icon: <MdChecklist />, label: "Task Management", desc: "Organize trip to-dos" },
    { icon: <MdFolderShared />, label: "All Docs", desc: "Everything in one place" },
    { icon: <MdLightbulb />, label: "Brainstorm", desc: "AI-powered trip ideas" },
  ];

  return (
    <section className="pf-section" name="PenroseFoundry">
      {/* Background layers */}
      <div className="pf-bg-stars"></div>
      <div className="pf-bg-aurora"></div>
      <div className="pf-bg-grid"></div>
      <div className="pf-bg-vignette"></div>

      <div className="pf-inner">
        {/* Header with logo aura */}
        <div className="pf-header" data-aos="fade-up">
          <div className="pf-logo-wrap">
            <div className="pf-logo-aura"></div>
            <img src={PenroseLogo} alt="Penrose Foundry" className="pf-logo" />
          </div>
          <span className="pf-founder-badge">
            <span className="pf-founder-badge__shine"></span>
            Founded by Eshaan Chaudhari
          </span>
          <h2 className="pf-title">Penrose Foundry</h2>
          <p className="pf-tagline">Most AI companies sell the future. We deliver the present.</p>
          <div className="pf-info-row">
            <a href="https://penrosefoundry.ca" target="_blank" rel="noopener noreferrer" className="pf-info-link">
              <MdLanguage />
              <span>penrosefoundry.ca</span>
            </a>
            <span className="pf-info-sep"></span>
            <a href="mailto:hello@penrosefoundry.ca" className="pf-info-link">
              <MdEmail />
              <span>hello@penrosefoundry.ca</span>
            </a>
            <span className="pf-info-sep"></span>
            <span className="pf-info-item">
              <MdCalendarToday />
              <span>Founded 2026</span>
            </span>
          </div>
        </div>

        {/* Penrose Staircase */}
        <div className="penrose-scene">
          <div className="penrose-glow"></div>
          <div className="penrose-glow penrose-glow--secondary"></div>
          <div className={`penrose-staircase ${reduceMotion ? "penrose-staircase--static" : ""}`}>
            {stairSteps.map((step, i) => (
              <div
                key={i}
                className="penrose-step"
                style={{
                  transform: step.transform,
                  opacity: step.opacity,
                  animationDelay: `${step.delay}s`,
                }}
              >
                {/* Front face */}
                <div className="penrose-step__front" style={{ backgroundColor: step.bg }} />
                {/* Top face */}
                <div className="penrose-step__top" style={{ backgroundColor: step.topBg }} />
                {/* Side face */}
                <div className="penrose-step__side" style={{ backgroundColor: step.sideBg }} />
              </div>
            ))}
          </div>
        </div>

        {/* Mission glass card */}
        <div className="pf-mission-card" data-aos="fade-up" data-aos-delay="80">
          <div className="pf-mission-border"></div>
          <p className="pf-mission-text">
            We build AI products and consulting services focused on practical impact. We design,
            build, and ship intelligent tools that solve real problems. We partner with teams to
            integrate AI where it genuinely makes a difference.
          </p>
        </div>

        {/* Pillars */}
        <div className="pf-pillars">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="pf-pillar"
              data-aos="fade-up"
              data-aos-delay={100 + i * 60}
            >
              <div className="pf-pillar-top">
                <span className="pf-pillar-icon">{p.icon}</span>
                <span className="pf-pillar-num">{p.num}</span>
              </div>
              <h4 className="pf-pillar-title">{p.title}</h4>
              <p className="pf-pillar-text">{p.text}</p>
              <div className="pf-pillar-line"></div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="pf-divider" data-aos="fade-up" data-aos-delay="140">
          <div className="pf-divider-dot"></div>
          <span className="pf-divider-label">First Product</span>
          <div className="pf-divider-dot"></div>
        </div>

        {/* Travita Product */}
        <div className="pf-product" data-aos="fade-up" data-aos-delay="160">
          <div className="pf-product-glow"></div>
          <div className="pf-product-border"></div>

          {/* Hero area — centered logo + name + tagline */}
          <div className="pf-product-hero">
            <div className="pf-product-logo-wrap">
              <div className="pf-product-logo-aura"></div>
              <img src={TravitaLogo} alt="Travita" className="pf-product-logo" />
            </div>
            <div className="pf-product-hero-text">
              <h3 className="pf-product-name">Travita</h3>
              <p className="pf-product-subtitle">AI-Powered Collaborative Travel Planning</p>
            </div>
            <span className="pf-coming-soon">
              <span className="pf-coming-soon__dot"></span>
              Coming Soon
            </span>
          </div>

          {/* Description */}
          <p className="pf-product-desc">
            Plan trips together, effortlessly. Describe your ideal trip and let AI build personalized
            itineraries, plan finances, make group decisions with polls, organize tasks, and brainstorm
            ideas — all in one place. No research needed.
          </p>

          {/* Features */}
          <div className="pf-product-features">
            {travitaFeatures.map((f, i) => (
              <div key={i} className="pf-feature">
                <span className="pf-feature-icon">{f.icon}</span>
                <div className="pf-feature-text">
                  <span className="pf-feature-label">{f.label}</span>
                  <span className="pf-feature-desc">{f.desc}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Footer — App Store + highlights */}
          <div className="pf-product-footer">
            <div className="pf-product-footer-inner">
              <div className="pf-app-store-btn">
                <FaApple className="pf-app-store-icon" />
                <div className="pf-app-store-text">
                  <span className="pf-app-store-label">Coming soon on the</span>
                  <span className="pf-app-store-title">App Store</span>
                </div>
              </div>
              <div className="pf-product-highlights">
                <span className="pf-highlight">AI-powered</span>
                <span className="pf-highlight">No research needed</span>
                <span className="pf-highlight">Built for groups</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PenroseFoundry;
