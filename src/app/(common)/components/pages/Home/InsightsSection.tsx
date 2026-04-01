import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const insightItems = [
  {
    title: "Top 11 UX Mistakes to Avoid on High-Converting Landing Pages",
    excerpt:
      "Learn how to fix the interface patterns that quietly reduce trust, clarity, and conversion momentum across your product funnel.",
    meta: "7 min read | 2026-02-05",
    image: "/assets/idea/home-process-1.png",
  },
  {
    title: "Remote User Research Frameworks for Faster Product Decisions",
    excerpt:
      "Discover practical ways to gather better user feedback, validate flows earlier, and turn research into design direction your team can act on.",
    meta: "6 min read | 2026-01-16",
    image: "/assets/idea/home-process-2.png",
  },
  {
    title: "Improving Website Conversion with a UX-Led Growth Approach",
    excerpt:
      "Explore how structure, messaging hierarchy, and interaction design can improve performance without making the experience feel forced.",
    meta: "8 min read | 2025-11-18",
    image: "/assets/showcase/portfolio-3.png",
  },
];

export default function InsightsSection() {
  return (
    <section className="bg-[#0b0b0b] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col gap-8 sm:gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-[620px]">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#52F447] sm:text-[12px]">
              Insights
            </p>
            <h2 className="mt-5 text-[2.35rem] font-semibold leading-10 tracking-[-0.06em] text-white ">
              Insights That Inspire
              <br />
              Vision Forward
            </h2>
          </div>

          <div className="lg:pt-1">
            <Link
              href="#contact"
              className="inline-flex h-[54px] items-center justify-center gap-3 rounded-full bg-white px-7 text-[15px] font-semibold text-black transition hover:bg-[#52F447] sm:h-[56px] sm:px-8 sm:text-[16px]"
            >
              Explore More
              <ArrowUpRight size={18} strokeWidth={2.4} />
            </Link>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {insightItems.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-[22px] border border-white/10 bg-[#141414] transition duration-300 hover:border-[#52F447]/30 hover:bg-[#171717]"
            >
              <Link href="#contact" className="block">
                <div className="relative aspect-[1.28] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-transparent" />
                  <div className="absolute left-4 top-4 rounded-full border border-white/12 bg-black/35 px-3 py-1 text-[12px] font-semibold text-white backdrop-blur-sm">
                    ZeeFrames
                  </div>
                </div>

                <div className="px-5 py-5 sm:px-6 sm:py-6">
                  <h3 className=" font-semibold leading-6 tracking-[-0.04em] text-white transition-colors duration-300 group-hover:text-[#52F447]">
                    {item.title}
                  </h3>
                  <p className="mt-4  text-white/72 text-sm">{item.excerpt}</p>
                  <div className="mt-6 text-[14px] font-medium text-white/78">
                    {item.meta}
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
