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
    body: "Our team of expert UI UX designers has a proven track record of creating innovative design solutions that transform businesses across various industries and geographies.",
    icon: Users,
  },
  {
    title: "Client-Centric Design",
    body: "At ZeeFrames, our unique design approach focuses on understanding client needs and collaborating to create exceptional, goal-driven digital products.",
    icon: Handshake,
  },
  {
    title: "Testimonials Showcase",
    body: "Do not just take our word for it. See what satisfied clients say. Explore testimonials and case studies showcasing how our design solutions help businesses achieve their goals.",
    icon: Trophy,
  },
];

export default function AboutPartnerSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const imageInnerRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const card = cardRef.current;
    const imageInner = imageInnerRef.current;
    const frame = frameRef.current;
    const svg = svgRef.current;

    if (!section || !card || !imageInner || !frame || !svg) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        card,
        { y: 180 },
        {
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "top top+=80",
            scrub: 1.25,
          },
        },
      );

      gsap.fromTo(
        imageInner,
        { y: -36, scale: 1.08 },
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

      gsap.fromTo(
        frame,
        { y: -24, x: -16 },
        {
          y: 20,
          x: 0,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.15,
          },
        },
      );

      gsap.fromTo(
        svg,
        { y: -20, rotation: -16 },
        {
          y: 18,
          rotation: 10,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.15,
          },
        },
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-[#0b0b0b] text-white">
      <div className="sticky top-20 h-[72vh] min-h-[420px] overflow-hidden sm:h-[80vh] lg:h-screen">
        <div ref={imageInnerRef} className="relative h-full w-full">
          <Image
            src="/assets/about/about-group-image.png"
            alt="about-group"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#0b0b0b]/38 to-transparent" />
        </div>
      </div>

      <div className="relative z-10 -mt-16 pb-16 text-white sm:-mt-24 sm:pb-20  lg:pb-24">
        <div className=" px-4 sm:px-6 lg:px-8">
          <div
            ref={cardRef}
            className="rounded-[30px] border border-white/8 bg-[#0b0b0b]/96 p-6 shadow-[0_28px_80px_rgba(0,0,0,0.42)]  sm:p-8 lg:p-10 xl:p-12"
          >
            <div className="grid gap-8 lg:grid-cols-[420px_minmax(0,1fr)] lg:items-start lg:gap-12 xl:grid-cols-[470px_minmax(0,1fr)] xl:gap-16">
              <div className="relative">
                <div className="relative overflow-hidden rounded-[22px] md:mt-30">
                  <Image
                    src="/assets/about/about-banner.png"
                    alt="Team collaboration"
                    width={760}
                    height={860}
                    className="h-[310px] w-full object-cover sm:h-[360px] "
                  />
                </div>
              </div>

              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-site-accent sm:text-[12px]">
                  About
                </p>
                <h2 className="mt-4  text-[2.2rem] font-semibold leading-[0.95] tracking-[-0.05em] text-white ">
                  Who We Are as a Design Partner
                </h2>
                <p className="mt-5  text-[16px] leading-8 text-white/78 sm:text-[17px]">
                  ZeeFrames is a specialized UI UX design agency with a focus on
                  creating exceptional digital experiences. ZeeFrames is
                  committed to delivering the best user experience possible for
                  your business.
                </p>

                <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 md:grid-cols-2 xl:grid-cols-3">
                  {aboutHighlights.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="rounded-[22px] border border-white/10 bg-[#0d0d0d] p-5 transition duration-300 hover:border-site-accent/30 hover:bg-[#121212] sm:p-6"
                      >
                        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-site-accent/20 bg-site-accent/6 text-site-accent">
                          <Icon size={20} strokeWidth={2} />
                        </div>
                        <h3 className="mt-6 font-semibold leading-[1.06] tracking-[-0.04em] text-white ">
                          {item.title}
                        </h3>
                        <p className="mt-4 text-[15px] leading-8 text-white/72">
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
    </section>
  );
}
