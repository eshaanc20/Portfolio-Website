import React, { useEffect } from "react";
import "./Certifications.css";
import {
  FaAward,
  FaExternalLinkAlt,
  FaCheckCircle,
  FaCloud,
} from "react-icons/fa";
import { SiCoursera, SiUdemy } from "react-icons/si";
import Certification1 from "../../Assets/Certification1.png";
import Certification2 from "../../Assets/Certification2.png";
import Certification3 from "../../Assets/Certification3.png";
import Certification4 from "../../Assets/Certification4.jpg";
import Certification5 from "../../Assets/Certification5.png";
import Certification6 from "../../Assets/Certification6.png";
import AOS from "aos";
import "aos/dist/aos.css";

const certificationsData = [
  {
    id: 6,
    name: "Microsoft Certified: Azure Administrator Associate (AZ-104)",
    organization: "Microsoft",
    date: "November 2025",
    image: Certification6,
    certificateUrl:
      "https://learn.microsoft.com/api/credentials/share/en-us/EshaanChaudhari-9588/E3961BE967707A64?sharingId=7995207ABDBA54FE",
    icon: <FaCloud />,
    skills: [
      "Azure AD & IAM Controls",
      "Virtual Networking",
      "Compute & Containers",
      "Storage & Backups",
      "Monitoring & Automation",
      "Governance & Cost",
    ],
    focus: "Azure Administration",
    verified: true,
    summary:
      "Operations-focused certification covering deployments, compute, storage, governance, security, networking, and monitoring of Azure infrastructure with automation-first practices.",
  },
  {
    id: 5,
    name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    organization: "Microsoft",
    date: "November 2025",
    image: Certification5,
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
    image: Certification4,
    certificateUrl: "https://ude.my/UC-J691493I",
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
    image: Certification1,
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
    image: Certification2,
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
    image: Certification3,
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
  },
  {
    label: "Hands-on Hours",
    value: "180+",
  },
  {
    label: "Focus Tracks",
    value: "AI / Frontend / Cloud",
  },
];

const Certifications = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <section className="certifications-section" name="Certifications" id="certifications">
      <div className="certifications-inner">
        <div className="certifications-header" data-aos="fade-up">
          <div className="certifications-icon-wrapper">
            <FaAward className="certifications-main-icon" />
          </div>
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">
            Deep Learning Specialization paired with Microsoft Azure cloud credentials.
          </p>
        </div>

        <div className="certifications-stats" data-aos="fade-up" data-aos-delay="50">
          {statHighlights.map((stat) => (
            <div key={stat.label} className="cert-stat">
              <p className="cert-stat__value">{stat.value}</p>
              <p className="cert-stat__label">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="certifications-stack">
          {certificationsData.map((cert, index) => (
            <article
              key={cert.id}
              className="cert-card"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div className="cert-card__media">
                <img src={cert.image} alt={cert.name} />
              </div>
              <div className="cert-card__details">
                <h3 className="cert-card__title">{cert.name}</h3>
                <p className="cert-card__summary">{cert.summary}</p>
                <div className="cert-card__meta">
                  <span>{cert.organization}</span>
                  <span>{cert.date}</span>
                  <span>{cert.focus}</span>
                </div>
                <div className="cert-card__skills">
                  {cert.skills.map((skill) => (
                    <span key={skill} className="cert-skill-chip">{skill}</span>
                  ))}
                </div>
                <div className="cert-card__actions">
                  {cert.verified && (
                    <div className="verified-pill">
                      <FaCheckCircle />
                      <span>Verified</span>
                    </div>
                  )}
                  <a
                    href={cert.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-link"
                  >
                    View Certificate <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
