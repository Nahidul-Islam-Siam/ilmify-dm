// previous one for landing page

// import Banner from "@/components/pages/Home/Banner";
// // import Showcase from "./components/pages/Home/Showcase";
// // import WorkVideo from "./components/pages/Home/WorkVideo";
// import AiAction from "../../components/pages/Home/AiAction";
// import CaseStudies from "../../components/pages/Home/Case-Studies";
// import ContactSection from "../../components/pages/Home/ContactSection";
// import FaqSection from "../../components/pages/Home/FaqSection";
// import Process from "../../components/pages/Home/Process";
// import Services from "../../components/pages/Home/Services";
// // import ShowCaseContact from "./components/pages/Home/ShowCaseContact";

// export default function CommonHomePage() {
//   return (
//     <>
//       <Banner />
//       {/* <WorkVideo /> */}

//       {/* <Showcase /> */}
//       {/* <ShowCaseContact/> */}
//       <Process />

//       <AiAction />

//       <Services />

//       <FaqSection />
//       <CaseStudies />
//       <ContactSection />
//     </>
//   );
// }

//  New one for landing page

import Banner from "@/components/pages/Home/new/Banner";
import CaseStudies from "@/components/pages/Home/new/Casestudies";
import ContactSection from "@/components/pages/Home/new/ContactSection";
import FaqSection from "@/components/pages/Home/new/FaqSection";
import HireOurTeam from "@/components/pages/Home/new/HireOurTeam";
import Industries from "@/components/pages/Home/new/Industries";
import Logos from "@/components/pages/Home/new/Logos";
import Metrics from "@/components/pages/Home/new/Metrics";
import Process from "@/components/pages/Home/new/Process";
import Reviews from "@/components/pages/Home/new/Reviews";
import Services from "@/components/pages/Home/new/Services";
import WhyUs from "@/components/pages/Home/new/WhyUs";

export default function CommonHomePage() {
  return (
    <main>
      <Banner />
      <Logos />
      <Metrics />
      <Industries />
      <Services />
      <WhyUs />
      <Process />
      <CaseStudies />
      <Reviews />
      <HireOurTeam />
      <FaqSection />
      <ContactSection />
    </main>
  );
}
