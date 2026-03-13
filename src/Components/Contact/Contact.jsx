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
    caption: "Available Mon-Fri | 9 AM - 6 PM ET",
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

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <section className="contact-section" name="Contact" id="contact">
      <div className="contact-inner">
        <div className="contact-header" data-aos="fade-up">
          <div className="contact-icon-wrapper">
            <FaPaperPlane className="contact-main-icon" />
          </div>
          <h2 className="section-title">Let's build something together</h2>
          <p className="section-subtitle">
            Reach out for product engineering roles, ML collaborations, or speaking requests.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info" data-aos="fade-right">
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

            <div className="contact-availability">
              <div className="availability-icon">
                <FaClock />
              </div>
              <div>
                <p className="availability-title">Availability</p>
                <p className="availability-text">Hybrid Toronto / Remote friendly</p>
              </div>
            </div>

            <a
              href="https://www.linkedin.com/in/eshaanchaudhari/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-linkedin"
            >
              <FaLinkedin />
              <span>Continue on LinkedIn</span>
            </a>
          </div>

          <div className="contact-form-panel" data-aos="fade-left">
            <h3 className="form-title">Send a note</h3>
            <p className="form-subtitle">Share the context & I'll reply with next steps</p>
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
                <span>Subject</span>
                <input type="text" name="Subject" placeholder="Role, project, or collaboration focus" />
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
              Powered by Formspree — Your message goes straight to my inbox.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
