import { Dribbble, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../../../assets/ilmify-Logo.svg";
const companyLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "#contact", label: "Contact" },
  { href: "/insights", label: "Insights" },
];

const serviceLinks = [
  { href: "#services", label: "UI UX Design" },
  { href: "#services", label: "UX Research" },
  { href: "#services", label: "Design Systems" },
  { href: "#services", label: "Framer Development" },
  { href: "#services", label: "No-Code Products" },
];

const reviews = [
  "Clutch (4.8)",
  "Good Firms (4.9)",
  "Webflow (4.7)",
  "Dribbble (4.8)",
];

const socialLinks = [
  { href: "https://dribbble.com", label: "Dribbble", icon: Dribbble },
  { href: "https://linkedin.com", label: "LinkedIn", icon: Linkedin },
  { href: "https://instagram.com", label: "Instagram", icon: Instagram },
  { href: "https://facebook.com", label: "Facebook", icon: Facebook },
  { href: "https://x.com", label: "X", icon: Twitter },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-site-border bg-site-panel px-5 py-16 text-[var(--site-text)] ">
      {/* <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-[-90px] h-[260px] w-[260px] rounded-full bg-[radial-gradient(circle,rgba(123,31,162,0.16)_0%,rgba(123,31,162,0)_72%)] blur-2xl" />
        <div className="absolute right-[-80px] bottom-[-120px] h-[280px] w-[280px] rounded-full bg-[radial-gradient(circle,rgba(82,244,71,0.14)_0%,rgba(82,244,71,0)_74%)] blur-2xl" />
      </div> */}

      <div className="mx-auto max-w-[var(--site-max-width)]">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div className="max-w-[420px]">
            <Image
              src={logo}
              alt="Ilmify Studio Logo"
              priority
              height={200}
              width={200}
              className="h-auto w-[180px] object-contain md:w-[200px]"
            />
            <p className="mt-6 text-sm leading-7 text-black/68">
              We transform ideas into user-centered digital experiences for
              global brands, ambitious startups, and teams that want bold work
              that performs.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-black">Company</h3>
            <div className="mt-5 flex flex-col gap-3">
              {companyLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-black/66 transition hover:text-purple-800"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-black">Services</h3>
            <div className="mt-5 flex flex-col gap-3">
              {serviceLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-black/66 transition hover:text-purple-800"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-black">Reviews</h3>
            <div className="mt-5 flex flex-col gap-3">
              {reviews.map((item) => (
                <p key={item} className="text-sm text-black/66">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-black/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-black/52">
            &copy; Ilmify Studio. All Rights Reserved.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/12 bg-white/75 text-black/60 transition hover:border-purple-800 hover:bg-purple-800 hover:text-white"
                aria-label={label}
              >
                <Icon size={16} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
