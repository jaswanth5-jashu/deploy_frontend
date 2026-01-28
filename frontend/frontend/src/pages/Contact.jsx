import React, { useState } from "react";
import "../css/contact.css";
import { Helmet } from "react-helmet-async";
import { sendContactMessage } from "../services/contactApi";
import { validateContactForm } from "../utils/contactvalidate.js"; 

function Contact() {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    // 🔹 ADDED: VALIDATION
    const errors = validateContactForm(data);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setSuccess("");
      return;
    }
    setFormErrors({});

    try {
      const res = await sendContactMessage(data);

      setSuccess(
        res.message ||
          res.detail ||
          "Message sent successfully we will contact you with in 24 hours "
      );
      setError("");
      e.target.reset();
    } catch (err) {
      setError(
        err.message ||
          err.detail ||
          "Failed to send message. Please try again."
      );
      setSuccess("");
    }
  };

  return (
        <>
      {/* SEO for Contact Page */}
      <Helmet>
        <title>Contact Us | Akhil's Cloud Technology Platform LLP</title>

        <meta
          name="description"
          content="Contact Akhil's Cloud Technology Platform LLP for cloud solutions, partnerships, and business inquiries. Get in touch with our team today."
        />

        <meta
          name="keywords"
          content="Contact Akhil cloud, Akhil support, Akhil cloud contact, Akhil technology platform contact"
        />

        <meta
          property="og:title"
          content="Contact Us | Akhil's Cloud Technology Platform LLP"
        />
        <meta
          property="og:description"
          content="Get in touch with Akhil's Cloud Technology Platform LLP. We're here to help with your cloud and technology needs."
        />
        <meta
          property="og:url"
          content="https://www.akhilscloud.com/contact"
        />
      </Helmet>

    <div className="cps">
    <div className="cont-page">
      {/* HERO SECTION */}
      <section className="hero-contact">
        <div className="hero-con">
          <h1>Contact Us</h1>
          <p>
            Have a question or want to work together? We'd love to hear from you.
            <br /> Reach out and let's start a conversation.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-section">
        <div className="container">
          <h2 className="section-title">Send Us a Message</h2>
          <p className="section-subtitle">
            Fill out the form and our team will get back to you within 24 hours.
          </p>

          {success && <div className="form-success">{success}</div>}
          {error && <div className="form-error">{error}</div>}

          <div className="contact-grid">
            {/* LEFT INFO */}
            <div className="contact-info">
              <div className="info-card">
                <i className="bi bi-envelope"></i>
                <div>
                  <h4>Email</h4>
                  <p>contact@horizonsolutions.com</p>
                </div>
              </div>

              <div className="info-card">
                <i className="bi bi-telephone"></i>
                <div>
                  <h4>Phone</h4>
                  <p>+91 98765 43210</p>
                </div>
              </div>

              <div className="info-card">
                <i className="bi bi-geo-alt"></i>
                <div>
                  <h4>Address</h4>
                  <p>Hyderabad, Telangana, India</p>
                </div>
              </div>

              <div className="info-card">
                <i className="bi bi-clock"></i>
                <div>
                  <h4>Working Hours</h4>
                  <p>Mon – Fri : 9:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="contact-form">
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <input type="text" name="name" placeholder="Your Name" />
                  {formErrors.name && (
                    <small className="error">{formErrors.name}</small>
                  )}
                </div>

                <div className="form-group">
                  <input type="email" name="email" placeholder="Your Email" />
                  {formErrors.email && (
                    <small className="error">{formErrors.email}</small>
                  )}
                </div>

                <div className="form-group">
                  <input type="tel" name="phone" placeholder="Phone Number" />
                  {formErrors.phone && (
                    <small className="error">{formErrors.phone}</small>
                  )}
                </div>

                <div className="form-group">
                  <input type="text" name="subject" placeholder="Subject" />
                  {formErrors.subject && (
                    <small className="error">{formErrors.subject}</small>
                  )}
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                  ></textarea>
                  {formErrors.message && (
                    <small className="error">{formErrors.message}</small>
                  )}
                </div>

                <button type="submit" className="btn">
                  <i className="bi bi-send"></i> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* HEADQUARTERS */}
      <div className="info-card headquarters">
        <i className="bi bi-building"></i>
        <div>
          <h4>Headquarters</h4>
          <p>
            Horizon Solutions Pvt Ltd,
            <br />
            Hitech City, Hyderabad,
            <br />
            Telangana – 500081
          </p>

          <a
            href="https://www.google.com/maps?q=Hitech+City+Hyderabad"
            target="_blank"
            rel="noreferrer"
            className="direction-btn"
          >
            <i className="bi bi-geo"></i> Get Directions
          </a>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}

export default Contact;
