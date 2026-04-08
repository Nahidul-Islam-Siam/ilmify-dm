"use client";

import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type SeoCampaignExpectationItem = {
  title: string;
  content: string;
};

type SeoCampaignExpectationsSectionProps = {
  title: string;
  items: SeoCampaignExpectationItem[];
  imageSrc: string;
  imageAlt?: string;
};

export default function SeoCampaignExpectationsSection({
  title,
  items,
  imageSrc,
  imageAlt = "faqimage",
}: SeoCampaignExpectationsSectionProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0, 1]);

  const toggleItem = (index: number) => {
    setOpenIndexes((current) =>
      current.includes(index)
        ? current.filter((item) => item !== index)
        : [...current, index],
    );
  };

  return (
    <section className="relative z-[1] bg-white px-4 py-9 sm:px-6 lg:px-8 lg:py-11">
      <div className="mx-auto w-full max-w-[var(--site-max-width)]">
        <div className="grid items-center gap-6 md:gap-10 lg:grid-cols-[minmax(0,1fr)_500px] lg:gap-7">
          <div className="grid justify-center md:hidden lg:hidden">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={323}
              height={350}
              className="rounded-xl"
            />
          </div>

          <div className="hidden justify-center md:grid lg:hidden">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={277}
              height={300}
              className="rounded-xl"
            />
          </div>

          <div className="bg-white lg:order-1">
            <div className="pt-2 lg:pt-0">
              <h2 className="mb-6 max-w-[560px] text-[24px] font-bold leading-[1.32] text-[#0b3b85] sm:mb-8 sm:text-[28px]">
                {title}
              </h2>

              <div className="text-[#0b3b85]">
                {items.map((item, index) => {
                  const isOpen = openIndexes.includes(index);

                  return (
                    <div key={item.title}>
                      <button
                        type="button"
                        onClick={() => toggleItem(index)}
                        className="flex w-full items-center justify-between hover:cursor-pointer"
                      >
                        <h3 className="mr-[10px] text-left text-[16px] font-semibold text-[#0b3b85] sm:text-[17px]">
                          {item.title}
                        </h3>
                        {isOpen ? (
                          <Minus
                            size={18}
                            className="shrink-0 text-[#0b3b85]"
                            strokeWidth={1.8}
                          />
                        ) : (
                          <Plus
                            size={18}
                            className="shrink-0 text-[#0b3b85]"
                            strokeWidth={1.8}
                          />
                        )}
                      </button>

                      {isOpen ? (
                        <div className="pt-4 text-[14px] leading-[1.45] text-[#323232] lg:pr-[30px]">
                          {item.content}
                        </div>
                      ) : null}

                      <div className="my-4 border-t border-[#0084ff]" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="hidden justify-start lg:flex lg:order-2">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={500}
              height={541}
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
