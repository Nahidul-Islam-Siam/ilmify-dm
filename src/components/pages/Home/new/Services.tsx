// "use client";
// import Link from "next/link";

// const services = [
//   {
//     icon: (
//       <svg
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         className="w-6 h-6"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={1.8}
//           d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z"
//         />
//       </svg>
//     ),
//     title: "SEO Optimization",
//     desc: "Dominate search rankings with data-backed keyword strategies, technical SEO audits, and authority link building.",
//     color: "from-blue-500/20 to-blue-600/5",
//     accent: "#60a5fa",
//     tag: "Organic Growth",
//   },
//   {
//     icon: (
//       <svg
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         className="w-6 h-6"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={1.8}
//           d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
//         />
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={1.8}
//           d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
//         />
//       </svg>
//     ),
//     title: "Paid Ads (Google / Meta)",
//     desc: "ROI-focused paid campaigns engineered for B2B. We cut wasted spend and maximize qualified pipeline from day one.",
//     color: "from-amber-500/20 to-amber-600/5",
//     accent: "#f59e0b",
//     tag: "Performance",
//   },
//   {
//     icon: (
//       <svg
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         className="w-6 h-6"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={1.8}
//           d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
//         />
//       </svg>
//     ),
//     title: "Social Media Marketing",
//     desc: "Build brand authority on LinkedIn, Twitter, and beyond. We create content that converts decision-makers, not just followers.",
//     color: "from-purple-500/20 to-purple-600/5",
//     accent: "#a78bfa",
//     tag: "Brand Building",
//   },
//   {
//     icon: (
//       <svg
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         className="w-6 h-6"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={1.8}
//           d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
//         />
//       </svg>
//     ),
//     title: "Conversion Rate Optimization",
//     desc: "Turn existing traffic into revenue. A/B testing, landing page redesigns, and funnel optimization that lifts close rates.",
//     color: "from-green-500/20 to-green-600/5",
//     accent: "#34d399",
//     tag: "Revenue Lift",
//   },
//   {
//     icon: (
//       <svg
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         className="w-6 h-6"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={1.8}
//           d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//         />
//       </svg>
//     ),
//     title: "Email Marketing",
//     desc: "Automated nurture sequences that warm cold leads and accelerate deals through every stage of your sales cycle.",
//     color: "from-rose-500/20 to-rose-600/5",
//     accent: "#fb7185",
//     tag: "Lead Nurture",
//   },
//   {
//     icon: (
//       <svg
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         className="w-6 h-6"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={1.8}
//           d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
//         />
//       </svg>
//     ),
//     title: "Analytics & Reporting",
//     desc: "Transparent dashboards showing exactly what's working. Weekly reports, attribution modeling, and real-time pipeline data.",
//     color: "from-cyan-500/20 to-cyan-600/5",
//     accent: "#22d3ee",
//     tag: "Data Intelligence",
//   },
// ];

// export default function Services() {
//   return (
//     <section id="services" className="bg-white py-28 px-6">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
//           <div>
//             <span className="inline-block bg-amber-400/10 border border-amber-400/20 text-amber-400 text-sm font-medium px-4 py-1.5 rounded-full tracking-wide mb-5">
//               What we do
//             </span>
//             <h2 className="text-4xl lg:text-5xl font-black text-white">
//               Digital Marketing
//               <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
//                 Services
//               </span>{" "}
//               That Convert
//             </h2>
//           </div>
//           <p className="text-gray-400 max-w-sm leading-relaxed">
//             Every service built around one metric: revenue generated for your
//             business.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
//           {services.map((s) => (
//             <div
//               key={s.title}
//               className={`group relative bg-gradient-to-br ${s.color} border border-white/8 hover:border-white/20 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1`}
//             >
//               <div
//                 className="inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-6 transition-all duration-300"
//                 style={{ background: `${s.accent}20`, color: s.accent }}
//               >
//                 {s.icon}
//               </div>
//               <span
//                 className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4 inline-block"
//                 style={{ background: `${s.accent}15`, color: s.accent }}
//               >
//                 {s.tag}
//               </span>
//               <h3 className="text-white font-bold text-xl mb-3">{s.title}</h3>
//               <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
//             </div>
//           ))}
//         </div>

//         <div className="text-center">
//           <Link
//             href="#contact"
//             className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-black font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(251,191,36,0.35)]"
//           >
//             See How We Can Grow Your Business
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

const services = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z"
        />
      </svg>
    ),
    title: "SEO Optimization",
    desc: "Dominate search rankings with data-backed keyword strategies, technical SEO audits, and authority link building.",
    color: "#2563eb",
    bg: "#eff6ff",
    tag: "Organic Growth",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
        />
      </svg>
    ),
    title: "Paid Ads (Google / Meta)",
    desc: "ROI-focused paid campaigns engineered for B2B. We cut wasted spend and maximize qualified pipeline from day one.",
    color: "#d97706",
    bg: "#fffbeb",
    tag: "Performance",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
        />
      </svg>
    ),
    title: "Social Media Marketing",
    desc: "Build brand authority on LinkedIn, Twitter, and beyond. We create content that converts decision-makers, not just followers.",
    color: "#7c3aed",
    bg: "#f5f3ff",
    tag: "Brand Building",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
    title: "Conversion Rate Optimization",
    desc: "Turn existing traffic into revenue. A/B testing, landing page redesigns, and funnel optimization that lifts close rates.",
    color: "#16a34a",
    bg: "#f0fdf4",
    tag: "Revenue Lift",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Email Marketing",
    desc: "Automated nurture sequences that warm cold leads and accelerate deals through every stage of your sales cycle.",
    color: "#dc2626",
    bg: "#fef2f2",
    tag: "Lead Nurture",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    title: "Analytics & Reporting",
    desc: "Transparent dashboards showing exactly what's working. Weekly reports, attribution modeling, and real-time pipeline data.",
    color: "#0891b2",
    bg: "#ecfeff",
    tag: "Data Intelligence",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-28 px-6"
      style={{ background: "linear-gradient(160deg,#1e293b 0%,#0f172a 100%)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
          <div>
            <span className="inline-block bg-amber-400/20 border border-amber-400/30 text-amber-400 text-sm font-semibold px-4 py-1.5 rounded-full tracking-wide mb-5">
              What we do
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-white">
              Digital Marketing
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                Services
              </span>{" "}
              That Convert
            </h2>
          </div>
          <p className="text-slate-400 max-w-sm leading-relaxed">
            Every service built around one metric: revenue generated for your
            business.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1"
            >
              <div
                className="inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-5"
                style={{ background: s.bg, color: s.color }}
              >
                {s.icon}
              </div>
              <span
                className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4 inline-block"
                style={{ background: `${s.color}25`, color: s.color }}
              >
                {s.tag}
              </span>
              <h3 className="text-white font-bold text-xl mb-3">{s.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-amber-900/30"
          >
            See How We Can Grow Your Business
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
