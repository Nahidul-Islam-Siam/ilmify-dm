import { ArrowLeft, ArrowUpRight, TrendingDown, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const accent = "#9c8cff";
const headingColor = "#0b3b85";
const bodyColor = "#4f5f79";
const googleAdsScreenshots = [
  "/assets/case_study/google-ads-1.png",
  "/assets/case_study/google-ads-2.png",
];

export default function GoogleAdsConversionsCaseStudyPage() {
  return (
    <main className="min-h-screen bg-transparent px-4 py-6 text-[var(--site-text)] sm:px-6 lg:px-8 lg:py-8">
      <div className="relative mx-auto w-full max-w-5xl">
        <div className="pointer-events-none absolute left-[-120px] top-[24px] h-[240px] w-[240px] rounded-full bg-[radial-gradient(circle,rgba(156,140,255,0.12)_0%,rgba(156,140,255,0)_72%)] blur-3xl" />
        <div className="pointer-events-none absolute right-[-90px] top-[210px] h-[240px] w-[240px] rounded-full bg-[radial-gradient(circle,rgba(180,207,255,0.14)_0%,rgba(180,207,255,0)_74%)] blur-3xl" />

        <div className="relative">
          <Link
            href="/case-studies"
            className="mb-5 inline-flex items-center gap-2 text-[13px] font-medium text-[#8678f2] transition hover:gap-3"
          >
            <ArrowLeft size={15} />
            Back to Case Studies
          </Link>

          <header className="rounded-[26px] border border-white/70 bg-[#f4f0ff] px-5 py-6 shadow-[var(--site-shadow)] sm:px-7 sm:py-7 lg:px-9 lg:py-8">
            <div className="max-w-[880px]">
              <span className="inline-flex rounded-full bg-white/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8678f2]">
                Google Ads Case Study
              </span>

              <h1
                className="mt-4 max-w-[860px] text-[1.72rem] font-semibold leading-[1.08] tracking-[-0.055em] sm:text-[2.1rem] lg:text-[2.45rem]"
                style={{ color: headingColor }}
              >
                From 0 Conversions to 63+ Conversions with Google Ads
              </h1>

              <p
                className="mt-4 max-w-[720px] text-[0.95rem] leading-[1.8]"
                style={{ color: bodyColor }}
              >
                We rebuilt a non-performing Google Ads account into a cleaner,
                conversion-focused campaign system by restructuring campaigns,
                refining keyword intent, improving Performance Max signals, and
                reallocating spend around what was actually working.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-[12.5px] text-[#7d869b]">
                <span>5 min read</span>
                <span className="h-1 w-1 rounded-full bg-[#ccd1de]" />
                <span>Jan 15, 2025</span>
                <span className="h-1 w-1 rounded-full bg-[#ccd1de]" />
                <span>Ongoing Optimisation</span>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <HeaderFact label="Client" value="Multi-location Service Brand" />
              <HeaderFact label="Service" value="Google Ads Management" />
              <HeaderFact label="Timeline" value="Ongoing Optimisation" />
              <HeaderFact label="Outcome" value="63+ Conversions from 0" />
            </div>

            <div className="mt-5 overflow-hidden rounded-[12px] border border-[#e7e2ff] bg-white">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={googleAdsScreenshots[0]}
                  alt="Google Ads case study initial performance snapshot"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 896px"
                  className="object-contain"
                />
              </div>
            </div>
          </header>

          <article className="mx-auto mt-7 max-w-[840px] space-y-6">
            <ArticleSection title="Project Details">
              <p className="text-[0.97rem] leading-7" style={{ color: bodyColor }}>
                The project involved diagnosing and optimising an
                underperforming Google Ads account that had been generating zero
                conversions. The objective was to rebuild the account into a
                more stable performance system that could generate qualified
                leads while giving the client a clearer path to scale.
              </p>
            </ArticleSection>

            <ArticleSection title="Initial Situation (Before Optimisation)">
              <ol className="space-y-3">
                <ProblemPoint accent={accent} index={1}>
                  0 conversions recorded across the account
                </ProblemPoint>
                <ProblemPoint accent={accent} index={2}>
                  Low impression share and weak search visibility
                </ProblemPoint>
                <ProblemPoint accent={accent} index={3}>
                  Poor keyword targeting with weak intent alignment
                </ProblemPoint>
                <ProblemPoint accent={accent} index={4}>
                  Budget spread across campaigns without clear structure
                </ProblemPoint>
                <ProblemPoint accent={accent} index={5}>
                  No reliable scaling framework for future growth
                </ProblemPoint>
              </ol>
            </ArticleSection>

            <ArticleSection title="Detailed Strategy Implementation">
              <ApproachStep accent={accent} index="01" title="Campaign Restructuring">
                We segmented campaigns by location and separated Search
                campaigns from Performance Max to give each campaign type a
                clearer role, cleaner budget control, and better visibility
                into results.
              </ApproachStep>

              <ApproachStep accent={accent} index="02" title="Keyword Intent Refinement">
                We refined keyword selection around higher-intent search
                behavior, adjusted match types, and expanded negative keywords
                to cut down irrelevant traffic and improve spend efficiency.
              </ApproachStep>

              <ApproachStep accent={accent} index="03" title="Performance Max Cleanup">
                Asset groups, campaign signals, and supporting creative
                elements were improved so Performance Max could contribute more
                meaningfully instead of absorbing spend without a clear return.
              </ApproachStep>

              <ApproachStep accent={accent} index="04" title="Budget Reallocation">
                Budget was reallocated away from weaker areas and into the
                campaigns showing stronger intent and better conversion
                behavior, which gave the account a healthier path to scale.
              </ApproachStep>
            </ArticleSection>

            <ArticleSection title="Search and Performance Max Campaign Notes">
              <div className="space-y-3">
                <ChallengeItem accent={accent}>
                  Search campaigns were tightened around service intent and
                  location relevance.
                </ChallengeItem>
                <ChallengeItem accent={accent}>
                  Match types and negatives were used to reduce wasted spend
                  from low-quality traffic.
                </ChallengeItem>
                <ChallengeItem accent={accent}>
                  Performance Max was adjusted to support conversion goals more
                  clearly instead of functioning as a loose spend bucket.
                </ChallengeItem>
                <ChallengeItem accent={accent}>
                  Underperforming structures were reduced so budget could move
                  toward campaigns with stronger lead potential.
                </ChallengeItem>
              </div>
            </ArticleSection>

            <ArticleSection title="Final Performance Results">
              <div className="divide-y divide-[#eceff6] rounded-[12px] border border-[#e8ebf2] bg-white">
                <ResultRow label="Conversions" value="63+" trend="up" />
                <ResultRow label="Impression Share" value="High" trend="up" />
                <ResultRow label="Wasted Spend" value="Reduced" trend="down" />
                <ResultRow label="Campaign Structure" value="Scalable" trend="up" />
              </div>

              <div className="mt-4 overflow-hidden rounded-[8px] border border-[#eceef4] bg-[#fafbfe]">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src={googleAdsScreenshots[1]}
                    alt="Google Ads case study final performance snapshot"
                    fill
                    sizes="(max-width: 1024px) 100vw, 840px"
                    className="object-contain"
                  />
                </div>
              </div>
            </ArticleSection>

            <ArticleSection title="Performance Transformation Analysis">
              <p className="text-[0.97rem] leading-7" style={{ color: bodyColor }}>
                The account moved from being a non-performing spend sink into a
                more stable system generating real conversions. The biggest
                shift came from cleaning up structure, aligning campaigns with
                search intent, and making budget decisions based on actual
                performance signals rather than assumptions.
              </p>
            </ArticleSection>

            <ArticleSection title="Conclusion">
              <p className="text-[0.97rem] leading-7" style={{ color: bodyColor }}>
                This case study demonstrates a practical approach to Google Ads
                optimisation: simplify the account, strengthen intent matching,
                reduce waste, and scale what proves itself. Once those pieces
                were in place, the account was able to produce measurable
                conversions and become far more reliable.
              </p>
            </ArticleSection>
          </article>

          <section className="mx-auto mt-7 max-w-[840px] rounded-[22px] border border-[#ece5ff] bg-[#faf6ff] px-6 py-6">
            <h2
              className="text-[1.08rem] font-semibold"
              style={{ color: headingColor }}
            >
              Want results like this for your business?
            </h2>
            <p
              className="mt-2 max-w-2xl text-[0.96rem] leading-7"
              style={{ color: bodyColor }}
            >
              We build Google Ads systems around cleaner intent, stronger
              conversion tracking, and better budget decisions.
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
      </div>
    </main>
  );
}

function HeaderFact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[14px] border border-[#e8e0ff] bg-white/84 px-4 py-3 shadow-[0_14px_30px_-28px_rgba(11,59,133,0.18)]">
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
    <section className="border-t border-[#eceef4] pt-5 first:border-t-0 first:pt-0">
      <h2 className="text-[1.12rem] font-semibold tracking-[-0.03em] text-[#0b3b85]">
        {title}
      </h2>
      <div className="mt-3">{children}</div>
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
      <p className="text-[0.95rem] leading-[1.8] text-[#23324c]">{children}</p>
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
      <p className="text-[0.95rem] leading-[1.8] text-[#23324c]">{children}</p>
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
          <h3 className="text-[1rem] font-semibold text-[#0b3b85]">
            {title}
          </h3>
          <p className="mt-1.5 text-[0.95rem] leading-[1.8] text-[#4f5f79]">
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
