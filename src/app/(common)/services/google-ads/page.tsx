import ContactSection from "@/app/(common)/components/pages/Home/ContactSection";
import CategoryTabsSection, {
  type CategoryTabItem,
} from "@/app/(common)/components/pages/Services/CategoryTabsSection";
import { ArrowRight, Gauge } from "lucide-react";
import Link from "next/link";

const googleAdsItems: CategoryTabItem[] = [
  {
    id: "google-search-ads",
    title: "Google Search Ads",
    eyebrow: "Google Ads Subcategories",
    badge: "Search",
    summary:
      "Search campaigns are built for high-intent demand and clearer alignment between query, ad, and landing page.",
    description:
      "This subcategory focuses on campaigns where strong keyword control, ad copy testing, and conversion relevance matter the most.",
    highlights: ["Keyword intent mapping", "Ad copy testing", "Landing page fit", "Bid efficiency"],
  },
  {
    id: "google-display-ads",
    title: "Google Display Ads",
    eyebrow: "Google Ads Subcategories",
    badge: "Display",
    summary:
      "Display campaigns extend visibility beyond search and support awareness, remarketing, and follow-up touchpoints.",
    description:
      "We use this subcategory when the brand needs broader exposure or stronger retargeting across relevant placements and audiences.",
    highlights: ["Retargeting sequences", "Placement control", "Audience layering", "Creative refresh"],
  },
  {
    id: "youtube-ads",
    title: "YouTube Ads",
    eyebrow: "Google Ads Subcategories",
    badge: "Video",
    summary:
      "YouTube campaigns help introduce the offer with motion, message clarity, and stronger attention capture.",
    description:
      "This subcategory is best when video can explain the offer faster, create trust, and build action through layered audience targeting.",
    highlights: ["Video-first hooks", "Audience segments", "Offer clarity", "View-to-action tracking"],
  },
  {
    id: "performance-max",
    title: "Performance Max",
    eyebrow: "Google Ads Subcategories",
    badge: "Automation",
    summary:
      "Performance Max uses Google’s automated delivery model, but it still needs smart inputs and close reporting oversight.",
    description:
      "We treat this subcategory as a system that needs better signals, stronger assets, and tighter evaluation to perform well.",
    highlights: ["Asset guidance", "Signal design", "Conversion feedback", "Cross-network visibility"],
  },
];

export default function GoogleAdsPage() {
  return (
    <>
      <main className="bg-transparent text-[var(--site-text)]">
        <section className="relative overflow-hidden px-4 pb-16 pt-12 sm:px-6 lg:px-8 lg:pb-24 lg:pt-20">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-120px] top-[16px] h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(255,138,61,0.24)_0%,rgba(255,138,61,0)_72%)] blur-3xl" />
            <div className="absolute right-[-100px] top-[120px] h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,rgba(255,196,112,0.22)_0%,rgba(255,196,112,0)_74%)] blur-3xl" />
          </div>

          <div className="relative mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#cc5c14]">
                Google Ads
              </p>
              <h1 className="mt-5 max-w-[760px] text-[2.95rem] font-semibold leading-[0.94] tracking-[-0.07em] text-black sm:text-[3.85rem] lg:text-[4.8rem]">
                Google Ads services grouped by campaign subcategory.
              </h1>
              <p className="mt-6 max-w-[760px] text-[17px] leading-8 text-black/72">
                This page does not present the campaign types as a “process.”
                Instead, each one is treated as a different subcategory, which
                matches the way you described the structure for your site.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="#google-ads-subcategories"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#e67329] px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                >
                  View Subcategories
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-black/10 bg-white/85 px-6 text-sm font-semibold text-black transition hover:border-[#e67329]/35 hover:text-[#cc5c14]"
                >
                  Discuss Google Ads
                </Link>
              </div>
            </div>

            <div className="rounded-[30px] border border-black/10 bg-[linear-gradient(180deg,#fff7ef_0%,#ffe3c3_56%,#ffb46d_100%)] p-7 shadow-[var(--site-shadow)]">
              <div className="flex items-center gap-3 text-[#cc5c14]">
                <Gauge size={20} />
                <p className="text-[12px] font-bold uppercase tracking-[0.18em]">
                  Category Focus
                </p>
              </div>
              <h2 className="mt-4 text-[2rem] font-semibold tracking-[-0.06em] text-black">
                Each campaign type behaves differently, so we present them as
                separate subcategories.
              </h2>
              <p className="mt-5 text-[16px] leading-8 text-black/72">
                Search, display, video, and automated campaign systems all need
                different strategy choices. The tabbed section below lets users
                move through them one by one.
              </p>
            </div>
          </div>
        </section>

        <CategoryTabsSection
          id="google-ads-subcategories"
          eyebrow="Google Ads Subcategories"
          title="Four Google Ads service subcategories."
          description="These tabs are structured as subcategories, not process steps, so the page behaves more like a service catalog inside the main Google Ads category."
          items={googleAdsItems}
          theme={{
            accent: "#e67329",
            softBg: "rgba(255,255,255,0.62)",
            panelGradient:
              "linear-gradient(180deg, #fff7ef 0%, #ffe3c3 56%, #ffb46d 100%)",
          }}
          cta={{ href: "#contact", label: "Start a Google Ads Project" }}
        />
      </main>

      <ContactSection />
    </>
  );
}
