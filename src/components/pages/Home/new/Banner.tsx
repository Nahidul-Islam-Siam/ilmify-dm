// "use client";
// import Link from "next/link";
// import { useEffect, useRef } from "react";

// export default function Banner() {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     canvas.width = canvas.offsetWidth;
//     canvas.height = canvas.offsetHeight;

//     const particles: {
//       x: number;
//       y: number;
//       vx: number;
//       vy: number;
//       r: number;
//       alpha: number;
//     }[] = [];
//     for (let i = 0; i < 60; i++) {
//       particles.push({
//         x: Math.random() * canvas.width,
//         y: Math.random() * canvas.height,
//         vx: (Math.random() - 0.5) * 0.4,
//         vy: (Math.random() - 0.5) * 0.4,
//         r: Math.random() * 2 + 0.5,
//         alpha: Math.random() * 0.5 + 0.1,
//       });
//     }

//     let animId: number;
//     function draw() {
//       if (!ctx || !canvas) return;
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       particles.forEach((p) => {
//         p.x += p.vx;
//         p.y += p.vy;
//         if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
//         if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
//         ctx.beginPath();
//         ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
//         ctx.fillStyle = `rgba(251,191,36,${p.alpha})`;
//         ctx.fill();
//       });
//       particles.forEach((a, i) => {
//         particles.slice(i + 1).forEach((b) => {
//           const d = Math.hypot(a.x - b.x, a.y - b.y);
//           if (d < 120) {
//             ctx.beginPath();
//             ctx.moveTo(a.x, a.y);
//             ctx.lineTo(b.x, b.y);
//             ctx.strokeStyle = `rgba(251,191,36,${0.08 * (1 - d / 120)})`;
//             ctx.lineWidth = 0.5;
//             ctx.stroke();
//           }
//         });
//       });
//       animId = requestAnimationFrame(draw);
//     }
//     draw();
//     return () => cancelAnimationFrame(animId);
//   }, []);

//   return (
//     <section className="relative min-h-screen bg-white overflow-hidden flex items-center">
//       <canvas
//         ref={canvasRef}
//         className="absolute inset-0 w-full h-full pointer-events-none"
//       />

//       {/* Glow blobs */}
//       <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-amber-400/10 blur-[120px] pointer-events-none" />
//       <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-blue-500/8 blur-[100px] pointer-events-none" />

//       <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 grid lg:grid-cols-2 gap-16 items-center">
//         {/* Left */}
//         <div className="animate-fade-in">
//           <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/20 rounded-full px-4 py-1.5 mb-8">
//             <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
//             <span className="text-amber-400 text-sm font-medium tracking-wide">
//               B2B Growth Partner
//             </span>
//           </div>

//           <h1 className="text-5xl lg:text-7xl font-black text-white leading-[1.05] mb-6">
//             We Help
//             <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
//               B2B Companies
//             </span>
//             <br />
//             <span className="text-white">Scale Revenue</span>
//           </h1>

//           <p className="text-lg text-gray-400 leading-relaxed mb-10 max-w-xl">
//             Data-driven digital marketing strategies designed to scale your
//             pipeline, not just your traffic. We deliver qualified leads and
//             measurable ROI.
//           </p>

//           <div className="flex flex-wrap gap-4 mb-12">
//             <Link
//               href="#contact"
//               className="group relative inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-black font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(251,191,36,0.4)] text-base"
//             >
//               Book a Free Strategy Call
//               <svg
//                 className="w-4 h-4 group-hover:translate-x-1 transition-transform"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2.5}
//                   d="M17 8l4 4m0 0l-4 4m4-4H3"
//                 />
//               </svg>
//             </Link>
//             <Link
//               href="#case-studies"
//               className="inline-flex items-center gap-2 border border-white/20 hover:border-white/50 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:bg-white/5 text-base"
//             >
//               View Case Studies
//             </Link>
//           </div>

//           {/* Trust signals */}
//           <div className="flex flex-wrap gap-6">
//             {[
//               { val: "100+", label: "Companies Trusted Us" },
//               { val: "$10M+", label: "Revenue Generated" },
//               { val: "300%", label: "Average ROI" },
//             ].map((t) => (
//               <div key={t.val} className="flex items-center gap-3">
//                 <div className="text-2xl font-black text-amber-400">
//                   {t.val}
//                 </div>
//                 <div className="text-sm text-gray-500 leading-tight max-w-[80px]">
//                   {t.label}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right — floating cards */}
//         <div className="relative hidden lg:flex items-center justify-center">
//           <div className="relative w-full h-[540px]">
//             {/* Main card */}
//             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl">
//               <div className="text-5xl font-black text-amber-400 mb-1">5x</div>
//               <div className="text-white font-semibold mb-1">
//                 Pipeline Growth
//               </div>
//               <div className="text-gray-400 text-sm">
//                 Average across all clients in Q1
//               </div>
//               <div className="mt-6 flex gap-1">
//                 {[65, 45, 80, 55, 90, 70, 95].map((h, i) => (
//                   <div
//                     key={i}
//                     className="flex-1 bg-amber-400/80 rounded-sm"
//                     style={{ height: `${h * 0.6}px` }}
//                   />
//                 ))}
//               </div>
//             </div>

//             {/* Floating tag 1 */}
//             <div className="absolute top-12 left-4 bg-blue-500/20 border border-blue-500/30 backdrop-blur-sm rounded-2xl px-4 py-3 animate-float-1">
//               <div className="text-white text-sm font-semibold">
//                 Leads Generated
//               </div>
//               <div className="text-blue-400 text-2xl font-black">2M+</div>
//             </div>

//             {/* Floating tag 2 */}
//             <div className="absolute bottom-16 right-2 bg-green-500/20 border border-green-500/30 backdrop-blur-sm rounded-2xl px-4 py-3 animate-float-2">
//               <div className="text-white text-sm font-semibold">
//                 Cost per Lead
//               </div>
//               <div className="text-green-400 text-2xl font-black">-40%</div>
//             </div>

//             {/* Floating tag 3 */}
//             <div className="absolute top-20 right-0 bg-amber-400/15 border border-amber-400/25 backdrop-blur-sm rounded-2xl px-4 py-3 animate-float-3">
//               <div className="flex items-center gap-2">
//                 <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
//                 <div className="text-white text-sm">Active campaigns</div>
//               </div>
//               <div className="text-amber-400 text-xl font-black mt-1">
//                 47 Live
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes float1 {
//           0%,
//           100% {
//             transform: translateY(0);
//           }
//           50% {
//             transform: translateY(-12px);
//           }
//         }
//         @keyframes float2 {
//           0%,
//           100% {
//             transform: translateY(0);
//           }
//           50% {
//             transform: translateY(-16px);
//           }
//         }
//         @keyframes float3 {
//           0%,
//           100% {
//             transform: translateY(0);
//           }
//           50% {
//             transform: translateY(-10px);
//           }
//         }
//         .animate-float-1 {
//           animation: float1 4s ease-in-out infinite;
//         }
//         .animate-float-2 {
//           animation: float2 5s ease-in-out infinite 1s;
//         }
//         .animate-float-3 {
//           animation: float3 3.5s ease-in-out infinite 0.5s;
//         }
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fade-in {
//           animation: fadeIn 0.9s ease forwards;
//         }
//       `}</style>
//     </section>
//   );
// }

"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Banner() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      alpha: number;
    }[] = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.2 + 0.05,
      });
    }
    let animId: number;
    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(217,119,6,${p.alpha})`;
        ctx.fill();
      });
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 120) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(217,119,6,${0.05 * (1 - d / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      animId = requestAnimationFrame(draw);
    }
    draw();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <section
      className="relative min-h-screen overflow-hidden flex items-center"
      style={{
        background:
          "linear-gradient(135deg,#fafafa 0%,#fff7ed 40%,#fffbeb 70%,#f0f9ff 100%)",
      }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-amber-200/40 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-sky-200/30 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 grid lg:grid-cols-2 gap-16 items-center">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-amber-700 text-sm font-semibold tracking-wide">
              B2B Growth Partner
            </span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-[1.05] mb-6">
            We Help
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
              B2B Companies
            </span>
            <br />
            <span className="text-gray-900">Scale Revenue</span>
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed mb-10 max-w-xl">
            Data-driven digital marketing strategies designed to scale your
            pipeline, not just your traffic. We deliver qualified leads and
            measurable ROI.
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <Link
              href="#contact"
              className="group inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-amber-200 text-base"
            >
              Book a Free Strategy Call
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
            <Link
              href="#case-studies"
              className="inline-flex items-center gap-2 border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:bg-white text-base"
            >
              View Case Studies
            </Link>
          </div>
          <div className="flex flex-wrap gap-8">
            {[
              { val: "100+", label: "Companies Trusted" },
              { val: "$10M+", label: "Revenue Generated" },
              { val: "300%", label: "Average ROI" },
            ].map((t) => (
              <div key={t.val} className="flex items-center gap-3">
                <div className="text-2xl font-black text-amber-500">
                  {t.val}
                </div>
                <div className="text-sm text-gray-400 leading-tight max-w-[80px]">
                  {t.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden lg:flex items-center justify-center">
          <div className="relative w-full h-[540px]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 bg-white border border-gray-100 rounded-3xl p-8 shadow-2xl shadow-gray-200/80">
              <div className="text-5xl font-black text-amber-500 mb-1">5x</div>
              <div className="text-gray-900 font-semibold mb-1">
                Pipeline Growth
              </div>
              <div className="text-gray-400 text-sm">
                Average across all clients in Q1
              </div>
              <div className="mt-6 flex gap-1 items-end">
                {[65, 45, 80, 55, 90, 70, 95].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-amber-400 rounded-sm"
                    style={{ height: `${h * 0.55}px` }}
                  />
                ))}
              </div>
            </div>
            <div className="absolute top-12 left-4 bg-white border border-blue-100 shadow-xl shadow-blue-50/50 rounded-2xl px-4 py-3 animate-float-1">
              <div className="text-gray-500 text-sm font-semibold">
                Leads Generated
              </div>
              <div className="text-blue-500 text-2xl font-black">2M+</div>
            </div>
            <div className="absolute bottom-16 right-2 bg-white border border-green-100 shadow-xl shadow-green-50/50 rounded-2xl px-4 py-3 animate-float-2">
              <div className="text-gray-500 text-sm font-semibold">
                Cost per Lead
              </div>
              <div className="text-green-500 text-2xl font-black">-40%</div>
            </div>
            <div className="absolute top-20 right-0 bg-white border border-amber-100 shadow-xl shadow-amber-50/50 rounded-2xl px-4 py-3 animate-float-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <div className="text-gray-500 text-sm">Active campaigns</div>
              </div>
              <div className="text-amber-500 text-xl font-black mt-1">
                47 Live
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float1 {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }
        @keyframes float2 {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-16px);
          }
        }
        @keyframes float3 {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float-1 {
          animation: float1 4s ease-in-out infinite;
        }
        .animate-float-2 {
          animation: float2 5s ease-in-out infinite 1s;
        }
        .animate-float-3 {
          animation: float3 3.5s ease-in-out infinite 0.5s;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.9s ease forwards;
        }
      `}</style>
    </section>
  );
}
