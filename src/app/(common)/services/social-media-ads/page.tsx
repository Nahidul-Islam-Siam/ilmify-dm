import SocialMediaAdsAccordionSection from "@/components/pages/Services/SocialMediaAdsAccordionSection";
import SocialMediaAdsCampaignExpectationsSection from "@/components/pages/Services/SocialMediaAdsCampaignExpectationsSection";
import SocialMediaAdsServicesShowcase from "@/components/pages/Services/SocialMediaAdsServicesShowcase";
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
  socialMediaAdsComparisonPoints,
  socialMediaAdsExpectations,
  socialMediaAdsFaqs,
  socialMediaAdsMetrics,
  socialMediaAdsServiceItems,
  socialMediaAdsTestimonials,
} from "./social-media-ads-page-data";

export default function SocialMediaAdsPage() {
  const accent = "#9c8cff";
  const heroMetrics = [
    socialMediaAdsMetrics[0],
    socialMediaAdsMetrics[2],
    socialMediaAdsMetrics[1],
  ];

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
                    Social Media Ads Services
                  </p>
                  <h1 className="mt-4 max-w-[630px] text-[1.7rem] font-semibold leading-[1.04] tracking-[-0.052em] text-[#0b3b85] sm:text-[2.2rem] lg:text-[2.65rem]">
                    Best Social Media Ads Services to Scale Paid Growth
                  </h1>
                  <p className="mt-5 max-w-[480px] text-[13px] leading-[1.72] text-[#264673] sm:text-[14px]">
                    We build paid social systems around stronger creative,
                    clearer audience structure, smarter remarketing, and
                    reporting that shows what is actually driving growth. The
                    goal is to help your campaigns generate better-quality
                    leads, healthier return, and more stable performance across
                    social platforms.
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

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                  <div className="rounded-[22px] border border-white/70 bg-white/80 p-3 shadow-[0_24px_54px_-36px_rgba(11,59,133,0.35)] backdrop-blur-sm">
                    <div className="relative aspect-[1.62/1] overflow-hidden rounded-[16px]">
                      <Image
                        src="/assets/social-media-ads/tiktok-preview.png"
                        alt="TikTok campaign preview"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 420px"
                      />
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {heroMetrics.map((metric) => (
                        <span
                          key={metric.label}
                          className="rounded-full bg-[#f1edff] px-3 py-1 text-[11px] font-semibold text-[#0b3b85]"
                        >
                          {metric.value} {metric.label}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-2">
                    <div className="rounded-[18px] border border-white/80 bg-white/75 p-2 shadow-[0_18px_36px_-30px_rgba(11,59,133,0.26)]">
                      <div className="relative aspect-[1.6/1] overflow-hidden rounded-[12px]">
                        <Image
                          src="/assets/social-media-ads/meta-preview.png"
                          alt="Meta placement preview"
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 220px"
                        />
                      </div>
                      <p className="mt-2 text-[11px] font-medium text-[#0b3b85]">
                        Meta placement preview
                      </p>
                    </div>

                    <div className="rounded-[18px] border border-white/80 bg-white/75 p-2 shadow-[0_18px_36px_-30px_rgba(11,59,133,0.26)]">
                      <div className="relative aspect-[1.6/1] overflow-hidden rounded-[12px]">
                        <Image
                          src="/assets/social-media-ads/meta-roas.png"
                          alt="ROAS performance snapshot"
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 220px"
                        />
                      </div>
                      <p className="mt-2 text-[11px] font-medium text-[#0b3b85]">
                        ROAS performance snapshot
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SocialMediaAdsServicesShowcase
          id="social-media-ads-services"
          title="Our Social Media Ads Services"
          items={socialMediaAdsServiceItems}
          accent={accent}
        />

        <section className="px-4 pb-10 pt-2 sm:px-6 lg:px-8 lg:pb-12 lg:pt-2">
          <div className="mx-auto grid w-full max-w-[var(--site-max-width)] gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(360px,520px)] lg:items-center xl:gap-12">
            <div className="max-w-[600px]">
              <h2 className="text-[1.85rem] font-semibold tracking-[-0.06em] text-[#0b3b85] sm:text-[2.4rem]">
                388% Paid Social Revenue Growth
              </h2>
              <div className="mt-5 space-y-4 text-[14px] leading-[1.78] text-black/72 sm:text-[15px]">
                <p>
                  We helped a growth-focused brand increase paid social revenue
                  by 388% through a coordinated system built around creative
                  iteration, funnel-specific campaigns, stronger remarketing,
                  and clearer conversion reporting.
                </p>
                <p>
                  By improving audience segmentation, creative refresh cycles,
                  landing page fit, and retargeting structure in one system, the
                  campaigns reduced waste while increasing better-quality leads
                  and more reliable purchase activity.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3 text-[12px] font-semibold text-[#0b3b85]">
                {[
                  "Reach +174%",
                  "ROAS 5.9x",
                  "CPA -28%",
                  "Creative refresh: weekly",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#e4dfff] bg-[#f5f1ff] px-3 py-1.5"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[24px] border border-[#e7e2ff] bg-white p-3 shadow-[0_28px_64px_-40px_rgba(36,91,223,0.28)] sm:p-4">
              <div className="flex items-center justify-between gap-4 text-[11px] font-semibold text-black/46">
                <p>Meta performance overview</p>
                <p className="uppercase tracking-[0.12em]">March</p>
              </div>

              <div className="mt-4 overflow-hidden rounded-[18px] border border-[#edf1fa] bg-[#fbfcff]">
                <div className="relative aspect-[1.62/1]">
                  <Image
                    src="/assets/social-media-ads/meta-performance-overview.png"
                    alt="Meta performance overview"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 520px"
                  />
                </div>
              </div>

              <div className="mt-3 grid gap-2 sm:grid-cols-3">
                {[
                  { label: "Spend", value: "$553" },
                  { label: "Reach", value: "9,081" },
                  { label: "CPM", value: "$5.88" },
                ].map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-[14px] border border-[#e7e2ff] bg-[#f7f4ff] px-3 py-3 text-center"
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8a78ff]">
                      {metric.label}
                    </p>
                    <p className="mt-1 text-[1.1rem] font-semibold text-[#0b3b85]">
                      {metric.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
          <div className="mx-auto w-full max-w-[var(--site-max-width)] rounded-[24px] bg-[#faf6ff] px-6 py-8 md:px-10 lg:px-12 lg:py-9 xl:px-16">
            <div className="grid items-center gap-7 md:gap-10 lg:grid-cols-[minmax(0,1fr)_460px] lg:gap-10 xl:gap-12">
              <div className="max-w-[540px]">
                <p
                  className="text-[11px] font-semibold uppercase tracking-[0.18em]"
                  style={{ color: accent }}
                >
                  Creative + Performance Workflow
                </p>
                <h2 className="mt-3 text-[24px] font-semibold leading-[1.28] tracking-[-0.04em] text-[#0b3b85] md:text-[28px] lg:text-[32px]">
                  How Our Team Turns Creative Ideas Into Paid Social Results
                </h2>
                <div className="mt-4 space-y-4 text-[14px] leading-[1.62] text-[#5b5b5b] md:text-[14px] lg:text-[15px]">
                  <p>
                    Paid social works best when creative, targeting, and
                    reporting are shaped together. We plan campaigns around the
                    offer, the audience stage, and the kind of content each
                    platform responds to most naturally.
                  </p>
                  <p>
                    That means the team is not only launching ads. We are
                    reviewing hooks, checking audience quality, reading
                    performance signals, and refining the campaign direction so
                    the account grows with more control.
                  </p>
                </div>

                <div className="mt-6 rounded-[18px] border border-[#e6ddff] bg-white px-5 py-4 shadow-[0_20px_36px_-30px_rgba(11,59,133,0.14)]">
                  <p className="text-[13px] leading-[1.7] text-[#45536d]">
                    “We keep creative testing, audience refinement, and weekly
                    reporting connected, so paid social decisions are easier to
                    trust and improve.”
                  </p>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    "Creative direction + testing",
                    "Audience quality checks",
                    "Platform-specific execution",
                    "Weekly optimization rhythm",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-[14px] border border-[#e6ddff] bg-white px-4 py-3 text-[13px] font-semibold text-[#0b3b85]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-3">
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="overflow-hidden rounded-[20px] border border-white/70 bg-white shadow-[0_20px_40px_-30px_rgba(11,59,133,0.3)]">
                    <div className="relative aspect-[0.95/1]">
                      <Image
                        src="/assets/office-culture/social-team-meeting.jpeg"
                        alt="ILMIFY team discussing paid social campaign direction"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 220px"
                      />
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-[20px] border border-white/70 bg-white shadow-[0_20px_40px_-30px_rgba(11,59,133,0.3)]">
                    <div className="relative aspect-[0.95/1]">
                      <Image
                        src="/assets/office-culture/social-workstation.png"
                        alt="Team member reviewing campaign work at a workstation"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 220px"
                      />
                    </div>
                  </div>
                </div>

                <div className="overflow-hidden rounded-[20px] border border-white/70 bg-white shadow-[0_20px_40px_-30px_rgba(11,59,133,0.3)]">
                  <div className="relative aspect-[1.45/1]">
                    <Image
                      src="/assets/office-culture/social-team-discussion.jpeg"
                      alt="ILMIFY team discussing campaign performance and next steps"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 460px"
                    />
                  </div>
                </div>

                <div className="rounded-[18px] border border-[#e6ddff] bg-white px-4 py-3 text-[13px] font-semibold text-[#0b3b85]">
                  Real collaboration helps us move faster on creative testing,
                  audience refinement, and reporting decisions.
                </div>
              </div>
            </div>
          </div>
        </section>

        <SocialMediaAdsCampaignExpectationsSection
          title="What you Expect from Our Social Media Ads Campaign?"
          items={socialMediaAdsExpectations}
          imageSrc="/assets/social-media-ads/tiktok-performance-overview.png"
          imageAlt="Paid social performance overview"
        />

        <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
          <div className="mx-auto w-full max-w-[var(--site-max-width)]">
            <div className="mx-auto max-w-[820px] text-center">
              <h2 className="text-[1.7rem] font-semibold tracking-[-0.06em] text-[#0b3b85] sm:text-[2.2rem]">
                Compare To other Social Media Ads Service
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
                  {socialMediaAdsComparisonPoints.ourSide.map((point) => (
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
                  {socialMediaAdsComparisonPoints.otherSide.map((point) => (
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
                        21+ review
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
                  {socialMediaAdsTestimonials.map((item, index) => (
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
                        {index === socialMediaAdsTestimonials.length - 1 ? (
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
                          {"result" in item ? (
                            <span className="ml-auto rounded-full border border-[#e6ddff] bg-[#f6f2ff] px-2.5 py-1 text-[10px] font-semibold text-[#0b3b85]">
                              {item.result}
                            </span>
                          ) : null}
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

        <SocialMediaAdsAccordionSection
          eyebrow="Find Answers"
          title="Frequently Asked Question"
          items={socialMediaAdsFaqs}
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
                    Book a Free Paid Social Consultation
                  </p>
                  <h2 className="mt-3 text-[2.15rem] font-semibold leading-[1.02] tracking-[-0.06em] text-[#0b3b85] sm:text-[3rem] lg:text-[3.4rem]">
                    Let&apos;s Plan Your Paid Social Growth.
                  </h2>
                  <p className="mt-4 max-w-[400px] text-[14px] leading-[1.75] text-[#44546f] sm:text-[15px]">
                    Talk with ILMIFY about creative fatigue, audience structure,
                    remarketing, and the fastest next steps for more efficient
                    social media ad performance.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href="mailto:contact@zeeframes.com"
                      className="inline-flex h-11 items-center justify-center rounded-[12px] bg-[#9c8cff] px-5 text-[14px] font-semibold text-white transition hover:opacity-95"
                    >
                      Contact Us
                    </Link>
                    <Link
                      href="#social-media-ads-services"
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
                          "Creative fatigue, offer angle, and platform fit",
                          "Audience structure, remarketing, and budget leaks",
                          "A clearer roadmap for stronger paid social growth",
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
                          Paid Social Audit
                        </p>
                        <p className="mt-2 text-[13px] leading-[1.6] text-[#44546f]">
                          Creative performance, audience overlap, conversion
                          tracking, offer clarity, and retargeting quality.
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
                          We follow up with practical next steps, creative
                          direction, and where the account needs attention
                          first.
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
