"use client";

import { usePathname } from "next/navigation";
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
  MonitorSmartphone,
  Palette,
  PenTool,
  Rocket,
  Smartphone,
  Sparkles,
  X,
  ChevronRight,
  ChevronDown,
  ShoppingCart,
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
  "digital-marketing": {
    label: "Digital Marketing",
    icon: Megaphone,
    color: "#FF6B35",
    subcategories: [
      {
        name: "Paid Advertising",
        services: [
          {
            href: "/services/google-ads",
            title: "Google Ads",
            icon: Gauge,
            description: "Dominate search with PPC",
          },
          {
            href: "/services/meta-ads",
            title: "Meta Ads",
            icon: LayoutDashboard,
            description: "Facebook & Instagram",
          },
          {
            href: "/services/tiktok-ads",
            title: "TikTok Ads",
            icon: Sparkles,
            description: "Reach Gen Z",
          },
        ],
      },
      {
        name: "Organic Growth",
        services: [
          {
            href: "/services/seo",
            title: "SEO Strategy",
            icon: FileSearch2,
            description: "Rank higher organically",
          },
          {
            href: "/services/content-marketing",
            title: "Content Marketing",
            icon: PenTool,
            description: "Engage your audience",
          },
        ],
      },
    ],
  },
  "custom-development": {
    label: "Custom Development",
    icon: Code2,
    color: "#3B82F6",
    subcategories: [
      {
        name: "Web Development",
        services: [
          {
            href: "/services/nextjs",
            title: "Next.js",
            icon: Globe2,
            description: "React framework for production",
          },
          {
            href: "/services/mern",
            title: "MERN Stack",
            icon: Brackets,
            description: "Full-stack JavaScript",
          },
          {
            href: "/services/vue",
            title: "Vue.js",
            icon: LayoutDashboard,
            description: "Progressive framework",
          },
        ],
      },
      {
        name: "App Development",
        services: [
          {
            href: "/services/flutter",
            title: "Flutter",
            icon: Smartphone,
            description: "Cross-platform apps",
          },
          {
            href: "/services/react-native",
            title: "React Native",
            icon: MonitorSmartphone,
            description: "Native performance",
          },
        ],
      },
      {
        name: "CMS Solutions",
        services: [
          {
            href: "/services/wordpress",
            title: "WordPress",
            icon: PenTool,
            description: "Versatile CMS",
          },
          {
            href: "/services/shopify",
            title: "Shopify",
            icon: ShoppingCart,
            description: "E-commerce solution",
          },
          {
            href: "/services/webflow",
            title: "Webflow",
            icon: Globe2,
            description: "Visual development",
          },
        ],
      },
    ],
  },
  "graphics-design": {
    label: "Graphics Design",
    icon: Palette,
    color: "#8B5CF6",
    subcategories: [
      {
        name: "Brand Identity",
        services: [
          {
            href: "/services/logo-design",
            title: "Logo Design",
            icon: PenTool,
            description: "Memorable logos",
          },
          {
            href: "/services/brand-identity",
            title: "Brand Identity",
            icon: Palette,
            description: "Complete brand systems",
          },
        ],
      },
      {
        name: "Digital Assets",
        services: [
          {
            href: "/services/ui-ux-design",
            title: "UI/UX Design",
            icon: Lightbulb,
            description: "User-centered design",
          },
          {
            href: "/services/social-media-graphics",
            title: "Social Graphics",
            icon: LayoutDashboard,
            description: "Engaging visuals",
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
        src="/assets/logo/logo.svg"
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
    useState<ServiceCategoryKey>("custom-development");
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

  const activeCategoryData = serviceStructure[activeCategory];

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
                  <div className="w-[1100px] rounded-2xl border border-white/10  shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] bg-white  backdrop-blur-sm overflow-hidden mt-12">
                    {/* Category Tabs */}
                    <div className="flex border-b border-white/10 bg-white/5">
                      {(
                        Object.keys(serviceStructure) as ServiceCategoryKey[]
                      ).map((key) => {
                        const category = serviceStructure[key];
                        const Icon = category.icon;
                        const isActive = activeCategory === key;
                        return (
                          <button
                            key={key}
                            type="button"
                            onMouseEnter={() => setActiveCategory(key)}
                            className={cn(
                              "flex flex-1 items-center justify-center gap-2 px-4 py-3.5 text-sm font-medium transition-all duration-200",
                              isActive
                                ? "text-site-accent border-b-2 border-site-accent bg-white/5"
                                : "text-black hover:text-site-accent hover:bg-white/5",
                            )}
                          >
                            <Icon size={16} />
                            <span>{category.label}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Services Grid */}
                    <div className="p-5">
                      <div className="grid grid-cols-4 gap-4">
                        {activeCategoryData.subcategories.map(
                          (subcategory, idx) => (
                            <div key={idx} className="space-y-2">
                              <p className="text-[11px] font-semibold uppercase tracking-wider text-black px-2 mb-2">
                                {subcategory.name}
                              </p>
                              <div className="space-y-1">
                                {subcategory.services.map((service) => {
                                  const ServiceIcon = service.icon;
                                  const isHovered =
                                    hoveredService === service.title;
                                  const isActive = pathname === service.href;
                                  const isHighlighted = isHovered || isActive;
                                  return (
                                    <Link
                                      key={service.title}
                                      href={service.href}
                                      onMouseEnter={() =>
                                        setHoveredService(service.title)
                                      }
                                      onMouseLeave={() =>
                                        setHoveredService(null)
                                      }
                                      className="group relative flex items-center gap-3 rounded-lg px-3 py-2.5 transition-all duration-200 overflow-hidden"
                                    >
                                      <div
                                        className={cn(
                                          "absolute inset-0 transition-opacity duration-200",
                                          isHighlighted
                                            ? "opacity-100"
                                            : "opacity-0",
                                          " rounded-lg",
                                        )}
                                      />
                                      <div
                                        className={cn(
                                          "rounded-md p-1.5 transition-all duration-200",
                                          isHighlighted
                                            ? "bg-site-accent/15"
                                            : "bg-black/10",
                                        )}
                                      >
                                        <ServiceIcon
                                          size={14}
                                          className={cn(
                                            "transition-colors duration-200",
                                            isHighlighted
                                              ? "text-site-accent"
                                              : "text-black/70",
                                          )}
                                        />
                                      </div>
                                      <span
                                        className={cn(
                                          "text-sm font-medium  duration-200",
                                          isHighlighted
                                            ? "text-site-accent"
                                            : "text-black/80",
                                        )}
                                      >
                                        {service.title}
                                      </span>
                                      <ChevronRight
                                        size={12}
                                        className={cn(
                                          "ml-auto transition-all duration-200 opacity-0 -translate-x-1",
                                          isHighlighted &&
                                            "opacity-100 translate-x-0 text-site-accent",
                                        )}
                                      />
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>
                          ),
                        )}
                      </div>

                      {/* Bottom CTA */}
                      <div className="mt-5 pt-4 border-t border-white/10">
                        <Link
                          href="/services"
                          className="group flex items-center justify-between rounded-lg p-2 transition-all duration-300 hover:bg-white/5"
                        >
                          <div className="flex items-center gap-2">
                            <Rocket size={14} className="text-site-accent" />
                            <span className="text-sm  group-hover:text-site-accent">
                              View all {activeCategoryData.label} services
                            </span>
                          </div>
                          <span className="text-white/30 group-hover:text-site-accent group-hover:translate-x-1 transition-all">
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
