import { ArrowLeft, ArrowUpRight, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const accent = "#9c8cff";
const headingColor = "#0b3b85";
const bodyColor = "#4f5f79";
const seoScreenshots = [
  "/assets/case_study/seo-1.png",
  "/assets/case_study/seo-2.png",
  "/assets/case_study/seo-3.png",
  "/assets/case_study/seo-4.png",
];

export default function LnoBoutiqueSeoGrowthCaseStudyPage() {
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
          <div className="max-w-[930px]">
            <span className="inline-flex rounded-full bg-[#f4f0ff] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8678f2]">
              Local SEO
            </span>

            <h1
              className="mt-4 max-w-[920px] text-[1.9rem] font-semibold leading-[1.08] tracking-[-0.055em] sm:text-[2.3rem] lg:text-[2.75rem]"
              style={{ color: headingColor }}
            >
              LNO Boutique Grows Organic Clicks by 219% and Impressions by 351%
              in Under Three Months
            </h1>

            <p
              className="mt-4 max-w-[760px] text-[0.97rem] leading-[1.85]"
              style={{ color: bodyColor }}
            >
              Through tailored SEO, website optimisation, Google Business
              Profile management, and local citation building, LNO Boutique
              improved visibility across local search and turned that visibility
              into stronger clicks, interactions, calls, and direction
              requests.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-[#7d869b]">
              <span>6 min read</span>
              <span className="h-1 w-1 rounded-full bg-[#ccd1de]" />
              <span>Feb 10, 2025</span>
              <span className="h-1 w-1 rounded-full bg-[#ccd1de]" />
              <span>Under 3 Months</span>
            </div>
          </div>

          <div className="mt-6 grid gap-x-6 gap-y-3 border-y border-[#eceef4] py-3 sm:grid-cols-2 lg:grid-cols-4">
            <HeaderFact label="Client" value="LNO Boutique" />
            <HeaderFact label="Service" value="Local SEO & GMB Optimisation" />
            <HeaderFact label="Timeline" value="Under 3 Months" />
            <HeaderFact
              label="Outcome"
              value="219% Click Growth / 351% Impressions"
            />
          </div>

          <div className="mt-5 overflow-hidden rounded-[8px] border border-[#eceef4] bg-[#fafbfe]">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={seoScreenshots[0]}
                alt="LNO Boutique SEO performance snapshot"
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
              LNO Boutique operated in a highly competitive local market with a
              functional website and Google Business Profile, but visibility was
              too low to drive consistent growth. The goal was to improve local
              search performance, increase website traffic, and generate more
              high-intent customer actions through a focused local SEO campaign.
            </p>
          </ArticleSection>

          <ArticleSection title="The Problem">
            <p className="text-[0.97rem] leading-7" style={{ color: bodyColor }}>
              LNO Boutique already had a working website and a Google Business
              Profile, but neither asset was performing strongly enough in local
              search. The business was missing visibility at the exact moment
              nearby customers were looking for relevant services.
            </p>

            <ol className="mt-4 space-y-3">
              <ProblemPoint accent={accent} index={1}>
                Limited online visibility across important local search terms
              </ProblemPoint>
              <ProblemPoint accent={accent} index={2}>
                Low website traffic despite having a live and functional website
              </ProblemPoint>
              <ProblemPoint accent={accent} index={3}>
                Underperforming Google Business Profile with weak optimisation
              </ProblemPoint>
              <ProblemPoint accent={accent} index={4}>
                Lack of high-quality citations across key local directories
              </ProblemPoint>
            </ol>
          </ArticleSection>

          <ArticleSection title="The Challenges">
            <div className="space-y-3">
              <ChallengeItem accent={accent}>
                Highly competitive local market with established competitors
                already ranking well
              </ChallengeItem>
              <ChallengeItem accent={accent}>
                Inconsistent online presence across local platforms and
                directories
              </ChallengeItem>
              <ChallengeItem accent={accent}>
                Lack of structured data on the website, limiting search engine
                understanding
              </ChallengeItem>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <ScreenshotCard
                src={seoScreenshots[1]}
                alt="LNO Boutique case study screenshot two"
                ratio="aspect-[4/3]"
              />
              <ScreenshotCard
                src={seoScreenshots[2]}
                alt="LNO Boutique case study screenshot three"
                ratio="aspect-[4/3]"
              />
            </div>
          </ArticleSection>

          <ArticleSection title="Our Approach to the Solution">
            <ApproachStep accent={accent} index="01" title="SEO Audit">
              We audited the website and Google Business Profile to identify
              issues in technical SEO, content structure, citations, and local
              search visibility.
            </ApproachStep>

            <ApproachStep accent={accent} index="02" title="GMB Optimisation">
              We improved the Google Business Profile by refining business
              details, strengthening relevance, and making the profile more
              attractive to both searchers and local ranking systems.
            </ApproachStep>

            <ApproachStep accent={accent} index="03" title="Website Optimisation">
              We enhanced on-page SEO with local keywords, mobile
              improvements, content updates, faster performance, and structured
              data to support stronger search visibility.
            </ApproachStep>

            <ApproachStep
              accent={accent}
              index="04"
              title="Local Citation & Link Building"
            >
              We built consistent local citations and relevant backlinks to
              strengthen trust signals, authority, and location-based search
              performance.
            </ApproachStep>
          </ArticleSection>

          <ArticleSection title="The Results">
            <p className="text-[0.97rem] leading-7" style={{ color: bodyColor }}>
              After the campaign improvements were implemented, the business saw
              stronger visibility, more qualified traffic, and better
              engagement across the local channels that mattered most.
            </p>

            <div className="mt-5 divide-y divide-[#eceff6] rounded-[12px] border border-[#e8ebf2] bg-white">
              <ResultRow label="Organic Clicks" value="+219%" />
              <ResultRow label="Impressions" value="+351%" />
              <ResultRow label="GMB Clicks" value="+1,218.6%" />
              <ResultRow label="Profile Interactions" value="+540.7%" />
              <ResultRow label="Calls from GMB" value="+455%" />
              <ResultRow label="Direction Requests" value="+349.5%" />
            </div>

            <div className="mt-5 overflow-hidden rounded-[8px] border border-[#eceef4] bg-[#fafbfe]">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={seoScreenshots[3]}
                  alt="LNO Boutique case study final results screenshot"
                  fill
                  sizes="(max-width: 1024px) 100vw, 768px"
                  className="object-contain"
                />
              </div>
            </div>
          </ArticleSection>

          <ArticleSection title="Conclusion">
            <p className="text-[0.97rem] leading-7" style={{ color: bodyColor }}>
              This campaign shows how strong local SEO execution can turn an
              underperforming digital presence into a measurable growth channel.
              By improving website visibility, Google Business Profile
              performance, and local authority signals together, LNO Boutique
              achieved meaningful gains across every important local metric in
              less than three months.
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

function ScreenshotCard({
  src,
  alt,
  ratio,
}: {
  src: string;
  alt: string;
  ratio: string;
}) {
  return (
    <div className="overflow-hidden rounded-[8px] border border-[#eceef4] bg-[#fafbfe]">
      <div className={`relative w-full ${ratio}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          className="object-contain"
        />
      </div>
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

function ResultRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 px-4 py-3.5">
      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#9aa1b4]">
        {label}
      </p>
      <div className="flex items-center gap-2">
        <span className="text-[1rem] font-semibold text-[#0b3b85]">{value}</span>
        <TrendingUp size={15} className="text-emerald-500" />
      </div>
    </div>
  );
}
