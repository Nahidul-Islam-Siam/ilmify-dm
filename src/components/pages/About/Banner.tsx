
import { ArrowUpRight, BadgeCheck } from "lucide-react";
import FlipButton from "@/components/button/FlipButton";

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
          <h1 className="text-balance text-[2.7rem] font-bold uppercase leading-10 tracking-[-0.03em] text-black sm:text-5xl md:text-6xl lg:text-7xl">
            A STRATEGIC DIGITAL
            <br />
            MARKETING AGENCY
          </h1>

          <div className="mx-auto mt-8 flex max-w-[980px] items-start justify-center gap-4 sm:gap-6 lg:mt-10">
            <div className="max-w-[850px]">
              <p className="text-[18px] font-medium  text-black/72 sm:text-[19px] sm:leading-6">
                We help brands grow faster through performance-driven digital
                marketing. From social media management and paid advertising to
                lead generation and campaign optimization, we create strategies
                built to attract, convert, and scale.
              </p>

              <div className="mt-7 flex justify-center lg:mt-9">
                <FlipButton label="Request a Growth Proposal" flipLabel="Book a Demo" href="/#contact" width="w-[340px]"/>
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
