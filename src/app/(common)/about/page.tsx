import React from "react";
import AboutBanner from "../components/pages/About/Banner";
import AboutPartnerSection from "../components/pages/About/AboutPartnerSection";
import AboutTextRevealSection from "../components/pages/About/AboutTextRevealSection";
import OurCultureSection from "../components/pages/About/OurCulture";
import OurValueSectionAlt from "../components/pages/About/Value";
import OurTeamSection from "../components/pages/About/OurTeam";

const page = () => {
  return (
    <>
      <AboutBanner />
      <AboutPartnerSection />
      <AboutTextRevealSection />
      <OurCultureSection />
      <OurValueSectionAlt />
      <OurTeamSection />
    </>
  );
};

export default page;
