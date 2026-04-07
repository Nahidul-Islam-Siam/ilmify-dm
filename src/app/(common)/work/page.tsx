import React from "react";
import WorkHero from "../components/pages/Work/Hero";
import ContactSection from "../components/pages/Home/ContactSection";

const Workpage = () => {
  return (
      <div className="relative z-10">
         <WorkHero />
        <ContactSection />
      </div>
  );
};

export default Workpage;
