import HomeShowcase from "@/app/(common)/components/pages/Home/Banner";
import Showcase from "./components/pages/Home/Showcase";
import WorkVideo from "./components/pages/Home/WorkVideo";
import Services from "./components/pages/Home/Services";

export default function CommonHomePage() {
  return (
    <>
      <HomeShowcase />
      <WorkVideo />
      <Services />
      <Showcase />
    </>
  );
}
