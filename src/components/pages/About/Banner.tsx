import Link from "next/link";
import { ArrowUpRight, BadgeCheck } from "lucide-react";

const proofCards = [
  {
    title: "4.9 Rating",
    badge: "Clutch",
    note: "Reviewed on",
  },
  {
    title: "Best In US UK",
    badge: "Dribbble",
    note: "Featured on",
  },
  {
    title: "150 M Views",
    badge: "Awards",
    note: "Recognized by",
  },
  {
    title: "Verified",
    badge: "Webflow",
    note: "Reviewed on",
    verified: true,
  },
];

export default function AboutBanner() {
  return (
    <section className="relative overflow-hidden bg-transparent pb-0 pt-28 text-[var(--site-text)] sm:pt-32 lg:pt-36">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-[-120px] h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,rgba(123,31,162,0.20)_50%,rgba(123,31,162,0)_70%)] blur-2xl" />
        <div className="absolute right-[-70px] top-[18%] h-[280px] w-[280px] rounded-full bg-[radial-gradient(circle,rgba(82,244,71,0.20)_50%,rgba(82,244,71,0)_74%)] blur-2xl" />
      </div>

      <div className="mx-auto w-full max-w-[var(--site-max-width)] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1080px] text-center">
          <h1 className="text-balance text-[2.7rem] font-bold uppercase leading-[0.95] tracking-[-0.05em] text-black sm:text-5xl md:text-6xl lg:text-7xl">
            A Strategic UI UX
            <br />
            Design Agency
          </h1>

          <div className="mx-auto mt-8 flex max-w-[980px] items-start justify-center gap-4 sm:gap-6 lg:mt-10">
            <div className="max-w-[760px]">
              <p className="text-[18px] font-medium leading-7 text-black/72 sm:text-[19px] sm:leading-8">
                We Are The Best Product Design Agency For Startups. We Excel In
                UI UX Design, Branding, Web Development and committed to 100%
                satisfaction with every project.
              </p>

              <div className="mt-7 flex justify-center lg:mt-9">
                <Link href="#contact" className="group [perspective:1000px]">
                  <span className="relative block h-[54px] w-[270px] [transform-style:preserve-3d] transition-transform duration-500 group-hover:[transform:rotateX(90deg)] sm:h-[58px] sm:w-[300px]">
                    <span className="absolute inset-0 flex items-center justify-center gap-3 rounded-full border border-purple-800 bg-purple-800 px-7 text-[15px] font-semibold text-white [backface-visibility:hidden] shadow-[0_14px_32px_-14px_rgba(123,31,162,0.42)]">
                      Request a Proposal Today
                      <ArrowUpRight size={18} strokeWidth={2.4} />
                    </span>
                    <span className="absolute inset-0 flex items-center justify-center rounded-full border border-purple-800 bg-white px-7 text-[15px] font-semibold text-purple-800 [backface-visibility:hidden] [transform:rotateX(-90deg)_translateZ(29px)] sm:px-8 sm:text-[16px]">
                      Book a Demo
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 pb-16 sm:mt-16 sm:grid-cols-2 sm:pb-20 lg:mt-20 lg:grid-cols-4 lg:gap-5 lg:pb-24">
          {proofCards.map((card) => (
            <div
              key={card.title}
              className="rounded-[22px] border border-black/10 bg-white/86 p-4 text-center shadow-[var(--site-shadow)]"
            >
              <div className="flex items-center justify-center gap-2 font-semibold tracking-[-0.05em] text-black">
                <span>{card.title}</span>
                {card.verified ? (
                  <BadgeCheck size={20} className="text-purple-800" />
                ) : null}
              </div>

              <div className="mt-5 inline-flex items-center gap-3 rounded-full border border-black/10 bg-white px-3 py-2 text-black/68">
                <span className="rounded-full bg-purple-800 px-3 py-1 text-[8px] font-semibold uppercase tracking-[0.08em] text-white">
                  {card.badge}
                </span>
                <span className="text-xs">{card.note}</span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-black/14 text-black/82">
                  <ArrowUpRight size={14} strokeWidth={2.4} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
