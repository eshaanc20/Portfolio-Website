import React, { useEffect } from "react";
import "./Contact.css";
import {
  FaEnvelope,
  FaPhoneAlt,
 FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
  FaLinkedin,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1000,
  delay: 100,
  mirror: false,
  once: true,
});

const contactMethods = [
  {
    label: "Email",
    value: "eshaanchaudhari10@outlook.com",
    href: "mailto:eshaanchaudhari10@outlook.com",
    icon: <FaEnvelope />,
    caption: "Best for opportunities & collaborations",
  },
  {
    label: "Phone",
    value: "647-639-7482",
    href: "tel:+16476397482",
    icon: <FaPhoneAlt />,
    caption: "Available Mon–Fri | 9 AM – 6 PM ET",
  },
  {
    label: "Location",
    value: "Toronto, Canada",
    href: "https://maps.app.goo.gl/4yfrK1s5VYWzQmXd9",
    icon: <FaMapMarkerAlt />,
    caption: "Operating hybrid / remote",
    external: true,
  },
];

const responseHighlights = [
  { label: "Avg response", value: "< 24 hrs" },
  { label: "Time zones", value: "EST • PST • GMT" },
  { label: "Modes", value: "Email / Zoom / Phone" },
];

const Contact = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <section className="contact-section" name="Contact" id="contact">
      <div className="contact-bg-shapes">
        <div className="contact-shape shape-1"></div>
        <div className="contact-shape shape-2"></div>
        <div className="contact-shape shape-3"></div>
      </div>

      <div className="contact-inner">
        <div className="contact-header" data-aos="fade-down">
          <div className="contact-header-content">
            <div className="contact-icon-wrapper">
              <FaPaperPlane className="contact-main-icon" />
              <div className="contact-icon-glow"></div>
            </div>
            <h2 className="contact-title">Let’s build something together</h2>
            <p className="contact-subtitle">
              Reach out for product engineering roles, ML collaborations, or speaking requests.
              I respond quickly and tailor the format—async email, live call, or collaborative doc.
            </p>
          </div>
          <div className="header-line">
            <div className="line-glow"></div>
          </div>
        </div>

        <div className="contact-grid">
          <div className="contact-panel contact-panel--details" data-aos="fade-right">
            <div className="contact-card contact-card--primary">
              <p className="card-eyebrow">Direct channels</p>
              <h3>Connect instantly</h3>

              <div className="contact-methods">
                {contactMethods.map((method) => (
                  <a
                    key={method.label}
                    href={method.href}
                    target={method.external ? "_blank" : undefined}
                    rel={method.external ? "noopener noreferrer" : undefined}
                    className="contact-method"
                  >
                    <span className="method-icon">{method.icon}</span>
                    <div>
                      <p className="method-label">{method.label}</p>
                      <p className="method-value">{method.value}</p>
                      <p className="method-caption">{method.caption}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="contact-card contact-card--meta">
              <div className="availability">
                <div className="availability-icon">
                  <FaClock />
                </div>
                <div>
                  <p className="card-eyebrow">Availability</p>
                  <p>Hybrid Toronto · Remote friendly</p>
                  <ul>
                    <li>Product & platform engineering teams</li>
                    <li>AI/ML strategy conversations</li>
                    <li>Speaking & mentorship invites</li>
                  </ul>
                </div>
              </div>

              <div className="response-stats">
                {responseHighlights.map((item) => (
                  <div key={item.label} className="response-chip">
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </div>
                ))}
              </div>

              <a
                href="https://www.linkedin.com/in/eshaanchaudhari/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social"
              >
                <FaLinkedin />
                <span>Continue on LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="contact-panel contact-panel--form" data-aos="fade-left">
            <p className="card-eyebrow">Send a note</p>
            <h3>Share the context & I’ll reply with next steps</h3>
            <form
              className="contact-form"
              action="https://formspree.io/f/mwpaplbb"
              method="POST"
            >
              <div className="form-row">
                <label className="form-field">
                  <span>Name</span>
                  <input type="text" name="Name" placeholder="Your full name" required />
                </label>
                <label className="form-field">
                  <span>Email</span>
                  <input type="email" name="_replyto" placeholder="you@email.com" required />
                </label>
              </div>
              <label className="form-field">
                <span>Project / Opportunity</span>
                <input
                  type="text"
                  name="Subject"
                  placeholder="Role, project, or collaboration focus"
                />
              </label>
              <label className="form-field">
                <span>Message</span>
                <textarea
                  name="Message"
                  rows="5"
                  placeholder="Share goals, timelines, or anything that helps me prep."
                  required
                ></textarea>
              </label>
              <button type="submit" className="contact-submit">
                <FaPaperPlane />
                Send Message
              </button>
            </form>
            <p className="form-footnote">
              Powered by Formspree • Your message routes straight to my inbox and I reply within one
              business day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
