// import { Dribbble, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import logo from "@/assets/logo/ilmify-Logo.svg";
// const companyLinks = [
//   { href: "/", label: "Home" },
//   { href: "/about", label: "About" },
//   { href: "/work", label: "Work" },
//   { href: "#contact", label: "Contact" },
//   { href: "/case-studies", label: "Case Studies" },
// ];

// const serviceLinks = [
//   { href: "#services", label: "UI UX Design" },
//   { href: "#services", label: "UX Research" },
//   { href: "#services", label: "Design Systems" },
//   { href: "#services", label: "Framer Development" },
//   { href: "#services", label: "No-Code Products" },
// ];

// const reviews = [
//   "Clutch (4.8)",
//   "Good Firms (4.9)",
//   "Webflow (4.7)",
//   "Dribbble (4.8)",
// ];

// const socialLinks = [
//   { href: "https://dribbble.com", label: "Dribbble", icon: Dribbble },
//   { href: "https://linkedin.com", label: "LinkedIn", icon: Linkedin },
//   { href: "https://instagram.com", label: "Instagram", icon: Instagram },
//   { href: "https://facebook.com", label: "Facebook", icon: Facebook },
//   { href: "https://x.com", label: "X", icon: Twitter },
// ];

// export default function Footer() {
//   return (
//     <footer className="relative overflow-hidden border-t border-site-border bg-site-panel px-5 py-16 text-[var(--site-text)] ">
//       {/* <div className="pointer-events-none absolute inset-0">
//         <div className="absolute -left-20 top-[-90px] h-[260px] w-[260px] rounded-full bg-[radial-gradient(circle,rgba(123,31,162,0.16)_0%,rgba(123,31,162,0)_72%)] blur-2xl" />
//         <div className="absolute right-[-80px] bottom-[-120px] h-[280px] w-[280px] rounded-full bg-[radial-gradient(circle,rgba(82,244,71,0.14)_0%,rgba(82,244,71,0)_74%)] blur-2xl" />
//       </div> */}

//       <div className="mx-auto max-w-[var(--site-max-width)]">
//         <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
//           <div className="max-w-[420px]">
//             <Image
//               src={logo}
//               alt="Ilmify Studio Logo"
//               priority
//               height={200}
//               width={200}
//               className="h-auto w-[180px] object-contain md:w-[200px]"
//             />
//             <p className="mt-6 text-sm leading-7 text-black/68">
//               We transform ideas into user-centered digital experiences for
//               global brands, ambitious startups, and teams that want bold work
//               that performs.
//             </p>
//           </div>

//           <div>
//             <h3 className="text-lg font-semibold text-black">Company</h3>
//             <div className="mt-5 flex flex-col gap-3">
//               {companyLinks.map((link) => (
//                 <Link
//                   key={link.label}
//                   href={link.href}
//                   className="text-sm text-black/66 transition hover:text-purple-800"
//                 >
//                   {link.label}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           <div>
//             <h3 className="text-lg font-semibold text-black">Services</h3>
//             <div className="mt-5 flex flex-col gap-3">
//               {serviceLinks.map((link) => (
//                 <Link
//                   key={link.label}
//                   href={link.href}
//                   className="text-sm text-black/66 transition hover:text-purple-800"
//                 >
//                   {link.label}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           <div>
//             <h3 className="text-lg font-semibold text-black">Reviews</h3>
//             <div className="mt-5 flex flex-col gap-3">
//               {reviews.map((item) => (
//                 <p key={item} className="text-sm text-black/66">
//                   {item}
//                 </p>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="mt-12 flex flex-col gap-5 border-t border-black/10 pt-8 md:flex-row md:items-center md:justify-between">
//           <p className="text-xs text-black/52">
//             &copy; Ilmify Studio. All Rights Reserved.
//           </p>
//           <div className="flex flex-wrap items-center gap-3">
//             {socialLinks.map(({ href, label, icon: Icon }) => (
//               <Link
//                 key={label}
//                 href={href}
//                 className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/12 bg-white/75 text-black/60 transition hover:border-purple-800 hover:bg-purple-800 hover:text-white"
//                 aria-label={label}
//               >
//                 <Icon size={16} />
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

import Link from "next/link";

const links = {
  Services: [
    "SEO Optimization",
    "Paid Ads",
    "Social Media Marketing",
    "CRO",
    "Email Marketing",
  ],
  Company: ["About Us", "Case Studies", "Process", "Team", "Blog"],
  Contact: ["Book a Call", "Get a Free Audit", "WhatsApp Us", "Email Us"],
};

const socials = [
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="w-4 h-4"
      >
        <rect
          x="2"
          y="2"
          width="20"
          height="20"
          rx="5"
          ry="5"
          strokeWidth={2}
        />
        <circle cx="12" cy="12" r="4" strokeWidth={2} />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="text-2xl font-black text-gray-900 mb-4">
              Growth<span className="text-amber-500">Hub</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">
              B2B digital marketing agency obsessed with one thing: growing your
              revenue with data-driven strategies that actually work.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  className="w-9 h-9 rounded-xl border border-gray-200 hover:border-amber-300 text-gray-400 hover:text-amber-500 flex items-center justify-center transition-all duration-300 bg-white shadow-sm"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h4 className="text-gray-900 font-bold text-sm mb-5 tracking-wide">
                {group}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-gray-500 hover:text-gray-800 text-sm transition-colors duration-200"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-100 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} GrowthHub. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-gray-400 hover:text-gray-600 text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-gray-600 text-sm transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
