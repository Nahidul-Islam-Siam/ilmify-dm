type GoogleAdsCampaignExpectationItem = {
  title: string;
  content: string;
};

type GoogleAdsCampaignExpectationsSectionProps = {
  title: string;
  items: GoogleAdsCampaignExpectationItem[];
  accent?: string;
};

export default function GoogleAdsCampaignExpectationsSection({
  title,
  items,
  accent = "#9c8cff",
}: GoogleAdsCampaignExpectationsSectionProps) {
  const spotlight = ["Search Terms", "Tracking", "Budget Control"];

  return (
    <section className="relative z-[1] bg-white px-4 py-9 sm:px-6 lg:px-8 lg:py-11">
      <div className="mx-auto w-full max-w-[var(--site-max-width)]">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start lg:gap-7">
          <div className="rounded-[24px] border border-[#e9e1ff] bg-[#faf7ff] px-5 py-6 sm:px-6 lg:px-7 lg:py-7">
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.16em]"
              style={{ color: accent }}
            >
              Optimization Focus
            </p>
            <h2 className="mt-3 max-w-[480px] text-[1.55rem] font-semibold leading-[1.18] tracking-[-0.05em] text-[#0b3b85] sm:text-[1.9rem]">
              {title}
            </h2>
            <p className="mt-4 max-w-[470px] text-[13px] leading-[1.72] text-[#51617e] sm:text-[14px]">
              We improve Google Ads by tightening the parts that drive better
              efficiency: search intent, account structure, signal quality,
              landing page fit, and the way budget follows real performance.
            </p>

            <div className="mt-5 flex flex-wrap gap-2.5">
              {spotlight.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#ddd5ff] bg-white px-3 py-1.5 text-[11px] font-semibold text-[#0b3b85]"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-6 rounded-[18px] border border-[#e4dcff] bg-white px-4 py-4 shadow-[0_18px_36px_-30px_rgba(11,59,133,0.12)]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#7d6af1]">
                Audit Priority
              </p>
              <p className="mt-2 text-[1rem] font-semibold tracking-[-0.04em] text-[#0b3b85]">
                Fix the weakest signal before scaling spend
              </p>
              <p className="mt-2 text-[12.5px] leading-[1.65] text-[#5d6982]">
                Better performance usually comes from removing waste, improving
                relevance, and strengthening conversion feedback before pushing
                more budget into the account.
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {items.map((item, index) => (
              <article
                key={item.title}
                className="rounded-[20px] border border-[#e9e1ff] bg-white px-4 py-4 shadow-[0_20px_36px_-32px_rgba(11,59,133,0.16)]"
              >
                <div className="flex items-center gap-2">
                  <span
                    className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f2edff] text-[11px] font-semibold"
                    style={{ color: accent }}
                  >
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <h3 className="text-[0.98rem] font-semibold tracking-[-0.03em] text-[#0b3b85]">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-3 text-[12.5px] leading-[1.68] text-[#5d6982]">
                  {item.content}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
