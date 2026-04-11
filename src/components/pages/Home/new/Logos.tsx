// "use client";

// const logos = [
//   { name: "TechScale", color: "#60a5fa" },
//   { name: "GrowthIO", color: "#34d399" },
//   { name: "NexaB2B", color: "#f59e0b" },
//   { name: "ScaleSaaS", color: "#a78bfa" },
//   { name: "LaunchPad", color: "#f87171" },
//   { name: "CoreMetrics", color: "#38bdf8" },
//   { name: "PipelinePro", color: "#fb923c" },
// ];

// export default function Logos() {
//   return (
//     <section className="bg-white border-y border-white/5 py-10 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6 mb-6">
//         <p className="text-center text-sm text-gray-500 tracking-widest uppercase">
//           Trusted by 100+ growing B2B brands
//         </p>
//       </div>

//       <div className="relative flex gap-12 animate-marquee whitespace-nowrap select-none">
//         {[...logos, ...logos].map((logo, i) => (
//           <div
//             key={i}
//             className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-white/8 bg-white/3"
//           >
//             <div
//               className="w-2.5 h-2.5 rounded-full"
//               style={{ background: logo.color }}
//             />
//             <span className="text-gray-300 font-semibold text-sm tracking-wide">
//               {logo.name}
//             </span>
//           </div>
//         ))}
//       </div>

//       <style jsx>{`
//         @keyframes marquee {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }
//         .animate-marquee {
//           animation: marquee 22s linear infinite;
//         }
//       `}</style>
//     </section>
//   );
// }

"use client";

const logos = [
  { name: "TechScale", color: "#2563eb" },
  { name: "GrowthIO", color: "#16a34a" },
  { name: "NexaB2B", color: "#d97706" },
  { name: "ScaleSaaS", color: "#7c3aed" },
  { name: "LaunchPad", color: "#dc2626" },
  { name: "CoreMetrics", color: "#0891b2" },
  { name: "PipelinePro", color: "#ea580c" },
];

export default function Logos() {
  return (
    <section className="bg-white border-y border-gray-100 shadow-sm py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-6">
        <p className="text-center text-xs text-gray-400 tracking-widest uppercase font-medium">
          Trusted by 100+ growing B2B brands
        </p>
      </div>
      <div className="relative flex gap-10 animate-marquee whitespace-nowrap select-none">
        {[...logos, ...logos].map((logo, i) => (
          <div
            key={i}
            className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full border border-gray-100 bg-gray-50 shadow-sm"
          >
            <div
              className="w-2.5 h-2.5 rounded-full"
              style={{ background: logo.color }}
            />
            <span className="text-gray-600 font-semibold text-sm tracking-wide">
              {logo.name}
            </span>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 22s linear infinite;
        }
      `}</style>
    </section>
  );
}
