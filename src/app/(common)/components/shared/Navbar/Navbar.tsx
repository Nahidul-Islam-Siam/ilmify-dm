"use client";
import { usePathname } from "next/navigation";
import logo from "../../../../../assets/ilmify-Logo.svg";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import {
  Code2,
  FileSearch2,
  Gauge,
  Globe2,
  LayoutDashboard,
  Lightbulb,
  Megaphone,
  Menu,
  Palette,
  PenTool,
  Sparkles,
  X,
  ChevronRight,
  ChevronDown,
  Brackets,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState, useRef } from "react";
import Button from "../../button/Button";

const navItems = [
  { href: "/", label: "Home", match: ["/"] },
  { href: "/about", label: "About", match: ["/about"] },
  { href: "/work", label: "Work", match: ["/work"] },
  { href: "/case-studies", label: "Case Studies", match: ["/case-studies"] },
];

// Service categories with their subcategories and services
const serviceStructure = {
  "SEO": {
    label: "SEO",
    icon: Megaphone,
    previewTitle: "VISER X",
    previewDescription:
      "Boost visibility, drive traffic, and accelerate growth.",
    previewGradient:
      "linear-gradient(180deg, #eef3ff 0%, #b9ccff 58%, #4674f3 100%)",
    subcategories: [
      {
        name: "SEO Process",
        services: [
          {
            href: "/services/seo-audit",
            title: "SEO Audit",
            icon: FileSearch2,
            description: "Find ranking blockers fast",
          },
          {
            href: "/services/technical-seo",
            title: "Technical SEO",
            icon: Code2,
            description: "Fix crawl and speed issues",
          },
          {
            href: "/services/keyword-research",
            title: "KW Research",
            icon: Lightbulb,
            description: "Target high-intent keywords",
          },
          {
            href: "/services/content-writing",
            title: "Content Writing",
            icon: PenTool,
            description: "Publish search-ready content",
          },
          {
            href: "/services/on-page-seo",
            title: "On-Page SEO",
            icon: LayoutDashboard,
            description: "Optimize pages for rankings",
          },
          {
            href: "/services/link-building",
            title: "Link Building",
            icon: Globe2,
            description: "Earn authority backlinks",
          },
          {
            href: "/services/guest-posting",
            title: "Guest Posting",
            icon: Sparkles,
            description: "Expand reach on trusted sites",
          },
          {
            href: "/services/reporting",
            title: "Reporting",
            icon: Gauge,
            description: "Track SEO growth clearly",
          },
        ],
      },
    ],
  },
  "google-ads": {
    label: "Google Ads",
    icon: Gauge,
    previewTitle: "PULSE PPC",
    previewDescription:
      "Performance-focused Google campaigns built to capture high-intent traffic and turn clicks into qualified leads.",
    previewGradient:
      "linear-gradient(180deg, #fff7ef 0%, #ffd7b2 58%, #ff8a3d 100%)",
    subcategories: [
      {
        name: "",
        services: [
          {
            href: "/services/google-search-ads",
            title: "Google Search Ads",
            icon: FileSearch2,
            description: "Appear for buyer-ready searches",
          },
          {
            href: "/services/google-display-ads",
            title: "Google Display Ads",
            icon: LayoutDashboard,
            description: "Reach audiences across the web",
          },
          {
            href: "/services/youtube-ads",
            title: "YouTube Ads",
            icon: Sparkles,
            description: "Video campaigns that drive action",
          },
          {
            href: "/services/performance-max",
            title: "Performance Max",
            icon: Lightbulb,
            description: "Automated campaigns across Google",
          },
        ],
      },
    ],
  },
  "social-media-ads": {
    label: "Social Media Advertisement",
    icon: LayoutDashboard,
    previewTitle: "SOCIAL AMP",
    previewDescription:
      "Conversion-led paid social campaigns designed to scale reach, engagement, and sales across modern platforms.",
    previewGradient:
      "linear-gradient(180deg, #f7f4ff 0%, #dacdff 58%, #7e67ff 100%)",
    subcategories: [
      {
        name: "",
        services: [
          {
            href: "/services/meta-ads",
            title: "Meta Ads",
            icon: LayoutDashboard,
            description: "Facebook and Instagram growth",
          },
          {
            href: "/services/tiktok-ads",
            title: "TikTok Ads",
            icon: Sparkles,
            description: "Short-form campaigns for fast reach",
          },
          {
            href: "/services/linkedin-ads",
            title: "LinkedIn Ads",
            icon: Brackets,
            description: "B2B targeting for qualified leads",
          },
          {
            href: "/services/pinterest-ads",
            title: "Pinterest Ads",
            icon: Palette,
            description: "Visual campaigns for discovery",
          },
        ],
      },
    ],
  },
};

type ServiceCategoryKey = keyof typeof serviceStructure;

function BrandMark() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src={logo}
        alt="Ilmify Agency"
        priority
        height={200}
        width={200}
        className="h-auto w-[140px] object-contain"
      />
    </Link>
  );
}

// Mobile Accordion Component
function MobileServicesAccordion({ onLinkClick }: { onLinkClick: () => void }) {
  const [expandedCategory, setExpandedCategory] =
    useState<ServiceCategoryKey | null>(null);
  const [expandedSubcategory, setExpandedSubcategory] = useState<string | null>(
    null,
  );

  const toggleCategory = (key: ServiceCategoryKey) => {
    setExpandedCategory(expandedCategory === key ? null : key);
    setExpandedSubcategory(null);
  };

  const toggleSubcategory = (name: string) => {
    setExpandedSubcategory(expandedSubcategory === name ? null : name);
  };

  return (
    <div className="space-y-3">
      {(Object.keys(serviceStructure) as ServiceCategoryKey[]).map((key) => {
        const category = serviceStructure[key];
        const Icon = category.icon;
        const isExpanded = expandedCategory === key;

        return (
          <div
            key={key}
            className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent overflow-hidden transition-all duration-300"
          >
            <button
              type="button"
              onClick={() => toggleCategory(key)}
              className="flex w-full items-center justify-between px-5 py-4 transition-colors hover:bg-white/5"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-site-accent/10 p-2">
                  <Icon size={18} className="text-site-accent" />
                </div>
                <span className="text-sm font-semibold text-site-accent">
                  {category.label}
                </span>
              </div>
              <ChevronDown
                size={18}
                className={cn(
                  "text-site-accent transition-transform duration-300",
                  isExpanded && "rotate-180",
                )}
              />
            </button>

            <div
              className={cn(
                "transition-all duration-300 ease-in-out",
                isExpanded ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0",
              )}
            >
              <div className="border-t border-white/10 bg-white/[0.02]">
                {category.subcategories.map((subcategory, idx) => {
                  if (!subcategory.name) {
                    return (
                      <div key={idx} className="px-3 py-4 space-y-2">
                        {subcategory.services.map((service) => {
                          const ServiceIcon = service.icon;
                          return (
                            <Link
                              key={service.title}
                              href={service.href}
                              onClick={onLinkClick}
                              className="group flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 hover:bg-white/10"
                            >
                              <div className="rounded-lg bg-white/5 p-2 group-hover:bg-site-accent/20 transition-colors">
                                <ServiceIcon
                                  size={14}
                                  className="text-purple-600 group-hover:text-site-accent transition-colors"
                                />
                              </div>
                              <div className="flex-1">
                                <p className="text-sm font-medium text-purple-600 transition-colors group-hover:text-site-accent">
                                  {service.title}
                                </p>
                                {service.description && (
                                  <p className="text-xs text-black/80 mt-0.5">
                                    {service.description}
                                  </p>
                                )}
                              </div>
                              <ArrowRight
                                size={14}
                                className="text-white/30 group-hover:text-site-accent group-hover:translate-x-0.5 transition-all"
                              />
                            </Link>
                          );
                        })}
                      </div>
                    );
                  }

                  const isSubExpanded =
                    expandedSubcategory === `${key}-${subcategory.name}`;

                  return (
                    <div
                      key={idx}
                      className="border-b border-white/5 last:border-0"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          toggleSubcategory(`${key}-${subcategory.name}`)
                        }
                        className="flex w-full items-center justify-between px-5 py-3 transition-colors hover:bg-white/5"
                      >
                        <span className="text-xs font-semibold uppercase tracking-wider text-site-accent">
                          {subcategory.name}
                        </span>
                        <ChevronRight
                          size={14}
                          className={cn(
                            "text-site-accent transition-transform duration-300",
                            isSubExpanded && "rotate-90",
                          )}
                        />
                      </button>

                      <div
                        className={cn(
                          "transition-all duration-300 overflow-hidden",
                          isSubExpanded
                            ? "max-h-[500px] opacity-100"
                            : "max-h-0 opacity-0",
                        )}
                      >
                        <div className="px-3 pb-4 space-y-2">
                          {subcategory.services.map((service) => {
                            const ServiceIcon = service.icon;
                            return (
                              <Link
                                key={service.title}
                                href={service.href}
                                onClick={onLinkClick}
                                className="group flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 hover:bg-white/10"
                              >
                                <div className="rounded-lg bg-white/5 p-2 group-hover:bg-site-accent/20 transition-colors">
                                  <ServiceIcon
                                    size={14}
                                    className="text-purple-600 group-hover:text-site-accent transition-colors"
                                  />
                                </div>
                                <div className="flex-1">
                                  <p className="text-sm font-medium text-purple-600 transition-colors group-hover:text-site-accent">
                                    {service.title}
                                  </p>
                                  {service.description && (
                                    <p className="text-xs text-black/80 mt-0.5">
                                      {service.description}
                                    </p>
                                  )}
                                </div>
                                <ArrowRight
                                  size={14}
                                  className="text-white/30 group-hover:text-site-accent group-hover:translate-x-0.5 transition-all"
                                />
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeCategory, setActiveCategory] =
    useState<ServiceCategoryKey>("SEO");
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const navLinks = useMemo(
    () =>
      navItems.map((item) => ({
        ...item,
        active: item.match.includes(pathname),
      })),
    [pathname],
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [isMobileMenuOpen]);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      // Keep tiny delay so dropdown does not close abruptly while crossing trigger/content.
    }, 150);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  // a'sdkfasdkmf

  const activeCategoryData = serviceStructure[activeCategory];
  const activeServices = activeCategoryData.subcategories.flatMap(
    (subcategory) => subcategory.services,
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "border-b border-transparent bg-transparent transition-all duration-300",
          scrolled
            ? "bg-white "
            : "",
        )}
      >
        <div className="mx-auto flex h-16 md:h-20 max-w-[1440px] items-center justify-between px-5 md:px-8 lg:px-12">
          <BrandMark />

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="gap-0">
              {navLinks.map((item) => (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "relative h-10 rounded-none border-none bg-transparent px-5 text-[15px] font-medium text-black shadow-none hover:bg-transparent hover:text-site-accent focus:bg-transparent focus:text-site-accent",
                        item.active &&
                          "text-site-accent after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-6 after:-translate-x-1/2 after:bg-site-accent",
                      )}
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className="h-10 rounded-none border-none px-5 text-[15px] font-medium text-black shadow-none focus:text-site-accent data-[state=open]:text-site-accent"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <span className="flex items-center gap-1.5">Services</span>
                </NavigationMenuTrigger>
                <NavigationMenuContent
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="mt-12 w-[1100px] rounded-[28px] border border-black/5 bg-[#f5f5f6] p-3 shadow-[0_35px_80px_-35px_rgba(22,22,22,0.28)]">
                    <div className="grid grid-cols-[340px_1fr_345px] gap-4 rounded-[22px] bg-white p-3">
                      <div className="rounded-[18px] bg-[#f0f0f2] p-2">
                        <div className="space-y-1.5">
                      {(
                        Object.keys(serviceStructure) as ServiceCategoryKey[]
                      ).map((key) => {
                        const category = serviceStructure[key];
                        const isActive = activeCategory === key;
                        return (
                          <button
                            key={key}
                            type="button"
                            onMouseEnter={() => setActiveCategory(key)}
                            className={cn(
                              "flex w-full items-center justify-between rounded-[14px] px-5 py-4 text-left text-[18px] font-medium transition-all duration-200",
                              isActive
                                ? "bg-white text-black shadow-sm"
                                : "text-black/90 hover:bg-white/70",
                            )}
                          >
                            <span>{category.label}</span>
                            <ChevronRight size={18} />
                          </button>
                        );
                      })}
                        </div>
                      </div>

                      <div className="px-2 py-3">
                        <div className="space-y-1">
                          {activeServices.map((service) => {
                            const isHovered = hoveredService === service.title;
                            return (
                              <Link
                                key={service.title}
                                href={service.href}
                                onMouseEnter={() =>
                                  setHoveredService(service.title)
                                }
                                onMouseLeave={() => setHoveredService(null)}
                                className="group flex items-center justify-between border-b border-black/10 py-4 text-[17px] text-black/80 transition-colors hover:text-black"
                              >
                                <span>{service.title}</span>
                                <ArrowRight
                                  size={16}
                                  className={cn(
                                    "text-black/30 transition-all duration-200",
                                    isHovered &&
                                      "-translate-y-0.5 translate-x-0.5 text-site-accent",
                                  )}
                                />
                              </Link>
                            );
                          })}
                        </div>
                      </div>

                      <div
                        className="flex min-h-[390px] flex-col justify-between rounded-[20px] px-8 py-9"
                        style={{ background: activeCategoryData.previewGradient }}
                      >
                        <div>
                          <p className="text-[18px] font-bold tracking-[-0.03em] text-[#1770ff]">
                            {activeCategoryData.previewTitle}
                          </p>
                          <p className="mt-3 max-w-[245px] text-[16px] leading-9 text-black/55">
                            {activeCategoryData.previewDescription}
                          </p>
                        </div>

                        <Link
                          href="/services"
                          className="inline-flex h-11 w-fit items-center justify-center gap-2 rounded-full bg-black px-6 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
                        >
                          Explore
                          <ArrowRight size={15} />
                          <span className="hidden">
                            →
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden lg:flex">
            {/* <Link
              href="#contact"
              className="group relative inline-flex h-11 min-w-[160px] items-center justify-center overflow-hidden rounded-full bg-site-accent px-6 text-sm font-semibold text-black transition-all duration-300 hover:bg-transparent hover:text-site-accent border border-transparent hover:border-site-accent"
            >
              <span className="relative z-10 group-hover:scale-105 transition-transform">
                Work with us
              </span>
            </Link> */}
            <Button href="#contact" label="Work with us" />
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative h-10 w-10 rounded-full border border-white/10 text-site-accent transition-all hover:bg-white/5 lg:hidden"
            aria-label="Toggle menu"
          >
            <div className="absolute inset-0 flex items-center justify-center transition-all duration-300">
              <Menu
                size={18}
                className={cn(
                  "absolute transition-all duration-300",
                  isMobileMenuOpen
                    ? "rotate-90 opacity-0 scale-50"
                    : "rotate-0 opacity-100 scale-100",
                )}
              />
              <X
                size={18}
                className={cn(
                  "absolute transition-all duration-300",
                  isMobileMenuOpen
                    ? "rotate-0 opacity-100 scale-100"
                    : "-rotate-90 opacity-0 scale-50",
                )}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={cn(
            "fixed inset-0 top-16 z-40 bg-purple-600backdrop-blur-md transition-all duration-300 lg:hidden",
            isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible",
          )}
          onClick={closeMobileMenu}
        />

        {/* Mobile Menu Panel */}
        <div
          className={cn(
            "fixed top-16 bottom-0 right-0 w-full max-w-[400px] bg-white backdrop-blur-sm shadow-2xl transition-all duration-500 ease-out lg:hidden z-50 overflow-hidden",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="h-full overflow-y-auto overscroll-contain pb-24">
            <div className="px-5 py-6">
              {/* Navigation Links */}
              <div className="flex flex-col gap-2 mb-8">
                {navLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={cn(
                      "group flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-all duration-200 hover:bg-white/5",
                      item.active
                        ? "text-site-accent bg-white/5"
                        : "text-purple-600 hover:text-site-accent",
                    )}
                  >
                    <span>{item.label}</span>
                    {item.active && (
                      <div className="h-1.5 w-1.5 rounded-full bg-site-accent" />
                    )}
                  </Link>
                ))}
              </div>

              {/* Services Accordion */}
              <div className="mb-8">
                <div className="mb-3 flex items-center gap-2 px-4">
                  <div className="h-px flex-1 bg-white/10" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-site-accent">
                    Our Services
                  </span>
                  <div className="h-px flex-1 bg-white/10" />
                </div>
                <MobileServicesAccordion onLinkClick={closeMobileMenu} />
              </div>

              {/* CTA Button */}
              {/* <div className="px-4 pt-4">
                <Link
                  href="#contact"
                  onClick={closeMobileMenu}
                  className="group flex w-full items-center justify-center gap-2 rounded-full bg-site-accent px-6 py-3.5 text-sm font-semibold text-black transition-all hover:bg-transparent hover:text-site-accent border border-transparent hover:border-site-accent"
                >
                  <span>Work with us</span>
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-0.5 transition-transform"
                  />
                </Link>
              </div> */}
              <Button href="#contact" label="Work with us" />

              {/* Footer */}
              <div className="mt-8 px-4 pt-6 border-t border-white/10">
                <p className="text-center text-xs text-white/30">
                  © 2024 Ilmify Agency. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
