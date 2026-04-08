// "use client";

// import { useRef } from "react";
// export default function InsightsHero() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   //   const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

//   //   useEffect(() => {
//   //     const handleMouseMove = (e: MouseEvent) => {
//   //       if (!containerRef.current) return;
//   //       const rect = containerRef.current.getBoundingClientRect();
//   //       setMousePosition({
//   //         x: ((e.clientX - rect.left) / rect.width) * 100,
//   //         y: ((e.clientY - rect.top) / rect.height) * 100,
//   //       });
//   //     };
//   //     const container = containerRef.current;
//   //     container?.addEventListener("mousemove", handleMouseMove);
//   //     return () => container?.removeEventListener("mousemove", handleMouseMove);
//   //   }, []);

//   return (
//     <section
//       ref={containerRef}
//       className="relative min-h-[80vh] w-full bg-black overflow-hidden flex items-center justify-center "
//     >
//       {/* Background bubble */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none z-0">
//         {/* <Image
//           src="/assets/hero/home_bubble.webp"
//           alt=""
//           fill
//           className="object-cover opacity-10"
//           priority
//         /> */}
//       </div>

//       {/* Mouse glow */}
//       {/* <div
//         className="fixed pointer-events-none z-10 transition-all duration-150 ease-out"
//         style={{
//           left: `${mousePosition.x}%`,
//           top: `${mousePosition.y}%`,
//           transform: "translate(-50%, -50%)",
//           width: "300px",
//           height: "300px",
//           background: "radial-gradient(circle, rgba(82,244,71,0.08) 0%, transparent 70%)",
//           filter: "blur(60px)",
//         }}
//       /> */}

//       {/* Main content */}
//       <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 max-w-5xl mx-auto">
//         {/* Big heading */}
//         <h1 className="font-black uppercase leading-[1.05] tracking-tight">
//           <span className="block text-site-text ">
//             Stay Updated With
//           </span>
//           <span className="block text-site-accent text-[clamp(32px,8vw,96px)]">
//             Our insights
//           </span>
//         </h1>

//         {/* Subtext */}
//         <p className="mt-5 sm:mt-6 text-[clamp(13px,1.8vw,17px)] text-white/70 font-normal leading-relaxed max-w-[480px] mx-auto">
//           Read our thoughts and insights on UI UX design
//         </p>
//       </div>
//     </section>
//   );
// }

// components/InsightsHero.tsx =======> this is new component for case study
"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import image from "../../../../../assets/case_study/demo_case_study.png";

export default function InsightsHero() {
  const heroRef = useRef<HTMLDivElement>(null);

  // Subtle parallax on mouse move
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const onMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 18;
      const y = (clientY / innerHeight - 0.5) * 10;

      hero.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
        const depth = parseFloat(el.dataset.parallax || "1");
        el.style.transform = `translate(${x * depth}px, ${y * depth}px)`;
      });
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[88vh] flex flex-col items-center justify-center overflow-hidden bg-[#f7f7ff] px-4"
    >
      {/* ── Background grid ── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(#6c63d408 1px, transparent 1px), linear-gradient(90deg, #6c63d408 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Soft gradient blobs ── */}
      <div
        data-parallax="0.4"
        className="pointer-events-none absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-[#c4bfff] opacity-25 blur-[90px] transition-transform duration-700 ease-out"
      />
      <div
        data-parallax="0.6"
        className="pointer-events-none absolute -bottom-32 -right-20 w-[480px] h-[480px] rounded-full bg-[#f0a8d8] opacity-20 blur-[100px] transition-transform duration-700 ease-out"
      />
      <div
        data-parallax="0.3"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[#a8d4ff] opacity-10 blur-[80px]"
      />

      {/* ── Floating case study preview cards ── */}

      {/* Card 1 — top left */}
      <div
        data-parallax="0.8"
        className="pointer-events-none absolute left-[4%] top-[10%] w-[170px] sm:w-[210px] lg:w-[240px] rounded-[18px] overflow-hidden border border-[#e0dcff] shadow-xl shadow-[#6c63d4]/10 opacity-0 animate-[fadeInUp_0.7s_0.2s_ease-out_forwards] transition-transform duration-700 ease-out"
      >
        <div className="relative aspect-[4/3] bg-gradient-to-br from-[#eceaff] to-[#f8eaff]">
          <div className="absolute bottom-0 left-0 w-12 h-12 rounded-tr-[30px] bg-[#a8a4e8] opacity-70" />
          <div className="absolute bottom-0 right-0 w-12 h-12 rounded-tl-[30px] bg-[#e8a4d0] opacity-70" />
          <div className="absolute inset-3 rounded-[10px] overflow-hidden">
            <Image
              src={image}
              alt="Demo case study preview"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="bg-white px-3 py-2.5">
          <p className="text-[9px] font-bold uppercase tracking-widest text-[#6c63d4] mb-1">
            Paid Advertising
          </p>
          <p className="text-[11px] font-semibold text-[#1a1a2e] leading-tight line-clamp-2">
            0 → 63+ Conversions with Google Ads
          </p>
        </div>
      </div>

      {/* Card 2 — bottom left */}
      <div
        data-parallax="0.5"
        className="pointer-events-none absolute left-[8%] bottom-[10%] w-[140px] sm:w-[170px] lg:w-[200px] rounded-[16px] overflow-hidden border border-[#e0dcff] shadow-lg shadow-[#6c63d4]/10 opacity-0 animate-[fadeInUp_0.7s_0.4s_ease-out_forwards] transition-transform duration-700 ease-out"
      >
        <div className="relative aspect-square bg-gradient-to-br from-[#eceaff] to-[#f8eaff]">
          <div className="absolute inset-3 rounded-[10px] overflow-hidden">
            <Image
              src={image}
              alt="Demo case study preview"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Card 3 — top right */}
      <div
        data-parallax="0.7"
        className="pointer-events-none absolute right-[4%] top-[8%] w-[150px] sm:w-[185px] lg:w-[215px] rounded-[16px] overflow-hidden border border-[#e0dcff] shadow-xl shadow-[#6c63d4]/10 opacity-0 animate-[fadeInUp_0.7s_0.35s_ease-out_forwards] transition-transform duration-700 ease-out"
      >
        <div className="relative aspect-[4/3] bg-gradient-to-br from-[#eceaff] to-[#f8eaff]">
          <div className="absolute bottom-0 left-0 w-12 h-12 rounded-tr-[30px] bg-[#a8a4e8] opacity-70" />
          <div className="absolute bottom-0 right-0 w-12 h-12 rounded-tl-[30px] bg-[#e8a4d0] opacity-70" />
          <div className="absolute inset-3 rounded-[10px] overflow-hidden">
            <Image
              src={image}
              alt="Demo case study preview"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="bg-white px-3 py-2.5">
          <p className="text-[9px] font-bold uppercase tracking-widest text-[#6c63d4] mb-1">
            Local SEO
          </p>
          <p className="text-[11px] font-semibold text-[#1a1a2e] leading-tight line-clamp-2">
            LNO Boutique +219% Organic Clicks
          </p>
        </div>
      </div>

      {/* Card 4 — bottom right */}
      <div
        data-parallax="0.55"
        className="pointer-events-none absolute right-[7%] bottom-[12%] w-[130px] sm:w-[160px] lg:w-[185px] rounded-[16px] overflow-hidden border border-[#fce0f0] shadow-lg shadow-[#e8a4d0]/20 opacity-0 animate-[fadeInUp_0.7s_0.5s_ease-out_forwards] transition-transform duration-700 ease-out"
      >
        <div className="relative aspect-square bg-gradient-to-br from-[#f8eaff] to-[#fce8f0]">
          <div className="absolute inset-3 rounded-[10px] overflow-hidden">
            <Image
              src={image}
              alt="LNO Boutique results"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* ── Floating stat pill ── */}
      <div className="pointer-events-none absolute left-[22%] top-[18%] hidden lg:flex items-center gap-2 bg-white border border-[#e0dcff] rounded-full px-4 py-2 shadow-md opacity-0 animate-[fadeInUp_0.6s_0.6s_ease-out_forwards]">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-[11px] font-semibold text-[#1a1a2e]">
          63+ Conversions
        </span>
      </div>

      <div className="pointer-events-none absolute right-[22%] bottom-[22%] hidden lg:flex items-center gap-2 bg-white border border-[#fce0f0] rounded-full px-4 py-2 shadow-md opacity-0 animate-[fadeInUp_0.6s_0.75s_ease-out_forwards]">
        <span className="w-2 h-2 rounded-full bg-[#e8a4d0] animate-pulse" />
        <span className="text-[11px] font-semibold text-[#1a1a2e]">
          +1,218% GMB Clicks
        </span>
      </div>

      {/* ── Centre headline ── */}
      <div className="relative z-10 text-center max-w-3xl px-4">
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#6c63d4] mb-5 opacity-0 animate-[fadeInUp_0.5s_0.05s_ease-out_forwards]">
          Stay updated with
        </p>

        <h1 className="text-[3.2rem] sm:text-[4.5rem] lg:text-[6rem] font-extrabold leading-none tracking-tight text-[#1a1a2e] opacity-0 animate-[fadeInUp_0.6s_0.15s_ease-out_forwards]">
          OUR{" "}
          <span className="text-[#6c63d4] relative inline-block">
            CASE STUDIES
            {/* underline accent */}
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 300 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M2 9C50 3 150 1 298 8"
                stroke="#6c63d4"
                strokeWidth="3.5"
                strokeLinecap="round"
                className="opacity-50"
              />
            </svg>
          </span>
        </h1>

        <p className="mt-8 text-[0.95rem] text-[#5a5a6e] leading-relaxed max-w-md mx-auto opacity-0 animate-[fadeInUp_0.6s_0.3s_ease-out_forwards]">
          {
            "Real campaigns. Measurable results. Explore how we've helped brands grow through strategic digital marketing."
          }
        </p>

        {/* Stats row */}
        <div className="mt-10 flex items-center justify-center gap-6 sm:gap-10 opacity-0 animate-[fadeInUp_0.6s_0.45s_ease-out_forwards]">
          {[
            { value: "2", label: "Case Studies" },
            { value: "63+", label: "Conversions" },
            { value: "219%", label: "Organic Growth" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl sm:text-3xl font-extrabold text-[#6c63d4]">
                {s.value}
              </p>
              <p className="text-[11px] text-[#9898b0] font-medium mt-0.5">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom fade ── */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#f4f5fb] to-transparent" />
    </section>
  );
}
