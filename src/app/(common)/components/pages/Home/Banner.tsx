"use client";

import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import BrandMarquee from "./BrandMarquee";

const toolBadges = [
  { link: "/assets/hero/Meta.png" },
  { link: "/assets/hero/SEO.png" },
  {
    link: "/assets/hero/Google-Ads.png",
  },
  {
    link: "/assets/hero/Email-Marketing.png",
  },
];

export default function HomeShowcase() {
  return (
    <main
      id="home"
      className="overflow-x-hidden bg-transparent text-[var(--site-text)]"
    >
      <section className="relative w-full overflow-hidden px-4 pb-16 pt-16 sm:px-6 lg:px-10">
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
          <div className="relative z-10 flex w-fit flex-col gap-3 rounded-2xl border border-[var(--site-border)] bg-white/92 p-4 shadow-[var(--site-shadow)] sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start sm:items-center gap-3 flex-1">
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full">
                <Image
                  src="/assets/hero/Trusted-by.png"
                  width={25}
                  height={30}
                  alt="trusted"
                  className="h-6 w-6"
                />
              </span>
              <p className="text-[13px] font-semibold leading-relaxed text-[var(--site-text)] sm:text-sm md:text-[15px]">
                Helping startups and brands scale to $10M+ in revenue with
                data-backed marketing
              </p>
            </div>
            <div className="flex items-center  gap-2 flex-shrink-0">
              {toolBadges.map((badge) => (
                <span
                  key={badge.link}
                  className={cn(
                    "group flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-all duration-300 hover:-translate-y-1 hover:scale-110",
                    "bg-white border border-purple-500",
                  )}
                >
                  <Image
                    src={badge.link}
                    alt="badge"
                    width={35}
                    height={30}
                    className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                  />
                </span>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="relative z-10 w-full mt-10 sm:mt-12 md:mt-14 text-left md:text-center">
            <h1 className="overflow-wrap-anywhere break-words text-[clamp(22px,6vw,52px)] font-extrabold uppercase leading-tight tracking-tight text-black">
              Get More Leads, Sales &amp; Growth
            </h1>
            <h1 className="overflow-wrap-anywhere break-words text-[clamp(22px,6vw,52px)] font-extrabold uppercase leading-tight tracking-tight text-black">
              Guaranteed Strategy
            </h1>

            <p className="mt-5 max-w-full break-words text-[clamp(14px,2.5vw,18px)] font-semibold text-[var(--site-text-muted)] md:mx-auto md:mt-6 md:max-w-[680px]">
              We Craft <span className="text-site-accent">Stunning</span>{" "}
              Designs For Businesses Worldwide.
            </p>

            <div className="mt-7 md:mt-10 flex flex-col sm:flex-row items-center justify-start md:justify-center gap-3">
              <Link
                href="#contact"
                className="inline-flex h-12 min-w-[160px] w-full items-center justify-center rounded-full border border-[var(--site-accent)] bg-[var(--site-accent)] px-8 text-[15px] font-semibold text-white transition hover:brightness-95 sm:w-auto"
              >
                Book a Call
              </Link>
              <Link
                href="#work"
                className="inline-flex h-12 min-w-[156px] w-full items-center justify-center gap-2 rounded-full border border-site-accent bg-transparent px-8 text-[15px] font-semibold text-site-accent transition hover:text-white hover:border-[var(--site-accent)] hover:bg-[var(--site-accent)] sm:w-auto"
              >
                Get Free Audit
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

          {/* Tagline */}
          <p className="relative z-10 mt-20 text-center text-[10px] font-bold uppercase tracking-[0.06em] text-black/70 sm:text-xs md:mt-28 lg:mt-36">
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
