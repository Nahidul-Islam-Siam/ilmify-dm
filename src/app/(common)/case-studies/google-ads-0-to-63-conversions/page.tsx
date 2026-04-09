import { ArrowLeft, ArrowUpRight, TrendingDown, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const accent = "#9c8cff";
const headingColor = "#0b3b85";
const bodyColor = "#4f5f79";
const googleAdsScreenshot = "/assets/case_study/demo_case_study.png";

export default function GoogleAdsConversionsCaseStudyPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-7 sm:px-6 lg:px-8 lg:py-9">
      <div className="mx-auto w-full max-w-5xl">
        <Link
          href="/case-studies"
          className="mb-6 inline-flex items-center gap-2 text-[13px] font-medium text-[#8678f2] transition hover:gap-3"
        >
          <ArrowLeft size={15} />
          Back to Case Studies
        </Link>

        <header className="border-b border-[#eceef4] pb-7">
          <div className="max-w-[920px]">
            <span className="inline-flex rounded-full bg-[#f4f0ff] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8678f2]">
              Paid Advertising
            </span>

            <h1
              className="mt-4 max-w-[900px] text-[1.9rem] font-semibold leading-[1.08] tracking-[-0.055em] sm:text-[2.3rem] lg:text-[2.75rem]"
              style={{ color: headingColor }}
            >
              From 0 Conversions to 63+ Conversions with Google Ads
            </h1>

            <p
              className="mt-4 max-w-[760px] text-[0.97rem] leading-[1.85]"
              style={{ color: bodyColor }}
            >
              Diagnosed and transformed a completely non-performing Google Ads
              account into a scalable, high-converting campaign system using
              structured optimisation and data-driven strategies.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-[#7d869b]">
              <span>5 min read</span>
              <span className="h-1 w-1 rounded-full bg-[#ccd1de]" />
              <span>Jan 15, 2025</span>
              <span className="h-1 w-1 rounded-full bg-[#ccd1de]" />
              <span>Ongoing Optimisation</span>
            </div>
          </div>

          <div className="mt-6 grid gap-x-6 gap-y-3 border-y border-[#eceef4] py-3 sm:grid-cols-2 lg:grid-cols-4">
            <HeaderFact label="Client" value="Multi-location Service Business" />
            <HeaderFact label="Service" value="Google Ads Management" />
            <HeaderFact label="Timeline" value="Ongoing Optimisation" />
            <HeaderFact label="Outcome" value="63+ Conversions from 0" />
          </div>

          <div className="mt-5 overflow-hidden rounded-[8px] border border-[#eceef4] bg-[#fafbfe]">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={googleAdsScreenshot}
                alt="Google Ads case study performance snapshot"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-contain"
              />
            </div>
          </div>
        </header>

        <article className="mx-auto mt-7 max-w-[860px] space-y-7">
          <ArticleSection title="Project Details">
            <p className="text-[0.97rem] leading-7" style={{ color: bodyColor }}>
              A multi-location service business came to us with an active
              Google Ads account that had never produced meaningful results. The
              campaigns were live, but tracking, targeting, and account
              structure were too weak to generate reliable conversions. We
              rebuilt the account around intent, cleaner segmentation, and
              ongoing optimisation so budget could support scalable growth
              instead of wasted clicks.
            </p>
          </ArticleSection>

          <ArticleSection title="The Problem">
            <p className="text-[0.97rem] leading-7" style={{ color: bodyColor }}>
              The account had been running with zero results - no conversions,
              minimal visibility, and a budget that was being wasted without
              any strategic framework in place.
            </p>

            <ol className="mt-4 space-y-3">
              <ProblemPoint accent={accent} index={1}>
                0 conversions recorded across all campaigns
              </ProblemPoint>
              <ProblemPoint accent={accent} index={2}>
                Low impression share of less than 10%
              </ProblemPoint>
              <ProblemPoint accent={accent} index={3}>
                Poor keyword targeting with no intent alignment
              </ProblemPoint>
              <ProblemPoint accent={accent} index={4}>
                Budget not being fully utilised
              </ProblemPoint>
              <ProblemPoint accent={accent} index={5}>
                No structured campaign strategy or segmentation
              </ProblemPoint>
              <ProblemPoint accent={accent} index={6}>
                No scaling framework in place
              </ProblemPoint>
            </ol>
          </ArticleSection>

          <ArticleSection title="The Challenges">
            <div className="space-y-3">
              <ChallengeItem accent={accent}>
                Rebuilding trust in paid ads after a prolonged period of zero
                results
              </ChallengeItem>
              <ChallengeItem accent={accent}>
                Allocating limited budget across multiple locations
                effectively
              </ChallengeItem>
              <ChallengeItem accent={accent}>
                Balancing automated Performance Max campaigns with manual
                Search control
              </ChallengeItem>
            </div>
          </ArticleSection>

          <ArticleSection title="Our Approach to the Solution">
            <ApproachStep accent={accent} index="01" title="Campaign Restructuring">
              Segmented campaigns by location and separated Search campaigns
              from Performance Max to give each channel a focused objective and
              budget.
            </ApproachStep>

            <ApproachStep accent={accent} index="02" title="Keyword Optimisation">
              Added high-intent keywords aligned with buyer intent, refined
              match types for precision targeting, and built a negative keyword
              list to eliminate wasted spend.
            </ApproachStep>

            <ApproachStep
              accent={accent}
              index="03"
              title="Performance Max Optimisation"
            >
              Leveraged Google&apos;s automation layer for broader reach and
              scaling while improving asset groups and conversion signals.
            </ApproachStep>

            <ApproachStep accent={accent} index="04" title="Budget Reallocation">
              Shifted spend away from underperforming campaigns and towards
              proven winners, reducing wasted ad spend and improving overall
              account efficiency.
            </ApproachStep>

            <ApproachStep accent={accent} index="05" title="Continuous Optimisation">
              Monitored CTR, CPC, and conversion data weekly, replaced weak ad
              elements, and scaled campaigns that demonstrated consistent
              performance.
            </ApproachStep>
          </ArticleSection>

          <ArticleSection title="The Results">
            <p className="text-[0.97rem] leading-7" style={{ color: bodyColor }}>
              Once the account structure, targeting, and optimisation process
              were rebuilt, the campaign started producing stable conversions
              and a much healthier performance profile.
            </p>

            <div className="mt-5 divide-y divide-[#eceff6] rounded-[12px] border border-[#e8ebf2] bg-white">
              <ResultRow label="Conversions" value="63+" trend="up" />
              <ResultRow label="Impression Share" value="High" trend="up" />
              <ResultRow label="Wasted Spend" value="Reduced" trend="down" />
              <ResultRow label="Campaign Structure" value="Scalable" trend="up" />
            </div>
          </ArticleSection>

          <ArticleSection title="Conclusion">
            <p className="text-[0.97rem] leading-7" style={{ color: bodyColor }}>
              This case study demonstrates that a structured, data-driven
              approach to Google Ads management can transform a completely
              non-performing account into a scalable conversion machine. By
              combining intelligent campaign architecture with ongoing
              optimisation, we turned zero results into a repeatable, growing
              system.
            </p>
          </ArticleSection>
        </article>

        <section className="mx-auto mt-8 max-w-[860px] border-t border-[#eceef4] pt-6">
          <h2
            className="text-[1.1rem] font-semibold"
            style={{ color: headingColor }}
          >
            Want results like this for your business?
          </h2>
          <p className="mt-2 max-w-2xl text-[0.96rem] leading-7" style={{ color: bodyColor }}>
            We build growth systems around what actually moves visibility,
            leads, and conversion performance.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95"
              style={{ backgroundColor: accent }}
            >
              Start a Project
              <ArrowUpRight size={15} />
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 rounded-full border border-[#dde2ee] bg-white px-6 py-3 text-sm font-semibold text-[#171b2b] transition hover:border-[#c8cde0]"
            >
              More Case Studies
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

function HeaderFact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#9aa1b4]">
        {label}
      </p>
      <p className="mt-1 text-[0.95rem] font-medium leading-6 text-[#0b3b85]">
        {value}
      </p>
    </div>
  );
}

function ArticleSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-[#eceef4] pt-6 first:border-t-0 first:pt-0">
      <h2 className="text-[1.18rem] font-semibold tracking-[-0.03em] text-[#0b3b85]">
        {title}
      </h2>
      <div className="mt-3.5">{children}</div>
    </section>
  );
}

function ProblemPoint({
  accent,
  index,
  children,
}: {
  accent: string;
  index: number;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-4">
      <span
        className="mt-0.5 min-w-5 text-sm font-semibold"
        style={{ color: accent }}
      >
        {index}
      </span>
      <p className="text-[0.97rem] leading-7 text-[#23324c]">{children}</p>
    </li>
  );
}

function ChallengeItem({
  accent,
  children,
}: {
  accent: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-l pl-4" style={{ borderColor: `${accent}55` }}>
      <p className="text-[0.97rem] leading-7 text-[#23324c]">{children}</p>
    </div>
  );
}

function ApproachStep({
  accent,
  index,
  title,
  children,
}: {
  accent: string;
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-[#eceff6] pb-4 last:border-b-0 last:pb-0">
      <div className="flex items-start gap-4">
        <span className="mt-0.5 text-sm font-semibold" style={{ color: accent }}>
          {index}
        </span>
        <div>
          <h3 className="text-[1.05rem] font-semibold text-[#0b3b85]">
            {title}
          </h3>
          <p className="mt-1.5 text-[0.97rem] leading-7 text-[#4f5f79]">
            {children}
          </p>
        </div>
      </div>
    </div>
  );
}

function ResultRow({
  label,
  value,
  trend,
}: {
  label: string;
  value: string;
  trend: "up" | "down";
}) {
  return (
    <div className="flex items-center justify-between gap-4 px-4 py-3.5">
      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#9aa1b4]">
        {label}
      </p>
      <div className="flex items-center gap-2">
        <span className="text-[1rem] font-semibold text-[#0b3b85]">{value}</span>
        {trend === "up" ? (
          <TrendingUp size={15} className="text-emerald-500" />
        ) : (
          <TrendingDown size={15} className="text-rose-500" />
        )}
      </div>
    </div>
  );
}
