"use client";

import { ArrowUpRight, Plus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const faqItems = [
  {
    question: "How do you structure AI-ready product design work?",
    answer:
      "We start with product goals, user flows, and system logic, then turn that into reusable interface patterns. That means your product looks polished today while staying scalable for future features and AI workflows.",
  },
  {
    question: "What does a typical design engagement include?",
    answer:
      "Most engagements include research, UX strategy, wireframes, UI design, responsive layouts, interaction thinking, and delivery-ready systems. We can also extend into product audits and design support for launches.",
  },
  {
    question: "Can you design for startups as well as growing SaaS products?",
    answer:
      "Yes. We work with early-stage teams validating an idea as well as mature products that need a sharper system, cleaner flows, or stronger conversion-focused interface design.",
  },
  {
    question: "How do you make sure the final UI feels premium and usable?",
    answer:
      "We balance visual polish with structure. Typography, spacing, states, and motion are all designed around clarity, so the experience feels elegant without becoming harder to use.",
  },
  {
    question: "Do you support responsive design and design systems together?",
    answer:
      "Absolutely. Every interface is considered across mobile, tablet, and desktop, and we package decisions into reusable components and rules so the product can grow consistently.",
  },
];

export default function FaqSection() {
  const [openItem, setOpenItem] = useState(0);

  return (
    <section className="bg-[#0b0b0b] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-14 xl:gap-20">
          <div className="max-w-[470px]">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#52F447] sm:text-[12px]">
              FAQs
            </p>

            <h2 className="mt-5 text-[2.4rem] font-semibold leading-[0.94] tracking-[-0.06em] text-white leading-10">
              Questions? We&apos;ve
              <br />
              Got Answers
            </h2>

            <p className="mt-5 max-w-[430px] text-[12px] leading-5 text-white/78 sm:text-[14px]">
              ZeeFrames reduces design complexity and speeds product launches
              with clear UX workflows, scalable visual systems, and thoughtful
              no-code execution support.
            </p>

            <div className="mt-8 flex flex-col gap-5 sm:mt-10 sm:flex-row sm:items-center lg:flex-col lg:items-start xl:flex-row xl:items-center">
              <Link
                href="#contact"
                className="flex items-center justify-center gap-3 rounded-full bg-white text-[15px] font-semibold text-black transition hover:bg-[#52F447]  px-4 py-4"
              >
                Book a free call
                <ArrowUpRight size={18} strokeWidth={2.4} />
              </Link>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/6 text-[#52F447]">
                  <div className="h-3 w-3 rounded-full bg-[#52F447] shadow-[0_0_14px_rgba(82,244,71,0.7)]" />
                </div>
                <div>
                  <div className="text-[15px] font-semibold tracking-[0.16em] text-[#52F447]">
                    5/5 SCORE
                  </div>
                  <p className="mt-1 text-[14px] text-white/65">
                    Rated 5.0 by product teams
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-5">
            {faqItems.map((item, index) => {
              const isOpen = openItem === index;

              return (
                <div
                  key={item.question}
                  className={`overflow-hidden rounded-[22px] border transition-all duration-300 ${
                    isOpen
                      ? "border-[#52F447]/35 bg-[#111111]"
                      : "border-white/10 bg-[#171717]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenItem(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left sm:px-7 sm:py-6"
                  >
                    <span className=" font-semibold leading-7 tracking-[-0.03em] text-white text-sm">
                      {item.question}
                    </span>

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 ${
                        isOpen
                          ? "border-[#52F447]/35 bg-[#52F447] text-black"
                          : "border-white/10 bg-white/6 text-white/72"
                      }`}
                    >
                      <Plus
                        size={18}
                        className={`transition-transform duration-300 ${
                          isOpen ? "rotate-45" : "rotate-0"
                        }`}
                      />
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 leading-8 text-white/72 sm:px-7 sm:pb-6 text-sm ">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
