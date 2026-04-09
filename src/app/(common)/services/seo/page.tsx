import AccordionSection from "@/components/pages/Services/AccordionSection";
import SeoCampaignExpectationsSection from "@/components/pages/Services/SeoCampaignExpectationsSection";
import SeoServicesShowcase from "@/components/pages/Services/SeoServicesShowcase";
import {
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Star,
  X,
} from "lucide-react";
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

export default function SeoPage() {
  const accent = "#9c8cff";
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
  const renderReviewBrand = (brand: string) => {
    if (brand === "Stanford") {
      return (
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#7b1f2f] text-[11px] font-bold text-white">
            SU
          </span>
          <div className="leading-[1.05]">
            <p className="text-[0.98rem] font-semibold text-[#8a1e2a]">
              Stanford
            </p>
            <p className="text-[0.78rem] text-[#8a1e2a]/82">University</p>
          </div>
        </div>
      );
    }

    if (brand === "Nagad") {
      return (
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ffefe6] text-[1rem] font-bold text-[#f15a24]">
            N
          </span>
          <p className="text-[1.05rem] font-semibold lowercase tracking-[-0.03em] text-[#ef5a24]">
            nagad
          </p>
        </div>
      );
    }

    return (
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#ef3340] text-[0.9rem] font-bold text-white">
          D
        </span>
        <p className="text-[1.1rem] font-semibold tracking-[-0.04em] text-[#111]">
          DBS
        </p>
      </div>
    );
  };

  return (
    <>
      <main className="bg-transparent text-[var(--site-text)]">
        <section className="relative overflow-hidden px-4 pb-6 pt-6 sm:px-6 lg:px-8 lg:pb-9 lg:pt-8">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-130px] top-[14px] h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(156,140,255,0.20)_0%,rgba(156,140,255,0)_72%)] blur-3xl" />
            <div className="absolute right-[-110px] top-[120px] h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,rgba(209,183,255,0.14)_0%,rgba(209,183,255,0)_74%)] blur-3xl" />
          </div>

          <div className="relative mx-auto w-full max-w-[var(--site-max-width)]">
            <div className="rounded-[28px] border border-white/60 bg-[#f1eeff] px-5 py-6 shadow-[var(--site-shadow)] sm:px-8 sm:py-8 lg:px-[4rem] lg:py-[2.8rem]">
              <div className="grid gap-6 lg:grid-cols-[1fr_390px] lg:items-center">
                <div>
                  <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#0b3b85]">
                    SEO Services
                  </p>
                  <h1 className="mt-4 max-w-[610px] text-[1.7rem] font-semibold leading-[1.04] tracking-[-0.052em] text-[#0b3b85] sm:text-[2.2rem] lg:text-[2.65rem]">
                    <span className="whitespace-nowrap">
                      Best SEO Services to
                    </span>
                    <br />
                    Drive Business
                    <br />
                    Revenue
                  </h1>
                  <p className="mt-5 max-w-[470px] text-[13px] leading-[1.72] text-[#264673] sm:text-[14px]">
                    Maximize your revenue with our customized SEO service,
                    optimizing your online visibility, driving targeted traffic,
                    and boosting conversions for enhanced success. We construct
                    strategies for keyword optimization, content enhancements,
                    and analytics insights to ensure sustainable results.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-4">
                    <Link
                      href="#contact"
                      className="inline-flex h-10 items-center justify-center gap-2 rounded-[10px] bg-[#16b44a] px-[18px] text-[13px] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#11a03f]"
                    >
                      <MessageCircle size={18} />
                      Whatsapp
                    </Link>
                    <Link
                      href="#contact"
                      className="inline-flex h-10 items-center justify-center rounded-[10px] px-[18px] text-[13px] font-semibold text-white transition hover:-translate-y-0.5 hover:opacity-95"
                      style={{ backgroundColor: accent }}
                    >
                      Get Free Assessment
                    </Link>
                  </div>
                </div>

                <div className="relative flex flex-wrap items-center justify-center gap-4 py-1 sm:min-h-[308px] lg:block">
                  {heroMetrics.map((metric, index) => {
                    const positions = [
                      "sm:absolute sm:left-[98px] sm:top-[2px]",
                      "sm:absolute sm:left-[66px] sm:top-[164px]",
                      "sm:absolute sm:right-[10px] sm:top-[108px]",
                    ];

                    const circleStyles = [
                      "bg-[#efeaff]",
                      "bg-[#e6f2ff]",
                      "bg-[#fff1f2]",
                    ];

                    const labelSizes = [
                      "sm:max-w-[152px] sm:text-[11px] sm:leading-[1.45]",
                      "sm:max-w-[118px] sm:text-[12px] sm:leading-[1.45]",
                      "sm:max-w-[140px] sm:text-[12px] sm:leading-[1.45]",
                    ];

                    return (
                      <article
                        key={metric.label}
                        className={`flex h-[126px] w-[126px] shrink-0 flex-col items-center justify-center rounded-full border-[6px] border-white px-3 text-center shadow-[0_16px_40px_-28px_rgba(11,59,133,0.35)] sm:h-[156px] sm:w-[156px] ${positions[index]} ${circleStyles[index]}`}
                      >
                        <p className="text-[1.85rem] font-semibold tracking-[-0.08em] text-[#0b3b85] sm:text-[2.1rem]">
                          {metric.value}
                        </p>
                        <p
                          className={`mt-1.5 max-w-[100px] text-[10px] leading-5 text-[#0b3b85] ${labelSizes[index]}`}
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
          accent={accent}
        />

        <section className="px-4 pb-10 pt-2 sm:px-6 lg:px-8 lg:pb-12 lg:pt-2">
          <div className="mx-auto grid w-full max-w-[var(--site-max-width)] gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(390px,510px)] lg:items-center xl:gap-12">
            <div className="max-w-[600px]">
              <h2 className="text-[1.85rem] font-semibold tracking-[-0.06em] text-[#0b3b85] sm:text-[2.4rem]">
                {seoGrowthSection.title}
              </h2>
              <div className="mt-5 space-y-5 text-[14px] leading-[1.78] text-black/72 sm:text-[15px]">
                {seoGrowthSection.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="rounded-[24px] border border-[#e4ebfb] bg-white p-3.5 shadow-[0_28px_64px_-40px_rgba(36,91,223,0.32)] sm:p-4">
              <div className="flex items-center justify-between gap-4 text-[11px] font-semibold text-black/46">
                <p>Performance on Search results</p>
                <p className="uppercase tracking-[0.12em]">Export</p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2 text-[10px] font-medium text-black/56">
                {seoGrowthSection.filters.map((filter) => (
                  <span
                    key={filter}
                    className="rounded-full border border-[#e6e0ff] bg-[#fbf9ff] px-3 py-1.5"
                  >
                    {filter}
                  </span>
                ))}
              </div>

              <div className="mt-5 grid gap-2 sm:grid-cols-4">
                {seoGrowthSection.metrics.map((metric) => {
                  const toneClasses =
                    metric.tone === "blue"
                      ? "bg-[#8ca8ff] text-white"
                      : metric.tone === "violet"
                        ? "bg-[#a796ff] text-white"
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

              <div className="mt-4 overflow-hidden rounded-[18px] border border-[#edf1fa] bg-[#fbfcff] p-3 sm:p-3.5">
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
                        <stop
                          offset="0%"
                          stopColor="#a796ff"
                          stopOpacity="0.22"
                        />
                        <stop
                          offset="100%"
                          stopColor="#a796ff"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>

                    <polyline
                      fill="none"
                      stroke="#a796ff"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      points={impressionsPath}
                    />
                    <polyline
                      fill="none"
                      stroke="#8ca8ff"
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

        <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
          <div className="mx-auto w-full max-w-[var(--site-max-width)] rounded-[24px] bg-[#faf6ff] px-6 py-8 md:px-10 lg:px-12 lg:py-9 xl:px-16">
            <div className="grid items-center gap-7 md:gap-10 lg:grid-cols-[390px_minmax(0,1fr)] lg:gap-10 xl:gap-14">
              <div className="flex justify-center">
                <div className="w-full max-w-[390px] overflow-hidden rounded-xl bg-white shadow-md">
                  <div className="grid gap-[8px] bg-white p-[0px] sm:grid-cols-2">
                    {seoUniqueStrengthSection.images.map((image, index) => (
                      <div
                        key={`${image.src}-${index}`}
                        className={`relative overflow-hidden ${
                          index < 2
                            ? "aspect-[0.92/1]"
                            : "aspect-[1.9/1] sm:col-span-2"
                        }`}
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover"
                          style={{ objectPosition: image.objectPosition }}
                          sizes="(max-width: 1024px) 100vw, 390px"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="max-w-[470px]">
                <h2 className="max-w-[460px] text-[24px] font-bold leading-[1.32] tracking-[-0.04em] text-[#0b3b85] md:text-[28px] lg:text-[30px] xl:text-[38px]">
                  {seoUniqueStrengthSection.title}
                </h2>
                <div className="mt-4 max-w-[450px] space-y-4 text-[14px] font-normal leading-[1.62] text-[#5b5b5b] md:text-[14px] lg:text-[14px] xl:text-[15px]">
                  {seoUniqueStrengthSection.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-7">
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center rounded-[6px] border-[2px] px-4 py-2.5 text-[13px] font-medium transition hover:border-transparent hover:bg-[#9c8cff] hover:text-white md:text-[13px] lg:text-[15px]"
                    style={{ borderColor: accent, color: accent }}
                  >
                    Show Price
                  </Link>
                  <Link
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-[6px] border-[2px] px-4 py-2.5 text-[13px] font-medium text-white transition hover:border-transparent hover:opacity-95 md:text-[13px] lg:text-[15px]"
                    style={{ borderColor: accent, backgroundColor: accent }}
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

        <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
          <div className="mx-auto w-full max-w-[var(--site-max-width)]">
            <div className="mx-auto max-w-[820px] text-center">
              <h2 className="text-[1.7rem] font-semibold tracking-[-0.06em] text-[#0b3b85] sm:text-[2.2rem]">
                Compare To other SEO Service
              </h2>
              <div className="mt-3 flex items-center justify-center gap-[10px]">
                <span
                  className="h-[10px] w-[10px] rounded-full"
                  style={{ backgroundColor: accent }}
                />
                <span
                  className="block h-[4px] w-[82px] rounded-full"
                  style={{ backgroundColor: accent }}
                />
                <span
                  className="h-[10px] w-[10px] rounded-full"
                  style={{ backgroundColor: accent }}
                />
              </div>
            </div>

            <div className="mx-auto mt-6 grid max-w-[940px] gap-5 lg:grid-cols-2 lg:gap-6">
              <div className="rounded-[24px] border border-[#e8ddff] bg-[#f2ecff] px-5 py-6 sm:px-6 sm:py-7 lg:min-h-[430px] xl:px-8">
                <p className="text-center text-[1.35rem] font-semibold tracking-[-0.05em] text-[#0b3b85] sm:text-[1.5rem]">
                  ILMIFY Agency
                </p>
                <ul className="mx-auto mt-6 max-w-[350px] space-y-4">
                  {seoComparisonPoints.ourSide.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-[9px] text-[12.5px] leading-[1.42] text-[#0b3b85]/92 sm:text-[13px]"
                    >
                      <Check
                        size={10}
                        strokeWidth={2.5}
                        className="mt-[4px] shrink-0"
                        style={{ color: accent }}
                      />
                      <p>{point}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[24px] border border-[#efeaff] bg-[#fdfcff] px-5 py-6 sm:px-6 sm:py-7 lg:min-h-[430px] xl:px-8">
                <p className="text-center text-[1.35rem] font-semibold tracking-[-0.05em] text-[#0b3b85] sm:text-[1.5rem]">
                  Other Agency
                </p>
                <ul className="mx-auto mt-6 max-w-[350px] space-y-4">
                  {seoComparisonPoints.otherSide.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-[9px] text-[12.5px] leading-[1.42] text-black/78 sm:text-[13px]"
                    >
                      <X
                        size={10}
                        strokeWidth={2.4}
                        className="mt-[4px] shrink-0 text-[#ee5b5b]"
                      />
                      <p>{point}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
          <div className="mx-auto w-full max-w-[var(--site-max-width)]">
            <div className="relative overflow-hidden rounded-[28px] bg-[#f5f0ff] px-5 py-7 sm:px-6 lg:px-8 lg:py-9">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-[-82px] flex justify-center text-[138px] font-semibold uppercase leading-none tracking-[-0.08em] opacity-[0.22] sm:top-[-92px] sm:text-[176px] lg:top-[-102px] lg:text-[220px]"
                style={{
                  WebkitTextStroke: `2px ${accent}`,
                  color: "transparent",
                }}
              >
                ILMIFY
              </div>

              <div className="relative z-10">
                <div className="mx-auto max-w-[500px] text-center">
                  <h2 className="text-[1.7rem] font-semibold tracking-[-0.06em] text-[#0b3b85] sm:text-[2.15rem]">
                    Clients Feedback
                  </h2>
                  <div className="mt-3 flex items-center justify-center gap-[10px]">
                    <span
                      className="h-[10px] w-[10px] rounded-full"
                      style={{ backgroundColor: accent }}
                    />
                    <span
                      className="block h-[4px] w-[82px] rounded-full"
                      style={{ backgroundColor: accent }}
                    />
                    <span
                      className="h-[10px] w-[10px] rounded-full"
                      style={{ backgroundColor: accent }}
                    />
                  </div>
                </div>

                <div className="mt-7 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex flex-wrap items-center gap-4 text-[#0b3b85]">
                    <p className="text-[1.7rem] font-semibold tracking-[-0.06em]">
                      Clutch
                    </p>
                    <span
                      className="hidden h-8 w-px sm:block"
                      style={{ backgroundColor: `${accent}73` }}
                    />
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1 text-[#ff4b3e]">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <Star
                            key={index}
                            size={11}
                            className="fill-current"
                          />
                        ))}
                      </div>
                      <span className="text-[0.88rem] font-medium text-[#0b3b85]">
                        36+ review
                      </span>
                    </div>
                  </div>

                  <Link
                    href="/case-studies"
                    className="inline-flex items-center gap-3 text-[0.88rem] font-semibold text-[#0b3b85]"
                  >
                    <span>See All Review</span>
                    <span
                      className="flex h-8 w-8 items-center justify-center rounded-full border"
                      style={{ borderColor: accent, color: accent }}
                    >
                      <ArrowRight size={15} />
                    </span>
                  </Link>
                </div>

                <div className="mt-6 grid gap-3 lg:grid-cols-3">
                  {seoTestimonials.map((item, index) => (
                    <article
                      key={item.name}
                      className="overflow-hidden rounded-[15px] border border-[#d3deea] bg-white shadow-[0_18px_34px_-28px_rgba(11,59,133,0.25)]"
                    >
                      <div className="flex items-center justify-center bg-[#173945] px-6 py-3.5 text-[1.45rem] font-semibold tracking-[-0.05em] text-white">
                        Clutch
                      </div>

                      <div className="relative flex min-h-[256px] flex-col px-5 py-[18px]">
                        {index === 0 ? (
                          <ChevronLeft
                            size={22}
                            className="absolute left-4 top-[51%] hidden -translate-y-1/2 text-[#0b3b85] lg:block"
                          />
                        ) : null}
                        {index === seoTestimonials.length - 1 ? (
                          <ChevronRight
                            size={22}
                            className="absolute right-4 top-[51%] hidden -translate-y-1/2 text-[#0b3b85] lg:block"
                          />
                        ) : null}

                        <div className="flex flex-wrap items-center gap-3 border-b border-[#e7eef5] pb-4">
                          {renderReviewBrand(item.companyMark)}
                          <span
                            className="hidden h-6 w-px sm:block"
                            style={{ backgroundColor: `${accent}59` }}
                          />
                          <div className="flex items-center gap-1 text-[#ff4b3e]">
                            {Array.from({ length: 5 }).map((_, starIndex) => (
                              <Star
                                key={starIndex}
                                size={10}
                                className="fill-current"
                              />
                            ))}
                          </div>
                        </div>

                        <p className="mt-4 max-w-[250px] text-[0.88rem] font-semibold leading-[1.55] text-[#0b3b85]">
                          {item.quote}
                        </p>

                        <div className="mt-auto pt-4">
                          <p className="text-[0.9rem] font-semibold text-[#0b3b85]">
                            {item.name}
                          </p>
                          <p className="mt-1.5 text-[12px] leading-5 text-black/64">
                            {item.role}, {item.company}
                          </p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <AccordionSection
          eyebrow="Find Answers"
          title="Frequently Asked Question"
          items={seoFaqs}
          accent={accent}
        />

        <section
          id="contact"
          className="px-4 pb-12 pt-4 sm:px-6 lg:px-8 lg:pb-16 lg:pt-6"
        >
          <div className="mx-auto w-full max-w-[var(--site-max-width)]">
            <div className="overflow-hidden rounded-[30px] border border-white/70 bg-[linear-gradient(135deg,#eef6ff_0%,#f8f2ff_100%)] px-6 py-7 shadow-[var(--site-shadow)] sm:px-8 sm:py-9 lg:px-12 lg:py-10">
              <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-9">
                <div className="max-w-[430px]">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#9c8cff]">
                    Book a Free SEO Consultation
                  </p>
                  <h2 className="mt-3 text-[2.15rem] font-semibold leading-[1.02] tracking-[-0.06em] text-[#0b3b85] sm:text-[3rem] lg:text-[3.4rem]">
                    Let&apos;s Plan Your Search Growth.
                  </h2>
                  <p className="mt-4 max-w-[400px] text-[14px] leading-[1.75] text-[#44546f] sm:text-[15px]">
                    Talk with ILMIFY about your rankings, technical blockers,
                    content gaps, and the fastest next steps for sustainable
                    organic growth.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href="mailto:contact@zeeframes.com"
                      className="inline-flex h-11 items-center justify-center rounded-[12px] bg-[#9c8cff] px-5 text-[14px] font-semibold text-white transition hover:opacity-95"
                    >
                      Contact Us
                    </Link>
                    <Link
                      href="#seo-process"
                      className="inline-flex h-11 items-center justify-center gap-2 rounded-[12px] border border-[#c8bbff] bg-white/75 px-5 text-[14px] font-semibold text-[#0b3b85] transition hover:bg-white"
                    >
                      View Services
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>

                <div className="relative">
                  <div className="grid gap-3 md:grid-cols-[1.08fr_0.92fr]">
                    <div className="rounded-[24px] border border-white/80 bg-white/80 p-5 shadow-[0_24px_44px_-32px_rgba(11,59,133,0.24)] backdrop-blur-sm">
                      <div className="flex items-center gap-2 text-[#9c8cff]">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f2edff]">
                          <MessageCircle size={16} />
                        </span>
                        <p className="text-[12px] font-semibold uppercase tracking-[0.16em]">
                          Free Strategy Call
                        </p>
                      </div>

                      <h3 className="mt-4 text-[1.35rem] font-semibold leading-[1.2] tracking-[-0.04em] text-[#0b3b85]">
                        What we cover in one conversation
                      </h3>

                      <div className="mt-5 space-y-3.5">
                        {[
                          "Current SEO blockers and missed opportunities",
                          "Quick-win pages, keywords, and content priorities",
                          "A realistic roadmap for stronger search growth",
                        ].map((item) => (
                          <div key={item} className="flex items-start gap-3">
                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#f1edff] text-[#8a78ff]">
                              <Check size={12} strokeWidth={2.7} />
                            </span>
                            <p className="text-[13px] leading-[1.6] text-[#44546f]">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid gap-3">
                      <div className="rounded-[22px] border border-[#eadfff] bg-[#f8f4ff] p-4">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#9c8cff]">
                          Focus Area
                        </p>
                        <p className="mt-3 text-[1.25rem] font-semibold tracking-[-0.04em] text-[#0b3b85]">
                          SEO Audit
                        </p>
                        <p className="mt-2 text-[13px] leading-[1.6] text-[#44546f]">
                          Technical issues, keyword direction, content gaps, and
                          page-level improvements.
                        </p>
                      </div>

                      <div className="rounded-[22px] bg-[#18345f] p-4 text-white shadow-[0_18px_36px_-28px_rgba(10,37,76,0.5)]">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/68">
                          Fast Reply
                        </p>
                        <p className="mt-3 text-[2rem] font-semibold tracking-[-0.06em]">
                          24h
                        </p>
                        <p className="mt-2 text-[13px] leading-[1.6] text-white/78">
                          We follow up quickly with the right next step, not a
                          generic sales response.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
