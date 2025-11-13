import React, { useEffect } from "react";
import "./Certifications.css";
import {
  FaAward,
  FaExternalLinkAlt,
  FaCheckCircle,
  FaCloud,
} from "react-icons/fa";
import { SiCoursera, SiUdemy } from "react-icons/si";
import Course1 from "../../Assets/Course1.png";
import Course2 from "../../Assets/Course2.png";
import Course3 from "../../Assets/Course3.png";
import Course4 from "../../Assets/Course4.jpg";
import Course5 from "../../Assets/Course5.png";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1000,
  delay: 100,
  mirror: false,
  once: true,
});

const certificationsData = [
  {
    id: 5,
    name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    organization: "Microsoft",
    date: "November 2025",
    image: Course5,
    certificateUrl:
      "https://learn.microsoft.com/api/credentials/share/en-us/EshaanChaudhari-9588/2BE1EA6C71EEB199?sharingId=7995207ABDBA54FE",
    icon: <FaCloud />,
    skills: [
      "Cloud Concepts",
      "Architecture",
      "Azure Resources",
      "Networking",
      "Governance",
      "Security",
    ],
    focus: "Azure Fundamentals",
    verified: true,
    summary:
      "Validated skills in cloud fundamentals by describing Azure cloud concepts, architecture, services, admin management, security and governance practices.",
  },
  {
    id: 1,
    name: "React - The Complete Guide (incl Hooks, React Router, Redux)",
    organization: "Udemy",
    date: "January 2020",
    image: Course4,
    certificateUrl: "http://ude.my/UC-J691493I",
    icon: <SiUdemy />,
    skills: ["React", "Redux", "React Router", "Hooks"],
    focus: "Frontend Architecture",
    verified: true,
    summary:
      "Deep dive into production-grade React apps with clean routing, predictable state, and resilient component patterns applied to live client work.",
  },
  {
    id: 2,
    name: "Neural Networks and Deep Learning",
    organization: "Coursera",
    date: "June 2019",
    image: Course1,
    certificateUrl:
      "https://www.coursera.org/account/accomplishments/certificate/EG664QR863PV?utm_medium=certificate&utm_source=link&utm_campaign=copybutton_certificate",
    icon: <SiCoursera />,
    skills: ["Neural Networks", "Deep Learning", "Python"],
    focus: "AI Foundations",
    verified: true,
    summary:
      "Built neural nets from scratch, explored vectorized math, and delivered optimized models that explain the 'why' behind each prediction.",
  },
  {
    id: 3,
    name: "Improving Deep Neural Networks: Hyperparameter tuning, Regularization and Optimization",
    organization: "Coursera",
    date: "August 2019",
    image: Course2,
    certificateUrl:
      "https://www.coursera.org/account/accomplishments/certificate/ANDAHXW42PM3?utm_medium=certificate&utm_source=link&utm_campaign=copybutton_certificate",
    icon: <SiCoursera />,
    skills: ["Hyperparameter Tuning", "Regularization", "Optimization"],
    focus: "Model Optimization",
    verified: true,
    summary:
      "Hands-on tuning of hyperparameters, diagnostics, and advanced regularization to squeeze every drop of performance out of ML systems.",
  },
  {
    id: 4,
    name: "Structuring Machine Learning Projects",
    organization: "Coursera",
    date: "September 2019",
    image: Course3,
    certificateUrl:
      "https://www.coursera.org/account/accomplishments/certificate/WVE6MYCWFFHZ?utm_medium=certificate&utm_source=link&utm_campaign=copybutton_certificate",
    icon: <SiCoursera />,
    skills: ["ML Strategy", "Project Management", "ML Best Practices"],
    focus: "ML Strategy",
    verified: true,
    summary:
      "Project-first lens on ML initiatives—framing experiments, defining KPIs, and creating delivery playbooks that keep stakeholders aligned.",
  },
];

const statHighlights = [
  {
    label: "Issued Credentials",
    value: `${certificationsData.length}`,
    detail: "Curated across AI, Web & Product",
  },
  {
    label: "Hands-on Hours",
    value: "180+",
    detail: "Video lessons, labs & projects",
  },
  {
    label: "Focus Tracks",
    value: "AI • Frontend • Delivery",
    detail: "Full-stack problem solving",
  },
];

const Certifications = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <section
      className="certifications-section"
      name="Certifications"
      id="certifications"
    >
      <div className="certifications-orbit certifications-orbit--one" />
      <div className="certifications-orbit certifications-orbit--two" />
      <div className="certifications-shape certifications-shape--left"></div>
      <div className="certifications-shape certifications-shape--right"></div>
      <div className="certifications-inner">
        <div className="certifications-header" data-aos="fade-down">
          <div className="certifications-header-content">
            <div className="certifications-icon-wrapper">
              <FaAward className="certifications-main-icon" />
              <div className="certifications-icon-glow"></div>
            </div>
            <h2 className="certifications-title">Certifications</h2>
            <p className="certifications-subtitle">
              Deep Learning Specialization (Neural Networks, Hyperparameter
              Tuning, ML Strategy) paired with Microsoft’s Azure for cloud
              solutions.
            </p>
          </div>
          <div className="header-line">
            <div className="line-glow"></div>
          </div>
        </div>

        <div
          className="certifications-stats"
          data-aos="fade-up"
          data-aos-delay="50"
        >
          {statHighlights.map((stat, index) => (
            <div key={stat.label} className="stat-card">
              <div className="stat-index">0{index + 1}</div>
              <div>
                <p className="stat-label">{stat.label}</p>
                <p className="stat-value">{stat.value}</p>
                <p className="stat-detail">{stat.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="certifications-showcase"
          data-aos="fade-up"
          data-aos-delay="80"
        >
          <div className="certifications-stack">
            {certificationsData.map((cert, index) => (
              <article
                key={cert.id}
                className={`featured-cert ${
                  index === 0 ? "featured-cert--primary" : ""
                }`}
              >
                <div className="featured-media">
                  <img src={cert.image} alt={cert.name} />
                  <div className="media-gradient" />
                </div>
                <div className="featured-details">
                  <p className="eyebrow">Verified Certification</p>
                  <h3>{cert.name}</h3>
                  <p className="featured-summary">{cert.summary}</p>
                  <div className="featured-metadata">
                    <div>
                      <span>Provider</span>
                      <strong>{cert.organization}</strong>
                    </div>
                    <div>
                      <span>Date</span>
                      <strong>{cert.date}</strong>
                    </div>
                    <div>
                      <span>Focus</span>
                      <strong>{cert.focus}</strong>
                    </div>
                  </div>
                  <div className="skill-row">
                    {cert.skills.map((skill) => (
                      <span key={skill} className="skill-chip">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="featured-actions">
                    {cert.verified && (
                      <div className="verified-pill">
                        <FaCheckCircle />
                        Verified credential
                      </div>
                    )}
                    <a
                      href={cert.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ghost-link"
                    >
                      View certificate <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
