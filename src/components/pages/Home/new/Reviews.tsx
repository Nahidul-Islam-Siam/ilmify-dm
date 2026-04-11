"use client";
import { useState } from "react";

const reviews = [
  {
    name: "James Harrington",
    role: "CEO",
    company: "TechScale SaaS",
    text: "They completely transformed our lead generation. Within 60 days we had more qualified demos than we did in the previous 6 months. The ROI tracking alone is worth the investment.",
    stars: 5,
    result: "+250% Leads",
    color: "#2563eb",
    bg: "#eff6ff",
    initials: "JH",
  },
  {
    name: "Sarah Chen",
    role: "Head of Marketing",
    company: "NexaCommerce",
    text: "Our old agency talked about impressions. This team talks about pipeline. We hit a 4.8x ROAS on paid in the first quarter — numbers we've never seen before.",
    stars: 5,
    result: "4.8x ROAS",
    color: "#16a34a",
    bg: "#f0fdf4",
    initials: "SC",
  },
  {
    name: "Marcus Webb",
    role: "Co-Founder",
    company: "PropScale Agency",
    text: "SEO that actually drives revenue. We went from zero organic presence to page 1 rankings for 120 keywords in 6 months. Our inbound pipeline is now 3x what it was.",
    stars: 5,
    result: "3x Pipeline",
    color: "#d97706",
    bg: "#fffbeb",
    initials: "MW",
  },
  {
    name: "Priya Nair",
    role: "VP Growth",
    company: "LaunchPad B2B",
    text: "Transparent, professional, and obsessed with results. They cut our cost per lead by 40% while increasing volume. I've never had an agency that cared this much about our outcomes.",
    stars: 5,
    result: "-40% CPL",
    color: "#7c3aed",
    bg: "#f5f3ff",
    initials: "PN",
  },
  {
    name: "Daniel Fox",
    role: "Founder",
    company: "CoreMetrics",
    text: "Best marketing investment we've made. The team moves fast, communicates clearly, and delivers. We saw first results in under 30 days. Highly recommend for any serious B2B company.",
    stars: 5,
    result: "30d Results",
    color: "#dc2626",
    bg: "#fef2f2",
    initials: "DF",
  },
];

export default function Reviews() {
  const [current, setCurrent] = useState(0);
  const prev = () =>
    setCurrent((c) => (c - 1 + reviews.length) % reviews.length);
  const next = () => setCurrent((c) => (c + 1) % reviews.length);
  const visible = [
    reviews[current % reviews.length],
    reviews[(current + 1) % reviews.length],
    reviews[(current + 2) % reviews.length],
  ];

  return (
    <section className="bg-white py-28 px-6 border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <span className="inline-block bg-amber-50 border border-amber-200 text-amber-700 text-sm font-semibold px-4 py-1.5 rounded-full tracking-wide mb-5">
              Client reviews
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900">
              Success Stories
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
                That Inspire Us
              </span>
            </h2>
          </div>
          <div className="flex gap-3">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full border border-gray-200 hover:border-amber-300 text-gray-400 hover:text-amber-500 flex items-center justify-center transition-all duration-300 bg-white shadow-sm"
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
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full border border-gray-200 hover:border-amber-300 text-gray-400 hover:text-amber-500 flex items-center justify-center transition-all duration-300 bg-white shadow-sm"
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
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((r, i) => (
            <div
              key={`${r.name}-${i}`}
              className={`bg-gray-50 border border-gray-100 rounded-3xl p-8 transition-all duration-500 ${i === 0 ? "shadow-md border-gray-200" : i === 1 ? "opacity-90" : "opacity-70"}`}
            >
              <div className="flex gap-1 mb-6">
                {Array.from({ length: r.stars }).map((_, si) => (
                  <svg
                    key={si}
                    className="w-4 h-4 text-amber-400"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed mb-8 text-[15px]">
                &quot;{r.text}&quot;
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                    style={{ background: r.bg, color: r.color }}
                  >
                    {r.initials}
                  </div>
                  <div>
                    <div className="text-gray-900 font-semibold text-sm">
                      {r.name}
                    </div>
                    <div className="text-gray-400 text-xs">
                      {r.role}, {r.company}
                    </div>
                  </div>
                </div>
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full"
                  style={{ background: r.bg, color: r.color }}
                >
                  {r.result}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${i === current ? "w-6 h-2 bg-amber-500" : "w-2 h-2 bg-gray-200"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
