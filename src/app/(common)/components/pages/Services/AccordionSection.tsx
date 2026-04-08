"use client";

import { cn } from "@/lib/utils";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

export type AccordionItemData = {
  title: string;
  content: string;
};

type AccordionSectionProps = {
  eyebrow: string;
  title: string;
  description?: string;
  items: AccordionItemData[];
  accent: string;
  softBg?: string;
};

export default function AccordionSection({
  eyebrow,
  title,
  description,
  items,
  accent,
  softBg = "#f7f7fb",
}: AccordionSectionProps) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="site-shell">
        <div className="max-w-[780px]">
          <p
            className="text-[12px] font-bold uppercase tracking-[0.22em]"
            style={{ color: accent }}
          >
            {eyebrow}
          </p>
          <h2 className="mt-4 text-[2.15rem] font-semibold tracking-[-0.06em] text-black sm:text-[3rem]">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 max-w-[760px] text-[16px] leading-8 text-black/72 sm:text-[17px]">
              {description}
            </p>
          ) : null}
        </div>

        <div className="mt-10 space-y-4">
          {items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.title}
                className="overflow-hidden rounded-[24px] border border-black/10 bg-white/88 shadow-[var(--site-shadow)]"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left sm:px-7"
                >
                  <div>
                    <p
                      className="text-[11px] font-bold uppercase tracking-[0.16em]"
                      style={{ color: accent }}
                    >
                      0{index + 1}
                    </p>
                    <h3 className="mt-2 text-[1.2rem] font-semibold tracking-[-0.04em] text-black sm:text-[1.45rem]">
                      {item.title}
                    </h3>
                  </div>

                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/10"
                    style={{ background: isOpen ? softBg : "#ffffff" }}
                  >
                    {isOpen ? (
                      <Minus size={18} style={{ color: accent }} />
                    ) : (
                      <Plus size={18} style={{ color: accent }} />
                    )}
                  </div>
                </button>

                <div
                  className={cn(
                    "grid transition-all duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <div
                      className="mx-6 mb-6 rounded-[20px] px-5 py-5 text-[15px] leading-8 text-black/72 sm:mx-7"
                      style={{ background: softBg }}
                    >
                      {item.content}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
