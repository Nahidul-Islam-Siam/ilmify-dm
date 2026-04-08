import Image from "next/image";
import Link from "next/link";
import { insightItems } from "@/app/data/insight/Insight";
import Button from "../../button/Button";

export default function InsightsSection() {
  const latestInsights = insightItems.slice(0, 3);
  return (
    <section className=" px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="site-shell">
        <div className="flex flex-col gap-8 sm:gap-10 lg:flex-row lg:items-center lg:justify-between ">
          <div className="max-w-[620px]">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-site-accent sm:text-[12px]">
              Case Studies
            </p>
            <h2 className="mt-5 text-[2rem] font-semibold leading-10 tracking-[-0.06em] text-black ">
              Case studies that inspire
              <br />
              Vision Forward
            </h2>
          </div>

          {/* <div className="lg:pt-1">
            <Link
              href="#contact"
              className="inline-flex h-[54px] items-center justify-center gap-3 rounded-full  px-7 text-[15px] font-semibold transition bg-site-accent text-white hover:bg-white hover:border hover:border-site-accent hover:text-site-accent sm:h-[56px] sm:px-8 sm:text-[16px]"
            >
              Explore More
              <ArrowUpRight size={18} strokeWidth={2.4} />
            </Link>
          </div> */}
          <Button href="#contact" label="Explore More" />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {latestInsights.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-[22px] border border-site-border hover:border-site-accent  transition duration-300 hover:border-site-accent/30 "
            >
              <Link href={`/insights/${item.slug}`} className="">
                <div className="relative aspect-[1.28] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-transparent" />
                  <div className="absolute left-4 top-4 rounded-full border border-white/12 bg-black/35 px-3 py-1 text-[12px] font-semibold text-white backdrop-blur-sm">
                    ZeeFrames
                  </div> */}
                </div>

                <div className="px-5 py-5 sm:px-6 sm:py-6">
                  <h3 className=" font-semibold leading-6 tracking-[-0.04em] text-black transition-colors duration-300 group-hover:text-site-accent">
                    {item.title}
                  </h3>
                  <p className="mt-4  text-gray-800/80 text-xs">
                    {item.excerpt.slice(0, 80)}...
                  </p>
                  <div className="mt-6 text-[14px] font-medium text-gray-800">
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
