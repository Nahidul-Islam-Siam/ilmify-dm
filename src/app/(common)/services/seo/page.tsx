import ContactSection from "@/app/(common)/components/pages/Home/ContactSection";
import {
  Code2,
  FileSearch2,
  Gauge,
  Globe2,
  LayoutDashboard,
  Lightbulb,
  PenTool,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "seo-audit",
    title: "SEO Audit",
    icon: FileSearch2,
    description:
      "We audit technical health, indexing, content depth, and competitive gaps so priorities are clear from the start.",
  },
  {
    id: "technical-seo",
    title: "Technical SEO",
    icon: Code2,
    description:
      "Crawl fixes, site structure improvements, speed work, and technical cleanup that help search engines trust the site.",
  },
  {
    id: "keyword-research",
    title: "KW Research",
    icon: Lightbulb,
    description:
      "Keyword planning focused on intent, opportunity, and how each topic should map to the right page type.",
  },
  {
    id: "content-writing",
    title: "Content Writing",
    icon: PenTool,
    description:
      "SEO-driven content briefs, landing page copy, and articles designed to rank clearly and convert better.",
  },
  {
    id: "on-page-seo",
    title: "On-Page SEO",
    icon: LayoutDashboard,
    description:
      "We optimize metadata, heading structure, internal links, and page messaging so each page performs with more clarity.",
  },
  {
    id: "link-building",
    title: "Link Building",
    icon: Globe2,
    description:
      "Relevant outreach and authority signals that strengthen trust without relying on noisy shortcuts.",
  },
  {
    id: "guest-posting",
    title: "Guest Posting",
    icon: Sparkles,
    description:
      "Strategic publication placements that improve reach, visibility, and contextual backlink quality.",
  },
  {
    id: "reporting",
    title: "Reporting",
    icon: Gauge,
    description:
      "Clear reporting that tracks rankings, traffic movement, lead quality, and the next actions we recommend.",
  },
];

export default function SeoPage() {
  return (
    <>
      <main className="bg-transparent text-[var(--site-text)]">
        <section className="relative overflow-hidden px-4 pb-16 pt-12 sm:px-6 lg:px-8 lg:pb-24 lg:pt-20">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-120px] top-[10px] h-[280px] w-[280px] rounded-full bg-[radial-gradient(circle,rgba(70,116,243,0.24)_0%,rgba(70,116,243,0)_72%)] blur-3xl" />
            <div className="absolute right-[-100px] top-[120px] h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(106,27,154,0.16)_0%,rgba(106,27,154,0)_74%)] blur-3xl" />
          </div>

          <div className="relative mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#245bdf]">
                SEO Category
              </p>
              <h1 className="mt-5 max-w-[760px] text-[2.85rem] font-semibold leading-[0.95] tracking-[-0.07em] text-black sm:text-[3.5rem] lg:text-[4.4rem]">
                Search growth built around technical trust and content clarity.
              </h1>
              <p className="mt-6 max-w-[700px] text-[17px] leading-8 text-black/70">
                This page covers the full SEO category. Instead of scattering
                the work across separate routes, each core SEO service sits here
                with its own anchored section for faster navigation.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="#seo-services"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-[#245bdf] px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                >
                  View SEO Services
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-black/10 bg-white/80 px-6 text-sm font-semibold text-black transition hover:border-[#245bdf]/35 hover:text-[#245bdf]"
                >
                  Discuss SEO
                </Link>
              </div>
            </div>

            <div className="rounded-[30px] border border-black/10 bg-[linear-gradient(180deg,#eef3ff_0%,#d6e3ff_54%,#99b3ff_100%)] p-7 shadow-[var(--site-shadow)]">
              <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#245bdf]">
                Category Focus
              </p>
              <h2 className="mt-4 text-[2rem] font-semibold tracking-[-0.06em] text-black">
                One category, eight connected SEO services.
              </h2>
              <p className="mt-5 text-[16px] leading-8 text-black/72">
                The goal is not just traffic. The goal is stronger visibility,
                cleaner site health, better content alignment, and reporting
                that shows where growth is actually happening.
              </p>
            </div>
          </div>
        </section>

        <section
          id="seo-services"
          className="px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24"
        >
          <div className="mx-auto max-w-[1400px]">
            <div className="max-w-[720px]">
              <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-site-accent">
                Service Scope
              </p>
              <h2 className="mt-4 text-[2.2rem] font-semibold tracking-[-0.06em] text-black sm:text-[3rem]">
                Everything covered inside the SEO category.
              </h2>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <article
                    key={service.id}
                    id={service.id}
                    className="scroll-mt-28 rounded-[26px] border border-black/10 bg-white/88 p-6 shadow-[var(--site-shadow)]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef3ff] text-[#245bdf]">
                      <Icon size={20} />
                    </div>
                    <h3 className="mt-5 text-[1.45rem] font-semibold tracking-[-0.05em] text-black">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-7 text-black/72">
                      {service.description}
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
