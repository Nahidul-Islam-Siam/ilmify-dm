// "use client";

// const reasons = [
//   {
//     title: "Data-Driven Strategy",
//     desc: "Every decision is backed by real data. No guesswork, no vanity metrics — just actions that move the revenue needle.",
//     icon: (
//       <svg
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         className="w-5 h-5"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
//         />
//       </svg>
//     ),
//   },
//   {
//     title: "Dedicated Account Manager",
//     desc: "One point of contact who knows your business inside and out. No account juggling, no junior handoffs.",
//     icon: (
//       <svg
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         className="w-5 h-5"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//         />
//       </svg>
//     ),
//   },
//   {
//     title: "Transparent Reporting",
//     desc: "Weekly reports, live dashboards, full attribution. You'll always know where every dollar went and what it returned.",
//     icon: (
//       <svg
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         className="w-5 h-5"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
//         />
//       </svg>
//     ),
//   },
//   {
//     title: "Proven Growth Frameworks",
//     desc: "We use tested frameworks refined across 100+ B2B campaigns — not experiments on your budget.",
//     icon: (
//       <svg
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         className="w-5 h-5"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M13 10V3L4 14h7v7l9-11h-7z"
//         />
//       </svg>
//     ),
//   },
//   {
//     title: "ROI-Focused Execution",
//     desc: "Every campaign, ad, and email is designed to generate pipeline — we succeed only when you succeed.",
//     icon: (
//       <svg
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         className="w-5 h-5"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//         />
//       </svg>
//     ),
//   },
//   {
//     title: "Flexible Engagements",
//     desc: "Month-to-month or long-term. No lock-ins, no bloated retainers. We earn your business every single month.",
//     icon: (
//       <svg
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         className="w-5 h-5"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
//         />
//       </svg>
//     ),
//   },
// ];

// export default function WhyUs() {
//   return (
//     <section className="bg-white py-28 px-6">
//       <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
//         {/* Left */}
//         <div>
//           <span className="inline-block bg-amber-400/10 border border-amber-400/20 text-amber-400 text-sm font-medium px-4 py-1.5 rounded-full tracking-wide mb-6">
//             Why choose us
//           </span>
//           <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
//             We Think Like{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
//               Your CFO,
//             </span>
//             <br />
//             Not Your Agency
//           </h2>
//           <p className="text-gray-400 leading-relaxed mb-10">
//             Most agencies optimize for clicks and impressions. We optimize for
//             pipeline and closed revenue. That one shift changes everything about
//             how we work.
//           </p>

//           {/* Large stat */}
//           <div className="flex gap-8">
//             <div className="bg-white/4 border border-white/8 rounded-2xl px-6 py-5">
//               <div className="text-3xl font-black text-amber-400">98%</div>
//               <div className="text-gray-400 text-sm mt-1">
//                 Client retention rate
//               </div>
//             </div>
//             <div className="bg-white/4 border border-white/8 rounded-2xl px-6 py-5">
//               <div className="text-3xl font-black text-amber-400">30d</div>
//               <div className="text-gray-400 text-sm mt-1">
//                 Avg time to first results
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right — reason list */}
//         <div className="grid sm:grid-cols-2 gap-4">
//           {reasons.map((r) => (
//             <div
//               key={r.title}
//               className="bg-white/3 hover:bg-white/6 border border-white/8 hover:border-amber-400/20 rounded-2xl p-6 transition-all duration-400 group"
//             >
//               <div className="w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center mb-4 group-hover:bg-amber-400/20 transition-colors">
//                 {r.icon}
//               </div>
//               <h3 className="text-white font-bold text-base mb-2">{r.title}</h3>
//               <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

const reasons = [
  {
    title: "Data-Driven Strategy",
    desc: "Every decision backed by real data. No guesswork — only actions that move the revenue needle.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    color: "#d97706",
    bg: "#fffbeb",
  },
  {
    title: "Dedicated Account Manager",
    desc: "One point of contact who knows your business. No juggling, no junior handoffs.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
    color: "#2563eb",
    bg: "#eff6ff",
  },
  {
    title: "Transparent Reporting",
    desc: "Weekly reports, live dashboards, full attribution. Every dollar tracked.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    color: "#16a34a",
    bg: "#f0fdf4",
  },
  {
    title: "Proven Growth Frameworks",
    desc: "Refined across 100+ B2B campaigns — not experiments on your budget.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    color: "#7c3aed",
    bg: "#f5f3ff",
  },
  {
    title: "ROI-Focused Execution",
    desc: "Every campaign designed to generate pipeline. We succeed only when you succeed.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    color: "#dc2626",
    bg: "#fef2f2",
  },
  {
    title: "Flexible Engagements",
    desc: "Month-to-month or long-term. No lock-ins. We earn your business every month.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    color: "#0891b2",
    bg: "#ecfeff",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-gray-50 py-28 px-6 border-b border-gray-100">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="inline-block bg-amber-50 border border-amber-200 text-amber-700 text-sm font-semibold px-4 py-1.5 rounded-full tracking-wide mb-6">
            Why choose us
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-6">
            We Think Like{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
              Your CFO,
            </span>
            <br />
            Not Your Agency
          </h2>
          <p className="text-gray-500 leading-relaxed mb-10">
            Most agencies optimize for clicks and impressions. We optimize for
            pipeline and closed revenue. That one shift changes everything.
          </p>
          <div className="flex gap-5">
            <div className="bg-white border border-gray-100 shadow-sm rounded-2xl px-6 py-5">
              <div className="text-3xl font-black text-amber-500">98%</div>
              <div className="text-gray-500 text-sm mt-1">
                Client retention rate
              </div>
            </div>
            <div className="bg-white border border-gray-100 shadow-sm rounded-2xl px-6 py-5">
              <div className="text-3xl font-black text-amber-500">30d</div>
              <div className="text-gray-500 text-sm mt-1">
                Avg time to first results
              </div>
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="bg-white border border-gray-100 hover:border-gray-200 hover:shadow-md rounded-2xl p-6 transition-all duration-300 group"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-colors"
                style={{ background: r.bg, color: r.color }}
              >
                {r.icon}
              </div>
              <h3 className="text-gray-900 font-bold text-base mb-2">
                {r.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
