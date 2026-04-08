"use client";

import { useEffect, useRef } from "react";
import { Handshake, Trophy, Users } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const aboutHighlights = [
  {
    title: "Our Team",
    body: "Our UI UX specialists blend product thinking, visual craft, and practical delivery to create design systems that help teams ship faster and smarter.",
    icon: Users,
  },
  {
    title: "Client-Centric Design",
    body: "We map business goals to user behavior, align stakeholders early, and build interfaces that move from idea to measurable impact.",
    icon: Handshake,
  },
  {
    title: "Proof Through Outcomes",
    body: "From usability improvements to conversion growth, our project outcomes are validated through real usage data and client feedback loops.",
    icon: Trophy,
  },
];

export default function AboutPartnerSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const imageLayerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const panel = panelRef.current;
    const imageLayer = imageLayerRef.current;
    if (!section || !panel || !imageLayer) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        panel,
        { y: 140, opacity: 0.8, scale: 0.985 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "top top+=80",
            scrub: 1.1,
          },
        },
      );

      gsap.fromTo(
        imageLayer,
        { y: -48, scale: 1.08 },
        {
          y: 22,
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.15,
          },
        },
      );

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: "top 72%",
        },
      });

      tl.from(".about-partner-eyebrow", {
        y: 16,
        opacity: 0,
        duration: 0.45,
        ease: "power2.out",
      })
        .from(
          ".about-partner-heading",
          {
            y: 28,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.2",
        )
        .from(
          ".about-partner-copy",
          {
            y: 26,
            opacity: 0,
            duration: 0.55,
            ease: "power2.out",
          },
          "-=0.35",
        )
        .from(
          ".about-partner-card",
          {
            y: 34,
            opacity: 0,
            rotateX: -8,
            transformPerspective: 1200,
            stagger: 0.12,
            duration: 0.55,
            ease: "power2.out",
          },
          "-=0.25",
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-transparent text-[var(--site-text)]"
    >
      <div className="sticky top-20 h-[72vh] min-h-[420px] overflow-hidden sm:h-[80vh] lg:h-screen">
        <div ref={imageLayerRef} className="relative h-full w-full">
          <Image
            src="/assets/about/about-group-image.png"
            alt="about-group"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(245,250,240,0.42)_40%,rgba(255,255,255,0.9)_100%)]" />
        </div>
      </div>

      <div className="relative z-10 -mt-16 pb-16 sm:-mt-24 sm:pb-20 lg:pb-24">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div
            ref={panelRef}
            className="relative overflow-hidden rounded-[32px] border border-site-border bg-site-panel p-6 shadow-[var(--site-shadow)] sm:p-8 lg:p-10 xl:p-12"
          >
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-20 top-[-90px] h-[260px] w-[260px] rounded-full bg-[radial-gradient(circle,rgba(123,31,162,0.18)_0%,rgba(123,31,162,0)_72%)] blur-2xl animate-about-float-a" />
              <div className="absolute right-[-80px] top-[26%] h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle,rgba(82,244,71,0.14)_0%,rgba(82,244,71,0)_72%)] blur-2xl animate-about-float-b" />
            </div>

            <div className="relative z-10 grid gap-8 lg:grid-cols-[420px_minmax(0,1fr)] lg:items-start lg:gap-12 xl:grid-cols-[470px_minmax(0,1fr)] xl:gap-16">
              <div className="relative">
                <div className="relative overflow-hidden rounded-[24px] border border-black/10 bg-white">
                  <Image
                    src="/assets/about/about-banner.png"
                    alt="Team collaboration"
                    width={760}
                    height={860}
                    className="h-[320px] w-full object-cover sm:h-[380px] lg:h-[460px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-transparent" />
                </div>

                <div className="absolute -left-5 -top-5 hidden rounded-full border border-purple-800/25 bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-purple-800 shadow-[var(--site-shadow)] md:inline-flex">
                  Strategy + Execution
                </div>
              </div>

              <div>
                <p className="about-partner-eyebrow text-[11px] font-bold uppercase tracking-[0.16em] text-purple-800 sm:text-[12px]">
                  About
                </p>
                <h2 className="about-partner-heading mt-4 text-[2.2rem] font-semibold leading-[0.95] tracking-[-0.05em] text-black">
                  Who We Are as a Design Partner
                </h2>
                <p className="about-partner-copy mt-5 text-[16px] leading-8 text-black/72 sm:text-[17px]">
                  ZeeFrames is a specialized UI UX design agency focused on
                  crafting digital products that look exceptional, feel
                  intuitive, and perform in real business environments. We
                  partner with teams to turn ambition into reliable product
                  outcomes.
                </p>

                <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 md:grid-cols-2 xl:grid-cols-3">
                  {aboutHighlights.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="about-partner-card rounded-[22px] border border-black/10 bg-white/85 p-5 transition duration-300 hover:-translate-y-1 hover:border-purple-800/30 hover:shadow-[var(--site-shadow)] sm:p-6"
                      >
                        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-purple-800/24 bg-purple-800/10 text-purple-800">
                          <Icon size={20} strokeWidth={2} />
                        </div>
                        <h3 className="mt-6 font-semibold leading-[1.06] tracking-[-0.04em] text-black">
                          {item.title}
                        </h3>
                        <p className="mt-4 text-[15px] leading-8 text-black/70">
                          {item.body}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes about-float-a {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(20px, 14px, 0) scale(1.06);
          }
        }
        @keyframes about-float-b {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(-16px, -10px, 0) scale(1.05);
          }
        }
        .animate-about-float-a {
          animation: about-float-a 10.8s ease-in-out infinite;
        }
        .animate-about-float-b {
          animation: about-float-b 12.2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
