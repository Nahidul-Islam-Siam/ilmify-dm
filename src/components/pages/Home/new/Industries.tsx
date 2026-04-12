// "use client";

// const industries = [
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
//           d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//         />
//       </svg>
//     ),
//     title: "SaaS Companies",
//     desc: "Demo bookings, MQL growth, product-led acquisition, and expansion revenue.",
//     color: "#60a5fa",
//     stat: "250% avg lead growth",
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
//           d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
//         />
//       </svg>
//     ),
//     title: "eCommerce Brands",
//     desc: "Paid ads, SEO, email retention, and conversion optimization for B2B stores.",
//     color: "#f59e0b",
//     stat: "4.8x avg ROAS",
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
//           d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
//         />
//       </svg>
//     ),
//     title: "Real Estate Firms",
//     desc: "Local SEO, lead forms, market-specific content, and retargeting for listings.",
//     color: "#34d399",
//     stat: "3x organic pipeline",
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
//           d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//         />
//       </svg>
//     ),
//     title: "Agencies & Consultants",
//     desc: "Thought leadership, LinkedIn authority, and inbound pipeline for service businesses.",
//     color: "#a78bfa",
//     stat: "180% inbound growth",
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
//           d="M13 10V3L4 14h7v7l9-11h-7z"
//         />
//       </svg>
//     ),
//     title: "Startups & SMEs",
//     desc: "Go-to-market strategy, early traction, and scalable growth systems from day one.",
//     color: "#fb7185",
//     stat: "5x faster traction",
//   },
// ];

// export default function Industries() {
//   return (
//     <section className="bg-white y-28 px-6">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <span className="inline-block bg-amber-400/10 border border-amber-400/20 text-amber-400 text-sm font-medium px-4 py-1.5 rounded-full tracking-wide mb-5">
//             Who we work with
//           </span>
//           <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
//             Built for{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
//               B2B Growth
//             </span>
//           </h2>
//           <p className="text-gray-400 max-w-lg mx-auto">
//             We specialize in industries where long sales cycles, relationship
//             trust, and lead quality actually matter.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {industries.map((ind, i) => (
//             <div
//               key={ind.title}
//               className={`group relative bg-white/3 hover:bg-white/6 border border-white/8 hover:border-white/20 rounded-3xl p-8 transition-all duration-500 cursor-default ${
//                 i === industries.length - 1 && industries.length % 3 !== 0
//                   ? "lg:col-span-1"
//                   : ""
//               }`}
//             >
//               <div
//                 className="inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-6 transition-all duration-300 group-hover:scale-110"
//                 style={{ background: `${ind.color}18`, color: ind.color }}
//               >
//                 {ind.icon}
//               </div>
//               <h3 className="text-white font-bold text-xl mb-3">{ind.title}</h3>
//               <p className="text-gray-400 text-sm leading-relaxed mb-5">
//                 {ind.desc}
//               </p>
//               <div
//                 className="text-xs font-bold tracking-wide px-3 py-1.5 rounded-full inline-flex items-center gap-1.5"
//                 style={{ background: `${ind.color}15`, color: ind.color }}
//               >
//                 <span
//                   className="w-1.5 h-1.5 rounded-full"
//                   style={{ background: ind.color }}
//                 />
//                 {ind.stat}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

const industries = [
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
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "SaaS Companies",
    desc: "Demo bookings, MQL growth, product-led acquisition, and expansion revenue.",
    color: "#2563eb",
    bg: "#eff6ff",
    stat: "250% avg lead growth",
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
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        />
      </svg>
    ),
    title: "eCommerce Brands",
    desc: "Paid ads, SEO, email retention, and conversion optimization for B2B stores.",
    color: "#d97706",
    bg: "#fffbeb",
    stat: "4.8x avg ROAS",
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
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
    title: "Real Estate Firms",
    desc: "Local SEO, lead forms, market-specific content, and retargeting for listings.",
    color: "#16a34a",
    bg: "#f0fdf4",
    stat: "3x organic pipeline",
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
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Agencies & Consultants",
    desc: "Thought leadership, LinkedIn authority, and inbound pipeline for service businesses.",
    color: "#7c3aed",
    bg: "#f5f3ff",
    stat: "180% inbound growth",
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
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: "Startups & SMEs",
    desc: "Go-to-market strategy, early traction, and scalable growth systems from day one.",
    color: "#dc2626",
    bg: "#fef2f2",
    stat: "5x faster traction",
  },
];

export default function Industries() {
  return (
    <section className="bg-white py-28 px-6 border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-amber-50 border border-amber-200 text-amber-700 text-sm font-semibold px-4 py-1.5 rounded-full tracking-wide mb-5">
            Who we work with
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Built for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
              B2B Growth
            </span>
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            We specialize in industries where long sales cycles, relationship
            trust, and lead quality actually matter.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind) => (
            <div
              key={ind.title}
              className="group bg-gray-50 hover:bg-white border border-gray-100 hover:border-gray-200 hover:shadow-lg hover:shadow-gray-100 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1 cursor-default"
            >
              <div
                className="inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-6 transition-all duration-300 group-hover:scale-110"
                style={{ background: ind.bg, color: ind.color }}
              >
                {ind.icon}
              </div>
              <h3 className="text-gray-900 font-bold text-xl mb-3">
                {ind.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                {ind.desc}
              </p>
              <div
                className="text-xs font-bold tracking-wide px-3 py-1.5 rounded-full inline-flex items-center gap-1.5"
                style={{ background: ind.bg, color: ind.color }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: ind.color }}
                />
                {ind.stat}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
