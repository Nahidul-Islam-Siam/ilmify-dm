"use client";

import { useState } from "react";
import Button from "../../button/Button";
import { Plus } from "lucide-react";

const faqItems = [
  {
    question: "How do you structure digital marketing work?",
    answer:
      "We follow a proven, step-by-step approach — starting with research and strategy, then moving into asset creation, campaign execution, and continuous optimization.Every decision is backed by data, not assumptions, so your marketing actually performs, not just looks good.",
  },
  {
    question: "What does a typical design engagement include?",
    answer:
      "Most engagements include research, UX strategy, wireframes, UI design, responsive layouts, interaction thinking, and delivery-ready systems. We can also extend into product audits and design support for launches.",
  },
  {
    question: "What does a typical engagement include?",
    answer:
      "It covers everything needed to grow your brand — strategy, funnel planning, ad creatives, landing pages, campaign management, and performance tracking.You’re not just getting execution, you’re getting a complete system built to generate results.",
  },
  {
    question: "Do you work with startups as well as growing brands?",
    answer:
      "Yes. Whether you’re starting from scratch or scaling an existing business, we adapt our approach to your stage.Startups get clarity and structure, while growing brands get optimization and scale",
  },
  {
    question: "How do you ensure campaigns actually perform?",
    answer:
      "We focus on testing and iteration. From creatives to targeting and funnels, everything is continuously refined using real performance data.This allows us to improve results over time and maximize your return on investment.",
  },
  {
    question: "Do you handle both strategy and execution?",
    answer:
      "Yes - we handle everything end-to-end. From planning and setup to launch, optimization, and scaling. This ensures consistency, faster execution, and better results.",
  },
];

export default function FaqSection() {
  const [openItem, setOpenItem] = useState(0);

  return (
    <section className="bg-[#0b0b0b] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="site-shell">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-14 xl:gap-20">
          <div className="max-w-[470px]">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-site-accent sm:text-[12px]">
              FAQs
            </p>

            <h2 className="mt-5 text-[2.4rem] font-semibold leading-[0.94] tracking-[-0.06em] text-black leading-10">
              Questions? We’ve
              <br />
              Got Answers
            </h2>

            <p className="mt-5 max-w-[430px] text-[12px] leading-5 text-white/78 sm:text-[14px] text-black">
              Still unsure if this is the right fit? We break down our process,
              approach, and how we help brands grow - so you can move forward
              with confidence.
            </p>

            <div className="mt-8 flex flex-col gap-2 sm:mt-10 sm:flex-row sm:items-center lg:flex-col lg:items-start xl:flex-row xl:items-center">
              {/* <Link
                href="#contact"
                className="flex items-center justify-center gap-3 rounded-full  text-[15px] font-semibold text-black hover:text-white transition hover:bg-site-accent  px-4 py-4"
              >
                Book a free call
                <ArrowUpRight size={18} strokeWidth={2.4} />
              </Link> */}
              <Button label="Book a free call" href="#contact" size="text-xs" />

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/6 text-site-accent">
                  <div className="h-3 w-3 rounded-full bg-site-accent shadow-[0_0_14px_rgba(82,244,71,0.7)]" />
                </div>
                <div>
                  <div className="text-[15px] font-semibold tracking-[0.16em] text-site-accent">
                    5/5 SCORE
                  </div>
                  <p className="mt-1 text-[14px] text-black">
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
                      ? "border-site-accent/35 bg-[#fff]"
                      : "border-black bg-[#fff]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenItem(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left sm:px-7 sm:py-6"
                  >
                    <span className=" font-semibold leading-7 tracking-[-0.03em] text-black text-sm">
                      {item.question}
                    </span>

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 ${
                        isOpen
                          ? "border-white/10  bg-site-accent text-white"
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
                      <p className="px-5 pb-5 leading-8 text-black sm:px-7 sm:pb-6 text-sm ">
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
