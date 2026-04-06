"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function OurValueSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const grid = gridRef.current;

    if (!section || !header || !grid) return;

    const ctx = gsap.context(() => {
      const masterTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 90%",
          end: "top 20%",
          scrub: 1.5,
        },
      });

      masterTimeline.fromTo(
        header.querySelectorAll(".fade-text"),
        {
          color: "#6b7280",
          opacity: 0.5,
        },
        {
          color: "#ffffff",
          opacity: 1,
          stagger: 0.15,
          duration: 1,
        },
        0,
      );

      const gridItems = grid.querySelectorAll(".grid-item");
      masterTimeline.fromTo(
        gridItems,
        {
          opacity: 0,
          y: 50,
          borderColor: "rgba(255,255,255,0.05)",
        },
        {
          opacity: 1,
          y: 0,
          borderColor: "rgba(82,244,71,0.3)",
          stagger: 0.1,
          duration: 0.8,
        },
        0.3,
      );

      const valueNumbers = grid.querySelectorAll(".value-number-circle");
      masterTimeline.fromTo(
        valueNumbers,
        {
          backgroundColor: "rgba(82,244,71,0)",
          color: "#4b5563",
          borderColor: "rgba(255,255,255,0.1)",
        },
        {
          backgroundColor: "rgba(82,244,71,0.1)",
          color: "#52F447",
          borderColor: "#52F447",
          stagger: 0.1,
          duration: 0.8,
        },
        0.4,
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const valuesData = [
    {
      number: "01",
      title: "Crafted, not copied",
      description:
        "No two problems are exactly alike, that's why we believe every project deserves a specific tailored solution, including yours.",
    },
    {
      number: "02",
      title: "Seamless collaboration",
      description:
        "We ensure all the deliverables are met timely because we love smooth-sailing projects. Our project managers are always ready to discuss and provide updates for you.",
    },
    {
      number: "03",
      title: "Stay flexible",
      description:
        "Just like cats, we are flexible. We remain adaptable to any urgent needs or changes as your project evolves.",
    },
    {
      number: "04",
      title: "Transparent pricing",
      description:
        "We provide a clear breakdown of invoices, so no hidden fees! Whether you do project-based or recurring partnership, you can cancel anytime.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 lg:py-32 bg-[#0b0b0b] overflow-hidden"
    >
      {/* Gradient Bubble Background */}
      <div className="absolute inset-0">
        {/* Primary bubbles */}
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-purple-800/30 to-purple-800/5 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-l from-purple-800/25 to-transparent blur-3xl animate-pulse-delayed" />

        {/* Secondary bubbles */}
        <div className="absolute top-1/2 -left-20 w-[250px] h-[250px] rounded-full bg-gradient-to-br from-purple-800/20 to-purple-800/5 blur-2xl animate-float" />
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full bg-gradient-to-tl from-purple-800/15 to-transparent blur-2xl animate-float-slow" />

        {/* Tertiary bubbles */}
        <div className="absolute top-10 right-1/3 w-[150px] h-[150px] rounded-full bg-gradient-to-tr from-purple-800/20 to-purple-800/10 blur-xl animate-bubble" />
        <div className="absolute bottom-20 left-1/3 w-[180px] h-[180px] rounded-full bg-gradient-to-bl from-purple-800/15 to-transparent blur-xl animate-bubble-delayed" />

        {/* Small accent bubbles */}
        <div className="absolute top-2/3 left-10 w-[100px] h-[100px] rounded-full bg-gradient-to-r from-purple-800/25 to-purple-800/10 blur-lg animate-glow" />
        <div className="absolute top-1/3 right-10 w-[120px] h-[120px] rounded-full bg-gradient-to-l from-purple-800/20 to-transparent blur-lg animate-glow-delayed" />

        {/* Extra small bubbles */}
        <div className="absolute top-[15%] left-[45%] w-[60px] h-[60px] rounded-full bg-purple-800/20 blur-md animate-float" />
        <div className="absolute bottom-[25%] right-[40%] w-[80px] h-[80px] rounded-full bg-purple-800/15 blur-md animate-float-delayed" />
        <div className="absolute top-[75%] left-[60%] w-[50px] h-[50px] rounded-full bg-purple-800/10 blur-md animate-pulse" />
      </div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-transparent to-[#0b0b0b]/50 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-purple-800" />
            <span className="fade-text text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
              Our Core Values
            </span>
            <div className="w-8 h-px bg-purple-800" />
          </div>
          <h2 className="fade-text text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-500 mb-6">
            OUR VALUE
          </h2>
          <p className="fade-text text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Together, we make{" "}
            <span className="text-purple-800 font-bold">perfect partners</span>.
            We offer worry-free partnerships and deliver your vision into
            reality with our top-tier creativity.{" "}
            <span className="italic">No fluff, just the good stuff.</span>
          </p>
        </div>

        {/* Values Grid */}
        <div ref={gridRef} className="space-y-6">
          {valuesData.map((value, index) => (
            <div
              key={index}
              className="grid-item group relative bg-gradient-to-r from-black/60 via-black/40 to-transparent backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-800/30 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-800/0 via-purple-800/0 to-purple-800/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="value-number-circle w-16 h-16 md:w-20 md:h-20 rounded-full border border-white/10 flex items-center justify-center group-hover:border-purple-800 group-hover:shadow-[0_0_30px_rgba(82,244,71,0.2)] transition-all duration-300">
                      <span className="text-xl md:text-2xl font-bold text-gray-400 group-hover:text-purple-800 transition-colors duration-300">
                        {value.number}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-300 group-hover:text-white transition-colors duration-300 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-500 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                      {value.description}
                    </p>
                  </div>

                  <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <ArrowRight className="w-6 h-6 text-purple-800" />
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-800/30 to-transparent group-hover:via-purple-800/60 transition-all duration-500" />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-4 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 hover:border-purple-800/30 transition-all duration-300">
            <p className="text-xs text-gray-400">
              <span className="text-purple-800 animate-pulse">✦</span> Built on
              trust, transparency, and creativity{" "}
              <span className="text-purple-800 animate-pulse">✦</span>
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(20px, -20px);
          }
        }
        @keyframes float-slow {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-15px, 15px);
          }
        }
        @keyframes float-delayed {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(25px, -15px);
          }
        }
        @keyframes pulse-delayed {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.1);
          }
        }
        @keyframes bubble {
          0%,
          100% {
            transform: translateY(0) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-30px) scale(1.1);
            opacity: 0.6;
          }
        }
        @keyframes bubble-delayed {
          0%,
          100% {
            transform: translateY(0) scale(1);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-25px) scale(1.08);
            opacity: 0.5;
          }
        }
        @keyframes glow {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.2);
          }
        }
        @keyframes glow-delayed {
          0%,
          100% {
            opacity: 0.15;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.15);
          }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 9s ease-in-out infinite;
        }
        .animate-pulse-delayed {
          animation: pulse-delayed 5s ease-in-out infinite;
        }
        .animate-bubble {
          animation: bubble 6s ease-in-out infinite;
        }
        .animate-bubble-delayed {
          animation: bubble-delayed 7s ease-in-out infinite;
        }
        .animate-glow {
          animation: glow 4s ease-in-out infinite;
        }
        .animate-glow-delayed {
          animation: glow-delayed 4.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
