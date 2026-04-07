"use client";

import Image from "next/image";
import Button from "../../button/Button";

export default function WorkHero() {
  return (
    <section className="relative flex min-h-[80vh] w-full items-center justify-center overflow-hidden bg-transparent px-4 py-16 sm:px-6 sm:py-20 lg:px-8">

      {/* 3. Hero Bubble Image */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2">
        <Image
          src="/assets/hero/home_bubble.webp"
          alt="Hero Background Bubble"
          fill
          className="object-cover opacity-30 mix-blend-multiply"
          priority
        />
      </div>

      {/* 4. Text & Action Content */}
      <div className="relative z-20 mx-auto max-w-5xl px-2 text-center sm:px-4">
        <h1 className="font-black uppercase leading-[1.05] tracking-tight">
          <span className="block text-[clamp(32px,8vw,96px)] text-[var(--site-text)]">
            OUR UI UX &amp; BRANDING
          </span>
          <span className="block text-[clamp(32px,8vw,96px)] text-site-accent">
            CASE STUDIES
          </span>
        </h1>

        <p className="mx-auto mt-5 max-w-[560px] text-[clamp(13px,1.8vw,17px)] font-normal leading-relaxed text-[var(--site-muted)] sm:mt-6">
          No Matter The Industry You&apos;re In, Or The Asset You Need,
          <br className="hidden sm:block" /> We Can Design It For You
        </p>

        <p className="mt-5 text-[13px] font-semibold uppercase tracking-[0.18em] text-site-accent">
          Crafted For Growth-Focused Brands
        </p>

        <div className="mt-7 sm:mt-8 w-full max-w-[220px] mx-auto">
          <Button href="#contact" label="Schedule call" size="text-sm" />
        </div>
      </div>
    </section>
  );
}