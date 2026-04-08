"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { insightItems } from "@/app/data/insight/Insight";
import { useTransition } from "@/app/hooks/TransitionContext";
import { TransitionType } from "@/app/types/TransitionTypes";
import Button from "../../button/Button";

export default function CaseStudies() {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);
  const { applyTransition } = useTransition();
  const latestInsights = insightItems.slice(0, 3);

  useEffect(() => {
    if (headerRef.current) {
      applyTransition(headerRef.current, TransitionType.Fade);
    }

    if (gridRef.current) {
      applyTransition(gridRef.current, TransitionType.Scale);
    }

    cardRefs.current.forEach((card, index) => {
      if (!card) return;
      applyTransition(
        card,
        index % 2 === 0 ? TransitionType.ZoomBlur : TransitionType.Scale,
      );
    });
  }, [applyTransition]);

  return (
    <section className="bg-gray-300/30 px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1440px]">
        <div
          ref={headerRef}
          className="flex flex-col gap-8 sm:gap-10 lg:flex-row lg:items-center lg:justify-between"
        >
          <div className="max-w-[620px]">
            <p className="text-site-accent text-[11px] font-bold uppercase tracking-[0.16em] sm:text-[12px]">
              Case Studies
            </p>
            <h2 className="mt-5 text-[2rem] font-semibold leading-10 tracking-[-0.06em] text-black">
              Case studies that inspire
              <br />
              Vision Forward
            </h2>
          </div>

          <Button href="#contact" label="Explore More" />
        </div>

        <div
          ref={gridRef}
          className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {latestInsights.map((item, index) => (
            <article
              key={item.title}
              ref={(node) => {
                cardRefs.current[index] = node;
              }}
              className="group overflow-hidden rounded-[22px] border border-site-border transition duration-300 hover:border-site-accent/30"
            >
              <Link href={`/insights/${item.slug}`}>
                <div className="relative aspect-[1.28] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="px-5 py-5 sm:px-6 sm:py-6">
                  <h3 className="font-semibold leading-6 tracking-[-0.04em] text-black transition-colors duration-300 group-hover:text-site-accent">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-xs text-gray-800/80">
                    {item.excerpt.slice(0, 80)}...
                  </p>
                  <div className="mt-6 text-[14px] font-medium text-gray-800">
                    {item.meta}
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
