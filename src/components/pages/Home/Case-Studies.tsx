"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import { useTransition } from "@/app/hooks/TransitionContext";
import { TransitionType } from "@/app/types/TransitionTypes";
import Button from "../../button/Button";
import { caseStudies } from "@/app/data/caseStudies/caseStudies";

export default function CaseStudies() {
  const headerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);
  const { applyTransition } = useTransition();
  const latestCaseStudies = caseStudies.slice(0, 4);

  useEffect(() => {
    if (headerRef.current) {
      applyTransition(headerRef.current, TransitionType.Slide);
    }

    cardRefs.current.forEach((card) => {
      if (!card) return;
      applyTransition(card, TransitionType.Flip);
    });
  }, [applyTransition]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="overflow-x-clip bg-gray-300/30 px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <style>{`
        .slide-card {
          opacity: 0;
          transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .slide-from-left  { transform: translateX(-80px); }
        .slide-from-right { transform: translateX(80px); }
        .slide-card.in-view {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>

      <div className="mx-auto w-full max-w-[var(--site-max-width)]">
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

        <div className="mt-10 flex flex-col gap-5 sm:mt-12 sm:gap-6">
          {latestCaseStudies.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <article
                key={item.title}
                ref={(node) => {
                  cardRefs.current[index] = node;
                }}
                className={`
                  slide-card group overflow-hidden rounded-[22px] border border-site-border
                  transition-colors duration-300 hover:border-site-accent/30
                  w-full md:w-1/2
                  ${isLeft ? "slide-from-left self-start" : "slide-from-right self-end"}
                `}
                style={{ transitionDelay: `${index * 0.12}s` }}
              >
                <Link href={item.href}>
                  <div className="relative aspect-[1.5] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 767px) 100vw, 50vw"
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
