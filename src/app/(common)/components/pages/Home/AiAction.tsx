"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Lottie from "lottie-react";
import Link from "next/link";
import { useTransition } from "@/app/hooks/TransitionContext";
import { TransitionType } from "@/app/types/TransitionTypes";
import marketingAnimation from "@/assets/Lottie/DigitalMarketing.json";

export default function AiAction() {
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const { applyTransition } = useTransition();

  useEffect(() => {
    if (badgeRef.current) {
      applyTransition(badgeRef.current, TransitionType.Scale);
    }

    if (headingRef.current) {
      applyTransition(headingRef.current, TransitionType.Fade);
    }

    if (bodyRef.current) {
      applyTransition(bodyRef.current, TransitionType.Slide);
    }

    if (ctaRef.current) {
      applyTransition(ctaRef.current, TransitionType.Scale);
    }

    if (visualRef.current) {
      applyTransition(visualRef.current, TransitionType.ZoomBlur);
    }
  }, [applyTransition]);

  return (
    <section className="bg-transparent py-4">
      <div className="relative mx-auto w-full max-w-[var(--site-max-width)] overflow-hidden rounded-[30px] border border-site-border bg-site-panel shadow-[var(--site-shadow)]">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="relative grid min-h-[420px] grid-cols-1 lg:min-h-[560px] lg:grid-cols-[1.20fr_0.80fr]">
            <div className="absolute inset-y-0 left-[54%] hidden w-px  lg:block" />

            <div className="relative z-10 flex items-center">
              <div className="max-w-[760px]">
                <div
                  ref={badgeRef}
                  className="mb-5 inline-flex items-center rounded-full border border-purple-800/25 bg-white/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-purple-800 backdrop-blur-sm sm:text-[12px]"
                >
                  AI-Ready Product Systems
                </div>

                <h2
                  ref={headingRef}
                  className="max-w-[760px] text-balance text-[2.5rem] font-semibold leading-[0.96] text-black sm:text-[2.9rem] lg:text-[3.2rem]"
                >
                  Growth Stories That
                  <br />
                  <span className="text-purple-800"> Speak</span> for
                  {" "}Themselves
                </h2>

                <p
                  ref={bodyRef}
                  className="mt-7 max-w-[700px] text-[17px] leading-8 text-black/75 sm:text-[19px] md:text-[20px] lg:mt-8 lg:text-[21px]"
                >
                  Every project is built to perform. Explore how we&apos;ve
                  helped brands turn attention into measurable success.
                </p>

                <div
                  ref={ctaRef}
                  className="mt-8 flex flex-wrap items-center gap-4 sm:mt-10"
                >
                  <Link
                    href="#contact"
                    className="inline-flex h-[54px] items-center justify-center gap-3 rounded-full border border-purple-800 bg-purple-800 px-7 text-[15px] font-semibold text-white shadow-[0_14px_32px_-14px_rgba(123,31,162,0.45)] transition hover:bg-white hover:text-purple-800 sm:h-[58px] sm:px-8 sm:text-[16px]"
                  >
                    See AI in Action
                    <ArrowUpRight size={18} strokeWidth={2.4} />
                  </Link>

                  <div className="text-sm text-black/70 sm:text-[15px]">
                    Smart systems for ambitious products
                  </div>
                </div>
              </div>
            </div>

            <div
              ref={visualRef}
              className="relative z-10 flex items-center justify-center"
            >
              <Lottie animationData={marketingAnimation} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
