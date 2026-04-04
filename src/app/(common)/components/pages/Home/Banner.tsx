"use client";


import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import BrandMarquee from "./BrandMarquee";

const toolBadges = [
  { link: "/assets/hero/Meta.png", className: "bg-[#2f2041] text-[#ff61f6]" },
  { link: "/assets/hero/SEO.png", className: "bg-[#25395f] text-[#42a5ff]" },
  { link: "/assets/hero/Google-Ads.png", className: "bg-[#2b2b2b] text-[#ffb800]" },
  { link: "/assets/hero/Email-Marketing.png", className: "bg-[#1f1f1f] text-[#f24e1e]" },
];

export default function HomeShowcase() {
  return (
    <main id="home" className="bg-[#0b0b0b] text-white overflow-x-hidden ">
      <section className="relative w-full overflow-hidden px-4 sm:px-6 lg:px-10 pb-16 pt-16">
        <div className="relative mx-auto flex max-w-[1260px] flex-col items-center">

          {/* Bubble */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[min(500px,70vw)] opacity-45">
              <Image
                src="/assets/hero/home_bubble.webp"
                alt="Background bubble"
                width={720}
                height={720}
                priority
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Trust Badge */}
          <div className="relative z-10 w-fit flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 rounded-2xl border border-white/10 bg-[#101010] p-4 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
            <div className="flex items-start sm:items-center gap-3 flex-1">
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full">
                <Image src="/assets/hero/Trusted-by.png" width={25} height={30} alt="trusted" className="h-6 w-6" />
              </span>
              <p className="text-[13px] sm:text-sm md:text-[15px] font-semibold text-white leading-relaxed">
                Helping startups and brands scale to $10M+ in revenue with data-backed marketing
              </p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              {toolBadges.map((badge) => (
                <span
                  key={badge.link}
                  className={cn(
                    "group flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-all duration-300 hover:-translate-y-1 hover:scale-110",
                    badge.className
                  )}
                >
                  <Image src={badge.link} alt="badge" width={35} height={30} className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                </span>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="relative z-10 w-full mt-10 sm:mt-12 md:mt-14 text-left md:text-center">
            <h1 className="text-[clamp(22px,6vw,52px)] font-extrabold uppercase leading-tight tracking-tight break-words overflow-wrap-anywhere">
              Get More Leads, Sales &amp; Growth
            </h1>
            <h1 className="text-[clamp(22px,6vw,52px)] font-extrabold uppercase leading-tight tracking-tight break-words overflow-wrap-anywhere">
              Guaranteed Strategy
            </h1>

            <p className="mt-5 md:mt-6 max-w-full md:max-w-[680px] md:mx-auto text-[clamp(14px,2.5vw,18px)] font-semibold text-[#ece8e3] break-words">
              We Craft <span className="text-[#52F447]">Stunning</span> Designs For Businesses Worldwide.
            </p>

            <div className="mt-7 md:mt-10 flex flex-col sm:flex-row items-center justify-start md:justify-center gap-3">
              <Link
                href="#contact"
                className="inline-flex h-12 w-full sm:w-auto min-w-[160px] items-center justify-center rounded-full bg-[#f2efea] px-8 text-[15px] font-semibold text-black transition hover:brightness-95"
              >
                Book a Call
              </Link>
              <Link
                href="#work"
                className="inline-flex h-12 w-full sm:w-auto min-w-[156px] items-center justify-center gap-2 rounded-full border border-white bg-transparent px-8 text-[15px] font-semibold text-white transition hover:bg-white hover:text-black"
              >
                Get Free Audit
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

          {/* Tagline */}
          <p className="relative z-10 mt-20 md:mt-28 lg:mt-36 text-center text-[10px] sm:text-xs font-bold uppercase tracking-[0.06em] text-white/85">
            Trusted By Industry Leaders &amp; Fast-Growing Startups
          </p>

          {/* Marquee */}
          <div className="mt-5 w-full">
            <BrandMarquee />
          </div>
        </div>
      </section>
    </main>
  );
}