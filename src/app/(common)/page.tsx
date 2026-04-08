"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Banner from "@/app/(common)/components/pages/Home/Banner";
import Showcase from "./components/pages/Home/Showcase";
// import WorkVideo from "./components/pages/Home/WorkVideo";
import Services from "./components/pages/Home/Services";
import Process from "./components/pages/Home/Process";
import AiAction from "./components/pages/Home/AiAction";
import FaqSection from "./components/pages/Home/FaqSection";
import InsightsSection from "./components/pages/Home/InsightsSection";
import ContactSection from "./components/pages/Home/ContactSection";
import { useTransition } from "../hooks/TransitionContext";

gsap.registerPlugin(ScrollTrigger);

export default function CommonHomePage() {
 const sectionRef = useRef<HTMLDivElement | null>(null);
  const { applyTransition } = useTransition();

  // Apply transition when component is mounted
  useEffect(() => {
    if (sectionRef.current) {
      applyTransition(sectionRef.current);
    }
  }, [applyTransition]);

  return (
    <>
      <div ref={sectionRef} className="section">
        <Banner />
      </div>
      {/* <div className="section">
        <WorkVideo />
      </div> */}
      <div ref={sectionRef} className="section">
        <Services />
      </div>
      <div className="section">
        <Showcase />
      </div>
      <div className="section mt-10 lg:mt-20">
        <Process />
      </div>
      <div className="section mt-10 lg:mt-20">
        <AiAction />
      </div>

      <div className="section">
        <FaqSection />
      </div>
      <div className="section">
        <InsightsSection />
      </div>
      <div className="section">
        <ContactSection />
      </div>
    </>
  );
}
