import HomeShowcase from "@/app/(common)/components/pages/Home/Banner";
import Showcase from "./components/pages/Home/Showcase";
import WorkVideo from "./components/pages/Home/WorkVideo";
import Services from "./components/pages/Home/Services";
import Process from "./components/pages/Home/Process";
import AiAction from "./components/pages/Home/AiAction";
import FaqSection from "./components/pages/Home/FaqSection";

export default function CommonHomePage() {
  return (
    <>
      <HomeShowcase />
      <WorkVideo />
      <Services />
      <Showcase />
      <Process />
      <AiAction />
      <FaqSection />
    </>
  );
}
