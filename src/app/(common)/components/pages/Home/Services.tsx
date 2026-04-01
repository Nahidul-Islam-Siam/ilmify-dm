"use client";

import { useRef } from "react";
import gsap from "gsap";

const services = [
  {
    tag: "For Digital Experiences",
    name: "Meta Ads (Facebook/Instagram)",
    bg: "linear-gradient(130deg,#0c1a38 0%,#0e2148 100%)",
    border: "border-b border-r",
  },
  {
    tag: "For Startups & Existing Companies",
    name: "Google Ads (PPC)",
    bg: "linear-gradient(130deg,#280e00 0%,#3c1600 100%)",
    border: "border-b",
  },
  {
    tag: "For Visual Storytellers",
    name: "SEO (Search Engine Optimization)",
    bg: "linear-gradient(130deg,#001a0e 0%,#003322 100%)",
    border: "border-b border-r",
  },
  {
    tag: "For Rapid App Builders",
    name: "Social Media Management",
    bg: "linear-gradient(130deg,#1a001c 0%,#2e0032 100%)",
    border: "border-b",
  },
  {
    tag: "For Startups & Founders",
    name: "Funnel & Landing Page Optimization",
    bg: "linear-gradient(130deg,#001418 0%,#002230 100%)",
    border: "border-r",
  },
  {
    tag: "Dedicated UX UI Team",
    name: "Email Marketing / Automation",
    bg: "linear-gradient(130deg,#191400 0%,#2c2200 100%)",
    border: "",
    featured: true,
  },
];

const ArrowIcon = ({ className = "" }: { className?: string }) => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const CubeGraphic = () => (
  <svg
    width="150"
    height="150"
    viewBox="0 0 150 150"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="10"
      y="10"
      width="88"
      height="88"
      rx="5"
      stroke="#3A3A3A"
      strokeWidth="1.4"
    />
    <rect
      x="52"
      y="52"
      width="88"
      height="88"
      rx="5"
      stroke="#3A3A3A"
      strokeWidth="1.4"
    />
    <line x1="10" y1="10" x2="52" y2="52" stroke="#2E2E2E" strokeWidth="1.4" />
    <line x1="98" y1="10" x2="140" y2="52" stroke="#2E2E2E" strokeWidth="1.4" />
    <line x1="10" y1="98" x2="52" y2="140" stroke="#2E2E2E" strokeWidth="1.4" />
    <rect
      x="30"
      y="30"
      width="88"
      height="88"
      rx="5"
      stroke="#232323"
      strokeWidth="0.8"
    />
  </svg>
);

function ServiceCard({
  tag,
  name,
  border,
}: (typeof services)[0]) {
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const handleEnter = () => {
    if (textRef.current) {
      gsap.killTweensOf(textRef.current);
      gsap.fromTo(
        textRef.current,
        { x: "-28px", opacity: 0.5 },
        { x: "0px", opacity: 1, duration: 0.45, ease: "power3.out" },
      );
    }

    if (imageRef.current) {
      gsap.killTweensOf(imageRef.current);
      gsap.fromTo(
        imageRef.current,
        { x: "-60px", opacity: 0 },
        { x: "0px", opacity: 1, duration: 0.8, ease: "power3.out" },
      );
    }
  };

  const handleLeave = () => {
    if (textRef.current) {
      gsap.killTweensOf(textRef.current);
      gsap.to(textRef.current, {
        x: "0px",
        opacity: 1,
        duration: 0.25,
        ease: "power2.out",
      });
    }

    if (imageRef.current) {
      gsap.killTweensOf(imageRef.current);
      gsap.to(imageRef.current, {
        x: "-60px",
        opacity: 0,
        duration: 0.5,
        ease: "power3.in",
      });
    }
  };

  return (
    <div
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className={`group relative flex cursor-pointer items-center overflow-hidden border-[#252525]  ${border}`}
      style={{ padding: "44px 40px", minHeight: "160px" }}
    >
      <div className="absolute left-0 top-0 z-20 h-0 w-[3px] bg-[#52F447] transition-all duration-[420ms] ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:h-full" />

      <div
        ref={imageRef}
        className="absolute z-10 pointer-events-none opacity-0"
        style={{
          right: "108px",
          top: "50%",
          transform: "translateY(-50%) translateX(-60px)",
          willChange: "transform, opacity",
        }}
      >
        <CubeGraphic />
      </div>

      <div ref={textRef} className="relative z-10 will-change-transform">
        <p
          className="mb-2 text-[10px] font-bold uppercase text-[#555] transition-colors duration-300 group-hover:text-[#52F447]"
          style={{ letterSpacing: "0.18em", fontFamily: "Barlow, sans-serif" }}
        >
          {tag}
        </p>
        <h3
          className="leading-none text-white"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "38px",
            letterSpacing: "0.03em",
          }}
        >
          {name}
        </h3>
      </div>

      <div
        className={`absolute z-20 flex h-[46px] w-[46px] items-center justify-center rounded-full border transition-all duration-300 group-hover:rotate-45 group-hover:!bg-[#52F447] group-hover:!border-[#52F447]  border-[#333] bg-[#1c1c1c]
        `}
        style={{ right: "36px", top: "50%", transform: "translateY(-50%)" }}
      >
        <ArrowIcon
          className={`transition-colors duration-300 group-hover:stroke-[#0d0d0d] stroke-[#666]
          `}
        />
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section className="w-full bg-[#0d0d0d] px-10 py-20">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-16 text-center">
          <p
            className="mb-4 text-[15px] font-bold uppercase text-[#52F447]"
            style={{
              letterSpacing: "0.22em",
              fontFamily: "Barlow, sans-serif",
            }}
          >
            We Are Great At
          </p>
          <h2 className="mb-3 text-white text-4xl font-bold">
            UI UX Design and Product Experience Services
          </h2>
          <p
            className="text-sm text-gray-500"
            style={{ letterSpacing: "0.1em" }}
          >
            Designs with Exceptional User Experiences
          </p>
        </div>

        <div className="grid grid-cols-2 border-t border-[#252525]">
          {services.map((service) => (
            <ServiceCard key={service.name} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
