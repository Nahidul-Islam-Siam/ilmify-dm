// "use client";

// const steps = [
//   {
//     num: "01",
//     tag: "Discovery",
//     title: "Research & Audit",
//     desc: "We analyze your current state — traffic, conversions, competitors, and market position — to find the fastest path to pipeline growth.",
//     bullets: [
//       "60-min strategy session included",
//       "Full competitor gap analysis",
//       "Tech stack & tracking audit",
//     ],
//     color: "#f59e0b",
//   },
//   {
//     num: "02",
//     tag: "Strategy",
//     title: "Custom Growth Blueprint",
//     desc: "No templates. We build a tailored roadmap with channel mix, budget allocation, and 90-day milestones — all tied to revenue goals.",
//     bullets: [
//       "Channel prioritization matrix",
//       "Budget & ROI projections",
//       "Messaging & ICP definition",
//     ],
//     color: "#60a5fa",
//   },
//   {
//     num: "03",
//     tag: "Execution",
//     title: "Launch & Build",
//     desc: "We move fast. Campaigns live within 2 weeks. Content, ads, landing pages, and automation — all built and deployed by our team.",
//     bullets: [
//       "2-week kickoff timeline",
//       "Landing page & copy creation",
//       "Full campaign architecture",
//     ],
//     color: "#34d399",
//   },
//   {
//     num: "04",
//     tag: "Optimization",
//     title: "Test, Learn, Scale",
//     desc: "Continuous A/B testing, bid optimization, and creative refresh. Every week we improve. Every month we scale what's working.",
//     bullets: [
//       "Weekly performance reviews",
//       "Continuous A/B testing",
//       "Budget reallocation to winners",
//     ],
//     color: "#a78bfa",
//   },
//   {
//     num: "05",
//     tag: "Reporting",
//     title: "Full Transparency",
//     desc: "Live dashboards, weekly email recaps, and monthly strategy calls. You always know exactly what your investment is doing.",
//     bullets: [
//       "Real-time live dashboard",
//       "Weekly report emails",
//       "Monthly strategy call",
//     ],
//     color: "#fb7185",
//   },
// ];

// export default function Process() {
//   return (
//     <section className="bg-white py-28 px-6">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-20">
//           <span className="inline-block bg-amber-400/10 border border-amber-400/20 text-amber-400 text-sm font-medium px-4 py-1.5 rounded-full tracking-wide mb-5">
//             How it works
//           </span>
//           <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
//             Our{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
//               Proven
//             </span>{" "}
//             Process
//           </h2>
//           <p className="text-gray-400 max-w-lg mx-auto">
//             A structured approach that removes guesswork and puts your growth on
//             autopilot.
//           </p>
//         </div>

//         <div className="relative">
//           {/* Vertical line */}
//           <div className="hidden lg:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

//           <div className="flex flex-col gap-12">
//             {steps.map((step, i) => (
//               <div
//                 key={step.num}
//                 className={`relative flex flex-col lg:flex-row items-start lg:items-center gap-8 ${
//                   i % 2 === 1 ? "lg:flex-row-reverse" : ""
//                 }`}
//               >
//                 {/* Card */}
//                 <div className="flex-1 bg-white/3 hover:bg-white/6 border border-white/8 hover:border-white/16 rounded-3xl p-8 transition-all duration-500 group">
//                   <div className="flex items-center gap-3 mb-6">
//                     <span
//                       className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
//                       style={{
//                         background: `${step.color}18`,
//                         color: step.color,
//                       }}
//                     >
//                       {step.tag}
//                     </span>
//                     <span className="text-gray-600 text-sm font-mono">
//                       Step {step.num}
//                     </span>
//                   </div>
//                   <h3 className="text-white text-2xl font-black mb-3">
//                     {step.title}
//                   </h3>
//                   <p className="text-gray-400 leading-relaxed mb-5">
//                     {step.desc}
//                   </p>
//                   <ul className="space-y-2">
//                     {step.bullets.map((b) => (
//                       <li
//                         key={b}
//                         className="flex items-center gap-2 text-sm text-gray-400"
//                       >
//                         <span
//                           className="w-1.5 h-1.5 rounded-full flex-shrink-0"
//                           style={{ background: step.color }}
//                         />
//                         {b}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 {/* Center node */}
//                 <div
//                   className="hidden lg:flex flex-shrink-0 w-14 h-14 rounded-2xl items-center justify-center font-black text-lg z-10"
//                   style={{
//                     background: `${step.color}20`,
//                     color: step.color,
//                     border: `1px solid ${step.color}40`,
//                   }}
//                 >
//                   {step.num}
//                 </div>

//                 {/* Spacer */}
//                 <div className="flex-1 hidden lg:block" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

const steps = [
  {
    num: "01",
    tag: "Discovery",
    title: "Research & Audit",
    desc: "We analyze your current state — traffic, conversions, competitors, and market position — to find the fastest path to pipeline growth.",
    bullets: [
      "60-min strategy session included",
      "Full competitor gap analysis",
      "Tech stack & tracking audit",
    ],
    color: "#d97706",
    bg: "#fffbeb",
  },
  {
    num: "02",
    tag: "Strategy",
    title: "Custom Growth Blueprint",
    desc: "No templates. We build a tailored roadmap with channel mix, budget allocation, and 90-day milestones tied to revenue goals.",
    bullets: [
      "Channel prioritization matrix",
      "Budget & ROI projections",
      "Messaging & ICP definition",
    ],
    color: "#2563eb",
    bg: "#eff6ff",
  },
  {
    num: "03",
    tag: "Execution",
    title: "Launch & Build",
    desc: "We move fast. Campaigns live within 2 weeks. Content, ads, landing pages, and automation — all built and deployed by our team.",
    bullets: [
      "2-week kickoff timeline",
      "Landing page & copy creation",
      "Full campaign architecture",
    ],
    color: "#16a34a",
    bg: "#f0fdf4",
  },
  {
    num: "04",
    tag: "Optimization",
    title: "Test, Learn, Scale",
    desc: "Continuous A/B testing, bid optimization, and creative refresh. Every week we improve. Every month we scale what's working.",
    bullets: [
      "Weekly performance reviews",
      "Continuous A/B testing",
      "Budget reallocation to winners",
    ],
    color: "#7c3aed",
    bg: "#f5f3ff",
  },
  {
    num: "05",
    tag: "Reporting",
    title: "Full Transparency",
    desc: "Live dashboards, weekly email recaps, and monthly strategy calls. You always know exactly what your investment is doing.",
    bullets: [
      "Real-time live dashboard",
      "Weekly report emails",
      "Monthly strategy call",
    ],
    color: "#dc2626",
    bg: "#fef2f2",
  },
];

export default function Process() {
  return (
    <section className="bg-white py-28 px-6 border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="inline-block bg-amber-50 border border-amber-200 text-amber-700 text-sm font-semibold px-4 py-1.5 rounded-full tracking-wide mb-5">
            How it works
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
              Proven
            </span>{" "}
            Process
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            A structured approach that removes guesswork and puts your growth on
            autopilot.
          </p>
        </div>
        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent" />
          <div className="flex flex-col gap-10">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`relative flex flex-col lg:flex-row items-start lg:items-center gap-8 ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className="flex-1 bg-gray-50 hover:bg-white border border-gray-100 hover:border-gray-200 hover:shadow-lg hover:shadow-gray-100 rounded-3xl p-8 transition-all duration-500 group">
                  <div className="flex items-center gap-3 mb-6">
                    <span
                      className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
                      style={{ background: step.bg, color: step.color }}
                    >
                      {step.tag}
                    </span>
                    <span className="text-gray-300 text-sm font-mono">
                      Step {step.num}
                    </span>
                  </div>
                  <h3 className="text-gray-900 text-2xl font-black mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed mb-5">
                    {step.desc}
                  </p>
                  <ul className="space-y-2">
                    {step.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-center gap-2 text-sm text-gray-400"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: step.color }}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className="hidden lg:flex flex-shrink-0 w-14 h-14 rounded-2xl items-center justify-center font-black text-lg z-10 shadow-md"
                  style={{
                    background: step.bg,
                    color: step.color,
                    border: `1px solid ${step.color}30`,
                  }}
                >
                  {step.num}
                </div>
                <div className="flex-1 hidden lg:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
