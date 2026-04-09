"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

export type GoogleAdsAccordionItemData = {
  title: string;
  content: string;
};

type GoogleAdsAccordionSectionProps = {
  eyebrow: string;
  title: string;
  items: GoogleAdsAccordionItemData[];
  accent: string;
};

export default function GoogleAdsAccordionSection({
  eyebrow,
  title,
  items,
  accent,
}: GoogleAdsAccordionSectionProps) {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      <div className="mx-auto w-full max-w-[var(--site-max-width)]">
        <div className="mx-auto max-w-[1080px] rounded-[24px] bg-[#14294a] px-5 py-7 sm:px-7 lg:px-10 lg:py-8">
          <div className="mx-auto max-w-[700px] text-center">
            <p
              className="text-[11px] font-medium tracking-[0.02em]"
              style={{ color: accent }}
            >
              {eyebrow}
            </p>
            <h2 className="mt-2 text-[1.55rem] font-semibold tracking-[-0.05em] text-white sm:text-[1.95rem] lg:text-[2.1rem]">
              {title}
            </h2>
            <div className="mt-2.5 flex items-center justify-center gap-[8px]">
              <span
                className="h-[6px] w-[6px] rounded-full"
                style={{ backgroundColor: accent }}
              />
              <span
                className="block h-[3px] w-[42px] rounded-full"
                style={{ backgroundColor: accent }}
              />
              <span
                className="h-[6px] w-[6px] rounded-full"
                style={{ backgroundColor: accent }}
              />
            </div>
          </div>

          <div className="mx-auto mt-6 max-w-[980px]">
            {items.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={item.title}
                  className="border-b"
                  style={{ borderColor: accent }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-6 py-3.5 text-left text-white sm:py-4"
                  >
                    <h3 className="pr-6 text-[0.9rem] font-semibold leading-[1.4] tracking-[-0.03em] sm:text-[0.95rem]">
                      {item.title}
                    </h3>

                    <span className="flex h-6 w-6 shrink-0 items-center justify-center text-white/90">
                      {isOpen ? (
                        <Minus size={14} style={{ color: "#ffffff" }} />
                      ) : (
                        <Plus size={14} style={{ color: "#ffffff" }} />
                      )}
                    </span>
                  </button>

                  <div
                    className="grid transition-all duration-300 ease-out"
                    style={{
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                    }}
                  >
                    <div className="overflow-hidden">
                      <div className="pb-3.5 pr-10 text-[12.5px] leading-[1.7] text-white/78 sm:text-[13px]">
                        {item.content}
                      </div>
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
