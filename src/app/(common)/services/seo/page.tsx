import ContactSection from "@/app/(common)/components/pages/Home/ContactSection";
import AccordionSection from "@/app/(common)/components/pages/Services/AccordionSection";
import SeoCampaignExpectationsSection from "@/app/(common)/components/pages/Services/SeoCampaignExpectationsSection";
import SeoServicesShowcase from "@/app/(common)/components/pages/Services/SeoServicesShowcase";
import { MessageCircle, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  seoComparisonPoints,
  seoExpectations,
  seoFaqs,
  seoGrowthSection,
  seoMetrics,
  seoProcessItems,
  seoTestimonials,
  seoUniqueStrengthSection,
} from "./seo-page-data";
// sfdgasdfasdfas

export default function SeoPage() {
  const heroMetrics = [seoMetrics[0], seoMetrics[2], seoMetrics[1]];
  const buildChartPath = (values: number[]) => {
    const width = 520;
    const height = 190;
    const min = Math.min(...values);
    const max = Math.max(...values);

    return values
      .map((value, index) => {
        const x = (index / (values.length - 1)) * width;
        const ratio = max === min ? 0.5 : (value - min) / (max - min);
        const y = height - ratio * (height - 20) - 10;

        return `${x},${y}`;
      })
      .join(" ");
  };

  const clicksPath = buildChartPath(seoGrowthSection.clicksTrend);
  const impressionsPath = buildChartPath(seoGrowthSection.impressionsTrend);

  return (
    <>
      <main className="bg-transparent text-[var(--site-text)]">
        <section className="relative overflow-hidden px-4 pb-8 pt-8 sm:px-6 lg:px-8 lg:pb-12 lg:pt-12">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-130px] top-[14px] h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(70,116,243,0.24)_0%,rgba(70,116,243,0)_72%)] blur-3xl" />
            <div className="absolute right-[-110px] top-[120px] h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,rgba(106,27,154,0.15)_0%,rgba(106,27,154,0)_74%)] blur-3xl" />
          </div>

          <div className="w-full relative">
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
          <div className="w-full grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(420px,560px)] lg:items-center xl:gap-16">
            <div className="max-w-[600px]">
              <h2 className="text-[2.15rem] font-semibold tracking-[-0.06em] text-[#0b3b85] sm:text-[3rem]">
                {seoGrowthSection.title}
              </h2>
              <div className="mt-8 space-y-8 text-[16px] leading-[1.9] text-black/72 sm:text-[17px]">
                {seoGrowthSection.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-[#e4ebfb] bg-white p-4 shadow-[0_28px_64px_-40px_rgba(36,91,223,0.32)] sm:p-5">
              <div className="flex items-center justify-between gap-4 text-[11px] font-semibold text-black/46">
                <p>Performance on Search results</p>
                <p className="uppercase tracking-[0.12em]">Export</p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2 text-[10px] font-medium text-black/56">
                {seoGrowthSection.filters.map((filter) => (
                  <span
                    key={filter}
                    className="rounded-full border border-[#dbe5fb] bg-[#f6f9ff] px-3 py-1.5"
                  >
                    {filter}
                  </span>
                ))}
              </div>

              <div className="mt-5 grid gap-2 sm:grid-cols-4">
                {seoGrowthSection.metrics.map((metric) => {
                  const toneClasses =
                    metric.tone === "blue"
                      ? "bg-[#3377f3] text-white"
                      : metric.tone === "violet"
                        ? "bg-[#7a5af8] text-white"
                        : "border border-[#e7ebf6] bg-white text-black/72";

                  return (
                    <div
                      key={metric.label}
                      className={`rounded-[14px] px-3 py-3 ${toneClasses}`}
                    >
                      <p className="text-[10px] font-medium opacity-80">
                        {metric.label}
                      </p>
                      <p className="mt-2 text-[1.65rem] font-semibold tracking-[-0.05em]">
                        {metric.value}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 overflow-hidden rounded-[20px] border border-[#edf1fa] bg-[#fbfcff] p-3 sm:p-4">
                <div className="mb-4 grid grid-cols-6 gap-2 text-[9px] text-black/34">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <span key={index} className="h-px w-full bg-[#edf1fa]" />
                  ))}
                </div>

                <div className="relative h-[190px]">
                  <div className="pointer-events-none absolute inset-0">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <span
                        key={index}
                        className="absolute left-0 right-0 border-t border-dashed border-[#edf1fa]"
                        style={{ top: `${index * 25}%` }}
                      />
                    ))}
                  </div>

                  <svg
                    viewBox="0 0 520 190"
                    className="h-full w-full"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <defs>
                      <linearGradient
                        id="seo-chart-fill"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop offset="0%" stopColor="#6f7bf7" stopOpacity="0.22" />
                        <stop offset="100%" stopColor="#6f7bf7" stopOpacity="0" />
                      </linearGradient>
                    </defs>

                    <polyline
                      fill="none"
                      stroke="#7a5af8"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      points={impressionsPath}
                    />
                    <polyline
                      fill="none"
                      stroke="#3377f3"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      points={clicksPath}
                    />
                  </svg>

                  <div className="pointer-events-none absolute inset-x-3 bottom-3 h-[54px] rounded-[18px] bg-[linear-gradient(180deg,rgba(251,252,255,0)_0%,rgba(251,252,255,0.92)_55%,#fbfcff_100%)]" />
                </div>

                <div className="mt-3 flex items-center justify-between text-[10px] text-black/42">
                  <span>1/10/22</span>
                  <span>3/14/22</span>
                  <span>5/20/22</span>
                  <span>7/28/22</span>
                  <span>10/31/22</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="w-full rounded-[24px] bg-[#efedff] px-[30px] py-[60px] md:px-[60px] lg:px-[60px] xl:px-[90px]">
            <div className="grid items-center gap-10 md:gap-20 lg:grid-cols-[434px_minmax(0,1fr)] lg:gap-[60px] xl:gap-20">
              <div className="flex justify-center">
                <div className="w-full max-w-[434px] overflow-hidden rounded-xl bg-white shadow-md">
                  <div className="grid gap-[8px] bg-white p-[0px] sm:grid-cols-2">
                {seoUniqueStrengthSection.images.map((image, index) => (
                  <div
                    key={`${image.src}-${index}`}
                        className={`relative overflow-hidden ${
                      index < 2 ? "aspect-[0.92/1]" : "aspect-[1.9/1] sm:col-span-2"
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      style={{ objectPosition: image.objectPosition }}
                          sizes="(max-width: 1024px) 100vw, 434px"
                    />
                  </div>
                ))}
                  </div>
                </div>
              </div>

              <div className="max-w-[500px]">
                <h2 className="max-w-[500px] text-[30px] font-bold leading-[1.35] tracking-[-0.04em] text-[#0b3b85] md:text-[36px] lg:text-[36px] xl:text-[48px]">
                  {seoUniqueStrengthSection.title}
                </h2>
                <div className="mt-[20px] max-w-[480px] space-y-[22px] text-[16px] font-normal leading-[1.6] text-[#5b5b5b] md:text-[16px] lg:text-[16px] xl:text-[18px]">
                  {seoUniqueStrengthSection.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-0 pt-[60px]">
                  <Link
                    href="/services"
                    className="mr-[20px] inline-flex items-center justify-center rounded-[6px] border-[2px] border-[#0b3b85] px-[20px] py-[10px] text-[14px] font-normal text-[#0b3b85] transition hover:border-transparent hover:bg-[#0084ff] hover:text-white md:text-[14px] lg:text-[18px] xl:text-[18px]"
                  >
                    Show Price
                  </Link>
                  <Link
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-[6px] border-[2px] border-[#0084ff] bg-[#0084ff] px-[20px] py-[10px] text-[14px] font-normal text-white transition hover:border-transparent hover:bg-[#0084ff] md:text-[14px] lg:text-[18px] xl:text-[18px]"
                  >
                    Book a Free Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SeoCampaignExpectationsSection
          title="What you Expect from Our SEO Campaign?"
          items={seoExpectations}
          imageSrc="/assets/services/seo-campaign-expectations.png"
          imageAlt="faqimage"
        />

        <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="w-full">
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
          <div className="w-full">
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
