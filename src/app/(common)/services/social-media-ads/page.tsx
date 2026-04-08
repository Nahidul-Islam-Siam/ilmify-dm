import ContactSection from "@/app/(common)/components/pages/Home/ContactSection";
import CategoryTabsSection, {
  type CategoryTabItem,
} from "@/app/(common)/components/pages/Services/CategoryTabsSection";
import { ArrowRight, TrendingUp } from "lucide-react";
import Link from "next/link";

const socialAdsItems: CategoryTabItem[] = [
  {
    id: "meta-ads",
    title: "Meta Ads",
    eyebrow: "Social Media Ad Subcategories",
    badge: "Meta",
    summary:
      "Meta Ads support awareness, retargeting, and direct response across Facebook and Instagram.",
    description:
      "This subcategory is ideal when the brand needs flexible audience targeting, creative testing, and a full-funnel paid social setup.",
    highlights: ["Audience testing", "Creative iteration", "Offer sequencing", "Conversion tracking"],
  },
  {
    id: "tiktok-ads",
    title: "TikTok Ads",
    eyebrow: "Social Media Ad Subcategories",
    badge: "TikTok",
    summary:
      "TikTok campaigns work best when the creative feels native, fast, and built around scroll-stopping hooks.",
    description:
      "We treat this as its own subcategory because the testing rhythm, content style, and audience behavior are different from other platforms.",
    highlights: ["Short-form hooks", "Native-feel creatives", "Rapid test cycles", "Trend-aware messaging"],
  },
  {
    id: "linkedin-ads",
    title: "LinkedIn Ads",
    eyebrow: "Social Media Ad Subcategories",
    badge: "LinkedIn",
    summary:
      "LinkedIn Ads are useful when B2B targeting, decision-maker reach, and lead quality matter more than raw volume.",
    description:
      "This subcategory is organized around sharper audience intent, stronger positioning, and campaign structures that support business-focused offers.",
    highlights: ["B2B targeting", "Decision-maker reach", "Lead forms", "Offer positioning"],
  },
  {
    id: "pinterest-ads",
    title: "Pinterest Ads",
    eyebrow: "Social Media Ad Subcategories",
    badge: "Pinterest",
    summary:
      "Pinterest Ads help brands show up in discovery-driven moments where visual context and product inspiration matter.",
    description:
      "We treat this as a separate subcategory because platform behavior, user intent, and creative structure differ from the other social channels.",
    highlights: ["Discovery intent", "Visual storytelling", "Product exposure", "Evergreen visibility"],
  },
];

export default function SocialMediaAdsPage() {
  return (
    <>
      <main className="bg-transparent text-[var(--site-text)]">
        <section className="relative overflow-hidden px-4 pb-16 pt-12 sm:px-6 lg:px-8 lg:pb-24 lg:pt-20">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-120px] top-[16px] h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(126,103,255,0.24)_0%,rgba(126,103,255,0)_72%)] blur-3xl" />
            <div className="absolute right-[-90px] top-[120px] h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,rgba(218,205,255,0.68)_0%,rgba(218,205,255,0)_74%)] blur-3xl" />
          </div>

          <div className="relative mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#6a52ff]">
                Social Media Advertisement
              </p>
              <h1 className="mt-5 max-w-[760px] text-[2.95rem] font-semibold leading-[0.94] tracking-[-0.07em] text-black sm:text-[3.85rem] lg:text-[4.8rem]">
                Paid social services grouped by platform subcategory.
              </h1>
              <p className="mt-6 max-w-[760px] text-[17px] leading-8 text-black/72">
                Like Google Ads, this page treats each platform as its own
                subcategory instead of presenting them as sequential steps.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="#social-ads-subcategories"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#6a52ff] px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                >
                  View Subcategories
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-black/10 bg-white/85 px-6 text-sm font-semibold text-black transition hover:border-[#6a52ff]/35 hover:text-[#6a52ff]"
                >
                  Discuss Paid Social
                </Link>
              </div>
            </div>

            <div className="rounded-[30px] border border-black/10 bg-[linear-gradient(180deg,#f7f4ff_0%,#e4dbff_56%,#b8a4ff_100%)] p-7 shadow-[var(--site-shadow)]">
              <div className="flex items-center gap-3 text-[#6a52ff]">
                <TrendingUp size={20} />
                <p className="text-[12px] font-bold uppercase tracking-[0.18em]">
                  Category Focus
                </p>
              </div>
              <h2 className="mt-4 text-[2rem] font-semibold tracking-[-0.06em] text-black">
                Each platform needs its own creative rhythm and campaign logic.
              </h2>
              <p className="mt-5 text-[16px] leading-8 text-black/72">
                Meta, TikTok, LinkedIn, and Pinterest all behave differently,
                so we structure the page around subcategories users can switch
                between instead of one fixed process.
              </p>
            </div>
          </div>
        </section>

        <CategoryTabsSection
          id="social-ads-subcategories"
          eyebrow="Social Media Ad Subcategories"
          title="Four paid social service subcategories."
          description="These tabs act as platform subcategories inside the main Social Media Advertisement page, so users can jump straight to the one they care about."
          items={socialAdsItems}
          theme={{
            accent: "#6a52ff",
            softBg: "rgba(255,255,255,0.64)",
            panelGradient:
              "linear-gradient(180deg, #f7f4ff 0%, #e4dbff 56%, #b8a4ff 100%)",
          }}
          cta={{ href: "#contact", label: "Start a Paid Social Project" }}
        />
      </main>

      <ContactSection />
    </>
  );
}
