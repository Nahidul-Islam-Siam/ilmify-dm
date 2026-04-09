"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import image from "@/assets/case_study/demo_case_study.png";

export default function CaseStudyHero() {
  const heroRef = useRef<HTMLDivElement>(null);

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
      className="relative overflow-hidden bg-[#f7f7ff] px-4"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(#6c63d408 1px, transparent 1px), linear-gradient(90deg, #6c63d408 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div
        data-parallax="0.4"
        className="pointer-events-none absolute -left-24 -top-24 h-[420px] w-[420px] rounded-full bg-[#c4bfff] opacity-25 blur-[90px] transition-transform duration-700 ease-out"
      />
      <div
        data-parallax="0.6"
        className="pointer-events-none absolute -bottom-32 -right-20 h-[480px] w-[480px] rounded-full bg-[#f0a8d8] opacity-20 blur-[100px] transition-transform duration-700 ease-out"
      />
      <div
        data-parallax="0.3"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#a8d4ff] opacity-10 blur-[80px]"
      />

      <div className="relative mx-auto flex min-h-[88vh] w-full max-w-[var(--site-max-width)] items-center justify-center">
        <div
          data-parallax="0.8"
          className="pointer-events-none absolute left-[1%] top-[10%] w-[170px] overflow-hidden rounded-[18px] border border-[#e0dcff] opacity-0 shadow-xl shadow-[#6c63d4]/10 transition-transform duration-700 ease-out animate-[fadeInUp_0.7s_0.2s_ease-out_forwards] sm:w-[210px] lg:w-[240px]"
        >
          <div className="relative aspect-[4/3] bg-gradient-to-br from-[#eceaff] to-[#f8eaff]">
            <div className="absolute bottom-0 left-0 h-12 w-12 rounded-tr-[30px] bg-[#a8a4e8] opacity-70" />
            <div className="absolute bottom-0 right-0 h-12 w-12 rounded-tl-[30px] bg-[#e8a4d0] opacity-70" />
            <div className="absolute inset-3 overflow-hidden rounded-[10px]">
              <Image
                src={image}
                alt="Demo case study preview"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="bg-white px-3 py-2.5">
            <p className="mb-1 text-[9px] font-bold uppercase tracking-widest text-[#6c63d4]">
              Paid Advertising
            </p>
            <p className="line-clamp-2 text-[11px] font-semibold leading-tight text-[#1a1a2e]">
              0 to 63+ Conversions with Google Ads
            </p>
          </div>
        </div>

        <div
          data-parallax="0.5"
          className="pointer-events-none absolute bottom-[10%] left-[5%] w-[140px] overflow-hidden rounded-[16px] border border-[#e0dcff] opacity-0 shadow-lg shadow-[#6c63d4]/10 transition-transform duration-700 ease-out animate-[fadeInUp_0.7s_0.4s_ease-out_forwards] sm:w-[170px] lg:w-[200px]"
        >
          <div className="relative aspect-square bg-gradient-to-br from-[#eceaff] to-[#f8eaff]">
            <div className="absolute inset-3 overflow-hidden rounded-[10px]">
              <Image
                src={image}
                alt="Demo case study preview"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div
          data-parallax="0.7"
          className="pointer-events-none absolute right-[1%] top-[8%] w-[150px] overflow-hidden rounded-[16px] border border-[#e0dcff] opacity-0 shadow-xl shadow-[#6c63d4]/10 transition-transform duration-700 ease-out animate-[fadeInUp_0.7s_0.35s_ease-out_forwards] sm:w-[185px] lg:w-[215px]"
        >
          <div className="relative aspect-[4/3] bg-gradient-to-br from-[#eceaff] to-[#f8eaff]">
            <div className="absolute bottom-0 left-0 h-12 w-12 rounded-tr-[30px] bg-[#a8a4e8] opacity-70" />
            <div className="absolute bottom-0 right-0 h-12 w-12 rounded-tl-[30px] bg-[#e8a4d0] opacity-70" />
            <div className="absolute inset-3 overflow-hidden rounded-[10px]">
              <Image
                src={image}
                alt="Demo case study preview"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="bg-white px-3 py-2.5">
            <p className="mb-1 text-[9px] font-bold uppercase tracking-widest text-[#6c63d4]">
              Local SEO
            </p>
            <p className="line-clamp-2 text-[11px] font-semibold leading-tight text-[#1a1a2e]">
              LNO Boutique +219% Organic Clicks
            </p>
          </div>
        </div>

        <div
          data-parallax="0.55"
          className="pointer-events-none absolute bottom-[12%] right-[4%] w-[130px] overflow-hidden rounded-[16px] border border-[#fce0f0] opacity-0 shadow-lg shadow-[#e8a4d0]/20 transition-transform duration-700 ease-out animate-[fadeInUp_0.7s_0.5s_ease-out_forwards] sm:w-[160px] lg:w-[185px]"
        >
          <div className="relative aspect-square bg-gradient-to-br from-[#f8eaff] to-[#fce8f0]">
            <div className="absolute inset-3 overflow-hidden rounded-[10px]">
              <Image
                src={image}
                alt="LNO Boutique results"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute left-[18%] top-[18%] hidden items-center gap-2 rounded-full border border-[#e0dcff] bg-white px-4 py-2 opacity-0 shadow-md animate-[fadeInUp_0.6s_0.6s_ease-out_forwards] lg:flex">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          <span className="text-[11px] font-semibold text-[#1a1a2e]">
            63+ Conversions
          </span>
        </div>

        <div className="pointer-events-none absolute bottom-[22%] right-[18%] hidden items-center gap-2 rounded-full border border-[#fce0f0] bg-white px-4 py-2 opacity-0 shadow-md animate-[fadeInUp_0.6s_0.75s_ease-out_forwards] lg:flex">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#e8a4d0]" />
          <span className="text-[11px] font-semibold text-[#1a1a2e]">
            +1,218% GMB Clicks
          </span>
        </div>

        <div className="relative z-10 max-w-3xl px-4 text-center">
          <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.22em] text-[#6c63d4] opacity-0 animate-[fadeInUp_0.5s_0.05s_ease-out_forwards]">
            Stay updated with
          </p>

          <h1 className="text-[3.2rem] font-extrabold leading-none tracking-tight text-[#1a1a2e] opacity-0 animate-[fadeInUp_0.6s_0.15s_ease-out_forwards] sm:text-[4.5rem] lg:text-[6rem]">
            OUR{" "}
            <span className="relative inline-block text-[#6c63d4]">
              CASE STUDIES
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

          <p className="mx-auto mt-8 max-w-md text-[0.95rem] leading-relaxed text-[#5a5a6e] opacity-0 animate-[fadeInUp_0.6s_0.3s_ease-out_forwards]">
            Real campaigns. Measurable results. Explore how we&apos;ve helped
            brands grow through strategic digital marketing.
          </p>

          <div className="mt-10 flex items-center justify-center gap-6 opacity-0 animate-[fadeInUp_0.6s_0.45s_ease-out_forwards] sm:gap-10">
            {[
              { value: "2", label: "Case Studies" },
              { value: "63+", label: "Conversions" },
              { value: "219%", label: "Organic Growth" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl font-extrabold text-[#6c63d4] sm:text-3xl">
                  {s.value}
                </p>
                <p className="mt-0.5 text-[11px] font-medium text-[#9898b0]">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#f4f5fb] to-transparent" />
    </section>
  );
}
