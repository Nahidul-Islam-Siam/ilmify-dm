"use client";

import { cn } from "@/lib/utils";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const toolBadges = [
  { label: "F", className: "bg-[#1f1f1f] text-[#f24e1e]" },
  { label: "D", className: "bg-[#2b2b2b] text-[#ffb800]" },
  { label: "Xd", className: "bg-[#2f2041] text-[#ff61f6]" },
  { label: "Fr", className: "bg-[#25395f] text-[#42a5ff]" },
  { label: "WF", className: "bg-[#22365a] text-[#4987ff]" },
  { label: "b", className: "bg-[#2d2d2d] text-[#d7d7d7]" },
];

export default function HomeShowcase() {
  return (
    <main id="home" className="bg-[#0b0b0b] text-white">
      <section className="relative min-h-[720px] overflow-hidden px-4 pb-16 pt-32 md:px-6 md:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_28%,rgba(244,255,0,0.22),transparent_8%),linear-gradient(180deg,#0b0b0b_0%,#0b0b0b_100%)]" />
        <div className="absolute right-[10%] top-[31%] h-24 w-24 rounded-full bg-[#f4ff00]/25 blur-[48px]" />

        <div className="relative mx-auto flex max-w-[1260px] flex-col items-center text-center">
          <div className="relative mt-6 w-full">
            <Image
              src="/assets/hero/home_bubble.webp"
              alt="Background bubble"
              width={720}
              height={720}
              priority
              className="pointer-events-none absolute left-1/2 top-[-30px] z-0 w-[580px] max-w-none -translate-x-1/2 opacity-85 mix-blend-screen md:w-[720px]"
            />

            <div className="relative z-10 mx-auto flex w-fit items-center gap-3 rounded-2xl border border-white/10 bg-[#101010] px-3 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f4ff00] text-black">
                <ShieldCheck size={18} />
              </span>
              <p className="text-sm font-semibold text-white md:text-[15px]">
                Trusted by startups to craft $100M+ designs with
              </p>
              <div className="hidden items-center gap-1.5 sm:flex">
                {toolBadges.map((badge) => (
                  <span
                    key={badge.label}
                    className={cn(
                      "flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold",
                      badge.className,
                    )}
                  >
                    {badge.label}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative z-10 mx-auto mt-14 max-w-[1180px]">
              <div className="relative inline-block">
                <h1 className="text-7xl font-extrabold uppercase">
                  Creative Intelligence 
                  <br />
                  In Every Pixel
                </h1>

                <span className="absolute right-[1px] top-[8px] rotate-[7deg] rounded-xl bg-[#f4ff00] px-3 py-2 text-xs font-black uppercase tracking-[0.08em] text-black shadow-[0_8px_25px_rgba(244,255,0,0.22)] md:right-[-100px] md:top-[14px] md:px-4">
                  No Code
                </span>
              </div>

              <p className="mx-auto mt-8 max-w-[680px] text-lg font-semibold text-[#ece8e3] md:text-[18px]">
                We Craft <span className="text-[#f4ff00]">Stunning</span>{" "}
                Designs For Businesses Worldwide.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="#contact"
                  className="inline-flex h-[52px] min-w-[182px] items-center justify-center rounded-full bg-[#f2efea] px-8 text-[15px] font-semibold text-black transition hover:brightness-95"
                >
                  Schedule Call
                </Link>
                <Link
                  href="#work"
                  className="inline-flex h-[52px] min-w-[156px] items-center justify-center gap-2 rounded-full border border-white bg-transparent px-8 text-[15px] font-semibold text-white transition hover:bg-white hover:text-black"
                >
                  (c) 2025 Work
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>

            <Image
              src="/assets/hero/hero-star.png"
              alt="Decorative star"
              width={96}
              height={96}
              className="pointer-events-none absolute bottom-[-18px] left-[8%] z-10 w-20 md:left-[12%] md:w-24"
            />
          </div>

          <p className="relative z-10 mt-40 text-center text-xs font-bold uppercase tracking-[0.06em] text-white/85 md:mt-44">
            Trusted By Industry Leaders & Fast-Growing Startups
          </p>
        </div>
      </section>
    </main>
  );
}
