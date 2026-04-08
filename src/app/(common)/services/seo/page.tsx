import ContactSection from "@/app/(common)/components/pages/Home/ContactSection";
import AccordionSection from "@/app/(common)/components/pages/Services/AccordionSection";
import SeoServicesShowcase from "@/app/(common)/components/pages/Services/SeoServicesShowcase";
import { MessageCircle, Star } from "lucide-react";
import Link from "next/link";
import {
  seoComparisonPoints,
  seoExpectations,
  seoFaqs,
  seoMetrics,
  seoProcessItems,
  seoStrengths,
  seoTestimonials,
  seoWhyItMattersItems,
} from "./seo-page-data";

export default function SeoPage() {
  const heroMetrics = [seoMetrics[0], seoMetrics[2], seoMetrics[1]];

  return (
    <>
      <main className="bg-transparent text-[var(--site-text)]">
        <section className="relative overflow-hidden px-4 pb-8 pt-8 sm:px-6 lg:px-8 lg:pb-12 lg:pt-12">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-130px] top-[14px] h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(70,116,243,0.24)_0%,rgba(70,116,243,0)_72%)] blur-3xl" />
            <div className="absolute right-[-110px] top-[120px] h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,rgba(106,27,154,0.15)_0%,rgba(106,27,154,0)_74%)] blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-[1220px]">
            <div className="rounded-[30px] border border-white/60 bg-[#d9dbfb] px-6 py-7 shadow-[var(--site-shadow)] sm:px-10 sm:py-9 lg:px-[4.6rem] lg:py-[3.35rem]">
              <div className="grid gap-8 lg:grid-cols-[1fr_420px] lg:items-center">
                <div>
                  <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#0b3b85]">
                    SEO Services
                  </p>
                  <h1 className="mt-5 max-w-[640px] text-[2rem] font-semibold leading-[1.03] tracking-[-0.052em] text-[#0b3b85] sm:text-[2.55rem] lg:text-[3rem]">
                    <span className="whitespace-nowrap">Best SEO Services to</span>
                    <br />
                    Drive Business
                    <br />
                    Revenue
                  </h1>
                  <p className="mt-7 max-w-[500px] text-[14px] leading-[1.82] text-[#264673] sm:text-[15px]">
                    Maximize your revenue with our customized SEO service,
                    optimizing your online visibility, driving targeted
                    traffic, and boosting conversions for enhanced success. We
                    construct strategies for keyword optimization, content
                    enhancements, and analytics insights to ensure sustainable
                    results.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-5">
                    <Link
                      href="#contact"
                      className="inline-flex h-11 items-center justify-center gap-2 rounded-[10px] bg-[#16b44a] px-5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#11a03f]"
                    >
                      <MessageCircle size={18} />
                      Whatsapp
                    </Link>
                    <Link
                      href="#contact"
                      className="inline-flex h-11 items-center justify-center rounded-[10px] bg-[#1e88f5] px-5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#1677df]"
                    >
                      Get Free Assessment
                    </Link>
                  </div>
                </div>

                <div className="relative flex flex-wrap items-center justify-center gap-4 py-1 sm:min-h-[344px] lg:block">
                  {heroMetrics.map((metric, index) => {
                    const positions = [
                      "sm:absolute sm:left-[108px] sm:top-[6px]",
                      "sm:absolute sm:left-[76px] sm:top-[182px]",
                      "sm:absolute sm:right-[8px] sm:top-[120px]",
                    ];

                    const circleStyles = [
                      "bg-[#e6e2ff]",
                      "bg-[#d8efff]",
                      "bg-[#fceceb]",
                    ];

                    const labelSizes = [
                      "sm:max-w-[152px] sm:text-[11px] sm:leading-[1.45]",
                      "sm:max-w-[118px] sm:text-[12px] sm:leading-[1.45]",
                      "sm:max-w-[140px] sm:text-[12px] sm:leading-[1.45]",
                    ];

                    return (
                      <article
                        key={metric.label}
                        className={`flex h-[138px] w-[138px] shrink-0 flex-col items-center justify-center rounded-full border-[7px] border-white px-3 text-center shadow-[0_16px_40px_-28px_rgba(11,59,133,0.35)] sm:h-[172px] sm:w-[172px] ${positions[index]} ${circleStyles[index]}`}
                      >
                        <p className="text-[2rem] font-semibold tracking-[-0.08em] text-[#0b3b85] sm:text-[2.3rem]">
                          {metric.value}
                        </p>
                        <p
                          className={`mt-2 max-w-[108px] text-[11px] leading-6 text-[#0b3b85] ${labelSizes[index]}`}
                        >
                          {metric.label}
                        </p>
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <SeoServicesShowcase
          id="seo-process"
          title="Our SEO Services"
          items={seoProcessItems}
        />

        <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto grid max-w-[1400px] gap-6 lg:grid-cols-[1fr_0.96fr]">
            <div className="overflow-hidden rounded-[30px] border border-black/10 bg-[linear-gradient(180deg,#eff4ff_0%,#d9e5ff_100%)] p-7 shadow-[var(--site-shadow)] sm:p-8">
              <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#245bdf]">
                Growth Story
              </p>
              <h2 className="mt-4 text-[2rem] font-semibold tracking-[-0.06em] text-black sm:text-[2.4rem]">
                516% organic traffic growth is the kind of result strong SEO
                systems can unlock.
              </h2>
              <p className="mt-5 max-w-[560px] text-[16px] leading-8 text-black/72">
                The point of a case study like this is not a flashy number on
                its own. It shows what can happen when research, technical
                cleanup, content improvements, and authority-building are all
                handled as one connected campaign.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-[22px] bg-white/76 px-5 py-5">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-black/45">
                    Traffic Lift
                  </p>
                  <p className="mt-3 text-[2rem] font-semibold tracking-[-0.06em] text-black">
                    516%
                  </p>
                </div>
                <div className="rounded-[22px] bg-white/76 px-5 py-5">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-black/45">
                    Methods
                  </p>
                  <p className="mt-3 text-[1rem] leading-7 text-black/75">
                    SEO research, content updates, technical fixes
                  </p>
                </div>
                <div className="rounded-[22px] bg-white/76 px-5 py-5">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-black/45">
                    Outcome
                  </p>
                  <p className="mt-3 text-[1rem] leading-7 text-black/75">
                    More visibility, stronger conversion readiness
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[30px] border border-black/10 bg-white/88 p-7 shadow-[var(--site-shadow)] sm:p-8">
              <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-site-accent">
                Why This Matters
              </p>
              <h2 className="mt-4 text-[2rem] font-semibold tracking-[-0.06em] text-black">
                Search growth gets stronger when the campaign is treated like a
                full system.
              </h2>
              <p className="mt-5 text-[16px] leading-8 text-black/72">
                We do not separate rankings, content, technical health, and
                authority into unrelated tasks. The campaign performs better
                when each layer supports the others in sequence.
              </p>
              <div className="mt-8 space-y-4">
                {seoWhyItMattersItems.map((item) => (
                  <div
                    key={item}
                    className="rounded-[18px] border border-black/8 bg-[#f7f9ff] px-4 py-4 text-[15px] leading-7 text-black/74"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-[22px] border border-black/10 bg-[#f4f8ff] p-5">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#245bdf]">
                      Campaign Snapshot
                    </p>
                    <p className="mt-3 text-[1.8rem] font-semibold tracking-[-0.06em] text-black">
                      Visibility trend moving up
                    </p>
                  </div>
                  <p className="text-[2.2rem] font-semibold tracking-[-0.08em] text-[#245bdf]">
                    +516%
                  </p>
                </div>
                <div className="mt-6 flex items-end gap-2">
                  {[28, 46, 58, 74, 98, 126].map((height, index) => (
                    <span
                      key={height}
                      className="w-full rounded-t-full bg-[#245bdf]/85"
                      style={{
                        height: `${height}px`,
                        opacity: 0.4 + index * 0.1,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto grid max-w-[1400px] gap-8 lg:grid-cols-[0.88fr_1.12fr]">
            <div className="rounded-[30px] border border-black/10 bg-[linear-gradient(180deg,#eef3ff_0%,#d8e5ff_100%)] p-7 shadow-[var(--site-shadow)] sm:p-8">
              <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#245bdf]">
                Unique Strength
              </p>
              <h2 className="mt-4 text-[2.15rem] font-semibold tracking-[-0.06em] text-black sm:text-[3rem]">
                What makes this SEO approach different.
              </h2>
              <p className="mt-4 max-w-[560px] text-[16px] leading-8 text-black/72 sm:text-[17px]">
                This section mirrors the role of the &ldquo;Our Unique Strength
                in SEO Services&rdquo; block from the reference page, but the content is
                adapted to fit your site.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="#contact"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-black px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                >
                  Book a Free Consultation
                </Link>
                <Link
                  href="/services"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-black/10 bg-white/85 px-6 text-sm font-semibold text-black transition hover:border-[#245bdf]/35 hover:text-[#245bdf]"
                >
                  Explore All Services
                </Link>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {seoStrengths.map((strength) => (
                <article
                  key={strength.title}
                  className="rounded-[26px] border border-black/10 bg-white/88 p-6 shadow-[var(--site-shadow)]"
                >
                  <h3 className="text-[1.2rem] font-semibold tracking-[-0.04em] text-black">
                    {strength.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-7 text-black/72">
                    {strength.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <AccordionSection
          eyebrow="Campaign Expectations"
          title="What clients should expect from the SEO campaign."
          description="The reference page uses an accordion here, so we are keeping the same structure while tailoring the wording for your site."
          items={seoExpectations}
          accent="#245bdf"
          softBg="#f4f8ff"
        />

        <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-[1400px]">
            <div className="max-w-[760px]">
              <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-site-accent">
                Comparison
              </p>
              <h2 className="mt-4 text-[2.15rem] font-semibold tracking-[-0.06em] text-black sm:text-[3rem]">
                How this SEO approach differs from a typical agency workflow.
              </h2>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <div className="rounded-[30px] border border-black/10 bg-[linear-gradient(180deg,#eef3ff_0%,#d8e5ff_100%)] p-7 shadow-[var(--site-shadow)]">
                <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#245bdf]">
                  Your SEO Team
                </p>
                <div className="mt-6 space-y-4">
                  {seoComparisonPoints.ourSide.map((point) => (
                    <div
                      key={point}
                      className="rounded-[18px] bg-white/75 px-4 py-4 text-[15px] leading-7 text-black/76"
                    >
                      {point}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[30px] border border-black/10 bg-white/88 p-7 shadow-[var(--site-shadow)]">
                <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-black/55">
                  Typical Agency
                </p>
                <div className="mt-6 space-y-4">
                  {seoComparisonPoints.otherSide.map((point) => (
                    <div
                      key={point}
                      className="rounded-[18px] border border-black/8 bg-[#f7f7fb] px-4 py-4 text-[15px] leading-7 text-black/72"
                    >
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-[1400px]">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-[760px]">
                <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-site-accent">
                  Client Feedback
                </p>
                <h2 className="mt-4 text-[2.15rem] font-semibold tracking-[-0.06em] text-black sm:text-[3rem]">
                  What strong delivery tends to sound like from the client side.
                </h2>
              </div>
              <div className="rounded-full border border-black/10 bg-white/85 px-4 py-2 text-sm font-medium text-black/68">
                36+ review inspired layout
              </div>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {seoTestimonials.map((item) => (
                <article
                  key={item.name}
                  className="rounded-[26px] border border-black/10 bg-white/88 p-6 shadow-[var(--site-shadow)]"
                >
                  <div className="flex items-center gap-1 text-[#245bdf]">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} size={14} className="fill-current" />
                    ))}
                  </div>
                  <p className="mt-4 text-[16px] leading-8 text-black/74">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <div className="mt-6 border-t border-black/8 pt-5">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#eef3ff] text-sm font-semibold text-[#245bdf]">
                      {item.name
                        .split(" ")
                        .slice(0, 2)
                        .map((part) => part[0])
                        .join("")}
                    </div>
                    <p className="text-[1rem] font-semibold text-black">
                      {item.name}
                    </p>
                    <p className="mt-1 text-[14px] text-black/58">{item.role}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <AccordionSection
          eyebrow="Find Answers"
          title="Frequently asked questions."
          description="This keeps the FAQ structure from the reference page while shortening and adapting the answers for your brand voice."
          items={seoFaqs}
          accent="#245bdf"
          softBg="#f4f8ff"
        />
      </main>

      <ContactSection />
    </>
  );
}
