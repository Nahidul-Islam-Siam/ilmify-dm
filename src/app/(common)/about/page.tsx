import React from "react";
import AboutBanner from "../../../components/pages/About/Banner";
import AboutPartnerSection from "../../../components/pages/About/AboutPartnerSection";
import AboutTextRevealSection from "../../../components/pages/About/AboutTextRevealSection";
import OurCultureSection from "../../../components/pages/About/OurCulture";
import OurValueSectionAlt from "../../../components/pages/About/Value";
import OurTeamSection from "../../../components/pages/About/OurTeam";

const page = () => {
  return (
    <div className="bg-white">
      <AboutBanner />
      <div className="bg-[#f7f8fb]">
        <AboutPartnerSection />
      </div>
      <div className="bg-[#f3f5f8]">
        <AboutTextRevealSection />
      </div>
      <div className="bg-[#f8fafc]">
        <OurCultureSection />
      </div>
      <div className="bg-[#f5f4fa]">
        <OurValueSectionAlt />
      </div>
      <div className="bg-[#f7faf7]">
        <OurTeamSection />
      </div>
    </div>
  );
};

export default page;
