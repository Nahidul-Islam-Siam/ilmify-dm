// "use client";

// import { insightItems } from "@/app/data/insight/Insight";
// import { ArrowLeft, ArrowRight } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useRef, useState } from "react";

// export default function LatestInsight() {
//   const trackRef = useRef<HTMLDivElement>(null);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [canPrev, setCanPrev] = useState(false);
//   const [canNext, setCanNext] = useState(true);

//   const updateControls = () => {
//     const track = trackRef.current;
//     if (!track) return;

//     const maxScrollLeft = track.scrollWidth - track.clientWidth;
//     const cards = Array.from(
//       track.querySelectorAll<HTMLElement>("[data-latest-card]"),
//     );
//     if (!cards.length) return;

//     const currentScroll = track.scrollLeft;
//     let nearestIndex = 0;
//     let nearestDistance = Number.POSITIVE_INFINITY;

//     cards.forEach((card, index) => {
//       const distance = Math.abs(card.offsetLeft - currentScroll);
//       if (distance < nearestDistance) {
//         nearestDistance = distance;
//         nearestIndex = index;
//       }
//     });

//     setActiveIndex(nearestIndex);
//     setCanPrev(track.scrollLeft > 8);
//     setCanNext(track.scrollLeft < maxScrollLeft - 8);
//   };

//   useEffect(() => {
//     updateControls();
//     const track = trackRef.current;
//     if (!track) return;

//     const onScroll = () => updateControls();
//     track.addEventListener("scroll", onScroll, { passive: true });
//     window.addEventListener("resize", updateControls);

//     return () => {
//       track.removeEventListener("scroll", onScroll);
//       window.removeEventListener("resize", updateControls);
//     };
//   }, []);

//   const scrollCards = (direction: "next" | "prev") => {
//     const track = trackRef.current;
//     if (!track) return;

//     const cards = Array.from(
//       track.querySelectorAll<HTMLElement>("[data-latest-card]"),
//     );
//     if (!cards.length) return;

//     const nextIndex =
//       direction === "next"
//         ? Math.min(activeIndex + 1, cards.length - 1)
//         : Math.max(activeIndex - 1, 0);

//     track.scrollTo({
//       left: cards[nextIndex].offsetLeft,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <section className="bg-[#0b0b0b] px-4 pb-16 pt-8 text-white sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
//       <div className="mx-auto max-w-[1400px]">
//         <div className="mb-8 flex flex-wrap items-end justify-between gap-4 sm:mb-10">
//           <div>
//             <p className="text-xs font-bold uppercase tracking-[0.16em] text-site-accent">
//               Latest Insights
//             </p>
//             <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
//               Our Recent Articles
//             </h2>
//           </div>

//           <div className="flex items-center gap-3">
//             <button
//               type="button"
//               onClick={() => scrollCards("prev")}
//               disabled={!canPrev}
//               className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-site-accent bg-site-accent text-black transition hover:brightness-95 disabled:cursor-not-allowed disabled:border-white/20 disabled:bg-white/10 disabled:text-white/30"
//               aria-label="Previous insights"
//             >
//               <ArrowLeft size={18} />
//             </button>
//             <button
//               type="button"
//               onClick={() => scrollCards("next")}
//               disabled={!canNext}
//               className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-site-accent bg-site-accent text-black transition hover:brightness-95 disabled:cursor-not-allowed disabled:border-white/20 disabled:bg-white/10 disabled:text-white/30"
//               aria-label="Next insights"
//             >
//               <ArrowRight size={18} />
//             </button>
//           </div>
//         </div>

//         <div
//           ref={trackRef}
//           className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
//         >
//           {insightItems.map((item) => (
//             <Link
//               key={item.slug}
//               href={`/insights/${item.slug}`}
//               data-latest-card
//               className="group w-[86vw] max-w-[390px] shrink-0 snap-start overflow-hidden rounded-[22px] border border-white/14 bg-[#1a1a1a] transition duration-300 hover:border-site-accent/45"
//             >
//               <div className="relative aspect-[1.12] overflow-hidden">
//                 <Image
//                   src={item.image}
//                   alt={item.title}
//                   fill
//                   sizes="(max-width: 767px) 86vw, 390px"
//                   className="object-cover transition duration-500 group-hover:scale-[1.04]"
//                 />
//                 {/* <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
//                 <span className="absolute left-4 top-4 text-[34px] font-semibold tracking-tight text-white/90">
//                   ZeeFrames
//                 </span> */}
//               </div>

//               <div className="space-y-3 px-5 py-3 sm:px-4 ">
//                 <h3 className="line-clamp-2 text-[1rem] font-semibold leading-[1.60] tracking-tight text-white">
//                   {item.title}
//                 </h3>
//                 <p className="line-clamp-2 text-[0.8rem] leading-6 text-white/70">
//                   {item.excerpt}
//                 </p>
//                 <p className="pt-1 text-sm font-medium text-white/75">
//                   {item.meta}
//                 </p>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// // components/CaseStudyGrid.tsx
// "use client";

// import { caseStudies } from "@/app/data/caseStudies/caseStudies";
// import FeaturedInsightCard from "./FeaturedInsight";

// export default function LatestInsight() {
//   return (
//     <section className="bg-[#f4f5fb] px-4 py-16 sm:px-6 lg:px-8">
//       <div className="mx-auto max-w-5xl">
//         {/* Header */}
//         <div className="mb-10">
//           <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#6c63d4]">
//             Case Studies
//           </p>
//           <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#1a1a2e] sm:text-4xl">
//             Our Work, Our Results
//           </h2>
//           <p className="mt-3 text-[#5a5a6e] text-base max-w-xl">
//             {
//               "Real campaigns. Real outcomes. Here's how we've helped businesses grow through data-driven digital marketing."
//             }
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="flex flex-col gap-6">
//           {caseStudies.map((study) => (
//             <FeaturedInsightCard key={study.slug} study={study} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// components/CaseStudyGrid.tsx
"use client";

import { caseStudies } from "@/app/data/caseStudies/caseStudies";
import FeaturedInsightCard from "./FeaturedInsight";

export default function CaseStudyGrid() {
  return (
    <section className="bg-[#f4f5fb] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 animate-[fadeInUp_0.5s_ease-out_forwards]">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#6c63d4]">
            Case Studies
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#1a1a2e] sm:text-4xl">
            Our Work, Our Results
          </h2>
          <p className="mt-3 text-[#5a5a6e] text-base max-w-xl">
            {
              "Real campaigns. Real outcomes. Here's how we've helped businesses grow through data-driven digital marketing."
            }
          </p>
        </div>

        {/* Staggered layout — card 1 left-aligned 70%, card 2 right-aligned 70% */}
        <div className="flex flex-col gap-6">
          {caseStudies.map((study, i) => (
            <div
              key={study.slug}
              className={`
                w-full lg:w-[70%]
                ${i % 2 === 0 ? "lg:ml-0" : "lg:ml-auto"}
              `}
            >
              <FeaturedInsightCard study={study} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
