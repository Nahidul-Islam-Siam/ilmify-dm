"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle, Repeat, Star, Users } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MissionSectionExact() {
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
      // Text color transitions
      ScrollTrigger.create({
        trigger: section,
        start: "top 80%",
        end: "top 30%",
        scrub: 1.2,
        onUpdate: (self) => {
          const progress = self.progress;
          
          const heading = leftColumn.querySelector(".mission-heading") as HTMLElement;
          if (heading) {
            if (progress < 0.3) {
              heading.style.color = "#6b7280";
            } else {
              const opacity = Math.min((progress - 0.3) / 0.7, 1);
              heading.style.color = `rgba(82, 244, 71, ${opacity})`;
            }
          }
          
          const texts = leftColumn.querySelectorAll(".mission-text") as NodeListOf<HTMLElement>;
          texts.forEach((text) => {
            const opacity = Math.min(progress * 1.5, 1);
            text.style.color = `rgba(255, 255, 255, ${opacity})`;
          });

          // Update counts based on scroll progress
          setCounts({
            projects: Math.floor(targets.projects * progress),
            clients: Math.floor(targets.clients * progress),
            experts: Math.floor(targets.experts * progress),
            stars: parseFloat((targets.stars * progress).toFixed(1)),
          });
        },
      });

      // Stat items animation
      const statItemsElements = rightColumn.querySelectorAll(".stat-item");
      gsap.fromTo(
        statItemsElements,
        {
          opacity: 0,
          x: 30,
        },
        {
          opacity: 1,
          x: 0,
          stagger: 0.1,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 30%",
            scrub: 1,
          },
        },
      );

      // Left column animation
      gsap.fromTo(
        leftColumn,
        {
          opacity: 0,
          x: -30,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            end: "top 40%",
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
      className="py-20 md:py-24 lg:py-28 bg-[#0b0b0b]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Text Content */}
          <div ref={leftColumnRef} className="space-y-4">
            <h2 className="mission-heading text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-gray-500">
              OUR MISSION
            </h2>
            <p className="mission-text text-sm sm:text-base leading-relaxed text-gray-400">
              ZeeFrames strives to be a leading UI UX design agency known for
              innovative solutions that deliver exceptional user experiences and
              drive business growth.
            </p>
            <p className="mission-text text-sm sm:text-base leading-relaxed text-gray-400">
              We blend creativity and user-centered design to craft intuitive,
              standout products and partner with clients to achieve lasting
              impact.
            </p>
          </div>

          {/* Right Column - Stats */}
          <div ref={rightColumnRef} className="grid grid-cols-2 gap-6">
            {statsData.map((stat, index) => (
              <div
                key={index}
                className="stat-item flex items-center gap-4 group cursor-pointer"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#52F447]/10 flex items-center justify-center group-hover:bg-[#52F447]/20 transition-colors duration-300">
                  <stat.icon className="w-5 h-5 text-[#52F447]" />
                </div>
                <div>
                  <div className="flex items-baseline gap-0">
                    <span className="text-2xl sm:text-3xl font-bold text-gray-300">
                      {stat.value}
                    </span>
                    <span className="text-2xl sm:text-3xl font-bold text-[#52F447]">
                      {stat.suffix}
                    </span>
                  </div>
                  <p className="stat-label text-xs sm:text-sm text-gray-500 group-hover:text-gray-300 transition-colors duration-300">
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