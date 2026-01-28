import React from "react";
import { Helmet } from "react-helmet-async";

import Hero from "../components/Home/Hero.jsx";
import Features from "../components/Home/Fearures.jsx";
import About from "../components/Home/About.jsx";
import CTA from "../components/Home/CTA.jsx";
import "../css/home/HomeGlobal.css";

function Home() {
  return (
    <>
      {/* SEO for Home Page */}
      <Helmet>
        <title>Akhil's Cloud Technology Platform LLP | Official Website</title>

        <meta
          name="description"
          content="Akhil's Cloud Technology Platform LLP provides cloud computing, CPUs, DevOps, and enterprise IT solutions."
        />

        <meta
          name="keywords"
          content="Akhil's Cloud Technology Platform LLP, Akhil cloud, Akhil technology, cloud services india"
        />

        <meta
          property="og:title"
          content="Akhil's Cloud Technology Platform LLP"
        />
        <meta
          property="og:description"
          content="Official website of Akhil's Cloud Technology Platform LLP"
        />
        <meta
          property="og:url"
          content="https://www.akhilscloud.com/"
        />
      </Helmet>

      {/* Page Content */}
      <div className="home-main-wrapper">
        <Hero />
        <Features />
        <About />
        <CTA />
      </div>
    </>
  );
}

export default Home;
