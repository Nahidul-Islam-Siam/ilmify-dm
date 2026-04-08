import ContactSection from "@/app/(common)/components/pages/Home/ContactSection";
import {
  FileSearch2,
  Gauge,
  LayoutDashboard,
  Lightbulb,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const campaigns = [
  {
    id: "google-search-ads",
    title: "Google Search Ads",
    icon: FileSearch2,
    description:
      "Search campaigns structured around high-intent queries, tighter ad relevance, and stronger landing page alignment.",
  },
  {
    id: "google-display-ads",
    title: "Google Display Ads",
    icon: LayoutDashboard,
    description:
      "Display campaigns for awareness, remarketing, and follow-up visibility across relevant placements.",
  },
  {
    id: "youtube-ads",
    title: "YouTube Ads",
    icon: Sparkles,
    description:
      "Video advertising campaigns designed to introduce the offer clearly and move viewers toward action.",
  },
  {
    id: "performance-max",
    title: "Performance Max",
    icon: Lightbulb,
    description:
      "Cross-network campaign management with sharper inputs, better asset guidance, and closer reporting oversight.",
  },
];

export default function GoogleAdsPage() {
  return (
    <>
      <main className="bg-transparent text-[var(--site-text)]">
        <section className="relative overflow-hidden px-4 pb-16 pt-12 sm:px-6 lg:px-8 lg:pb-24 lg:pt-20">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-120px] top-[20px] h-[280px] w-[280px] rounded-full bg-[radial-gradient(circle,rgba(255,138,61,0.26)_0%,rgba(255,138,61,0)_72%)] blur-3xl" />
            <div className="absolute right-[-90px] top-[120px] h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(255,196,112,0.25)_0%,rgba(255,196,112,0)_74%)] blur-3xl" />
          </div>

          <div className="relative mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#cc5c14]">
                Google Ads Category
              </p>
              <h1 className="mt-5 max-w-[760px] text-[2.85rem] font-semibold leading-[0.95] tracking-[-0.07em] text-black sm:text-[3.5rem] lg:text-[4.4rem]">
                Paid search campaigns built for intent, efficiency, and scale.
              </h1>
              <p className="mt-6 max-w-[700px] text-[17px] leading-8 text-black/70">
                This page groups all Google Ads work under one main category.
                The sections below cover the campaign types we actively manage
                inside that category.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="#google-ads-services"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-[#e67329] px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                >
                  View Campaign Types
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-black/10 bg-white/80 px-6 text-sm font-semibold text-black transition hover:border-[#e67329]/35 hover:text-[#cc5c14]"
                >
                  Discuss Google Ads
                </Link>
              </div>
            </div>

            <div className="rounded-[30px] border border-black/10 bg-[linear-gradient(180deg,#fff7ef_0%,#ffe3c3_54%,#ffb46d_100%)] p-7 shadow-[var(--site-shadow)]">
              <div className="flex items-center gap-3 text-[#cc5c14]">
                <Gauge size={20} />
                <p className="text-[12px] font-bold uppercase tracking-[0.18em]">
                  Category Focus
                </p>
              </div>
              <h2 className="mt-4 text-[2rem] font-semibold tracking-[-0.06em] text-black">
                One category, four Google campaign types.
              </h2>
              <p className="mt-5 text-[16px] leading-8 text-black/72">
                We focus on intent quality, creative relevance, audience logic,
                and what happens after the click, because ad performance depends
                on more than platform settings alone.
              </p>
            </div>
          </div>
        </section>

        <section
          id="google-ads-services"
          className="px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24"
        >
          <div className="mx-auto max-w-[1400px]">
            <div className="max-w-[720px]">
              <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-site-accent">
                Campaign Scope
              </p>
              <h2 className="mt-4 text-[2.2rem] font-semibold tracking-[-0.06em] text-black sm:text-[3rem]">
                Everything covered inside the Google Ads category.
              </h2>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {campaigns.map((campaign) => {
                const Icon = campaign.icon;

                return (
                  <article
                    key={campaign.id}
                    id={campaign.id}
                    className="scroll-mt-28 rounded-[26px] border border-black/10 bg-white/88 p-6 shadow-[var(--site-shadow)]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff2e7] text-[#e67329]">
                      <Icon size={20} />
                    </div>
                    <h3 className="mt-5 text-[1.45rem] font-semibold tracking-[-0.05em] text-black">
                      {campaign.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-7 text-black/72">
                      {campaign.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <ContactSection />
    </>
  );
}
