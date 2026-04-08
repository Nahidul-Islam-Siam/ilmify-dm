"use client";

import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

export type SeoShowcaseItem = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  imageEyebrow?: string;
  imageCaption?: string;
};

type SeoServicesShowcaseProps = {
  id?: string;
  title: string;
  items: SeoShowcaseItem[];
  accent?: string;
};

export default function SeoServicesShowcase({
  id,
  title,
  items,
  accent = "#1683f6",
}: SeoServicesShowcaseProps) {
  const itemIds = useMemo(() => items.map((item) => item.id), [items]);
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && itemIds.includes(hash)) {
        setActiveId(hash);
      }
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);

    return () => window.removeEventListener("hashchange", syncFromHash);
  }, [itemIds]);

  const activeItem =
    items.find((item) => item.id === activeId) ?? items[0] ?? null;

  const handleSelect = (itemId: string) => {
    setActiveId(itemId);

    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", `#${itemId}`);
    }
  };

  if (!activeItem) return null;

  return (
    <section
      id={id}
      className="px-4 pb-4 pt-10 sm:px-6 lg:px-8 lg:pb-5 lg:pt-12"
    >
      <div className="mx-auto w-full max-w-[var(--site-max-width)]">
        <div className="mx-auto max-w-[780px] text-center">
          <h2 className="text-[1.8rem] font-semibold tracking-[-0.06em] text-[#0b3b85] sm:text-[2.35rem]">
            {title}
          </h2>
          <div className="mt-3 flex items-center justify-center gap-3">
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ background: accent }}
            />
            <span
              className="block h-[4px] w-20 rounded-full"
              style={{ background: accent }}
            />
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ background: accent }}
            />
          </div>
        </div>

        <div className="mt-6 overflow-x-auto pb-2">
          <div className="flex min-w-max justify-center gap-2 md:gap-3">
            {items.map((item) => {
              const isActive = item.id === activeId;

              return (
                <button
                  key={item.id}
                  id={item.id}
                  type="button"
                  onClick={() => handleSelect(item.id)}
                  className={cn(
                    "scroll-mt-28 inline-flex items-center gap-2 rounded-[8px] border px-3 py-2 text-[12px] font-medium transition-all md:text-[13px]",
                    isActive
                      ? "border-transparent text-white shadow-[0_18px_36px_-24px_rgba(0,0,0,0.35)]"
                      : "border-transparent bg-[#f4f6fb] text-[#0b3b85] hover:bg-[#eef3fb]",
                  )}
                  style={isActive ? { background: accent } : undefined}
                >
                  <span>{item.title}</span>
                  <ArrowRight size={16} />
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_430px] lg:items-center lg:gap-7 xl:grid-cols-[1fr_455px]">
          <div className="max-w-[600px]">
            <h3 className="text-[1.75rem] font-semibold tracking-[-0.06em] text-[#0b3b85] sm:text-[2.15rem]">
              {activeItem.title}
            </h3>
            <p className="mt-4 text-[14px] leading-[1.7] text-[#44546f] sm:text-[15px]">
              {activeItem.description}
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[24px] bg-[#0e1a2b] shadow-[0_24px_44px_-24px_rgba(11,30,62,0.45)]">
            <div className="relative aspect-[1.26/1]">
              <Image
                src={activeItem.imageSrc}
                alt={activeItem.imageAlt ?? activeItem.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 540px"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,18,34,0.12)_0%,rgba(7,18,34,0.18)_38%,rgba(7,18,34,0.52)_100%)]" />

              <div className="absolute inset-x-0 top-0 p-5 text-center text-white sm:p-6">
                <p className="text-[13px] font-semibold uppercase tracking-[0.08em]">
                  {activeItem.title}
                </p>
                {activeItem.imageEyebrow ? (
                  <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-white/75">
                    {activeItem.imageEyebrow}
                  </p>
                ) : null}
              </div>

              {activeItem.imageCaption ? (
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <div className="rounded-[16px] border border-white/15 bg-black/20 px-4 py-3 backdrop-blur-sm">
                    <p className="text-[11px] leading-5 text-white/92">
                      {activeItem.imageCaption}
                    </p>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
