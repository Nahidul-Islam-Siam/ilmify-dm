import ContactSection from "@/app/(common)/components/pages/Home/ContactSection";
import { ArrowRight, Gauge, LayoutDashboard, Megaphone } from "lucide-react";
import Link from "next/link";

const categories = [
  {
    href: "/services/seo",
    title: "SEO",
    label: "Search Visibility",
    icon: Megaphone,
    description:
      "Technical SEO, keyword research, content writing, on-page optimization, link building, and reporting under one category.",
    gradient:
      "linear-gradient(180deg, #eef3ff 0%, #d8e4ff 52%, #99b3ff 100%)",
    items: ["SEO Audit", "Technical SEO", "Content Writing", "Reporting"],
  },
  {
    href: "/services/google-ads",
    title: "Google Ads",
    label: "Paid Search",
    icon: Gauge,
    description:
      "Google Search Ads, Display Ads, YouTube Ads, and Performance Max campaigns shaped around conversion quality.",
    gradient:
      "linear-gradient(180deg, #fff7ef 0%, #ffe3c3 52%, #ffb46d 100%)",
    items: [
      "Google Search Ads",
      "Google Display Ads",
      "YouTube Ads",
      "Performance Max",
    ],
  },
  {
    href: "/services/social-media-ads",
    title: "Social Media Advertisement",
    label: "Paid Social",
    icon: LayoutDashboard,
    description:
      "Meta, TikTok, LinkedIn, and Pinterest ads with stronger creative testing and platform-specific campaign logic.",
    gradient:
      "linear-gradient(180deg, #f7f4ff 0%, #e3d8ff 52%, #b59fff 100%)",
    items: ["Meta Ads", "TikTok Ads", "LinkedIn Ads", "Pinterest Ads"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <main className="bg-transparent text-[var(--site-text)]">
        <section className="relative overflow-hidden px-4 pb-16 pt-12 sm:px-6 lg:px-8 lg:pb-24 lg:pt-20">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-120px] top-[20px] h-[280px] w-[280px] rounded-full bg-[radial-gradient(circle,rgba(106,27,154,0.18)_0%,rgba(106,27,154,0)_72%)] blur-3xl" />
            <div className="absolute right-[-90px] top-[100px] h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(82,244,71,0.12)_0%,rgba(82,244,71,0)_72%)] blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-[1400px]">
            <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-site-accent">
              Services
            </p>
            <h1 className="mt-5 max-w-[940px] text-[2.9rem] font-semibold leading-[0.95] tracking-[-0.07em] text-black sm:text-[3.8rem] lg:text-[4.8rem]">
              Three focused growth categories. One clear service structure.
            </h1>
            <p className="mt-6 max-w-[760px] text-[17px] leading-8 text-black/70">
              We currently organize our services into three main categories:
              SEO, Google Ads, and Social Media Advertisement. Each category
              has its own page so visitors can understand exactly what sits
              inside it.
            </p>
          </div>
        </section>

        <section className="px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
          <div className="mx-auto grid max-w-[1400px] gap-6 xl:grid-cols-3">
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <article
                  key={category.title}
                  className="rounded-[30px] border border-black/10 bg-white/86 p-6 shadow-[var(--site-shadow)]"
                >
                  <div
                    className="rounded-[24px] p-6"
                    style={{ background: category.gradient }}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/80 text-black">
                      <Icon size={22} />
                    </div>
                    <p className="mt-5 text-[12px] font-bold uppercase tracking-[0.18em] text-black/52">
                      {category.label}
                    </p>
                    <h2 className="mt-3 text-[1.95rem] font-semibold tracking-[-0.06em] text-black">
                      {category.title}
                    </h2>
                    <p className="mt-4 text-[15px] leading-7 text-black/72">
                      {category.description}
                    </p>
                  </div>

                  <div className="mt-6 space-y-3">
                    {category.items.map((item) => (
                      <div
                        key={item}
                        className="rounded-[18px] border border-black/8 bg-[#f8f8fb] px-4 py-3 text-[14px] font-medium text-black/72"
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  <Link
                    href={category.href}
                    className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-black px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                  >
                    Explore Category
                    <ArrowRight size={16} />
                  </Link>
                </article>
              );
            })}
          </div>
        </section>
      </main>

      <ContactSection />
    </>
  );
}
