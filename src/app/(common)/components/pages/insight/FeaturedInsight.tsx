// "use client";

// import { insightItems } from "@/app/data/insight/Insight";
// import { ArrowRight, Calendar, Clock } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";

// function formatDate(dateString: string) {
//   const date = new Date(dateString);
//   return date.toLocaleDateString("en-US", {
//     month: "short",
//     day: "numeric",
//     year: "numeric",
//   });
// }

// export type FeaturedInsightcard = {
//   slug: string;
//   title: string;
//   excerpt: string;
//   meta: string;
//   image: string;
//   featured: boolean;
// };

// export default function FeaturedInsightCard() {
//   const insight = insightItems.find(
//     (item): item is FeaturedInsightcard => item.featured!,
//   );
//   if (!insight) return null;
//   const [readTime, date] = insight.meta.split(" | ");
//   const formattedDate = formatDate(date);

//   return (
//     <div className="group relative overflow-hidden  bg-gradient-to-br from-[#0A0A0A] to-[#111111]  ransition-all duration-500 hover:border-site-accent/30 hover:shadow-2xl hover:shadow-site-accent/5">
//       <div className="absolute inset-0 bg-gradient-to-r from-site-accent/0 via-site-accent/0 to-site-accent/5 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

//       <div className="relative z-10 flex flex-col lg:flex-row gap-6 p-6 md:p-8 max-w-6xl mx-auto">
//         {/* Image Section */}
//         <div className="relative w-full lg:w-2/5 overflow-hidden rounded-2xl ">
//           <div className="absolute inset-0  z-10 rounded-2xl" />
//           <Image
//             src={insight.image}
//             alt={insight.title}
//             width={400}
//             height={300}
//             className="h-full w-3/4 object-cover transition-transform duration-700 group-hover:scale-105"
//           />
//           {/* Badge */}
//           <div className="absolute top-4 left-4 z-20">
//             <span className="inline-flex items-center gap-1.5 rounded-full bg-site-accent/20 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-site-accent border border-site-accent/30">
//               <span className="relative flex h-2 w-2">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-site-accent opacity-75" />
//                 <span className="relative inline-flex rounded-full h-2 w-2 bg-site-accent" />
//               </span>
//               Featured Article
//             </span>
//           </div>
//         </div>

//         {/* Content Section */}
//         <div className="flex-1 flex flex-col justify-center space-y-4">
//           {/* Meta Info */}
//           <div className="flex flex-wrap items-center gap-4 text-sm text-white/50">
//             <div className="flex items-center gap-1.5">
//               <Clock size={14} className="text-site-accent" />
//               <span>{readTime}</span>
//             </div>
//             <div className="flex items-center gap-1.5">
//               <Calendar size={14} className="text-site-accent" />
//               <span>{formattedDate}</span>
//             </div>
//           </div>

//           {/* Title */}
//           <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight">
//             {insight.title}
//           </h2>

//           {/* Excerpt */}
//           <p className="text-white/60 leading-relaxed text-base md:text-lg">
//             {insight.excerpt}
//           </p>

//           {/* Read More Link */}
//           <div className="pt-4">
//             <Link
//               href={`/case-studies/${insight.slug}`}
//               className="group/link inline-flex items-center gap-2 text-site-accent font-semibold transition-all duration-300 hover:gap-3"
//             >
//               <span>Read full article</span>
//               <ArrowRight
//                 size={16}
//                 className="transition-transform duration-300 group-hover/link:translate-x-1"
//               />
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Decorative corner accent */}
//       {/* <div className="absolute bottom-0 right-0 h-24 w-24 opacity-20">
//         <div className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-site-accent blur-3xl" />
//       </div> */}
//     </div>
//   );
// }

// components/CaseStudyCard.tsx =======> this is new component for case study
"use client";

import { CaseStudy } from "@/app/data/caseStudies/caseStudies";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  study: CaseStudy;
  index?: number;
};

export default function FeaturedInsightCard({ study, index = 0 }: Props) {
  return (
    <Link
      href={`/case-studies/${study.slug}`}
      style={{ animationDelay: `${index * 150}ms` }}
      className="
        group flex flex-col sm:flex-row items-stretch
        rounded-[24px] bg-white border border-[#e8eaf0]
        shadow-sm overflow-hidden opacity-0
        hover:shadow-2xl hover:border-[#b8b4f8]/70 hover:-translate-y-1
        transition-all duration-500 ease-out
        animate-[fadeInUp_0.6s_ease-out_forwards]
      "
    >
      {/* ── Image block ── */}
      <div className="relative w-full sm:w-[300px] lg:w-[340px] shrink-0 min-h-[240px] sm:min-h-[340px] bg-gradient-to-br from-[#eceaff] to-[#f8eaff] overflow-hidden">
        {/* Blobs */}
        <div className="absolute bottom-0 left-0 w-28 h-28 rounded-tr-[70px] bg-[#a8a4e8] opacity-60 z-10 transition-all duration-500 group-hover:scale-110 group-hover:opacity-80" />
        <div className="absolute bottom-0 right-0 w-28 h-28 rounded-tl-[70px] bg-[#e8a4d0] opacity-60 z-10 transition-all duration-500 group-hover:scale-110 group-hover:opacity-80" />
        <div className="absolute top-0 right-0 w-20 h-20 rounded-bl-[50px] bg-[#a4d8e8] opacity-40 z-10 transition-all duration-500 group-hover:opacity-60" />

        {/* Inner image frame */}
        <div className="absolute inset-6 rounded-[18px] overflow-hidden z-0 bg-gradient-to-br from-[#ddeeff] via-[#f0f0ff] to-[#ffeeff]">
          <Image
            src={study.image}
            alt={study.title}
            fill
            sizes="(max-width: 640px) 90vw, 340px"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.07]"
          />
        </div>

        {/* Category badge */}
        <div className="absolute top-5 left-5 z-20">
          <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/85 backdrop-blur-sm text-[#6c63d4] text-[10px] font-bold tracking-widest uppercase shadow-sm">
            {study.category}
          </span>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="flex flex-col justify-between gap-6 flex-1 min-w-0 px-7 py-8 sm:py-10">
        <div className="space-y-4">
          {/* Title */}
          <h3 className="text-[1.3rem] sm:text-[1.5rem] font-bold text-[#1a1a2e] leading-snug tracking-tight group-hover:text-[#6c63d4] transition-colors duration-300 line-clamp-2">
            {study.title}
          </h3>

          {/* Excerpt */}
          <p className="text-[0.9rem] text-[#5a5a6e] leading-relaxed line-clamp-3">
            {study.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-1">
            {study.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-lg border border-[#e0e0ee] bg-[#f7f7ff] text-[0.75rem] text-[#6c63d4] font-medium transition-all duration-200 group-hover:border-[#c8c4f8] group-hover:bg-[#eeecff]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Result stats row */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            {study.results.slice(0, 2).map((r) => (
              <div
                key={r.label}
                className="rounded-[12px] bg-[#f7f7ff] border border-[#eeeeff] px-4 py-3 transition-colors duration-300 group-hover:bg-[#eeecff] group-hover:border-[#d4d0ff]"
              >
                <p className="text-[10px] uppercase tracking-widest text-[#9898b0] font-semibold mb-0.5">
                  {r.label}
                </p>
                <p className="text-[1.1rem] font-bold text-[#6c63d4]">
                  {r.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex items-center justify-between pt-4 border-t border-[#f0f0f8]">
          <p className="text-xs text-[#9898b0]">{study.meta}</p>

          <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-[#eeecff] text-[#6c63d4] transition-all duration-300 group-hover:bg-[#6c63d4] group-hover:text-white group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#6c63d4]/30">
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:rotate-12"
            />
          </span>
        </div>
      </div>
    </Link>
  );
}
