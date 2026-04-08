"use client";
import { Check, Mail, MoveRight } from "lucide-react";

const people = [
  {
    id: 1,
    name: "Saruar Zahan",
    role: "Director & Co-Founder",
    initials: "SZ",
  },
  {
    id: 2,
    name: "Saruar Zahan",
    role: "Director & Co-Founder",
    initials: "SZ",
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
      className="relative overflow-hidden bg-transparent px-4 py-16 text-[var(--site-text)] sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-[-70px] h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,rgba(123,31,162,0.2)_0%,rgba(123,31,162,0)_70%)] blur-2xl animate-contact-float-a" />
        <div className="absolute right-[-70px] top-[18%] h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(82,244,71,0.16)_0%,rgba(82,244,71,0)_72%)] blur-2xl animate-contact-float-b" />
      </div>

      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_0.92fr] lg:items-start lg:gap-14 xl:gap-24">
          <div className="max-w-[640px]">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-site-accent sm:text-[12px]">
              Contact Us
            </p>

            <h2 className="mt-5 text-[2.45rem] font-semibold leading-10 tracking-[-0.06em] text-black">
              Lets Work On What You
              <br />
              Care About!
            </h2>

            <p className="mt-5 max-w-[620px] text-[16px] leading-8 text-black/72 sm:text-[17px]">
              Got a project in mind? From a full UI UX refresh to a brand-new
              digital experience, we are ready to help. Lets turn your vision
              into a clear, scalable product direction.
            </p>

            <div className="mt-8 flex flex-col gap-5 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center lg:gap-6">
              {people.map((person, index) => (
                <div key={person.id} className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-purple-800/25 bg-[linear-gradient(135deg,rgba(123,31,162,0.16),rgba(255,255,255,0.8))] text-sm font-semibold text-purple-800 shadow-[0_10px_22px_-14px_rgba(123,31,162,0.42)]">
                    {person.initials}
                  </div>
                  <div>
                    <div className="text-[1.1rem] font-semibold text-black">
                      {person.name}
                    </div>
                    <div className="mt-1 text-[15px] text-black/62">
                      {person.role}
                    </div>
                  </div>
                  {index === 0 ? (
                    <div className="ml-2 hidden h-9 w-px bg-black/12 sm:block" />
                  ) : null}
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-4 sm:mt-10">
              {bulletPoints.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 text-black/80"
                >
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple-800 text-white">
                    <Check size={13} strokeWidth={2.8} />
                  </span>
                  <p className="text-[15px] leading-7 sm:text-[16px]">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-black/10 pt-8 sm:gap-5 sm:pt-10">
              {trustBadges.map((badge) => (
                <div
                  key={badge}
                  className="inline-flex h-12 items-center rounded-full border border-black/10 bg-white/80 px-4 text-[13px] font-medium text-black/72 backdrop-blur-sm"
                >
                  {badge}
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-[26px] border border-black/10 bg-white/88 p-5 shadow-[var(--site-shadow)] sm:rounded-[30px] sm:p-6 lg:p-7">
            <div className="pointer-events-none absolute -right-12 -top-14 h-[190px] w-[190px] rounded-full bg-[radial-gradient(circle,rgba(123,31,162,0.18)_0%,rgba(123,31,162,0)_70%)] blur-2xl" />
            <form className="space-y-4 sm:space-y-5">
              <input
                type="text"
                placeholder="Full Name*"
                className="h-[54px] w-full rounded-[14px] border border-black/12 bg-white px-4 text-[15px] text-black outline-none transition placeholder:text-black/42 focus:border-purple-800/55"
              />
              <input
                type="email"
                placeholder="Email*"
                className="h-[54px] w-full rounded-[14px] border border-black/12 bg-white px-4 text-[15px] text-black outline-none transition placeholder:text-black/42 focus:border-purple-800/55"
              />
              <input
                type="text"
                placeholder="Company"
                className="h-[54px] w-full rounded-[14px] border border-black/12 bg-white px-4 text-[15px] text-black outline-none transition placeholder:text-black/42 focus:border-purple-800/55"
              />
              <input
                type="text"
                placeholder="Contact"
                className="h-[54px] w-full rounded-[14px] border border-black/12 bg-white px-4 text-[15px] text-black outline-none transition placeholder:text-black/42 focus:border-purple-800/55"
              />
              <textarea
                placeholder="Tell us about your project*"
                rows={6}
                className="w-full rounded-[14px] border border-black/12 bg-white px-4 py-4 text-[15px] text-black outline-none transition placeholder:text-black/42 focus:border-purple-800/55"
              />

              <button
                type="submit"
                className="inline-flex h-[56px] w-full items-center justify-center gap-3 rounded-full border border-purple-800 bg-purple-800 text-[17px] font-semibold text-white transition hover:bg-white hover:text-purple-800"
              >
                Submit Inquiry
                <MoveRight size={18} strokeWidth={2.4} />
              </button>
            </form>

            <div className="mt-8 border-t border-black/10 pt-7">
              <p className="text-[15px] text-black/72">
                Hate contact forms? Direct Contact.
              </p>
              <div className="mt-4 inline-flex items-center gap-3 text-[15px] text-black/86 sm:text-[16px]">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white">
                  <Mail size={16} />
                </span>
                contact@zeeframes.com
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes contact-float-a {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(24px, 18px, 0) scale(1.08);
          }
        }
        @keyframes contact-float-b {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(-16px, -14px, 0) scale(1.06);
          }
        }
        .animate-contact-float-a {
          animation: contact-float-a 10.6s ease-in-out infinite;
        }
        .animate-contact-float-b {
          animation: contact-float-b 12.4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
