import React from "react";
import { Helmet } from "react-helmet-async";

import ServiceHero from "../components/Services/ServiceHero.jsx";
import ServiceGrid from "../components/Services/ServiceGrid.jsx";
import Advantage from "../components/Services/Advantage.jsx";
import "../css/Services/ServicesGlobal.css";

const Services = () => {
  return (
    <>
      {/* SEO for Services Page */}
      <Helmet>
        <title>Services | Akhil's Cloud Technology Platform LLP</title>

        <meta
          name="description"
          content="Explore cloud computing, DevOps, CPU solutions, and enterprise IT services offered by Akhil's Cloud Technology Platform LLP."
        />

        <meta
          name="keywords"
          content="Akhil cloud services, cloud computing services, Akhil DevOps, enterprise IT solutions"
        />

        <meta
          property="og:title"
          content="Services | Akhil's Cloud Technology Platform LLP"
        />
        <meta
          property="og:description"
          content="Comprehensive cloud and technology services by Akhil's Cloud Technology Platform LLP."
        />
        <meta
          property="og:url"
          content="https://www.akhilscloud.com/services"
        />
      </Helmet>

      {/* Page Content */}
      <div className="services-page">
        <ServiceHero />
        <ServiceGrid />
        <Advantage />
      </div>
    </>
  );
};

export default Services;
