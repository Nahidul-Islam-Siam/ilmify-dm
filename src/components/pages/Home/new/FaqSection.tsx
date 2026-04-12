// "use client";
// import { useState } from "react";

// const faqs = [
//   {
//     q: "How long before I see results?",
//     a: "Most clients see initial results within 30–60 days. Paid campaigns typically show measurable data within 2 weeks. SEO results build over 90–180 days, but we set clear milestones and KPIs from day one so you always know what to expect.",
//   },
//   {
//     q: "Do you work with small businesses?",
//     a: "Yes — we work with startups, SMEs, and enterprise clients alike. Our strategies scale to your budget and goals. We're used to helping early-stage companies build their first growth engine from scratch.",
//   },
//   {
//     q: "What makes you different from other agencies?",
//     a: "We're revenue-obsessed, not impressions-obsessed. We align our KPIs with yours — pipeline generated, demos booked, and closed revenue. We also provide full transparency: live dashboards, weekly reports, and no black-box reporting.",
//   },
//   {
//     q: "How does pricing work?",
//     a: "We offer retainer-based and project-based engagements. Pricing depends on scope, channels, and your growth goals. We'll give you a clear proposal after a free strategy call — no vague quotes or hidden fees.",
//   },
//   {
//     q: "Will I have a dedicated point of contact?",
//     a: "Yes, every client gets a dedicated account manager who runs your account. No account juggling, no being handed to junior staff. Your account manager is backed by specialists in each channel.",
//   },
//   {
//     q: "Can you work with our existing team?",
//     a: "Absolutely. Many of our clients have in-house marketers or sales teams. We integrate seamlessly — either taking full ownership of channels or working alongside your team to amplify what's already working.",
//   },
// ];

// export default function FaqSection() {
//   const [open, setOpen] = useState<number | null>(0);

//   return (
//     <section className="bg-white py-28 px-6">
//       <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
//         {/* Left */}
//         <div className="lg:sticky lg:top-24">
//           <span className="inline-block bg-amber-400/10 border border-amber-400/20 text-amber-400 text-sm font-medium px-4 py-1.5 rounded-full tracking-wide mb-6">
//             FAQ
//           </span>
//           <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
//             Questions We{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
//               Get Asked
//             </span>{" "}
//             a Lot
//           </h2>
//           <p className="text-gray-400 leading-relaxed mb-8">
//             {
//               "Can't find your answer here? Book a free strategy call and we'll answer everything in real time."
//             }
//           </p>
//           <a
//             href="#contact"
//             className="inline-flex items-center gap-2 border border-white/20 hover:border-amber-400/50 text-white hover:text-amber-400 font-semibold px-6 py-3 rounded-full transition-all duration-300"
//           >
//             Ask us directly
//             <svg
//               className="w-4 h-4"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M17 8l4 4m0 0l-4 4m4-4H3"
//               />
//             </svg>
//           </a>
//         </div>

//         {/* Right — accordion */}
//         <div className="flex flex-col gap-3">
//           {faqs.map((faq, i) => (
//             <div
//               key={i}
//               className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
//                 open === i
//                   ? "border-amber-400/30 bg-white/4"
//                   : "border-white/8 bg-white/2"
//               }`}
//             >
//               <button
//                 onClick={() => setOpen(open === i ? null : i)}
//                 className="w-full flex items-center justify-between gap-4 p-6 text-left"
//               >
//                 <span
//                   className={`font-semibold text-base transition-colors ${open === i ? "text-white" : "text-gray-300"}`}
//                 >
//                   {faq.q}
//                 </span>
//                 <span
//                   className={`w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
//                     open === i
//                       ? "bg-amber-400 border-amber-400 text-black rotate-45"
//                       : "border-white/20 text-gray-400"
//                   }`}
//                 >
//                   <svg
//                     className="w-4 h-4"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2.5}
//                       d="M12 4v16m8-8H4"
//                     />
//                   </svg>
//                 </span>
//               </button>
//               {open === i && (
//                 <div className="px-6 pb-6 text-gray-400 leading-relaxed text-sm">
//                   {faq.a}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";
// import { useState } from "react";

// const faqs = [
//   {
//     q: "How long before I see results?",
//     a: "Most clients see initial results within 30–60 days. Paid campaigns show measurable data within 2 weeks. SEO results build over 90–180 days, but we set clear milestones from day one.",
//   },
//   {
//     q: "Do you work with small businesses?",
//     a: "Yes — we work with startups, SMEs, and enterprise clients alike. Our strategies scale to your budget and goals. We help early-stage companies build their first growth engine from scratch.",
//   },
//   {
//     q: "What makes you different from other agencies?",
//     a: "We're revenue-obsessed, not impressions-obsessed. We align our KPIs with yours — pipeline generated, demos booked, and closed revenue. Full transparency: live dashboards, weekly reports, no black-box reporting.",
//   },
//   {
//     q: "How does pricing work?",
//     a: "We offer retainer-based and project-based engagements. Pricing depends on scope, channels, and growth goals. We'll give you a clear proposal after a free strategy call — no vague quotes or hidden fees.",
//   },
//   {
//     q: "Will I have a dedicated point of contact?",
//     a: "Yes, every client gets a dedicated account manager who runs your account. No juggling, no being handed to junior staff. Your account manager is backed by channel specialists.",
//   },
//   {
//     q: "Can you work with our existing team?",
//     a: "Absolutely. Many clients have in-house marketers or sales teams. We integrate seamlessly — taking full ownership of channels or working alongside your team to amplify what's already working.",
//   },
// ];

// export default function FaqSection() {
//   const [open, setOpen] = useState<number | null>(0);
//   return (
//     <section className="bg-gray-50 py-28 px-6 border-b border-gray-100">
//       <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
//         <div className="lg:sticky lg:top-24">
//           <span className="inline-block bg-amber-50 border border-amber-200 text-amber-700 text-sm font-semibold px-4 py-1.5 rounded-full tracking-wide mb-6">
//             FAQ
//           </span>
//           <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
//             Questions We{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
//               Get Asked
//             </span>{" "}
//             a Lot
//           </h2>
//           <p className="text-gray-500 leading-relaxed mb-8">
//             {
//               "Can't find your answer here? Book a free strategy call and we'll answer everything in real time."
//             }
//           </p>
//           <a
//             href="#contact"
//             className="inline-flex items-center gap-2 border border-gray-200 hover:border-amber-300 text-gray-600 hover:text-amber-600 font-semibold px-6 py-3 rounded-full transition-all duration-300 bg-white shadow-sm"
//           >
//             Ask us directly
//             <svg
//               className="w-4 h-4"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M17 8l4 4m0 0l-4 4m4-4H3"
//               />
//             </svg>
//           </a>
//         </div>
//         <div className="flex flex-col gap-3">
//           {faqs.map((faq, i) => (
//             <div
//               key={i}
//               className={`border rounded-2xl overflow-hidden transition-all duration-300 ${open === i ? "border-amber-200 bg-white shadow-md shadow-amber-50" : "border-gray-100 bg-white"}`}
//             >
//               <button
//                 onClick={() => setOpen(open === i ? null : i)}
//                 className="w-full flex items-center justify-between gap-4 p-6 text-left"
//               >
//                 <span
//                   className={`font-semibold text-base transition-colors ${open === i ? "text-gray-900" : "text-gray-700"}`}
//                 >
//                   {faq.q}
//                 </span>
//                 <span
//                   className={`w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${open === i ? "bg-amber-500 border-amber-500 text-white rotate-45" : "border-gray-200 text-gray-400"}`}
//                 >
//                   <svg
//                     className="w-4 h-4"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2.5}
//                       d="M12 4v16m8-8H4"
//                     />
//                   </svg>
//                 </span>
//               </button>
//               {open === i && (
//                 <div className="px-6 pb-6 text-gray-500 leading-relaxed text-sm">
//                   {faq.a}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { AnimatePresence, motion } from "framer-motion"; // Import these
import { useState } from "react";

const faqs = [
  {
    q: "How long before I see results?",
    a: "Most clients see initial results within 30–60 days. Paid campaigns show measurable data within 2 weeks. SEO results build over 90–180 days, but we set clear milestones from day one.",
  },
  {
    q: "Do you work with small businesses?",
    a: "Yes — we work with startups, SMEs, and enterprise clients alike. Our strategies scale to your budget and goals. We help early-stage companies build their first growth engine from scratch.",
  },
  {
    q: "What makes you different from other agencies?",
    a: "We're revenue-obsessed, not impressions-obsessed. We align our KPIs with yours — pipeline generated, demos booked, and closed revenue. Full transparency: live dashboards, weekly reports, no black-box reporting.",
  },
  {
    q: "How does pricing work?",
    a: "We offer retainer-based and project-based engagements. Pricing depends on scope, channels, and growth goals. We'll give you a clear proposal after a free strategy call — no vague quotes or hidden fees.",
  },
  {
    q: "Will I have a dedicated point of contact?",
    a: "Yes, every client gets a dedicated account manager who runs your account. No juggling, no being handed to junior staff. Your account manager is backed by channel specialists.",
  },
  {
    q: "Can you work with our existing team?",
    a: "Absolutely. Many clients have in-house marketers or sales teams. We integrate seamlessly — taking full ownership of channels or working alongside your team to amplify what's already working.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-gray-50 py-28 px-6 border-b border-gray-100">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        {/* Left Side */}
        <div className="lg:sticky lg:top-24">
          <span className="inline-block bg-amber-50 border border-amber-200 text-amber-700 text-sm font-semibold px-4 py-1.5 rounded-full tracking-wide mb-6">
            FAQ
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            Questions We{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
              Get Asked
            </span>{" "}
            a Lot
          </h2>
          <p className="text-gray-500 leading-relaxed mb-8">
            {
              "Can't find your answer here? Book a free strategy call and we'll answer everything in real time."
            }
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-gray-200 hover:border-amber-300 text-gray-600 hover:text-amber-600 font-semibold px-6 py-3 rounded-full transition-all duration-300 bg-white shadow-sm"
          >
            Ask us directly
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>

        {/* Right Side — Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border rounded-2xl overflow-hidden transition-all duration-500 ${
                open === i
                  ? "border-amber-200 bg-white shadow-md shadow-amber-50"
                  : "border-gray-100 bg-white"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-6 text-left"
              >
                <span
                  className={`font-semibold text-base transition-colors duration-300 ${
                    open === i ? "text-gray-900" : "text-gray-700"
                  }`}
                >
                  {faq.q}
                </span>
                <span
                  className={`w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                    open === i
                      ? "bg-amber-500 border-amber-500 text-white rotate-45"
                      : "border-gray-200 text-gray-400"
                  }`}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </span>
              </button>

              {/* Animated Content */}
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-gray-500 leading-relaxed text-sm">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
