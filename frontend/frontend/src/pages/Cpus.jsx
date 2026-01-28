import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import "../css/cpus.css";

const Cpus = () => {
  // 🔹 Input Refs
  const fullNameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const cpuModelRef = useRef();
  const quantityRef = useRef();
  const ramRef = useRef();
  const storageRef = useRef();
  const messageRef = useRef();

  // 🔹 Messages
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🔹 Collect form data using refs
    const formData = {
      full_name: fullNameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      cpu_model: cpuModelRef.current.value,
      quantity: quantityRef.current.value,
      ram: ramRef.current.value,
      storage: storageRef.current.value,
      message: messageRef.current.value,
    };

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/inquiry/",
        formData
      );

      if (response.status === 201 || response.status === 200) {
        setSuccessMsg("Submitted successfully! Our team will contact you soon.");
        setErrorMsg("");

        // 🔹 Clear form
        fullNameRef.current.value = "";
        emailRef.current.value = "";
        phoneRef.current.value = "";
        cpuModelRef.current.value = "";
        quantityRef.current.value = "";
        ramRef.current.value = "";
        storageRef.current.value = "";
        messageRef.current.value = "";

        setTimeout(() => setSuccessMsg(""), 4000);
      }
    } catch (error) {
      if (error.response && error.response.data) {
        const backendErrors = error.response.data;
        const firstKey = Object.keys(backendErrors)[0];
        const errorMessage = backendErrors[firstKey][0];
        setErrorMsg(errorMessage);
      } else {
        setErrorMsg("Failed to submit. Please try again later.");
      }
      setSuccessMsg("");
    }
  };

  return (
    <>
     <>
      {/* SEO for CPUS Page */}
      <Helmet>
        <title>CPUs | Akhil's Cloud Technology Platform LLP</title>

        <meta
          name="description"
          content="Explore next-generation CPUs and custom processor configurations by Akhil's Cloud Technology Platform LLP."
        />

        <meta
          name="keywords"
          content="Akhil CPUs, CPU configurations Akhil, processors Akhil, enterprise CPUs"
        />

        <meta
          property="og:title"
          content="CPUs | Akhil's Cloud Technology Platform LLP"
        />
        <meta
          property="og:description"
          content="Next-gen processors and custom CPU solutions from Akhil's Cloud Technology Platform LLP."
        />
        <meta
          property="og:url"
          content="https://www.akhilscloud.com/cpus"
        />
      </Helmet>

      {/* HERO SECTION */}
      <section className="sos-hero">
        <span className="sos-hero-badge">
          <span className="sos-badge-icon">
            <i className="bi bi-cpu"></i>
          </span>
          <span className="sos-spancir">Strategic Alliances</span>
        </span>

        <h1>
          <span className="sos-white-text">Next-Gen</span>{" "}
          <span className="sos-blue-text">Processors</span>
        </h1>

        <p>
          Our strategic partnerships and collaborations that drive innovation
          and deliver exceptional value.
        </p>

        <div className="sos-btns">
          <NavLink to="/services" className="sos-btn-primary">
            Our Services <i className="bi bi-arrow-right-short"></i>
          </NavLink>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="sos-pipeline">
        <div className="sos-form-wrapper">
          <h1>
            <i className="bi bi-gear-wide-connected"></i> Our CPU Pipeline
          </h1>
          <p className="sos-subtitle">Submit your custom requirements below.</p>

          {/* SUCCESS MESSAGE */}
          {successMsg && (
            <div className="alert alert-success d-flex align-items-center mb-4">
              <i className="bi bi-check-circle-fill me-2 fs-4"></i>
              <div>{successMsg}</div>
            </div>
          )}

          {/* ERROR MESSAGE */}
          {errorMsg && (
            <div className="alert alert-danger d-flex align-items-center mb-4">
              <i className="bi bi-exclamation-triangle-fill me-2 fs-4"></i>
              <div>{errorMsg}</div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="sos-custom-form">
            <div className="sos-form-grid">

              <div className="sos-input-group">
                <label><i className="bi bi-person-fill"></i> Full Name</label>
                <input
                  type="text"
                  ref={fullNameRef}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="sos-input-group">
                <label><i className="bi bi-envelope-at-fill"></i> Email</label>
                <input
                  type="email"
                  ref={emailRef}
                  required
                  placeholder="email@example.com"
                />
              </div>

              <div className="sos-input-group">
                <label><i className="bi bi-telephone-fill"></i> Phone</label>
                <input
                  type="tel"
                  ref={phoneRef}
                  required
                  placeholder="10 digit mobile number"
                  maxLength="10"
                  pattern="[0-9]{10}"
                  title="Phone number must be exactly 10 digits"
                />
              </div>

              <div className="sos-input-group">
                <label><i className="bi bi-chip-fill"></i> CPU Model</label>
                <input
                  type="text"
                  ref={cpuModelRef}
                  required
                  placeholder="e.g. Intel i9 / Ryzen 7"
                />
              </div>

              <div className="sos-input-group">
                <label><i className="bi bi-hash"></i> Quantity</label>
                <input
                  type="number"
                  ref={quantityRef}
                  min="1"
                  required
                  placeholder="e.g. 10"
                />
              </div>

              <div className="sos-input-group">
                <label><i className="bi bi-memory"></i> RAM</label>
                <input
                  type="text"
                  ref={ramRef}
                  required
                  placeholder="e.g. 32GB DDR5"
                />
              </div>

              <div className="sos-input-group">
                <label><i className="bi bi-hdd-fill"></i> Storage</label>
                <input
                  type="text"
                  ref={storageRef}
                  required
                  placeholder="e.g. 1TB NVMe SSD"
                />
              </div>

              <div className="sos-input-group sos-full-width">
                <label><i className="bi bi-chat-left-text-fill"></i> Message</label>
                <textarea
                  ref={messageRef}
                  rows="4"
                  placeholder="Briefly describe your requirements"
                ></textarea>
              </div>
            </div>

            <button type="submit" className="sos-btn-primary sos-submit-btn">
              Submit Configuration <i className="bi bi-send-fill ms-2"></i>
            </button>
          </form>
        </div>
      </section>

      {/* LAST CTA SECTION */}
      <section className="sos-cta-section text-center">
        <h2>Interested in Our CPUs?</h2>
        <p>
          Talk to our experts to explore custom configurations and partnership
          opportunities.
        </p>
        <NavLink to="/contact" className="sos-cta-btn">
          Contact Sales <i className="bi bi-arrow-right"></i>
        </NavLink>
      </section>
    </>
    </>
  );
};

export default Cpus;
