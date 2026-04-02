import React from "react";
import AboutBanner from "../components/pages/About/Banner";
import AboutPartnerSection from "../components/pages/About/AboutPartnerSection";
import AboutTextRevealSection from "../components/pages/About/AboutTextRevealSection";
import OurCultureSection from "../components/pages/About/OurCulture";
import OurValueSectionAlt from "../components/pages/About/Value";

const page = () => {
  return (
    <>
      <AboutBanner />
      <AboutPartnerSection />
      <AboutTextRevealSection />
      <OurCultureSection/>
      <OurValueSectionAlt/>
    </>
  );
};

export default page;
