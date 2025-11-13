import React from "react";
import { IoMdCode, IoIosSchool, IoIosCalendar, IoMdTrophy } from "react-icons/io";
import { FaGraduationCap, FaAward, FaBook, FaCode } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";
import "./Education.css";

const Education = () => {
  const courses = [
    { name: "Principles of Programming", icon: <FaCode /> },
    { name: "Data Structures and Algorithms", icon: <FaCode /> },
    { name: "Digital Systems and Interfacing", icon: <FaCode /> },
    { name: "Computation", icon: <FaBook /> },
    { name: "Software Engineering Practice & Experience", icon: <FaCode /> },
  ];

  return (
    <div className="education-section" name="Education">
      {/* Floating orbs for continuity */}
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div className={`education-orb edu-orb-${i}`} key={i}></div>
      ))}
      <div className="education-shape shape-1"></div>
      <div className="education-shape shape-2"></div>

      {/* Section Header */}
      <div className="education-header" data-aos="fade-up">
        <div className="header-icon-wrapper">
          <HiAcademicCap className="header-icon" />
        </div>
        <h2 className="education-main-title">Education</h2>
        <p className="education-subtitle">Academic Journey & Achievements</p>
      </div>

      {/* Main Education Card */}
      <div className="education-timeline" data-aos="fade-up" data-aos-delay="200">
        <div className="timeline-line"></div>

        <div className="education-card glass-card-edu">
          <div className="card-glow-effect"></div>

          {/* University Header */}
          <div className="edu-card-header">
            <div className="university-badge">
              <FaGraduationCap className="grad-cap-icon" />
            </div>
            <div className="university-info">
              <h3 className="university-name">McMaster University</h3>
              <div className="location-time">
                <IoIosCalendar className="inline-icon" />
                <span>2018 - 2024</span>
              </div>
            </div>
            <div className="status-badge graduated">
              <IoMdTrophy className="trophy-icon" />
              <span>Graduated</span>
            </div>
          </div>

          {/* Degree Info */}
          <div className="degree-section">
            <div className="degree-icon-wrapper">
              <IoMdCode className="degree-icon" />
            </div>
            <div className="degree-details">
              <h4 className="degree-title">Bachelor of Engineering</h4>
              <p className="degree-major">Software Engineering and Management</p>
            </div>
          </div>

          {/* GPA Section */}
          <div className="gpa-section">
            <div className="gpa-card">
              <div className="gpa-icon-wrapper">
                <FaAward className="gpa-icon" />
              </div>
              <div className="gpa-info">
                <p className="gpa-label">Cumulative GPA</p>
                <p className="gpa-value">3.5 / 4.0</p>
              </div>
              <div className="gpa-visual">
                <div className="gpa-bar">
                  <div className="gpa-fill" style={{ width: '87.5%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Courses Section */}
          <div className="courses-section">
            <h4 className="courses-header">
              <FaBook className="courses-icon" />
              Relevant Coursework
            </h4>
            <div className="courses-grid">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className="course-tag"
                  data-aos="fade-up"
                  data-aos-delay={300 + (index * 50)}
                >
                  <div className="course-icon-wrapper">
                    {course.icon}
                  </div>
                  <span className="course-name">{course.name}</span>
                  <div className="course-shine"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
