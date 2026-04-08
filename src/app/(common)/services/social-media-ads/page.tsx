import ContactSection from "@/app/(common)/components/pages/Home/ContactSection";
import {
  Brackets,
  LayoutDashboard,
  Palette,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

const campaigns = [
  {
    id: "meta-ads",
    title: "Meta Ads",
    icon: LayoutDashboard,
    description:
      "Facebook and Instagram campaigns that balance awareness, retargeting, and direct-response outcomes.",
  },
  {
    id: "tiktok-ads",
    title: "TikTok Ads",
    icon: Sparkles,
    description:
      "Fast-testing, short-form paid social built to capture attention with native-feeling creative.",
  },
  {
    id: "linkedin-ads",
    title: "LinkedIn Ads",
    icon: Brackets,
    description:
      "B2B campaign setups for sharper targeting, higher-fit leads, and stronger offer positioning.",
  },
  {
    id: "pinterest-ads",
    title: "Pinterest Ads",
    icon: Palette,
    description:
      "Visual campaign planning for discovery-driven audiences who respond to inspiration and product context.",
  },
];

export default function SocialMediaAdsPage() {
  return (
    <>
      <main className="bg-transparent text-[var(--site-text)]">
        <section className="relative overflow-hidden px-4 pb-16 pt-12 sm:px-6 lg:px-8 lg:pb-24 lg:pt-20">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-120px] top-[12px] h-[280px] w-[280px] rounded-full bg-[radial-gradient(circle,rgba(126,103,255,0.24)_0%,rgba(126,103,255,0)_72%)] blur-3xl" />
            <div className="absolute right-[-90px] top-[120px] h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(218,205,255,0.72)_0%,rgba(218,205,255,0)_74%)] blur-3xl" />
          </div>

          <div className="relative mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#6a52ff]">
                Social Media Ads Category
              </p>
              <h1 className="mt-5 max-w-[760px] text-[2.85rem] font-semibold leading-[0.95] tracking-[-0.07em] text-black sm:text-[3.5rem] lg:text-[4.4rem]">
                Paid social campaigns shaped for modern platforms and faster
                creative learning.
              </h1>
              <p className="mt-6 max-w-[700px] text-[17px] leading-8 text-black/70">
                This page collects the paid social services we actively manage.
                Each platform sits inside one category so visitors can move
                through the scope without jumping across multiple route trees.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="#social-services"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-[#6a52ff] px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                >
                  View Social Platforms
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-black/10 bg-white/80 px-6 text-sm font-semibold text-black transition hover:border-[#6a52ff]/35 hover:text-[#6a52ff]"
                >
                  Discuss Paid Social
                </Link>
              </div>
            </div>

            <div className="rounded-[30px] border border-black/10 bg-[linear-gradient(180deg,#f7f4ff_0%,#e3d8ff_54%,#b59fff_100%)] p-7 shadow-[var(--site-shadow)]">
              <div className="flex items-center gap-3 text-[#6a52ff]">
                <TrendingUp size={20} />
                <p className="text-[12px] font-bold uppercase tracking-[0.18em]">
                  Category Focus
                </p>
              </div>
              <h2 className="mt-4 text-[2rem] font-semibold tracking-[-0.06em] text-black">
                One category, four paid social platforms.
              </h2>
              <p className="mt-5 text-[16px] leading-8 text-black/72">
                The creative rhythm, audience logic, and reporting approach
                changes by platform. That is why each service below has its own
                anchor while staying inside one main category page.
              </p>
            </div>
          </div>
        </section>

        <section
          id="social-services"
          className="px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24"
        >
          <div className="mx-auto max-w-[1400px]">
            <div className="max-w-[720px]">
              <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-site-accent">
                Platform Scope
              </p>
              <h2 className="mt-4 text-[2.2rem] font-semibold tracking-[-0.06em] text-black sm:text-[3rem]">
                Everything covered inside the paid social category.
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
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f0edff] text-[#6a52ff]">
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
