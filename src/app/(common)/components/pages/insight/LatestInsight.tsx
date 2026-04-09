"use client";

import { caseStudies } from "@/app/data/caseStudies/caseStudies";
import FeaturedInsightCard from "./FeaturedInsight";

export default function LatestInsight() {
  return (
    <section className="bg-[#f4f5fb] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[var(--site-max-width)]">
        <div className="mb-12 animate-[fadeInUp_0.5s_ease-out_forwards]">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#6c63d4]">
            Case Studies
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#1a1a2e] sm:text-4xl">
            Our Work, Our Results
          </h2>
          <p className="mt-3 max-w-xl text-base text-[#5a5a6e]">
            Real campaigns. Real outcomes. Here&apos;s how we&apos;ve helped
            businesses grow through data-driven digital marketing.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {caseStudies.map((study, index) => (
            <div
              key={study.href}
              className={`w-full lg:w-[76%] ${
                index % 2 === 0 ? "lg:ml-0" : "lg:ml-auto"
              }`}
            >
              <FeaturedInsightCard study={study} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
