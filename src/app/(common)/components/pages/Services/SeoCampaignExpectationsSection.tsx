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
    <section className="relative z-[1] bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="site-shell">
        <div className="grid items-center gap-10 md:gap-16 lg:grid-cols-[minmax(0,1fr)_595px] lg:gap-10">
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
            <div className="pt-[40px]">
              <h2 className="mb-[30px] max-w-[620px] text-[30px] font-bold leading-[1.45] text-[#0b3b85] sm:mb-[60px] sm:text-[36px]">
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
                        <h3 className="mr-[10px] text-left text-[20px] font-semibold text-[#0b3b85]">
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
                        <div className="pt-[30px] text-[16px] leading-[1.55] text-[#323232] lg:pr-[80px]">
                          {item.content}
                        </div>
                      ) : null}

                      <div className="my-[20px] border-t border-[#0084ff]" />
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
              width={595}
              height={644}
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
