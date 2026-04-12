// "use client";
// import { useEffect, useRef, useState } from "react";

// function useCountUp(target: number, duration = 2000, start = false) {
//   const [val, setVal] = useState(0);
//   useEffect(() => {
//     if (!start) return;
//     let raf: number;
//     const startTime = performance.now();
//     function tick(now: number) {
//       const elapsed = now - startTime;
//       const progress = Math.min(elapsed / duration, 1);
//       const ease = 1 - Math.pow(1 - progress, 3);
//       setVal(Math.round(ease * target));
//       if (progress < 1) raf = requestAnimationFrame(tick);
//     }
//     raf = requestAnimationFrame(tick);
//     return () => cancelAnimationFrame(raf);
//   }, [start, target, duration]);
//   return val;
// }

// const metrics = [
//   {
//     value: 300,
//     suffix: "%",
//     label: "Average ROI increase",
//     sub: "Across all active clients",
//   },
//   {
//     value: 10,
//     prefix: "$",
//     suffix: "M+",
//     label: "Revenue generated",
//     sub: "For B2B clients worldwide",
//   },
//   {
//     value: 2,
//     suffix: "M+",
//     label: "Qualified leads delivered",
//     sub: "Ready-to-convert prospects",
//   },
//   {
//     value: 5,
//     suffix: "x",
//     label: "Faster pipeline growth",
//     sub: "Compared to baseline",
//   },
// ];

// function MetricCard({
//   value,
//   suffix,
//   prefix,
//   label,
//   sub,
//   start,
// }: {
//   value: number;
//   suffix: string;
//   prefix?: string;
//   label: string;
//   sub: string;
//   start: boolean;
// }) {
//   const count = useCountUp(value, 2200, start);
//   return (
//     <div className="relative group bg-white/3 hover:bg-white/6 border border-white/8 hover:border-amber-400/30 rounded-3xl p-8 transition-all duration-500 overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-br from-amber-400/0 group-hover:from-amber-400/5 to-transparent transition-all duration-500 rounded-3xl" />
//       <div className="relative">
//         <div className="text-5xl lg:text-6xl font-black text-white mb-2">
//           {prefix}
//           <span className="text-amber-400">{count}</span>
//           {suffix}
//         </div>
//         <div className="text-white font-semibold text-lg mb-1">{label}</div>
//         <div className="text-gray-500 text-sm">{sub}</div>
//       </div>
//     </div>
//   );
// }

// export default function Metrics() {
//   const ref = useRef<HTMLDivElement>(null);
//   const [started, setStarted] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) setStarted(true);
//       },
//       { threshold: 0.3 },
//     );
//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section ref={ref} className="bg-white py-24 px-6">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <span className="inline-block bg-amber-400/10 border border-amber-400/20 text-amber-400 text-sm font-medium px-4 py-1.5 rounded-full tracking-wide mb-5">
//             Real results
//           </span>
//           <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
//             Numbers That{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
//               Prove It
//             </span>
//           </h2>
//           <p className="text-gray-400 max-w-xl mx-auto">
//             Not vanity metrics — actual business growth that impacts your bottom
//             line.
//           </p>
//         </div>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {metrics.map((m) => (
//             <MetricCard key={m.label} {...m} start={started} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, duration = 2000, start = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf: number;
    const startTime = performance.now();
    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setVal(Math.round(ease * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);
  return val;
}

const metrics = [
  {
    value: 300,
    suffix: "%",
    label: "Average ROI Increase",
    sub: "Across all active clients",
    color: "#d97706",
  },
  {
    value: 10,
    prefix: "$",
    suffix: "M+",
    label: "Revenue Generated",
    sub: "For B2B clients worldwide",
    color: "#2563eb",
  },
  {
    value: 2,
    suffix: "M+",
    label: "Qualified Leads Delivered",
    sub: "Ready-to-convert prospects",
    color: "#16a34a",
  },
  {
    value: 5,
    suffix: "x",
    label: "Faster Pipeline Growth",
    sub: "Compared to baseline",
    color: "#7c3aed",
  },
];

function MetricCard({
  value,
  suffix,
  prefix,
  label,
  sub,
  color,
  start,
}: {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  sub: string;
  color: string;
  start: boolean;
}) {
  const count = useCountUp(value, 2200, start);
  return (
    <div className="group bg-white border border-gray-100 hover:border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-1">
      <div className="text-5xl lg:text-6xl font-black mb-2" style={{ color }}>
        {prefix}
        {count}
        {suffix}
      </div>
      <div className="text-gray-800 font-semibold text-lg mb-1">{label}</div>
      <div className="text-gray-400 text-sm">{sub}</div>
    </div>
  );
}

export default function Metrics() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true);
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="bg-gray-50 py-24 px-6 border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-amber-50 border border-amber-200 text-amber-700 text-sm font-semibold px-4 py-1.5 rounded-full tracking-wide mb-5">
            Real results
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Numbers That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
              Prove It
            </span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Not vanity metrics — actual business growth that impacts your bottom
            line.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m) => (
            <MetricCard key={m.label} {...m} start={started} />
          ))}
        </div>
      </div>
    </section>
  );
}
