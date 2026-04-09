"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const valuesData = [
  {
    number: "01",
    title: "Crafted, Not Copied",
    description:
      "No two problems are the same. Every product deserves a tailored solution, shaped around business goals and user context.",
  },
  {
    number: "02",
    title: "Seamless Collaboration",
    description:
      "We keep communication clear and proactive. Our project managers stay closely aligned with your team across milestones.",
  },
  {
    number: "03",
    title: "Flexible By Design",
    description:
      "As priorities evolve, we adapt quickly without losing quality. We build room for iteration into every phase.",
  },
  {
    number: "04",
    title: "Transparent Pricing",
    description:
      "Clear scope, clear billing, no hidden fees. You always know what you are paying for and why.",
  },
];

export default function OurValueSectionAlt() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const grid = gridRef.current;
    if (!section || !header || !grid) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        header.querySelectorAll(".value-fade"),
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          scrollTrigger: {
            trigger: section,
            start: "top 84%",
          },
        },
      );

      gsap.fromTo(
        grid.querySelectorAll(".value-card"),
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.65,
          scrollTrigger: {
            trigger: grid,
            start: "top 88%",
          },
        },
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-transparent py-20 md:py-28 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[15%] top-[18%] h-[240px] w-[240px] rounded-full bg-purple-800/10 blur-3xl" />
        <div className="absolute right-[10%] bottom-[15%] h-[280px] w-[280px] rounded-full bg-site-accent/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="mb-16 text-center md:mb-20">
          <div className="mb-6 inline-flex items-center gap-3">
            <div className="h-px w-8 bg-purple-800" />
            <span className="value-fade text-xs font-bold uppercase tracking-[0.2em] text-black/55">
              Our Core Values
            </span>
            <div className="h-px w-8 bg-purple-800" />
          </div>

          <h2 className="value-fade mb-6 text-4xl font-bold tracking-tight text-black sm:text-5xl md:text-6xl">
            OUR VALUE
          </h2>
          <p className="value-fade mx-auto max-w-3xl text-base leading-relaxed text-black/68 sm:text-lg md:text-xl">
            Together, we build trust-first partnerships with clear execution. We turn strategy into
            practical outcomes and keep the process honest, collaborative, and efficient.
          </p>
        </div>

        <div ref={gridRef} className="space-y-6">
          {valuesData.map((value) => (
            <div
              key={value.number}
              className="value-card group relative overflow-hidden rounded-2xl border border-black/10 bg-white/85 transition-all duration-500 hover:-translate-y-1 hover:border-purple-800/30 hover:shadow-[var(--site-shadow)]"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-r from-purple-800/0 via-purple-800/5 to-purple-800/10" />

              <div className="relative p-6 md:p-8">
                <div className="flex flex-col gap-6 md:flex-row md:items-center">
                  <div className="flex-shrink-0">
                    <div className="value-number-circle flex h-16 w-16 items-center justify-center rounded-full border border-black/12 transition-all duration-300 group-hover:border-purple-800 group-hover:bg-purple-800/10 md:h-20 md:w-20">
                      <span className="text-xl font-bold text-black/65 transition-colors duration-300 group-hover:text-purple-800 md:text-2xl">
                        {value.number}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="mb-3 text-xl font-semibold text-black transition-colors duration-300 md:text-2xl">
                      {value.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-black/62 transition-colors duration-300 md:text-base">
                      {value.description}
                    </p>
                  </div>

                  <div className="flex-shrink-0 translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    <ArrowRight className="h-6 w-6 text-purple-800" />
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-800/20 to-transparent transition-all duration-500 group-hover:via-purple-800/50" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
