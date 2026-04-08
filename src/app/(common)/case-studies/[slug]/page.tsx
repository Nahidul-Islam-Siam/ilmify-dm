// import { insightItems } from "@/app/data/insight/Insight";
// import { ArrowLeft, ArrowRight } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { notFound } from "next/navigation";

// type InsightDetailsProps = {
//   params: Promise<{
//     slug: string;
//   }>;
// };

// export default async function InsightDetails({ params }: InsightDetailsProps) {
//   const { slug } = await params;
//   const insight = insightItems.find((item) => item.slug === slug);

//   if (!insight) {
//     notFound();
//   }

//   const relatedInsights = insightItems
//     .filter((item) => item.slug !== slug)
//     .slice(0, 2);

//   return (
//     <section className="bg-[#0b0b0b] px-4 pb-16 pt-28 text-white sm:px-6 sm:pb-20 sm:pt-16 lg:px-8 lg:pb-24">
//       <div className="mx-auto max-w-[1400px]">
//         <Link
//           href="/insights"
//           className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-white/70 transition hover:text-site-accent"
//         >
//           <ArrowLeft size={15} />
//           Back to insights
//         </Link>

//         <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_330px] lg:items-start">
//           <article className="overflow-hidden rounded-[24px] border border-white/10 bg-[#121212]">
//             <div className="relative aspect-[16/8] overflow-hidden">
//               <Image
//                 src={insight.image}
//                 alt={insight.title}
//                 fill
//                 className="object-cover"
//                 sizes="(max-width: 1024px) 100vw, 820px"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
//             </div>

//             <div className="space-y-5 px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
//               <p className="text-sm font-medium text-site-accent">
//                 {insight.meta}
//               </p>
//               <h1 className=" font-semibold leading-tight tracking-tight text-white sm:text-xl lg:text-3xl">
//                 {insight.title}
//               </h1>
//               <p className="max-w-3xl text-base leading-8 text-white/75 sm:text-lg">
//                 {insight.excerpt}
//               </p>

//               <div className="rounded-2xl border border-white/10 bg-black/35 p-5 sm:p-6">
//                 <p className="text-[15px] leading-8 text-white/75">
//                   This insight page is now connected to your slug route and
//                   reads data directly from insightItems. You can replace this
//                   block with your full article body content while keeping the
//                   same section design.
//                 </p>
//               </div>
//             </div>
//           </article>

//           {relatedInsights.length > 0 && (
//             <aside className="lg:sticky lg:top-28">
//               <div className="rounded-[22px] border border-white/10 bg-[#121212] p-4 sm:p-5">
//                 <h2 className="mb-4 text-xl font-semibold text-white">
//                   Related insights
//                 </h2>
//                 <div className="space-y-4">
//                   {relatedInsights.map((item) => (
//                     <Link
//                       key={item.slug}
//                       href={`/case-studies/${item.slug}`}
//                       className="group block overflow-hidden rounded-[16px] border border-white/10 bg-[#141414] transition hover:border-site-accent/40"
//                     >
//                       <div className="relative aspect-[16/10] overflow-hidden">
//                         <Image
//                           src={item.image}
//                           alt={item.title}
//                           fill
//                           className="object-cover transition duration-500 group-hover:scale-[1.04]"
//                           sizes="(max-width: 1023px) 100vw, 330px"
//                         />
//                       </div>
//                       <div className="space-y-2 px-4 py-4">
//                         <p className="text-[11px] font-semibold text-site-accent">
//                           {item.meta}
//                         </p>
//                         <h3 className="text-xs font-semibold leading-5 text-white">
//                           {item.title}
//                         </h3>
//                         <span className="inline-flex items-center gap-1 text-xs font-medium text-site-accent">
//                           Read
//                           <ArrowRight size={13} />
//                         </span>
//                       </div>
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             </aside>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }

// app/case-studies/[slug]/page.tsx =======> this is new component for case study
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
  params: { slug: string };
};

export function generateStaticParams() {
  return caseStudies.map((s) => ({ slug: s.slug }));
}

export default function InsightDetails({ params }: Props) {
  const study = caseStudies.find((s) => s.slug === params.slug);
  if (!study) notFound();

  const [readTime, date] = study.meta.split(" | ");

  return (
    <main className="min-h-screen bg-[#f4f5fb]">
      {/* Hero */}
      <div className="bg-white border-b border-[#e8eaf0]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
          {/* Back link */}
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm text-[#6c63d4] font-medium mb-8 hover:gap-3 transition-all"
          >
            <ArrowLeft size={15} />
            Back to Case Studies
          </Link>

          <div className="flex flex-col lg:flex-row gap-10 items-start">
            {/* Image */}
            <div className="relative w-full lg:w-[280px] shrink-0 aspect-square rounded-[22px] overflow-hidden bg-gradient-to-br from-[#e8eaf8] to-[#f5e8f5]">
              <div className="absolute bottom-0 left-0 w-20 h-20 rounded-tr-[50px] bg-[#a8a4e8] opacity-60 z-10" />
              <div className="absolute bottom-0 right-0 w-20 h-20 rounded-tl-[50px] bg-[#e8a4d0] opacity-60 z-10" />
              <div className="absolute inset-4 rounded-[16px] overflow-hidden z-0 bg-gradient-to-br from-[#ddeeff] via-[#f0f0ff] to-[#ffeeff]">
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

            {/* Hero content */}
            <div className="flex-1">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#eeecff] text-[#6c63d4] text-[11px] font-semibold tracking-widest uppercase mb-4">
                {study.category.split(" ").join(" • ")}
              </span>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1a1a2e] leading-tight tracking-tight mb-4">
                {study.title}
              </h1>
              <p className="text-[#5a5a6e] text-base leading-relaxed mb-6">
                {study.excerpt}
              </p>
              <div className="flex flex-wrap gap-2">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg border border-[#e0e0ee] bg-white text-[0.78rem] text-[#444] font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-xs text-[#9898b0]">
                {readTime} &nbsp;·&nbsp; {date}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Overview cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {Object.entries(study.overview).map(([key, val]) => (
            <div
              key={key}
              className="rounded-[14px] bg-white border border-[#e8eaf0] px-4 py-4"
            >
              <p className="text-[11px] uppercase tracking-widest font-semibold text-[#9898b0] mb-1">
                {key}
              </p>
              <p className="text-[0.95rem] font-bold text-[#1a1a2e] leading-snug">
                {val}
              </p>
            </div>
          ))}
        </div>

        {/* Problem */}
        <div>
          <SectionLabel>The Problem</SectionLabel>
          <div className="rounded-[18px] bg-white border border-[#e8eaf0] p-6 sm:p-8">
            <p className="text-[#5a5a6e] leading-relaxed mb-6">
              {study.problem.summary}
            </p>
            <ul className="space-y-3">
              {study.problem.points.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-[#444]"
                >
                  <span className="mt-1 shrink-0 w-5 h-5 rounded-full bg-[#eeecff] flex items-center justify-center text-[#6c63d4] font-bold text-[10px]">
                    {i + 1}
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Challenges */}
        <div>
          <SectionLabel>Challenges</SectionLabel>
          <div className="grid sm:grid-cols-3 gap-4">
            {study.challenges.map((c, i) => (
              <div
                key={i}
                className="rounded-[14px] bg-white border border-[#e8eaf0] p-5"
              >
                <span className="block text-2xl font-bold text-[#e8eaf0] mb-2 select-none">
                  0{i + 1}
                </span>
                <p className="text-sm text-[#5a5a6e] leading-relaxed">{c}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Strategy */}
        <div>
          <SectionLabel>Our Strategy</SectionLabel>
          <div className="space-y-4">
            {study.strategy.map((step, i) => (
              <div
                key={i}
                className="flex gap-5 rounded-[16px] bg-white border border-[#e8eaf0] p-5 sm:p-6"
              >
                <div className="shrink-0 w-8 h-8 rounded-full bg-[#6c63d4] flex items-center justify-center text-white text-xs font-bold">
                  {i + 1}
                </div>
                <div>
                  <p className="font-semibold text-[#1a1a2e] mb-1">
                    {step.title}
                  </p>
                  <p className="text-sm text-[#5a5a6e] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Results */}
        <div>
          <SectionLabel>Results</SectionLabel>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {study.results.map((r, i) => (
              <div
                key={i}
                className="rounded-[14px] bg-white border border-[#e8eaf0] px-5 py-5 flex flex-col gap-1"
              >
                <p className="text-[11px] uppercase tracking-widest font-semibold text-[#9898b0]">
                  {r.label}
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-2xl font-bold text-[#1a1a2e]">
                    {r.value}
                  </span>
                  {r.change === "up" ? (
                    <TrendingUp size={18} className="text-emerald-500" />
                  ) : (
                    <TrendingDown size={18} className="text-rose-500" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conclusion */}
        <div>
          <SectionLabel>Conclusion</SectionLabel>
          <div className="rounded-[18px] bg-[#6c63d4] p-6 sm:p-8">
            <p className="text-white/90 leading-relaxed text-base">
              {study.conclusion}
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pb-8">
          <p className="text-[#5a5a6e] mb-4">
            Want results like these for your business?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#6c63d4] text-white font-semibold text-sm hover:bg-[#5a52c0] transition-colors"
          >
            Get in touch <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </main>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#6c63d4] mb-4">
      {children}
    </p>
  );
}
