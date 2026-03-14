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

        {/* Penrose Staircase — 3D (desktop) */}
        <div className="penrose-scene penrose-scene--3d">
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
                <div className="penrose-step__front" style={{ backgroundColor: step.bg }} />
                <div className="penrose-step__top" style={{ backgroundColor: step.topBg }} />
                <div className="penrose-step__side" style={{ backgroundColor: step.sideBg }} />
              </div>
            ))}
          </div>
        </div>

        {/* Penrose Staircase — 2D flat SVG (mobile only) */}
        <div className="penrose-scene penrose-scene--2d">
          <div className="penrose-glow"></div>
          <svg
            className="penrose-svg"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outer shape */}
            <polygon points="100,10 190,60 190,140 100,190 10,140 10,60" fill="none" stroke="url(#pGrad1)" strokeWidth="1.5" opacity="0.3" />
            {/* Top-right staircase */}
            <path d="M100,10 L130,27 L130,47 L150,37 L150,57 L170,47 L170,67 L190,60" stroke="url(#pGrad1)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M130,27 L130,47 M150,37 L150,57 M170,47 L170,67" stroke="url(#pGrad1)" strokeWidth="1.5" opacity="0.5" />
            {/* Right-bottom staircase */}
            <path d="M190,60 L190,80 L175,95 L190,100 L175,115 L190,120 L190,140" stroke="url(#pGrad2)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M190,80 L175,95 M190,100 L175,115 M190,120 L190,140" stroke="url(#pGrad2)" strokeWidth="1.5" opacity="0.5" />
            {/* Bottom-left staircase */}
            <path d="M190,140 L160,157 L160,137 L140,147 L140,127 L120,137 L120,117 L100,130" stroke="url(#pGrad3)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M160,157 L160,137 M140,147 L140,127 M120,137 L120,117" stroke="url(#pGrad3)" strokeWidth="1.5" opacity="0.5" />
            {/* Left-top staircase */}
            <path d="M100,130 L80,117 L80,137 L60,127 L60,147 L40,137 L40,157 L10,140" stroke="url(#pGrad4)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M80,117 L80,137 M60,127 L60,147 M40,137 L40,157" stroke="url(#pGrad4)" strokeWidth="1.5" opacity="0.5" />
            {/* Top-left closing staircase */}
            <path d="M10,140 L10,120 L25,105 L10,100 L25,85 L10,80 L10,60 L100,10" stroke="url(#pGrad1)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10,120 L25,105 M10,100 L25,85 M10,80 L10,60" stroke="url(#pGrad1)" strokeWidth="1.5" opacity="0.5" />
            {/* Step top surfaces */}
            <polygon points="100,10 130,27 130,47 100,30" fill="url(#pGrad1)" opacity="0.08" />
            <polygon points="130,47 150,37 150,57 130,47" fill="url(#pGrad2)" opacity="0.06" />
            <polygon points="150,57 170,47 170,67 150,57" fill="url(#pGrad3)" opacity="0.08" />
            <defs>
              <linearGradient id="pGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#78d7c6" />
                <stop offset="100%" stopColor="#b794f4" />
              </linearGradient>
              <linearGradient id="pGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#b794f4" />
              </linearGradient>
              <linearGradient id="pGrad3" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#b794f4" />
                <stop offset="100%" stopColor="#78d7c6" />
              </linearGradient>
              <linearGradient id="pGrad4" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#b794f4" />
                <stop offset="100%" stopColor="#60a5fa" />
              </linearGradient>
            </defs>
          </svg>
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
