"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle, Repeat, Star, Users } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutTextRevealSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    experts: 0,
    stars: 0,
  });

  useEffect(() => {
    const section = sectionRef.current;
    const leftColumn = leftColumnRef.current;
    const rightColumn = rightColumnRef.current;
    if (!section || !leftColumn || !rightColumn) return;

    const targets = {
      projects: 1200,
      clients: 200,
      experts: 30,
      stars: 4.8,
    };

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 84%",
        end: "top 28%",
        scrub: 1.1,
        onUpdate: (self) => {
          const progress = self.progress;

          const heading = leftColumn.querySelector(
            ".mission-heading",
          ) as HTMLElement | null;
          if (heading) {
            if (progress < 0.25) {
              heading.style.color = "rgba(17,17,17,0.45)";
            } else {
              const opacity = Math.min((progress - 0.25) / 0.75, 1);
              heading.style.color = `rgba(123,31,162,${opacity})`;
            }
          }

          const texts = leftColumn.querySelectorAll(
            ".mission-text",
          ) as NodeListOf<HTMLElement>;
          texts.forEach((text) => {
            const opacity = Math.min(progress * 1.4, 1);
            text.style.color = `rgba(17,17,17,${0.38 + opacity * 0.45})`;
          });

          setCounts({
            projects: Math.floor(targets.projects * progress),
            clients: Math.floor(targets.clients * progress),
            experts: Math.floor(targets.experts * progress),
            stars: parseFloat((targets.stars * progress).toFixed(1)),
          });
        },
      });

      gsap.fromTo(
        leftColumn,
        { opacity: 0, x: -26 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            end: "top 42%",
            scrub: 1,
          },
        },
      );

      gsap.fromTo(
        rightColumn.querySelectorAll(".stat-item"),
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.7,
          scrollTrigger: {
            trigger: section,
            start: "top 84%",
            end: "top 34%",
            scrub: 1,
          },
        },
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const statsData = [
    {
      key: "projects" as const,
      value: counts.projects,
      suffix: "+",
      label: "Successful Projects",
      icon: CheckCircle,
    },
    {
      key: "clients" as const,
      value: counts.clients,
      suffix: "+",
      label: "Repeated Clients",
      icon: Repeat,
    },
    {
      key: "experts" as const,
      value: counts.experts,
      suffix: "+",
      label: "UX Experts",
      icon: Users,
    },
    {
      key: "stars" as const,
      value: counts.stars,
      suffix: "+",
      label: "Stars On Google",
      icon: Star,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-transparent py-20 md:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div ref={leftColumnRef} className="space-y-4">
            <h2 className="mission-heading text-xs font-bold uppercase tracking-[0.2em] text-black/55 sm:text-sm">
              Our Mission
            </h2>
            <p className="mission-text text-sm leading-relaxed text-black/62 sm:text-base">
              Our mission is to help brands grow through strategic digital
              marketing that delivers measurable results. We create data-backed
              campaigns designed to increase visibility, generate qualified
              leads, and turn audience attention into lasting business
              growth.growth.
            </p>
            <p className="mission-text text-sm leading-relaxed text-black/62 sm:text-base">
              We combine creativity, performance analytics, and market insight
              to build scalable marketing systems that help businesses compete
              smarter and grow faster in the digital space.
            </p>
          </div>

          <div ref={rightColumnRef} className="grid grid-cols-2 gap-6">
            {statsData.map((stat) => (
              <div
                key={stat.key}
                className="stat-item group flex items-center gap-4 rounded-2xl border border-black/10 bg-white/84 p-4 shadow-[var(--site-shadow)]"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-purple-800/10 transition-colors duration-300 group-hover:bg-purple-800/20">
                  <stat.icon className="h-5 w-5 text-purple-800" />
                </div>
                <div>
                  <div className="flex items-baseline gap-0">
                    <span className="text-2xl font-bold text-black sm:text-3xl">
                      {stat.value}
                    </span>
                    <span className="text-2xl font-bold text-purple-800 sm:text-3xl">
                      {stat.suffix}
                    </span>
                  </div>
                  <p className="stat-label text-xs text-black/58 transition-colors duration-300 group-hover:text-black/82 sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
