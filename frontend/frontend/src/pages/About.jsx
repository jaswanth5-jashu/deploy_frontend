import React from "react";
import { Helmet } from "react-helmet-async";
import "../css/About/AboutGlobal.css"; 

import AboutHero from "../components/About/AboutHero";
import AboutStory from "../components/About/AboutStory";
import AboutVision from "../components/About/AboutVision";
import AboutValues from "../components/About/AboutValues";
import AboutTimeline from "../components/About/AboutTimeline";

function About() {
  return (
    <>
      {/* SEO for About Page */}
      <Helmet>
        <title>About Us | Akhil's Cloud Technology Platform LLP</title>

        <meta
          name="description"
          content="Learn about Akhil's Cloud Technology Platform LLP, our mission, vision, values, and journey in cloud and technology solutions."
        />

        <meta
          name="keywords"
          content="About Akhil Cloud, Akhil's Cloud Technology Platform LLP, Akhil company profile"
        />

        <meta
          property="og:title"
          content="About Akhil's Cloud Technology Platform LLP"
        />
        <meta
          property="og:description"
          content="Discover the story, vision, and values of Akhil's Cloud Technology Platform LLP."
        />
        <meta
          property="og:url"
          content="https://www.akhilscloud.com/about"
        />
      </Helmet>

      {/* Page Content */}
      <div className="about-page">
        <AboutHero />
        <AboutStory />
        <AboutVision />
        <AboutValues />
        <AboutTimeline />
      </div>
    </>
  );
}

export default About;
