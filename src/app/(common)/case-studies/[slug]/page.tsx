import { caseStudies } from "@/app/data/caseStudies/caseStudies";
import {
  ArrowLeft,
  ArrowUpRight,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export default async function CaseStudyDetails({ params }: Props) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    notFound();
  }

  const [readTime, date] = study.meta.split(" | ");

  return (
    <main className="min-h-screen bg-[#f4f5fb] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto w-full max-w-[var(--site-max-width)] space-y-12">
        <section className="rounded-[28px] border border-[#e8eaf0] bg-white px-6 py-8 shadow-sm sm:px-8 lg:px-10">
          <Link
            href="/case-studies"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[#6c63d4] transition hover:gap-3"
          >
            <ArrowLeft size={15} />
            Back to Case Studies
          </Link>

          <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
            <div className="relative aspect-square w-full shrink-0 overflow-hidden rounded-[22px] bg-gradient-to-br from-[#e8eaf8] to-[#f5e8f5] lg:w-[280px]">
              <div className="absolute bottom-0 left-0 z-10 h-20 w-20 rounded-tr-[50px] bg-[#a8a4e8] opacity-60" />
              <div className="absolute bottom-0 right-0 z-10 h-20 w-20 rounded-tl-[50px] bg-[#e8a4d0] opacity-60" />
              <div className="absolute inset-4 overflow-hidden rounded-[16px] bg-gradient-to-br from-[#ddeeff] via-[#f0f0ff] to-[#ffeeff]">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  sizes="(max-width: 1024px) 90vw, 280px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="flex-1">
              <span className="mb-4 inline-flex items-center gap-1 rounded-full bg-[#eeecff] px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-[#6c63d4]">
                {study.category.split(" ").join(" / ")}
              </span>
              <h1 className="mb-4 text-2xl font-bold leading-tight tracking-tight text-[#1a1a2e] sm:text-3xl lg:text-4xl">
                {study.title}
              </h1>
              <p className="mb-6 text-base leading-relaxed text-[#5a5a6e]">
                {study.excerpt}
              </p>

              <div className="flex flex-wrap gap-2">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-[#e0e0ee] bg-white px-3 py-1 text-[0.78rem] font-medium text-[#444]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="mt-5 text-xs text-[#9898b0]">
                {readTime} | {date}
              </p>
            </div>
          </div>
        </section>

        <section className="w-full space-y-12">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {Object.entries(study.overview).map(([key, value]) => (
              <div
                key={key}
                className="rounded-[14px] border border-[#e8eaf0] bg-white px-4 py-4"
              >
                <p className="mb-1 text-[11px] font-semibold uppercase tracking-widest text-[#9898b0]">
                  {key}
                </p>
                <p className="text-[0.95rem] font-bold leading-snug text-[#1a1a2e]"> 
                  {value}
                </p>
              </div>
            ))}
          </div>

          <div>
            <SectionLabel>The Problem</SectionLabel>
            <div className="rounded-[18px] border border-[#e8eaf0] bg-white p-6 sm:p-8">
              <p className="mb-6 leading-relaxed text-[#5a5a6e]">
                {study.problem.summary}
              </p>
              <ul className="space-y-3">
                {study.problem.points.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm text-[#444]"
                  >
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#eeecff] text-[10px] font-bold text-[#6c63d4]">
                      {index + 1}
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <SectionLabel>Challenges</SectionLabel>
            <div className="grid gap-4 sm:grid-cols-3">
              {study.challenges.map((challenge, index) => (
                <div
                  key={index}
                  className="rounded-[14px] border border-[#e8eaf0] bg-white p-5"
                >
                  <span className="mb-2 block select-none text-2xl font-bold text-[#e8eaf0]">
                    0{index + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-[#5a5a6e]">
                    {challenge}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionLabel>Our Strategy</SectionLabel>
            <div className="space-y-4">
              {study.strategy.map((step, index) => (
                <div
                  key={index}
                  className="flex gap-5 rounded-[16px] border border-[#e8eaf0] bg-white p-5 sm:p-6"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#6c63d4] text-xs font-bold text-white">
                    {index + 1}
                  </div>
                  <div>
                    <p className="mb-1 font-semibold text-[#1a1a2e]">
                      {step.title}
                    </p>
                    <p className="text-sm leading-relaxed text-[#5a5a6e]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionLabel>Results</SectionLabel>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {study.results.map((result, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-1 rounded-[14px] border border-[#e8eaf0] bg-white px-5 py-5"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-[#9898b0]">
                    {result.label}
                  </p>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="text-2xl font-bold text-[#1a1a2e]">
                      {result.value}
                    </span>
                    {result.change === "up" ? (
                      <TrendingUp size={18} className="text-emerald-500" />
                    ) : (
                      <TrendingDown size={18} className="text-rose-500" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionLabel>Conclusion</SectionLabel>
            <div className="rounded-[18px] bg-[#6c63d4] p-6 sm:p-8">
              <p className="text-base leading-relaxed text-white/90">
                {study.conclusion}
              </p>
            </div>
          </div>

          <div className="pb-8 text-center">
            <p className="mb-4 text-[#5a5a6e]">
              Want results like these for your business?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#6c63d4] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#5a52c0]"
            >
              Get in touch
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-[#6c63d4]">
      {children}
    </p>
  );
}
