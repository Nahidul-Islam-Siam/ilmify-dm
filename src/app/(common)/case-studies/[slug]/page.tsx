import { insightItems } from "@/app/data/insight/Insight";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type InsightDetailsProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function InsightDetails({ params }: InsightDetailsProps) {
  const { slug } = await params;
  const insight = insightItems.find((item) => item.slug === slug);

  if (!insight) {
    notFound();
  }

  const relatedInsights = insightItems
    .filter((item) => item.slug !== slug)
    .slice(0, 2);

  return (
    <section className="bg-[#0b0b0b] px-4 pb-16 pt-28 text-white sm:px-6 sm:pb-20 sm:pt-16 lg:px-8 lg:pb-24">
      <div className="site-shell">
        <Link
          href="/insights"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-white/70 transition hover:text-site-accent"
        >
          <ArrowLeft size={15} />
          Back to insights
        </Link>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_330px] lg:items-start">
          <article className="overflow-hidden rounded-[24px] border border-white/10 bg-[#121212]">
            <div className="relative aspect-[16/8] overflow-hidden">
              <Image
                src={insight.image}
                alt={insight.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 820px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
            </div>

            <div className="space-y-5 px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
              <p className="text-sm font-medium text-site-accent">
                {insight.meta}
              </p>
              <h1 className=" font-semibold leading-tight tracking-tight text-white sm:text-xl lg:text-3xl">
                {insight.title}
              </h1>
              <p className="max-w-3xl text-base leading-8 text-white/75 sm:text-lg">
                {insight.excerpt}
              </p>

              <div className="rounded-2xl border border-white/10 bg-black/35 p-5 sm:p-6">
                <p className="text-[15px] leading-8 text-white/75">
                  This insight page is now connected to your slug route and
                  reads data directly from insightItems. You can replace this
                  block with your full article body content while keeping the
                  same section design.
                </p>
              </div>
            </div>
          </article>

          {relatedInsights.length > 0 && (
            <aside className="lg:sticky lg:top-28">
              <div className="rounded-[22px] border border-white/10 bg-[#121212] p-4 sm:p-5">
                <h2 className="mb-4 text-xl font-semibold text-white">
                  Related insights
                </h2>
                <div className="space-y-4">
                  {relatedInsights.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/case-studies/${item.slug}`}
                      className="group block overflow-hidden rounded-[16px] border border-white/10 bg-[#141414] transition hover:border-site-accent/40"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover transition duration-500 group-hover:scale-[1.04]"
                          sizes="(max-width: 1023px) 100vw, 330px"
                        />
                      </div>
                      <div className="space-y-2 px-4 py-4">
                        <p className="text-[11px] font-semibold text-site-accent">
                          {item.meta}
                        </p>
                        <h3 className="text-xs font-semibold leading-5 text-white">
                          {item.title}
                        </h3>
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-site-accent">
                          Read
                          <ArrowRight size={13} />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          )}
        </div>
      </div>
    </section>
  );
}
