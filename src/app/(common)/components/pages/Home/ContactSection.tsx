import { Check, Mail, MoveRight } from "lucide-react";

const people = [
  {
    name: "Mohammad Ali",
    role: "Director & Co-Founder",
    initials: "MA",
  },
  {
    name: "Muhammad Babar",
    role: "Director & Co-Founder",
    initials: "MB",
  },
];

const bulletPoints = [
  "You will hear from us within one business day.",
  "Our team will gather your project details and put together a clear brief.",
  "We will provide a tailored estimate and share a proposal for your review.",
];

const trustBadges = [
  "Trusted Tech Partners",
  "Trustpilot",
  "Design Quality Certified",
  "2025 Growth Award",
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-[#0b0b0b] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_0.92fr] lg:items-start lg:gap-14 xl:gap-24">
          <div className="max-w-[640px]">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-site-accent sm:text-[12px]">
              Contact Us
            </p>

            <h2 className="mt-5 text-[2.45rem] font-semibold leading-10 tracking-[-0.06em] text-white">
              Lets Work On What You
              <br />
              Care About!
            </h2>

            <p className="mt-5 max-w-[620px] text-[16px] leading-8 text-white/78 sm:text-[17px]">
              Got a project in mind? From a full UI UX refresh to a brand-new
              digital experience, we are ready to help. Lets turn your vision
              into a clear, scalable product direction.
            </p>

            <div className="mt-8 flex flex-col gap-5 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center lg:gap-6">
              {people.map((person, index) => (
                <div key={person.name} className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-site-accent/25 bg-[linear-gradient(135deg,rgba(82,244,71,0.22),rgba(255,255,255,0.05))] text-sm font-semibold text-white shadow-[0_0_24px_rgba(82,244,71,0.12)]">
                    {person.initials}
                  </div>
                  <div>
                    <div className="text-[1.1rem] font-semibold text-white">
                      {person.name}
                    </div>
                    <div className="mt-1 text-[15px] text-white/72">
                      {person.role}
                    </div>
                  </div>
                  {index === 0 ? (
                    <div className="ml-2 hidden h-9 w-px bg-white/12 sm:block" />
                  ) : null}
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-4 sm:mt-10">
              {bulletPoints.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 text-white/82"
                >
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/90 text-black">
                    <Check size={13} strokeWidth={2.8} />
                  </span>
                  <p className="text-[15px] leading-7 sm:text-[16px]">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-white/8 pt-8 sm:gap-5 sm:pt-10">
              {trustBadges.map((badge) => (
                <div
                  key={badge}
                  className="inline-flex h-12 items-center rounded-full border border-white/10 bg-white/5 px-4 text-[13px] font-medium text-white/78 backdrop-blur-sm"
                >
                  {badge}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[26px] border border-white/10 bg-[#171717] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.28)] sm:rounded-[30px] sm:p-6 lg:p-7">
            <form className="space-y-4 sm:space-y-5">
              <input
                type="text"
                placeholder="Full Name*"
                className="h-[54px] w-full rounded-[14px] border border-white/10 bg-[#1c1c1c] px-4 text-[15px] text-white outline-none transition placeholder:text-white/38 focus:border-site-accent/55"
              />
              <input
                type="email"
                placeholder="Email*"
                className="h-[54px] w-full rounded-[14px] border border-white/10 bg-[#1c1c1c] px-4 text-[15px] text-white outline-none transition placeholder:text-white/38 focus:border-site-accent/55"
              />
              <input
                type="text"
                placeholder="Company"
                className="h-[54px] w-full rounded-[14px] border border-white/10 bg-[#1c1c1c] px-4 text-[15px] text-white outline-none transition placeholder:text-white/38 focus:border-site-accent/55"
              />
              <input
                type="text"
                placeholder="Contact"
                className="h-[54px] w-full rounded-[14px] border border-white/10 bg-[#1c1c1c] px-4 text-[15px] text-white outline-none transition placeholder:text-white/38 focus:border-site-accent/55"
              />
              <textarea
                placeholder="Tell us about your project*"
                rows={6}
                className="w-full rounded-[14px] border border-white/10 bg-[#1c1c1c] px-4 py-4 text-[15px] text-white outline-none transition placeholder:text-white/38 focus:border-site-accent/55"
              />

              <button
                type="submit"
                className="inline-flex h-[56px] w-full items-center justify-center gap-3 rounded-full border border-site-accent bg-[linear-gradient(180deg,rgba(82,244,71,0.14),rgba(82,244,71,0.05))] text-[17px] font-semibold text-white transition hover:bg-site-accent hover:text-black"
              >
                Submit Inquiry
                <MoveRight size={18} strokeWidth={2.4} />
              </button>
            </form>

            <div className="mt-8 border-t border-white/8 pt-7">
              <p className="text-[15px] text-white/76">
                Hate contact forms? Direct Contact.
              </p>
              <div className="mt-4 inline-flex items-center gap-3 text-[15px] text-white/86 sm:text-[16px]">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5">
                  <Mail size={16} />
                </span>
                contact@zeeframes.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
