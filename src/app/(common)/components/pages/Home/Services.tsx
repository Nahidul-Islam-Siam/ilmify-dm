"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { TransitionType } from "@/app/types/TransitionTypes";
import { useTransition } from "@/app/hooks/TransitionContext";

const services = [
  {
    tag: "For Digital Experiences",
    name: "Meta Ads (Facebook/Instagram)",
    border: "border-b border-r",
    image: "/assets/hero/Meta.png",
  },
  {
    tag: "For Startups & Existing Companies",
    name: "Google Ads (PPC)",
    border: "border-b",
    image: "/assets/hero/Google-Ads.png",
  },
  {
    tag: "For Visual Storytellers",
    name: "SEO (Search Engine Optimization)",
    border: "border-b border-r",
    image: "/assets/hero/SEO.png",
  },
  {
    tag: "For Rapid App Builders",
    name: "Social Media Management",
    border: "border-b",
    image: "/assets/hero/Trusted_by.png",
  },
  {
    tag: "For Startups & Founders",
    name: "Funnel & Landing Page Optimization",
    border: "border-r",
    image: "/assets/hero/Google-Ads.png",
  },
  {
    tag: "Dedicated UX UI Team",
    name: "Email Marketing / Automation",
    border: "",
    image: "/assets/hero/Email-Marketing.png",
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

interface ServiceCardProps {
  tag: string;
  name: string;
  border: string;
  image: string;
  transitionType?: TransitionType;
}

function ServiceCard({
  tag,
  name,
  border,
  image,
  transitionType,
}: ServiceCardProps) {
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { applyTransition } = useTransition(); // Use the transition hook

  useEffect(() => {
    if (sectionRef.current) {
      applyTransition(sectionRef.current, transitionType); // Apply transition type dynamically
    }
  }, [applyTransition, transitionType]);
  const handleEnter = () => {
    if (textRef.current) {
      gsap.killTweensOf(textRef.current);
      gsap.fromTo(
        textRef.current,
        { x: "-15px", opacity: 0.5 },
        { x: "0px", opacity: 1, duration: 0.45, ease: "power3.out" },
      );
    }

    if (imageRef.current && window.innerWidth >= 1024) {
      gsap.killTweensOf(imageRef.current);
      gsap.fromTo(
        imageRef.current,
        { x: "-40px", opacity: 0 },
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

    if (imageRef.current && window.innerWidth >= 1024) {
      gsap.killTweensOf(imageRef.current);
      gsap.to(imageRef.current, {
        x: "-40px",
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
      ref={sectionRef}
      className={`group relative flex cursor-pointer items-center overflow-hidden border-[#252525] ${border} ${
        border.includes("border-r") ? "border-r-0 lg:border-r" : ""
      } ${border.includes("border-b") ? "border-b-0 lg:border-b" : ""}`}
      style={{
        padding: "24px 20px",
        minHeight: "120px",
      }}
    >
      <div
        className="absolute left-0 top-0 z-20 h-0 w-[2px] lg:w-[3px] bg-site-accent transition-all group-hover:h-full"
        style={{
          transitionDuration: "420ms",
          transitionTimingFunction: "cubic-bezier(0.65, 0, 0.35, 1)",
        }}
      />

      {/* Dynamic service image - Hidden on mobile/tablet, visible on desktop */}
      <div
        ref={imageRef}
        className="pointer-events-none absolute z-10 hidden overflow-hidden rounded-[20px] border border-[rgba(106,27,154,0.18)] bg-white/70 opacity-0 shadow-[0_20px_45px_-24px_rgba(106,27,154,0.32)] xl:block"
        style={{
          right: "88px",
          top: "50%",
          transform: "translateY(-50%) translateX(-40px)",
          willChange: "transform, opacity",
          width: "154px",
          height: "104px",
        }}
      >
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="154px"
        />
      </div>

      <div
        ref={textRef}
        className="relative z-10 will-change-transform flex-1 pr-12 lg:pr-24"
      >
        <p
          className="mb-1 lg:mb-2 text-[9px] lg:text-[10px] font-bold uppercase text-[#555] transition-colors duration-300 group-hover:text-site-accent"
          style={{ letterSpacing: "0.15em", fontFamily: "Barlow, sans-serif" }}
        >
          {tag}
        </p>
        <h3
          className="leading-tight text-[var(--site-text)] text-lg"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            letterSpacing: "0.02em",
          }}
        >
          {name}
        </h3>
      </div>

      {/* Arrow Button - Consistent sizing across all devices */}
      <div
        className={`absolute z-20 flex items-center justify-center rounded-full border transition-all duration-300 group-hover:rotate-45 group-hover:!bg-[#6A1B9A] group-hover:!border-[#ffff] border-[#333] bg-[#1c1c1c]`}
        style={{
          right: "16px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "36px",
          height: "36px",
        }}
      >
        <ArrowIcon
          className={`transition-colors duration-300 group-hover:stroke-[#fffff] stroke-[#fff] w-3.5 h-3.5`}
        />
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section className="w-full bg-gray-300/30 px-4 sm:px-6 lg:px-8 xl:px-10 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[var(--site-max-width)]">
        <div className="mb-8 sm:mb-12 lg:mb-16 text-center px-2 sm:px-4">
          <p
            className="mb-2 sm:mb-3 lg:mb-4 text-[11px] sm:text-[13px] lg:text-[15px] font-bold uppercase text-site-accent"
            style={{
              letterSpacing: "0.18em",
              fontFamily: "Barlow, sans-serif",
            }}
          >
            We Are Great At
          </p>
          <h2 className="mb-2 sm:mb-3 text-[var(--site-text)] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold px-2">
            Full-Funnel Marketing That Delivers Results
          </h2>
          <p
            className="text-[10px] sm:text-xs lg:text-sm text-gray-500"
            style={{ letterSpacing: "0.08em" }}
          >
         We design and optimize every stage of your customer journey - from awareness to conversion and retention.

          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 border-t border-[#252525]">
          {services.map((service) => (
            <ServiceCard key={service.name} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
