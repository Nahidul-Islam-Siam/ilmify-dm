"use client";

import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

export type CategoryTabItem = {
  id: string;
  title: string;
  eyebrow?: string;
  summary: string;
  description: string;
  highlights: string[];
  badge?: string;
};

type CategoryTabsSectionProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  items: CategoryTabItem[];
  theme: {
    accent: string;
    softBg: string;
    panelGradient: string;
  };
  cta?: {
    href: string;
    label: string;
  };
  headerAlign?: "left" | "center";
  activeLabel?: string;
};

export default function CategoryTabsSection({
  id,
  eyebrow,
  title,
  description,
  items,
  theme,
  cta,
  headerAlign = "left",
  activeLabel = "Active Subcategory",
}: CategoryTabsSectionProps) {
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
      className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20"
    >
        <div className="w-full">
        <div
          className={cn(
            "max-w-[820px]",
            headerAlign === "center" && "mx-auto text-center",
          )}
        >
          <p
            className="text-[12px] font-bold uppercase tracking-[0.22em]"
            style={{ color: theme.accent }}
          >
            {eyebrow}
          </p>
          <h2 className="mt-4 text-[2.15rem] font-semibold tracking-[-0.06em] text-black sm:text-[3rem]">
            {title}
          </h2>
          <p
            className={cn(
              "mt-4 max-w-[760px] text-[16px] leading-8 text-black/72 sm:text-[17px]",
              headerAlign === "center" && "mx-auto",
            )}
          >
            {description}
          </p>
          {headerAlign === "center" ? (
            <div className="mt-6 flex justify-center">
              <span
                className="block h-[4px] w-24 rounded-full"
                style={{ background: theme.accent }}
              />
            </div>
          ) : null}
        </div>

        <div className="mt-10 overflow-x-auto pb-2">
          <div
            className={cn(
              "flex min-w-max gap-3",
              headerAlign === "center" && "justify-center",
            )}
          >
            {items.map((item) => {
              const isActive = item.id === activeId;

              return (
                <button
                  key={item.id}
                  id={item.id}
                  type="button"
                  onClick={() => handleSelect(item.id)}
                  className={cn(
                    "scroll-mt-28 whitespace-nowrap rounded-[16px] border px-5 py-3 text-left text-[15px] font-medium transition-all",
                    isActive
                      ? "border-transparent text-white shadow-[0_18px_36px_-24px_rgba(0,0,0,0.45)]"
                      : "border-black/10 bg-[#f6f7fb] text-black/78 hover:border-black/18 hover:bg-white",
                  )}
                  style={
                    isActive
                      ? { background: theme.accent }
                      : undefined
                  }
                >
                  {item.title}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[28px] border border-black/10 bg-white/88 p-6 shadow-[var(--site-shadow)] sm:p-7">
            <div className="flex items-center justify-between gap-4">
              <p
                className="text-[12px] font-bold uppercase tracking-[0.18em]"
                style={{ color: theme.accent }}
              >
                {activeItem.eyebrow ?? eyebrow}
              </p>
              {activeItem.badge ? (
                <span className="rounded-full border border-black/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-black/55">
                  {activeItem.badge}
                </span>
              ) : null}
            </div>

            <h3 className="mt-5 text-[1.9rem] font-semibold tracking-[-0.05em] text-black sm:text-[2.2rem]">
              {activeItem.title}
            </h3>
            <p className="mt-4 text-[16px] leading-8 text-black/72">
              {activeItem.summary}
            </p>
            <p className="mt-4 text-[15px] leading-7 text-black/68">
              {activeItem.description}
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {activeItem.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="rounded-[18px] border border-black/8 bg-[#f8f8fb] px-4 py-3 text-[14px] font-medium text-black/75"
                >
                  {highlight}
                </div>
              ))}
            </div>

            {cta ? (
              <Link
                href={cta.href}
                className="mt-7 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-black px-5 text-sm font-semibold text-white transition hover:-translate-y-0.5"
              >
                {cta.label}
                <ArrowRight size={15} />
              </Link>
            ) : null}
          </div>

          <div
            className="relative overflow-hidden rounded-[28px] border border-black/10 p-7 shadow-[var(--site-shadow)]"
            style={{ background: theme.panelGradient }}
          >
            <div className="pointer-events-none absolute -right-10 top-[-30px] h-[180px] w-[180px] rounded-full bg-white/20 blur-3xl" />
            <div className="pointer-events-none absolute bottom-[-40px] left-[-20px] h-[180px] w-[180px] rounded-full bg-black/10 blur-3xl" />

            <div className="relative flex min-h-[320px] flex-col justify-between">
              <div>
                <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-black/45">
                  {activeLabel}
                </p>
                <h3 className="mt-4 max-w-[460px] text-[2rem] font-semibold tracking-[-0.06em] text-black sm:text-[2.4rem]">
                  {activeItem.title}
                </h3>
                <p className="mt-4 max-w-[480px] text-[16px] leading-8 text-black/72">
                  {activeItem.summary}
                </p>
              </div>

              <div
                className="mt-8 rounded-[24px] border border-white/45 px-6 py-6 backdrop-blur-sm"
                style={{ background: theme.softBg }}
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-black/48">
                  Why It Matters
                </p>
                <p className="mt-3 text-[15px] leading-7 text-black/75">
                  {activeItem.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
