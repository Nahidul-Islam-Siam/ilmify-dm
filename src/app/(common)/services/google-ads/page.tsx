import GoogleAdsAccordionSection from "@/components/pages/Services/GoogleAdsAccordionSection";
import GoogleAdsCampaignExpectationsSection from "@/components/pages/Services/GoogleAdsCampaignExpectationsSection";
import GoogleAdsServicesShowcase from "@/components/pages/Services/GoogleAdsServicesShowcase";
import {
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Star,
  X,
} from "lucide-react";
import Link from "next/link";
import {
  googleAdsAuditFramework,
  googleAdsComparisonScorecard,
  googleAdsExpectations,
  googleAdsFaqs,
  googleAdsGrowthSection,
  googleAdsMetrics,
  googleAdsServiceItems,
  googleAdsTestimonials,
  googleAdsUniqueStrengthSection,
} from "./google-ads-page-data";

export default function GoogleAdsPage() {
  const accent = "#9c8cff";
  const heroMetrics = [
    googleAdsMetrics[0],
    googleAdsMetrics[2],
    googleAdsMetrics[1],
  ];
  const heroDashboardMetrics = [
    {
      value: heroMetrics[0].value,
      label: heroMetrics[0].label,
      tone: "violet",
    },
    { value: "4.1%", label: "Average CTR", tone: "white" },
    { value: heroMetrics[1].value, label: heroMetrics[1].label, tone: "white" },
    { value: heroMetrics[2].value, label: heroMetrics[2].label, tone: "blue" },
  ];

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

  const conversionsPath = buildChartPath(googleAdsGrowthSection.clicksTrend);
  const valuePath = buildChartPath(googleAdsGrowthSection.impressionsTrend);

  const renderReviewBrand = (mark: string, company: string, index: number) => {
    const tones = [
      {
        bg: "#f1edff",
        text: "#8a78ff",
      },
      {
        bg: "#e8f2ff",
        text: "#5c82db",
      },
      {
        bg: "#fff0f5",
        text: "#d56a92",
      },
    ];

    const tone = tones[index % tones.length];

    return (
      <div className="flex items-center gap-3">
        <span
          className="flex h-9 w-9 items-center justify-center rounded-[10px] text-[11px] font-bold"
          style={{ backgroundColor: tone.bg, color: tone.text }}
        >
          {mark}
        </span>
        <p className="text-[0.98rem] font-semibold tracking-[-0.03em] text-[#0b3b85]">
          {company}
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
                    Google Ads Services
                  </p>
                  <h1 className="mt-4 max-w-[630px] text-[1.7rem] font-semibold leading-[1.04] tracking-[-0.052em] text-[#0b3b85] sm:text-[2.2rem] lg:text-[2.65rem]">
                    Best Google Ads Services to Scale Qualified Leads
                  </h1>
                  <p className="mt-5 max-w-[480px] text-[13px] leading-[1.72] text-[#264673] sm:text-[14px]">
                    We build Google Ads systems around high-intent search,
                    better account structure, stronger landing pages, and clear
                    reporting. The goal is to help your ad spend produce more
                    efficient leads, smarter budget control, and better revenue
                    visibility.
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

                <div className="rounded-[24px] border border-white/85 bg-white/78 p-4 shadow-[0_22px_46px_-30px_rgba(11,59,133,0.3)] backdrop-blur-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="rounded-full bg-[#f2edff] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#7d6af1]">
                      Search only
                    </span>
                    <span className="rounded-full border border-[#ddd5ff] bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#0b3b85]/68">
                      Last 90 Days
                    </span>
                  </div>

                  <div className="mt-4 rounded-[18px] border border-[#ece6ff] bg-[#f8f4ff] p-4">
                    <div className="flex items-center justify-between gap-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#0b3b85]/48">
                      <span>Ad account preview</span>
                      <span>Audit ready</span>
                    </div>

                    <div className="mt-3 rounded-[14px] border border-[#e5defe] bg-white px-3.5 py-3">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#9c8cff]">
                        Search Campaign
                      </p>
                      <p className="mt-1.5 text-[14px] font-semibold leading-[1.35] tracking-[-0.03em] text-[#0b3b85]">
                        google ads management for business growth
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {["High Intent", "Lead Ready", "Tracked"].map(
                          (chip) => (
                            <span
                              key={chip}
                              className="rounded-full border border-[#ebe5ff] bg-[#faf8ff] px-2.5 py-1 text-[10px] font-medium text-[#617197]"
                            >
                              {chip}
                            </span>
                          ),
                        )}
                      </div>
                    </div>

                    <div className="mt-3 grid gap-2 sm:grid-cols-2">
                      {heroDashboardMetrics.map((metric) => {
                        const toneClasses =
                          metric.tone === "violet"
                            ? "bg-[#a796ff] text-white"
                            : metric.tone === "blue"
                              ? "bg-[#8ca8ff] text-white"
                              : "border border-[#e8e3fb] bg-white text-[#0b3b85]";

                        return (
                          <div
                            key={metric.label}
                            className={`rounded-[14px] px-3 py-3 ${toneClasses}`}
                          >
                            <p className="text-[10px] font-medium opacity-80">
                              {metric.label}
                            </p>
                            <p className="mt-1.5 text-[1.3rem] font-semibold tracking-[-0.05em]">
                              {metric.value}
                            </p>
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-3 flex items-center justify-between rounded-[14px] border border-[#ece6ff] bg-white/80 px-3.5 py-3">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#0b3b85]/48">
                          Budget Focus
                        </p>
                        <p className="mt-1 text-[13px] font-semibold text-[#0b3b85]">
                          Intent, tracking, and landing page fit
                        </p>
                      </div>
                      <span className="rounded-full bg-[#f2edff] px-3 py-1 text-[10px] font-semibold text-[#7d6af1]">
                        Optimize
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <GoogleAdsServicesShowcase
          id="google-ads-services"
          title="Our Google Ads Services"
          items={googleAdsServiceItems}
          accent={accent}
        />

        <section className="px-4 pb-10 pt-2 sm:px-6 lg:px-8 lg:pb-12 lg:pt-2">
          <div className="mx-auto grid w-full max-w-[var(--site-max-width)] gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(390px,510px)] lg:items-center xl:gap-12">
            <div className="max-w-[600px]">
              <h2 className="text-[1.85rem] font-semibold tracking-[-0.06em] text-[#0b3b85] sm:text-[2.4rem]">
                {googleAdsGrowthSection.title}
              </h2>
              <div className="mt-5 space-y-5 text-[14px] leading-[1.78] text-black/72 sm:text-[15px]">
                {googleAdsGrowthSection.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="rounded-[24px] border border-[#e4ebfb] bg-white p-3.5 shadow-[0_28px_64px_-40px_rgba(36,91,223,0.32)] sm:p-4">
              <div className="flex items-center justify-between gap-4 text-[11px] font-semibold text-black/46">
                <p>Performance on Google Ads</p>
                <p className="uppercase tracking-[0.12em]">Export</p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2 text-[10px] font-medium text-black/56">
                {googleAdsGrowthSection.filters.map((filter) => (
                  <span
                    key={filter}
                    className="rounded-full border border-[#e6e0ff] bg-[#fbf9ff] px-3 py-1.5"
                  >
                    {filter}
                  </span>
                ))}
              </div>

              <div className="mt-5 grid gap-2 sm:grid-cols-4">
                {googleAdsGrowthSection.metrics.map((metric) => {
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
                    <polyline
                      fill="none"
                      stroke="#a796ff"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      points={valuePath}
                    />
                    <polyline
                      fill="none"
                      stroke="#8ca8ff"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      points={conversionsPath}
                    />
                  </svg>

                  <div className="pointer-events-none absolute inset-x-3 bottom-3 h-[54px] rounded-[18px] bg-[linear-gradient(180deg,rgba(251,252,255,0)_0%,rgba(251,252,255,0.92)_55%,#fbfcff_100%)]" />
                </div>

                <div className="mt-3 flex items-center justify-between text-[10px] text-black/42">
                  <span>1/10/23</span>
                  <span>3/14/23</span>
                  <span>5/20/23</span>
                  <span>7/28/23</span>
                  <span>10/31/23</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
          <div className="mx-auto w-full max-w-[var(--site-max-width)] rounded-[24px] bg-[#faf6ff] px-6 py-8 md:px-10 lg:px-12 lg:py-9 xl:px-16">
            <div className="grid items-center gap-7 md:gap-10 lg:grid-cols-[390px_minmax(0,1fr)] lg:gap-10 xl:gap-14">
              <div className="flex justify-center">
                <div className="w-full max-w-[390px] space-y-3">
                  <div className="rounded-[18px] border border-[#e7dfff] bg-white px-4 py-4 shadow-[0_20px_38px_-30px_rgba(11,59,133,0.18)]">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#9c8cff]">
                      Audit - Fix - Scale
                    </p>
                    <p className="mt-2 text-[1.1rem] font-semibold tracking-[-0.04em] text-[#0b3b85]">
                      A cleaner way to improve account performance
                    </p>
                  </div>

                  {googleAdsAuditFramework.map((item, index) => (
                    <article
                      key={item.step}
                      className="rounded-[18px] border border-[#e9e1ff] bg-white px-4 py-4 shadow-[0_18px_34px_-30px_rgba(11,59,133,0.14)]"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="rounded-full bg-[#f3eeff] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#7d6af1]">
                              {item.step}
                            </span>
                            <p className="text-[0.98rem] font-semibold text-[#0b3b85]">
                              {item.title}
                            </p>
                          </div>
                          <p className="mt-2 text-[12.5px] leading-[1.65] text-[#5e6780]">
                            {item.detail}
                          </p>
                        </div>

                        <span
                          className={`mt-1 hidden rounded-full px-2.5 py-1 text-[10px] font-medium sm:block ${
                            index === 1
                              ? "bg-[#eaf3ff] text-[#4c76d8]"
                              : "bg-[#f7f3ff] text-[#7d6af1]"
                          }`}
                        >
                          {item.tag}
                        </span>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <div className="max-w-[470px]">
                <h2 className="max-w-[460px] text-[24px] font-bold leading-[1.32] tracking-[-0.04em] text-[#0b3b85] md:text-[28px] lg:text-[30px] xl:text-[38px]">
                  {googleAdsUniqueStrengthSection.title}
                </h2>
                <div className="mt-4 max-w-[450px] space-y-4 text-[14px] font-normal leading-[1.62] text-[#5b5b5b] md:text-[14px] lg:text-[14px] xl:text-[15px]">
                  {googleAdsUniqueStrengthSection.paragraphs.map(
                    (paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ),
                  )}
                </div>

                <div className="flex flex-wrap gap-3 pt-7">
                  <Link
                    href="#google-ads-services"
                    className="inline-flex items-center justify-center rounded-[6px] border-[2px] px-4 py-2.5 text-[13px] font-medium transition hover:border-transparent hover:bg-[#9c8cff] hover:text-white md:text-[13px] lg:text-[15px]"
                    style={{ borderColor: accent, color: accent }}
                  >
                    View Service Types
                  </Link>
                  <Link
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-[6px] border-[2px] px-4 py-2.5 text-[13px] font-medium text-white transition hover:border-transparent hover:opacity-95 md:text-[13px] lg:text-[15px]"
                    style={{ borderColor: accent, backgroundColor: accent }}
                  >
                    Book an Audit Review
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <GoogleAdsCampaignExpectationsSection
          title="What We Optimize in Google Ads"
          items={googleAdsExpectations}
          accent={accent}
        />

        <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
          <div className="mx-auto w-full max-w-[var(--site-max-width)]">
            <div className="mx-auto max-w-[820px] text-center">
              <h2 className="text-[1.7rem] font-semibold tracking-[-0.06em] text-[#0b3b85] sm:text-[2.2rem]">
                Compare To other Google Ads Service
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

            <div className="mx-auto mt-6 max-w-[940px] overflow-hidden rounded-[24px] border border-[#ebe5ff] bg-white shadow-[0_24px_48px_-36px_rgba(11,59,133,0.18)]">
              <div className="hidden grid-cols-[190px_1fr_1fr] bg-[#f6f2ff] md:grid">
                <div className="border-r border-[#ebe5ff] px-5 py-4" />
                <div className="border-r border-[#ebe5ff] px-5 py-4 text-center text-[1.1rem] font-semibold tracking-[-0.04em] text-[#0b3b85]">
                  ILMIFY Agency
                </div>
                <div className="px-5 py-4 text-center text-[1.1rem] font-semibold tracking-[-0.04em] text-[#0b3b85]">
                  Other Agency
                </div>
              </div>

              {googleAdsComparisonScorecard.map((item, index) => (
                <div
                  key={item.label}
                  className={`grid md:grid-cols-[190px_1fr_1fr] ${
                    index !== 0 ? "border-t border-[#ebe5ff]" : ""
                  }`}
                >
                  <div className="bg-[#fbf9ff] px-5 py-4 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#7d6af1] md:flex md:items-center md:border-r md:border-[#ebe5ff]">
                    {item.label}
                  </div>

                  <div className="border-t border-[#ebe5ff] px-5 py-4 md:border-r md:border-t-0 md:border-[#ebe5ff]">
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#7d6af1] md:hidden">
                      ILMIFY Agency
                    </p>
                    <div className="flex items-start gap-2.5 text-[13px] leading-[1.55] text-[#0b3b85]">
                      <Check
                        size={12}
                        strokeWidth={2.4}
                        className="mt-[3px] shrink-0"
                        style={{ color: accent }}
                      />
                      <p>{item.ourSide}</p>
                    </div>
                  </div>

                  <div className="border-t border-[#ebe5ff] px-5 py-4 md:border-t-0">
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#0b3b85]/44 md:hidden">
                      Other Agency
                    </p>
                    <div className="flex items-start gap-2.5 text-[13px] leading-[1.55] text-black/76">
                      <X
                        size={12}
                        strokeWidth={2.3}
                        className="mt-[3px] shrink-0 text-[#ee5b5b]"
                      />
                      <p>{item.otherSide}</p>
                    </div>
                  </div>
                </div>
              ))}
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
                        24+ review
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
                  {googleAdsTestimonials.map((item, index) => (
                    <article
                      key={item.name}
                      className="overflow-hidden rounded-[15px] border border-[#d3deea] bg-white shadow-[0_18px_34px_-28px_rgba(11,59,133,0.25)]"
                    >
                      <div className="flex items-center justify-center bg-[#173945] px-6 py-3.5 text-[1.45rem] font-semibold tracking-[-0.05em] text-white">
                        Clutch
                      </div>

                      <div className="relative flex min-h-[242px] flex-col px-5 py-[18px]">
                        {index === 0 ? (
                          <ChevronLeft
                            size={22}
                            className="absolute left-4 top-[51%] hidden -translate-y-1/2 text-[#0b3b85] lg:block"
                          />
                        ) : null}
                        {index === googleAdsTestimonials.length - 1 ? (
                          <ChevronRight
                            size={22}
                            className="absolute right-4 top-[51%] hidden -translate-y-1/2 text-[#0b3b85] lg:block"
                          />
                        ) : null}

                        <div className="flex flex-wrap items-center gap-3 border-b border-[#e7eef5] pb-4">
                          {renderReviewBrand(
                            item.companyMark,
                            item.company,
                            index,
                          )}
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

                        <span className="mt-4 inline-flex w-fit rounded-full bg-[#f2edff] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#7d6af1]">
                          {item.badge}
                        </span>

                        <p className="mt-3 max-w-[250px] text-[0.88rem] font-semibold leading-[1.55] text-[#0b3b85]">
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

        <GoogleAdsAccordionSection
          eyebrow="Find Answers"
          title="Frequently Asked Question"
          items={googleAdsFaqs}
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
                    Book a Free Google Ads Audit
                  </p>
                  <h2 className="mt-3 text-[2.15rem] font-semibold leading-[1.02] tracking-[-0.06em] text-[#0b3b85] sm:text-[3rem] lg:text-[3.4rem]">
                    Find What&apos;s Wasting Budget.
                  </h2>
                  <p className="mt-4 max-w-[400px] text-[14px] leading-[1.75] text-[#44546f] sm:text-[15px]">
                    Talk with ILMIFY about search intent, tracking quality,
                    landing page fit, and the highest-priority fixes for more
                    efficient Google Ads performance.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href="mailto:contact@zeeframes.com"
                      className="inline-flex h-11 items-center justify-center rounded-[12px] bg-[#9c8cff] px-5 text-[14px] font-semibold text-white transition hover:opacity-95"
                    >
                      Contact Us
                    </Link>
                    <Link
                      href="#google-ads-services"
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
                          Free Audit Review
                        </p>
                      </div>

                      <h3 className="mt-4 text-[1.35rem] font-semibold leading-[1.2] tracking-[-0.04em] text-[#0b3b85]">
                        What we review in a quick audit
                      </h3>

                      <div className="mt-5 space-y-3.5">
                        {[
                          "Search terms, wasted spend, and campaign structure",
                          "Tracking accuracy, conversion paths, and signal quality",
                          "A clearer roadmap for more efficient ad growth",
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
                          Search Terms
                        </p>
                        <p className="mt-2 text-[13px] leading-[1.6] text-[#44546f]">
                          Match types, query waste, negatives, and how well
                          search intent lines up with the offer.
                        </p>
                      </div>

                      <div className="rounded-[22px] bg-[#18345f] p-4 text-white shadow-[0_18px_36px_-28px_rgba(10,37,76,0.5)]">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/68">
                          Focus Area
                        </p>
                        <p className="mt-3 text-[1.25rem] font-semibold tracking-[-0.04em]">
                          Tracking + Landing Page Fit
                        </p>
                        <p className="mt-2 text-[13px] leading-[1.6] text-white/78">
                          We review whether conversions are being measured
                          clearly and whether the page supports the promise in
                          the ad.
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
