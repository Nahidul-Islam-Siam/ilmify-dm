/* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";
// import { useState } from "react";

// export default function ContactSection() {
//   const [form, setForm] = useState({
//     fullName: "",
//     company: "",
//     email: "",
//     phone: "",
//     service: "",
//     website: "",
//     message: "",
//   });
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
//     >,
//   ) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = () => {
//     if (!form.fullName || !form.email) return;
//     setSubmitted(true);
//   };

//   return (
//     <section
//       id="contact"
//       className="relative bg-white py-28 px-6 overflow-hidden"
//     >
//       {/* BG glow */}
//       <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-amber-400/6 blur-[140px] pointer-events-none" />
//       <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-blue-500/6 blur-[120px] pointer-events-none" />

//       <div className="relative max-w-7xl mx-auto">
//         <div className="grid lg:grid-cols-2 gap-16 items-start">
//           {/* Left */}
//           <div>
//             <span className="inline-block bg-amber-400/10 border border-amber-400/20 text-amber-400 text-sm font-medium px-4 py-1.5 rounded-full tracking-wide mb-6">
//               {"Let's talk"}
//             </span>
//             <h2 className="text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
//               Start
//               <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
//                 Growing
//               </span>
//             </h2>
//             <p className="text-gray-400 leading-relaxed mb-10 max-w-md">
//               {
//                 "Tell us your goals and we'll build a digital strategy that boosts your sales and grows your brand. No commitment required."
//               }
//             </p>

//             <div className="space-y-5 mb-10">
//               {[
//                 { icon: "⚡", text: "Response within 24 hours" },
//                 { icon: "🔒", text: "We sign NDAs on request" },
//                 { icon: "🎯", text: "Direct access to growth specialists" },
//               ].map((item) => (
//                 <div key={item.text} className="flex items-center gap-4">
//                   <div className="w-9 h-9 rounded-xl bg-amber-400/10 flex items-center justify-center text-base">
//                     {item.icon}
//                   </div>
//                   <span className="text-gray-300 font-medium">{item.text}</span>
//                 </div>
//               ))}
//             </div>

//             {/* Mini stats */}
//             <div className="flex gap-6">
//               <div className="bg-white/4 border border-white/8 rounded-2xl px-5 py-4">
//                 <div className="text-2xl font-black text-amber-400">100+</div>
//                 <div className="text-gray-500 text-xs mt-1">B2B clients</div>
//               </div>
//               <div className="bg-white/4 border border-white/8 rounded-2xl px-5 py-4">
//                 <div className="text-2xl font-black text-amber-400">$10M+</div>
//                 <div className="text-gray-500 text-xs mt-1">Revenue driven</div>
//               </div>
//               <div className="bg-white/4 border border-white/8 rounded-2xl px-5 py-4">
//                 <div className="text-2xl font-black text-amber-400">4.9★</div>
//                 <div className="text-gray-500 text-xs mt-1">Avg rating</div>
//               </div>
//             </div>
//           </div>

//           {/* Right — form */}
//           <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-[0_0_100px_rgba(251,191,36,0.08)]">
//             {submitted ? (
//               <div className="text-center py-12">
//                 <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
//                   <svg
//                     className="w-8 h-8 text-green-600"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2.5}
//                       d="M5 13l4 4L19 7"
//                     />
//                   </svg>
//                 </div>
//                 <h3 className="text-gray-900 text-2xl font-black mb-2">
//                   {"You're in!"}
//                 </h3>
//                 <p className="text-gray-500">
//                   {
//                     "We'll reach out within 24 hours to schedule your free strategy call."
//                   }
//                 </p>
//               </div>
//             ) : (
//               <>
//                 <h3 className="text-gray-900 text-xl font-black mb-6">
//                   Submit your requirements
//                 </h3>
//                 <div className="grid grid-cols-2 gap-4 mb-4">
//                   <div>
//                     <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
//                       Full name <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       name="fullName"
//                       value={form.fullName}
//                       onChange={handleChange}
//                       placeholder="John Smith"
//                       className="w-full border-b border-gray-200 focus:border-amber-400 py-2.5 text-sm text-gray-900 placeholder-gray-300 outline-none transition-colors bg-transparent"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
//                       Company <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       name="company"
//                       value={form.company}
//                       onChange={handleChange}
//                       placeholder="Acme Corp"
//                       className="w-full border-b border-gray-200 focus:border-amber-400 py-2.5 text-sm text-gray-900 placeholder-gray-300 outline-none transition-colors bg-transparent"
//                     />
//                   </div>
//                 </div>
//                 <div className="grid grid-cols-2 gap-4 mb-4">
//                   <div>
//                     <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
//                       Company email <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       name="email"
//                       type="email"
//                       value={form.email}
//                       onChange={handleChange}
//                       placeholder="you@company.com"
//                       className="w-full border-b border-gray-200 focus:border-amber-400 py-2.5 text-sm text-gray-900 placeholder-gray-300 outline-none transition-colors bg-transparent"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
//                       Contact No
//                     </label>
//                     <div className="flex items-center gap-2 border-b border-gray-200 focus-within:border-amber-400 transition-colors">
//                       <span className="text-sm text-gray-500 py-2.5 flex-shrink-0">
//                         +880
//                       </span>
//                       <input
//                         name="phone"
//                         value={form.phone}
//                         onChange={handleChange}
//                         placeholder="17xxxxxxxx"
//                         className="flex-1 py-2.5 text-sm text-gray-900 placeholder-gray-300 outline-none bg-transparent"
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="grid grid-cols-2 gap-4 mb-4">
//                   <div>
//                     <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
//                       Services <span className="text-red-500">*</span>
//                     </label>
//                     <select
//                       name="service"
//                       value={form.service}
//                       onChange={handleChange}
//                       className="w-full border-b border-gray-200 focus:border-amber-400 py-2.5 text-sm text-gray-900 outline-none transition-colors bg-transparent appearance-none"
//                     >
//                       <option value="">Select service</option>
//                       <option>SEO Optimization</option>
//                       <option>Paid Ads (Google / Meta)</option>
//                       <option>Social Media Marketing</option>
//                       <option>Conversion Rate Optimization</option>
//                       <option>Email Marketing</option>
//                       <option>Full Growth Strategy</option>
//                     </select>
//                   </div>
//                   <div>
//                     <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
//                       Website URL
//                     </label>
//                     <input
//                       name="website"
//                       value={form.website}
//                       onChange={handleChange}
//                       placeholder="https://yoursite.com"
//                       className="w-full border-b border-gray-200 focus:border-amber-400 py-2.5 text-sm text-gray-900 placeholder-gray-300 outline-none transition-colors bg-transparent"
//                     />
//                   </div>
//                 </div>
//                 <div className="mb-8">
//                   <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
//                     Tell us about your project{" "}
//                     <span className="text-red-500">*</span>
//                   </label>
//                   <textarea
//                     name="message"
//                     value={form.message}
//                     onChange={handleChange}
//                     rows={3}
//                     placeholder="Your goals, current challenges, timeline..."
//                     className="w-full border-b border-gray-200 focus:border-amber-400 py-2.5 text-sm text-gray-900 placeholder-gray-300 outline-none transition-colors bg-transparent resize-none"
//                   />
//                 </div>

//                 <div className="flex items-center justify-between">
//                   <div>
//                     <div className="text-xs text-gray-400 mb-0.5">
//                       Prefer not to use the form?
//                     </div>
//                     <a
//                       href="https://wa.me/"
//                       className="text-amber-500 hover:text-amber-600 text-sm font-semibold transition-colors"
//                     >
//                       WhatsApp Us
//                     </a>
//                   </div>
//                   <button
//                     onClick={handleSubmit}
//                     className="bg-amber-400 hover:bg-amber-300 text-black font-bold px-8 py-3.5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(251,191,36,0.4)] text-sm"
//                   >
//                     Submit Requirement
//                   </button>
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    website: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = () => {
    if (!form.fullName || !form.email) return;
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: "linear-gradient(160deg,#1e293b 0%,#0f172a 100%)" }}
    >
      <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-amber-400/8 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-blue-500/8 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="inline-block bg-amber-400/20 border border-amber-400/30 text-amber-400 text-sm font-semibold px-4 py-1.5 rounded-full tracking-wide mb-6">
              {"Let's talk"}
            </span>
            <h2 className="text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Start
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                Growing
              </span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-10 max-w-md">
              {
                "Tell us your goals and we'll build a digital strategy that boosts your sales and grows your brand. No commitment required."
              }
            </p>
            <div className="space-y-5 mb-10">
              {[
                { icon: "⚡", text: "Response within 24 hours" },
                { icon: "🔒", text: "We sign NDAs on request" },
                { icon: "🎯", text: "Direct access to growth specialists" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-xl bg-amber-400/15 flex items-center justify-center text-base">
                    {item.icon}
                  </div>
                  <span className="text-slate-300 font-medium">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex gap-5">
              {[
                { val: "100+", label: "B2B clients" },
                { val: "$10M+", label: "Revenue driven" },
                { val: "4.9★", label: "Avg rating" },
              ].map((s) => (
                <div
                  key={s.val}
                  className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4"
                >
                  <div className="text-2xl font-black text-amber-400">
                    {s.val}
                  </div>
                  <div className="text-slate-500 text-xs mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-gray-900 text-2xl font-black mb-2">
                  {"You're in!"}
                </h3>
                <p className="text-gray-500">
                  {
                    "We'll reach out within 24 hours to schedule your free strategy call."
                  }
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-gray-900 text-xl font-black mb-6">
                  Submit your requirements
                </h3>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {[
                    {
                      name: "fullName",
                      label: "Full name",
                      placeholder: "John Smith",
                      required: true,
                    },
                    {
                      name: "company",
                      label: "Company",
                      placeholder: "Acme Corp",
                      required: true,
                    },
                  ].map((f) => (
                    <div key={f.name}>
                      <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wide">
                        {f.label}
                        {f.required && (
                          <span className="text-red-400 ml-0.5">*</span>
                        )}
                      </label>
                      <input
                        name={f.name}
                        value={(form as any)[f.name]}
                        onChange={handleChange}
                        placeholder={f.placeholder}
                        className="w-full border-b border-gray-200 focus:border-amber-400 py-2.5 text-sm text-gray-900 placeholder-gray-300 outline-none transition-colors bg-transparent"
                      />
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wide">
                      Company email <span className="text-red-400">*</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="w-full border-b border-gray-200 focus:border-amber-400 py-2.5 text-sm text-gray-900 placeholder-gray-300 outline-none transition-colors bg-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wide">
                      Contact No
                    </label>
                    <div className="flex items-center gap-2 border-b border-gray-200 focus-within:border-amber-400 transition-colors">
                      <span className="text-sm text-gray-400 py-2.5 flex-shrink-0">
                        +880
                      </span>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="17xxxxxxxx"
                        className="flex-1 py-2.5 text-sm text-gray-900 placeholder-gray-300 outline-none bg-transparent"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wide">
                      Services <span className="text-red-400">*</span>
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full border-b border-gray-200 focus:border-amber-400 py-2.5 text-sm text-gray-700 outline-none transition-colors bg-transparent appearance-none"
                    >
                      <option value="">Select service</option>
                      <option>SEO Optimization</option>
                      <option>Paid Ads (Google / Meta)</option>
                      <option>Social Media Marketing</option>
                      <option>Conversion Rate Optimization</option>
                      <option>Email Marketing</option>
                      <option>Full Growth Strategy</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wide">
                      Website URL
                    </label>
                    <input
                      name="website"
                      value={form.website}
                      onChange={handleChange}
                      placeholder="https://yoursite.com"
                      className="w-full border-b border-gray-200 focus:border-amber-400 py-2.5 text-sm text-gray-900 placeholder-gray-300 outline-none transition-colors bg-transparent"
                    />
                  </div>
                </div>
                <div className="mb-8">
                  <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wide">
                    Tell us about your project{" "}
                    <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Your goals, current challenges, timeline..."
                    className="w-full border-b border-gray-200 focus:border-amber-400 py-2.5 text-sm text-gray-900 placeholder-gray-300 outline-none transition-colors bg-transparent resize-none"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-gray-400 mb-0.5">
                      Prefer not to use the form?
                    </div>
                    <a
                      href="https://wa.me/"
                      className="text-amber-500 hover:text-amber-600 text-sm font-semibold transition-colors"
                    >
                      WhatsApp Us
                    </a>
                  </div>
                  <button
                    onClick={handleSubmit}
                    className="bg-amber-500 hover:bg-amber-400 text-white font-bold px-8 py-3.5 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-amber-200 text-sm"
                  >
                    Submit Requirement
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
