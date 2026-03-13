import React, { useEffect, useRef, useState } from "react";
import { IoIosCalendar } from "react-icons/io";
import { FaGraduationCap, FaBook, FaMapMarkerAlt } from "react-icons/fa";
import { HiAcademicCap, HiCheckCircle } from "react-icons/hi";
import AOS from "aos";
import "./Education.css";

const Education = () => {
  const [gpaVisible, setGpaVisible] = useState(false);
  const gpaRef = useRef(null);

  const courses = [
    "Principles of Programming",
    "Data Structures & Algorithms",
    "Digital Systems & Interfacing",
    "Computation",
    "Software Engineering Practice",
  ];

  useEffect(() => {
    AOS.init({ duration: 600, once: true, easing: "ease-out" });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setGpaVisible(true);
      },
      { threshold: 0.5 }
    );

    if (gpaRef.current) observer.observe(gpaRef.current);
    return () => observer.disconnect();
  }, []);

  const gpa = 3.5;
  const gpaMax = 4.0;
  const gpaPercent = (gpa / gpaMax) * 100;
  const circumference = 2 * Math.PI * 54;
  const strokeDashoffset = circumference - (gpaPercent / 100) * circumference;

  return (
    <div className="education-section" name="Education">
      <div className="edu-bg-topo"></div>
      <div className="edu-bg-glow"></div>

      <div className="edu-inner">
        <div className="education-header" data-aos="fade-up">
          <div className="edu-header-badge">
            <HiAcademicCap />
          </div>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">Academic Journey & Achievements</p>
        </div>

        <div className="edu-bento">
          {/* University Card — full width */}
          <div className="edu-card edu-card--university" data-aos="fade-up" data-aos-delay="100">
            <div className="edu-uni-left">
              <div className="edu-uni-icon">
                <FaGraduationCap />
              </div>
              <div className="edu-uni-info">
                <h3 className="edu-uni-name">McMaster University</h3>
                <div className="edu-uni-meta">
                  <span className="edu-meta-item">
                    <FaMapMarkerAlt />
                    Hamilton, ON
                  </span>
                  <span className="edu-meta-item">
                    <IoIosCalendar />
                    2018 — 2024
                  </span>
                </div>
              </div>
            </div>
            <div className="edu-status">
              <HiCheckCircle className="edu-status-icon" />
              <span>Graduated</span>
            </div>
          </div>

          {/* Degree Card */}
          <div className="edu-card edu-card--degree" data-aos="fade-up" data-aos-delay="150">
            <span className="edu-card-label">Degree</span>
            <h4 className="edu-degree-title">Bachelor of Engineering</h4>
            <p className="edu-degree-major">Software Engineering & Management</p>
            <div className="edu-degree-accent"></div>
          </div>

          {/* GPA Card */}
          <div className="edu-card edu-card--gpa" data-aos="fade-up" data-aos-delay="200" ref={gpaRef}>
            <span className="edu-card-label">GPA</span>
            <div className="edu-gpa-ring">
              <svg className="edu-gpa-svg" viewBox="0 0 120 120">
                <circle
                  className="edu-gpa-track"
                  cx="60"
                  cy="60"
                  r="54"
                  fill="none"
                  strokeWidth="8"
                />
                <circle
                  className="edu-gpa-progress"
                  cx="60"
                  cy="60"
                  r="54"
                  fill="none"
                  strokeWidth="8"
                  strokeLinecap="round"
                  style={{
                    strokeDasharray: circumference,
                    strokeDashoffset: gpaVisible ? strokeDashoffset : circumference,
                  }}
                />
              </svg>
              <div className="edu-gpa-value">
                <span className="edu-gpa-number">{gpa}</span>
                <span className="edu-gpa-max">/ {gpaMax}</span>
              </div>
            </div>
          </div>

          {/* Courses Card — full width */}
          <div className="edu-card edu-card--courses" data-aos="fade-up" data-aos-delay="250">
            <div className="edu-courses-top">
              <FaBook className="edu-courses-icon" />
              <span className="edu-card-label">Relevant Coursework</span>
            </div>
            <div className="edu-courses-list">
              {courses.map((course, i) => (
                <span key={i} className="edu-course-chip">
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
