import { Dribbble, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const companyLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
  { href: "#insights", label: "Insights" },
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
    <footer className="bg-black px-5 py-16 text-white lg:px-8">
      <div className="mx-auto max-w-[1320px]">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div className="max-w-[420px]">
            <Image
              src="/assets/logo/Logo.svg"
              alt="ZeeFrames logo"
              priority
              height={200}
              width={200}
              className="h-auto w-[180px] object-contain md:w-[200px]"
            />
            <p className="mt-6 text-sm leading-7 text-white/60">
              We transform ideas into user-centered digital experiences for
              global brands, ambitious startups, and teams that want bold work
              that performs.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Company</h3>
            <div className="mt-5 flex flex-col gap-3">
              {companyLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/62 transition  hover:text-[#52F447]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <div className="mt-5 flex flex-col gap-3">
              {serviceLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/62 transition hover:text-[#52F447]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Reviews</h3>
            <div className="mt-5 flex flex-col gap-3">
              {reviews.map((item) => (
                <p key={item} className="text-sm text-white/62">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-5  pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-white/48">
            &copy; Ilmify Studio. All Rights Reserved.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition hover:border-[#52F447] hover:text-[#52F447]"
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
