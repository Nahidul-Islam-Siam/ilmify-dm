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
  Lightbulb,
  Menu,
  MonitorSmartphone,
  PenTool,
  Route,
  Smartphone,
  Workflow,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const navItems = [
  { href: "/", label: "Home", match: ["/"] },
  { href: "/about", label: "About", match: ["/about"] },
  { href: "/work", label: "Work", match: ["/work"] },
  { href: "/insights", label: "Insights", match: ["/insights"] },
];

const serviceCategories = [
  { id: "ui-ux-design", label: "UI UX Design", icon: Lightbulb },
  { id: "brand-design", label: "Brand Design", icon: PenTool },
  { id: "no-code-development", label: "No-Code Development", icon: Code2 },
];

const serviceItems = [
  {
    category: "ui-ux-design",
    href: "#services",
    title: "UI UX Consulting",
    body: "Shape your product vision with insights, market analysis, and growth strategies.",
    icon: Gauge,
  },
  {
    category: "ui-ux-design",
    href: "#services",
    title: "UX Research & Insights",
    body: "Uncover user needs and behaviors through research that drives design decisions.",
    icon: FileSearch2,
  },
  {
    category: "ui-ux-design",
    href: "#services",
    title: "UX Audit & Product Optimization",
    body: "Align goals and deliverables into a strategic roadmap for market success.",
    icon: Gauge,
  },
  {
    category: "ui-ux-design",
    href: "#services",
    title: "Experience Architecture",
    body: "Design intuitive structures and user flows that make products effortless.",
    icon: Route,
  },
  {
    category: "ui-ux-design",
    href: "#services",
    title: "Design Systems & Guidelines",
    body: "Develop scalable ecosystems that ensure brand consistency across platforms.",
    icon: Workflow,
  },
  {
    category: "ui-ux-design",
    href: "#services",
    title: "Prototyping & User Testing",
    body: "Turn ideas into prototypes, validate with users, and refine before launch.",
    icon: Workflow,
  },
  {
    category: "ui-ux-design",
    href: "#services",
    title: "Web Design",
    body: "Deliver striking, functional interfaces that enhance user satisfaction.",
    icon: MonitorSmartphone,
  },
  {
    category: "ui-ux-design",
    href: "#services",
    title: "Mobile Design",
    body: "Enrich experiences with animations that bring interfaces to life.",
    icon: Smartphone,
  },
  {
    category: "brand-design",
    href: "#services",
    title: "Brand Strategy",
    body: "Clarify positioning, personality, and visual direction for memorable brands.",
    icon: PenTool,
  },
  {
    category: "brand-design",
    href: "#services",
    title: "Visual Identity Systems",
    body: "Create flexible identity kits that scale across every customer touchpoint.",
    icon: PenTool,
  },
  {
    category: "brand-design",
    href: "#services",
    title: "Campaign Design",
    body: "Launch-ready visual systems for ads, social, and digital storytelling.",
    icon: MonitorSmartphone,
  },
  {
    category: "no-code-development",
    href: "#services",
    title: "Framer Development",
    body: "Build premium marketing sites with smooth motion and fast iteration cycles.",
    icon: Code2,
  },
  {
    category: "no-code-development",
    href: "#services",
    title: "Webflow Development",
    body: "Ship scalable no-code websites with CMS structure and team-friendly editing.",
    icon: Code2,
  },
  {
    category: "no-code-development",
    href: "#services",
    title: "MVP Launch Systems",
    body: "Move from concept to launch with high-speed design and visual development.",
    icon: Workflow,
  },
];

function BrandMark() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/assets/logo/logo.png"
        alt="ZeeFrames logo"
        priority
        height={200}
        width={200}
        className="h-auto w-[180px] object-contain md:w-[200px]"
      />
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeServiceCategory, setActiveServiceCategory] =
    useState("ui-ux-design");
  const [hoveredServiceTitle, setHoveredServiceTitle] = useState<string | null>(null);

  const visibleServiceItems = serviceItems.filter(
    (item) => item.category === activeServiceCategory,
  );

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

  return (
    <header className="fixed  inset-x-0 top-0 z-50">
      <div
        className={cn(
          "border-b border-white/5 bg-[#111111] transition-all duration-300",
          scrolled ? "shadow-[0_10px_40px_rgba(0,0,0,0.28)]" : "",
        )}
      >
        <div className="mx-auto flex h-20 max-w-[1460px] items-center justify-between px-5 md:px-8">
          <BrandMark />

          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="gap-1">
              {navLinks.map((item) => (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "relative h-10 rounded-none border-none bg-transparent px-4 text-[15px] font-medium text-white shadow-none hover:bg-transparent hover:text-[#52F447] focus:bg-transparent focus:text-[#52F447]",
                        item.active &&
                          "text-[#52F447] after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-9 after:-translate-x-1/2 after:bg-[#52F447]",
                      )}
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}

              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-10 rounded-none border-none px-4 text-[15px] font-medium text-white shadow-none focus:text-white">
                  <span className="flex items-center gap-1.5">Services</span>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="pt-4">
                  <div className="grid w-[1240px] grid-cols-[280px_minmax(0,1fr)] gap-6 rounded-[24px] border border-white/10 bg-[#0a0a0a] p-3 shadow-[0_18px_60px_rgba(0,0,0,0.38)]">
                    <div className="rounded-[20px] bg-[#090909] p-2">
                      {serviceCategories.map((category) => {
                        const Icon = category.icon;
                        const active = category.id === activeServiceCategory;

                        return (
                          <button
                            key={category.id}
                            type="button"
                            onMouseEnter={() => setActiveServiceCategory(category.id)}
                            onFocus={() => setActiveServiceCategory(category.id)}
                            className="flex w-full items-center gap-3 rounded-[14px] px-5 py-4 text-left text-[15px] font-semibold transition"
                            style={{
                              backgroundColor: active ? "#52F447" : "transparent",
                              color: active ? "#0d0d0d" : "#ffffff",
                            }}
                          >
                            <Icon
                              size={18}
                              className="shrink-0"
                              style={{ color: active ? "#0d0d0d" : "#ffffff" }}
                            />
                            <span style={{ color: active ? "#0d0d0d" : "#ffffff" }}>
                              {category.label}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {visibleServiceItems.map((item) => {
                        const Icon = item.icon;
                        const isHovered = hoveredServiceTitle === item.title;

                        return (
                          <Link
                            key={item.title}
                            href={item.href}
                            onMouseEnter={() => setHoveredServiceTitle(item.title)}
                            onMouseLeave={() => setHoveredServiceTitle(null)}
                            className="rounded-[18px] px-5 py-5 transition"
                            style={{
                              backgroundColor: isHovered ? "#52F447" : "#0d0d0d",
                              color: isHovered ? "#0d0d0d" : "#ffffff",
                            }}
                          >
                            <div className="flex items-start gap-4">
                              <Icon
                                size={20}
                                className="mt-1 shrink-0"
                                style={{ color: isHovered ? "#0d0d0d" : "#ffffff" }}
                              />
                              <div>
                                <p
                                  className="text-[15px] font-semibold"
                                  style={{ color: isHovered ? "#0d0d0d" : "#ffffff" }}
                                >
                                  {item.title}
                                </p>
                                <p
                                  className="mt-2 max-w-[360px] text-[15px] leading-8"
                                  style={{ color: isHovered ? "#0d0d0d" : "#ffffff" }}
                                >
                                  {item.body}
                                </p>
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden lg:flex">
            <Link
              href="#contact"
              className="group inline-flex h-[50px] min-w-[182px] items-center justify-center rounded-full border border-[#52F447] bg-[#52F447] px-8 text-[15px] font-semibold text-black transition hover:bg-transparent hover:text-[#52F447]"
            >
              <span className="group-hover:hidden">Work with us</span>
              <span className="hidden group-hover:inline">Lets Talk</span>
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 text-white lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open ? (
          <div className="border-t border-white/8 bg-[#111111] px-5 pb-5 pt-3 lg:hidden">
            <nav className="flex flex-col gap-3">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium text-white transition hover:text-[#52F447]",
                    item.active && "text-[#52F447]",
                  )}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-white/42">
                  Services
                </p>
                <div className="mt-3 flex flex-col gap-3">
                  {serviceCategories.map((category) => (
                    <div
                      key={category.id}
                      className="rounded-xl border border-white/8 p-3"
                    >
                      <p className="text-sm font-semibold text-white">
                        {category.label}
                      </p>
                      <div className="mt-3 flex flex-col gap-2">
                        {serviceItems
                          .filter((item) => item.category === category.id)
                          .map((item) => (
                            <Link
                              key={item.title}
                              href={item.href}
                              className="text-sm font-medium text-white/78 transition hover:text-[#52F447]"
                              onClick={() => setOpen(false)}
                            >
                              {item.title}
                            </Link>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-3 flex flex-col gap-3">
                <Link
                  href="#contact"
                  className="rounded-full border border-[#52F447] bg-[#52F447] px-4 py-3 text-center text-sm font-semibold text-black transition hover:bg-transparent hover:text-[#52F447]"
                  onClick={() => setOpen(false)}
                >
                  Lets Talk
                </Link>
              </div>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
