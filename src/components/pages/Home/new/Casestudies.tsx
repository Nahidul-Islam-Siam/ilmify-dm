// "use client";
// import Link from "next/link";
// import { useState } from "react";

// const cases = [
//   {
//     id: 0,
//     tag: "SaaS · Lead Generation",
//     client: "GrowthIO SaaS",
//     industry: "B2B Software",
//     title: "From 80 to 450 Monthly Qualified Leads",
//     desc: "A mid-market SaaS platform was struggling with high cost-per-lead and low conversion rates from paid campaigns. We rebuilt their entire go-to-market strategy — new ICP targeting, landing page overhaul, and a multi-touch nurture sequence.",
//     metrics: [
//       { val: "250%", label: "Lead volume increase" },
//       { val: "-40%", label: "Cost per lead" },
//       { val: "$1.2M", label: "Revenue attributed" },
//     ],
//     color: "#60a5fa",
//     bg: "from-blue-500/10 to-transparent",
//   },
//   {
//     id: 1,
//     tag: "eCommerce · Paid Ads",
//     client: "NexaStore",
//     industry: "B2B eCommerce",
//     title: "4.8x ROAS in 90 Days with Google Shopping",
//     desc: "An eCommerce brand was burning budget on broad campaigns with no segmentation. We restructured their Google Shopping setup, added retargeting layers, and implemented automated bidding strategies that tripled their return on ad spend.",
//     metrics: [
//       { val: "4.8x", label: "Return on ad spend" },
//       { val: "+180%", label: "Revenue from paid" },
//       { val: "-55%", label: "Wasted ad spend" },
//     ],
//     color: "#f59e0b",
//     bg: "from-amber-500/10 to-transparent",
//   },
//   {
//     id: 2,
//     tag: "Real Estate · SEO",
//     client: "PropScale Agency",
//     industry: "Commercial Real Estate",
//     title: "First Page Rankings for 120 High-Intent Keywords",
//     desc: "A real estate consultancy had zero organic presence in a competitive market. Through technical SEO, content strategy, and local authority building, we put them on page 1 for 120 target keywords within 6 months.",
//     metrics: [
//       { val: "120+", label: "Page 1 keywords" },
//       { val: "3.2x", label: "Organic traffic growth" },
//       { val: "68%", label: "Leads from organic" },
//     ],
//     color: "#34d399",
//     bg: "from-green-500/10 to-transparent",
//   },
// ];

// export default function CaseStudies() {
//   const [active, setActive] = useState(0);
//   const c = cases[active];

//   return (
//     <section id="case-studies" className="bg-white py-28 px-6">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
//           <div>
//             <span className="inline-block bg-amber-400/10 border border-amber-400/20 text-amber-400 text-sm font-medium px-4 py-1.5 rounded-full tracking-wide mb-5">
//               Case studies
//             </span>
//             <h2 className="text-4xl lg:text-5xl font-black text-white">
//               Results That{" "}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
//                 Prove Our Impact
//               </span>
//             </h2>
//           </div>
//           <Link
//             href="#"
//             className="inline-flex items-center gap-2 border border-white/20 hover:border-amber-400/50 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:text-amber-400 text-sm"
//           >
//             See all case studies
//             <svg
//               className="w-4 h-4"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M17 8l4 4m0 0l-4 4m4-4H3"
//               />
//             </svg>
//           </Link>
//         </div>

//         {/* Tabs */}
//         <div className="flex gap-3 mb-10 overflow-x-auto pb-2">
//           {cases.map((cs) => (
//             <button
//               key={cs.id}
//               onClick={() => setActive(cs.id)}
//               className={`flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
//                 active === cs.id
//                   ? "bg-amber-400 text-black border-amber-400"
//                   : "border-white/15 text-gray-400 hover:border-white/30 hover:text-white"
//               }`}
//             >
//               {cs.client}
//             </button>
//           ))}
//         </div>

//         {/* Active case */}
//         <div
//           className={`bg-gradient-to-br ${c.bg} border border-white/8 rounded-3xl overflow-hidden`}
//         >
//           <div className="grid lg:grid-cols-2 gap-0">
//             {/* Left — text */}
//             <div className="p-10 lg:p-14">
//               <span
//                 className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-6 inline-block"
//                 style={{ background: `${c.color}18`, color: c.color }}
//               >
//                 {c.tag}
//               </span>
//               <h3 className="text-white text-2xl lg:text-3xl font-black leading-tight mb-5">
//                 {c.title}
//               </h3>
//               <p className="text-gray-400 leading-relaxed mb-8">{c.desc}</p>
//               <Link
//                 href="#"
//                 className="inline-flex items-center gap-2 font-semibold text-sm transition-all duration-300 hover:gap-3"
//                 style={{ color: c.color }}
//               >
//                 View full case study
//                 <svg
//                   className="w-4 h-4"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M17 8l4 4m0 0l-4 4m4-4H3"
//                   />
//                 </svg>
//               </Link>
//             </div>

//             {/* Right — metrics */}
//             <div
//               className="flex flex-col justify-center gap-6 p-10 lg:p-14 border-t lg:border-t-0 lg:border-l"
//               style={{ borderColor: `${c.color}20` }}
//             >
//               {c.metrics.map((m) => (
//                 <div key={m.label} className="flex items-center gap-5">
//                   <div
//                     className="text-5xl font-black"
//                     style={{ color: c.color }}
//                   >
//                     {m.val}
//                   </div>
//                   <div className="text-gray-400 text-sm">{m.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="text-center mt-10">
//           <Link
//             href="#contact"
//             className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-black font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(251,191,36,0.35)]"
//           >
//             Start Growing Your Business
//             <svg
//               className="w-4 h-4"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2.5}
//                 d="M17 8l4 4m0 0l-4 4m4-4H3"
//               />
//             </svg>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import Link from "next/link";
import { useState } from "react";

const cases = [
  {
    id: 0,
    tag: "SaaS · Lead Generation",
    client: "GrowthIO SaaS",
    title: "From 80 to 450 Monthly Qualified Leads",
    desc: "A mid-market SaaS platform was struggling with high cost-per-lead and low conversion rates. We rebuilt their entire go-to-market strategy — new ICP targeting, landing page overhaul, and a multi-touch nurture sequence.",
    metrics: [
      { val: "250%", label: "Lead volume increase" },
      { val: "-40%", label: "Cost per lead" },
      { val: "$1.2M", label: "Revenue attributed" },
    ],
    color: "#2563eb",
    bg: "#eff6ff",
  },
  {
    id: 1,
    tag: "eCommerce · Paid Ads",
    client: "NexaStore",
    title: "4.8x ROAS in 90 Days with Google Shopping",
    desc: "An eCommerce brand was burning budget on broad campaigns with no segmentation. We restructured their Google Shopping setup, added retargeting layers, and implemented automated bidding strategies.",
    metrics: [
      { val: "4.8x", label: "Return on ad spend" },
      { val: "+180%", label: "Revenue from paid" },
      { val: "-55%", label: "Wasted ad spend" },
    ],
    color: "#d97706",
    bg: "#fffbeb",
  },
  {
    id: 2,
    tag: "Real Estate · SEO",
    client: "PropScale Agency",
    title: "Page 1 Rankings for 120 High-Intent Keywords",
    desc: "A real estate consultancy had zero organic presence in a competitive market. Through technical SEO, content strategy, and local authority building, we put them on page 1 within 6 months.",
    metrics: [
      { val: "120+", label: "Page 1 keywords" },
      { val: "3.2x", label: "Organic traffic growth" },
      { val: "68%", label: "Leads from organic" },
    ],
    color: "#16a34a",
    bg: "#f0fdf4",
  },
];

export default function CaseStudies() {
  const [active, setActive] = useState(0);
  const c = cases[active];

  return (
    <section
      id="case-studies"
      className="bg-gray-50 py-28 px-6 border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <span className="inline-block bg-amber-50 border border-amber-200 text-amber-700 text-sm font-semibold px-4 py-1.5 rounded-full tracking-wide mb-5">
              Case studies
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900">
              Results That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
                Prove Our Impact
              </span>
            </h2>
          </div>
          <Link
            href="#"
            className="inline-flex items-center gap-2 border border-gray-200 hover:border-gray-300 text-gray-600 hover:text-gray-900 font-semibold px-6 py-3 rounded-full transition-all duration-300 text-sm bg-white shadow-sm"
          >
            See all case studies
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>

        <div className="flex gap-3 mb-10 overflow-x-auto pb-2">
          {cases.map((cs) => (
            <button
              key={cs.id}
              onClick={() => setActive(cs.id)}
              className={`flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${active === cs.id ? "bg-amber-500 text-white border-amber-500 shadow-md shadow-amber-100" : "border-gray-200 text-gray-500 hover:border-gray-300 bg-white"}`}
            >
              {cs.client}
            </button>
          ))}
        </div>

        <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm">
          <div className="grid lg:grid-cols-2">
            <div className="p-10 lg:p-14">
              <span
                className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-6 inline-block"
                style={{ background: c.bg, color: c.color }}
              >
                {c.tag}
              </span>
              <h3 className="text-gray-900 text-2xl lg:text-3xl font-black leading-tight mb-5">
                {c.title}
              </h3>
              <p className="text-gray-500 leading-relaxed mb-8">{c.desc}</p>
              <Link
                href="#"
                className="inline-flex items-center gap-2 font-semibold text-sm transition-all duration-300 hover:gap-3"
                style={{ color: c.color }}
              >
                View full case study
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
            <div
              className="flex flex-col justify-center gap-6 p-10 lg:p-14 border-t lg:border-t-0 lg:border-l border-gray-100"
              style={{ background: c.bg }}
            >
              {c.metrics.map((m) => (
                <div key={m.label} className="flex items-center gap-5">
                  <div
                    className="text-5xl font-black"
                    style={{ color: c.color }}
                  >
                    {m.val}
                  </div>
                  <div className="text-gray-600 text-sm font-medium">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-amber-100"
          >
            Start Growing Your Business
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
