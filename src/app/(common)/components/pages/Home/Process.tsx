"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    subtitle: "Research & Domain Analysis",
    body: "Don't ignore the crucial step of research and development in the UX design process. Discover and solve user problems to launch a successful product. Gather data on the target audience and analyze customer feedback for a stronger experience.",
    image: "/assets/idea/home-process-1.png",
  },
  {
    number: "02",
    title: "Flows",
    subtitle: "User Journey Map Sitemap",
    body: "Create successful user flows for your product by mapping journeys and interactions. Define product ideas and goals, align them to user needs, and test them with real users for optimization.",
    image: "/assets/idea/home-process-2.png",
  },
  {
    number: "03",
    title: "Wireframes",
    subtitle: "Low - Fidelity Design",
    body: "Define the content and functionality of your product with wireframes. Brainstorm multiple ideas, get feedback, and refine the structure for a more natural and intuitive interface.",
    image: "/assets/idea/home-process-mob-3.png",
  },
  {
    number: "04",
    title: "Mockups",
    subtitle: "High - Fidelity Design",
    body: "Visualize your product's appearance with polished mockups. Detailed screens are reviewed by stakeholders and then validated with users for improved design decisions.",
    image: "/assets/idea/home-process-mob-4.png",
  },
  {
    number: "05",
    title: "Prototyping",
    subtitle: "Interaction Design",
    body: "UX designers create clickable prototypes to assess product functionality, gather user feedback, and collaborate with the development team before implementation.",
    image: "/assets/idea/home-process-mob-5.png",
  },
  {
    number: "06",
    title: "Testing",
    subtitle: "Usability Testing",
    body: "Improve product usability by testing with real users. Define goals and scenarios, recruit the right audience, analyze results, and make changes for an optimal experience.",
    image: "/assets/idea/home-process-mob-6.png",
  },
];

export default function Process() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const progressFillRef = useRef<HTMLDivElement>(null);
  const visualRailRef = useRef<HTMLDivElement>(null);
  const visualCardRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);
  const currentImageRef = useRef<HTMLDivElement>(null);
  const previousImageRef = useRef<HTMLDivElement>(null);
  const previousStepRef = useRef(0);
  const frameRef = useRef<number | null>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [previousStep, setPreviousStep] = useState<number | null>(null);
  const [railHeight, setRailHeight] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  // Check if desktop on mount and resize
  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkDesktop();
    window.addEventListener("resize", checkDesktop);

    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  useEffect(() => {
    const syncScrollState = () => {
      const timeline = timelineRef.current;
      const progressFill = progressFillRef.current;
      const rail = visualRailRef.current;
      const card = visualCardRef.current;
      const steps = stepRefs.current.filter(Boolean) as HTMLDivElement[];

      if (!timeline || !progressFill || steps.length === 0) return;

      const viewportCenter = window.innerHeight * 0.44;
      const timelineRect = timeline.getBoundingClientRect();
      const centers = steps.map((step) => {
        const rect = step.getBoundingClientRect();
        return rect.top + rect.height * 0.5;
      });

      let nextActive = 0;
      let smallestDistance = Number.POSITIVE_INFINITY;

      centers.forEach((center, index) => {
        const distance = Math.abs(center - viewportCenter);
        if (distance < smallestDistance) {
          smallestDistance = distance;
          nextActive = index;
        }
      });

      setActiveStep((prev) => (prev === nextActive ? prev : nextActive));

      const firstCenter = Math.max(0, centers[0] - timelineRect.top);
      const lastCenter = Math.max(
        firstCenter,
        centers[centers.length - 1] - timelineRect.top,
      );
      const targetCenter = Math.max(
        firstCenter,
        Math.min(centers[nextActive] - timelineRect.top, lastCenter),
      );
      progressFill.style.height = `${targetCenter}px`;

      if (rail) {
        setRailHeight(timeline.offsetHeight);
      }

      if (rail && card && isDesktop) {
        const activeNode = steps[nextActive];
        const maxTop = Math.max(rail.offsetHeight - card.offsetHeight, 0);
        const targetTop = Math.max(
          0,
          Math.min(
            activeNode.offsetTop +
              activeNode.offsetHeight * 0.5 -
              card.offsetHeight * 0.5,
            maxTop,
          ),
        );

        gsap.to(card, {
          y: targetTop,
          duration: 0.28,
          ease: "power1.out",
          overwrite: true,
        });
      } else if (card) {
        gsap.set(card, { y: 0 });
      }
    };

    const onScroll = () => {
      if (frameRef.current !== null) return;
      frameRef.current = window.requestAnimationFrame(() => {
        syncScrollState();
        frameRef.current = null;
      });
    };

    syncScrollState();
    window.addEventListener("resize", syncScrollState);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
      window.removeEventListener("resize", syncScrollState);
      window.removeEventListener("scroll", onScroll);
    };
  }, [isDesktop]);

  useEffect(() => {
    if (previousStepRef.current === activeStep) {
      gsap.set(currentImageRef.current, { autoAlpha: 1, x: 0, scale: 1 });
      return;
    }

    setPreviousStep(previousStepRef.current);

    if (previousImageRef.current && isDesktop) {
      gsap.fromTo(
        previousImageRef.current,
        { autoAlpha: 1, x: 0, scale: 1 },
        {
          autoAlpha: 0,
          x: -24,
          scale: 0.985,
          duration: 0.35,
          ease: "power2.out",
          overwrite: true,
        },
      );
    }

    if (currentImageRef.current && isDesktop) {
      gsap.fromTo(
        currentImageRef.current,
        { autoAlpha: 0, x: 26, scale: 0.985 },
        {
          autoAlpha: 1,
          x: 0,
          scale: 1,
          duration: 0.45,
          ease: "power2.out",
          overwrite: true,
        },
      );
    }

    const timeout = window.setTimeout(() => setPreviousStep(null), 380);
    previousStepRef.current = activeStep;

    return () => window.clearTimeout(timeout);
  }, [activeStep, isDesktop]);

  return (
    <section className="bg-transparent px-4 py-12 text-[var(--site-text)] sm:px-6 sm:py-16 lg:px-8 lg:py-20 xl:py-24">
      <div className="mx-auto max-w-[1400px]">
        {/* Header Section - Responsive */}
        <div className="mx-auto max-w-[90%] sm:max-w-[85%] md:max-w-[760px] text-center">
          <p className="text-[10px] sm:text-[11px] md:text-[12px] font-bold uppercase tracking-[0.14em] sm:tracking-[0.16em] text-site-accent">
            Our Process, Your Advantage
          </p>
          <h2 className="mt-3 sm:mt-4 text-[1.75rem] sm:text-[2rem] md:text-[2.65rem] lg:text-[3rem] xl:text-[3.5rem] font-semibold tracking-[-0.04em] sm:tracking-[-0.05em] text-site-text leading-tight">
            From Idea To Execution
          </h2>
          <p className="mx-auto mt-3 sm:mt-4 max-w-[90%] sm:max-w-[720px] text-[13px] sm:text-[14px] md:text-[15px] leading-6 sm:leading-7 text-site-muted">
            We have become experts in creating top-notch digital products. We
            design beautifully and develop excellently. And we care deeply about
            what we do.
          </p>
        </div>

        {/* Main Content - Responsive Grid */}
        <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 grid gap-6 sm:gap-8 lg:gap-10 xl:gap-16 lg:grid-cols-[minmax(0,1.04fr)_minmax(300px,0.78fr)] lg:items-start">
          {/* Left Column - Timeline */}
          <div ref={timelineRef} className="relative">
            {/* Vertical Line - Positioned to the right of numbers */}
            <div className="absolute left-[60px] top-0 hidden h-full w-[3px] -translate-x-1/2 rounded-full bg-black/15 sm:left-[70px] md:left-[80px] md:block lg:left-[88px] lg:w-[4px]" />
            <div
              ref={progressFillRef}
              className="absolute left-[60px] sm:left-[70px] md:left-[80px] lg:left-[88px] top-0 hidden md:block h-0 w-[3px] lg:w-[4px] -translate-x-1/2 rounded-full bg-site-accent"
            />

            {/* Steps Container */}
            <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">
              {processSteps.map((step, index) => {
                const isActive = index === activeStep;

                return (
                  <div
                    key={step.number}
                    ref={(node) => {
                      stepRefs.current[index] = node;
                    }}
                    className={`
                      relative rounded-[18px] sm:rounded-[20px] md:rounded-[22px] 
                      transition-all duration-300
                      ${isActive ? "border border-black/10 bg-white/80 shadow-[var(--site-shadow)]" : "border border-black/10 bg-white/60"}
                      p-4 pl-14 sm:p-5 sm:pl-16 md:p-6 md:pl-20 lg:p-7 lg:pl-24
                      md:border-0 md:bg-transparent
                    `}
                  >
                    {/* Step Number - Now with more right padding to accommodate line */}
                    <span
                      className={`
                      absolute left-2 sm:left-3 md:left-4 top-3 sm:top-4 md:top-5
                      text-[1.25rem] sm:text-[1.35rem] md:text-[1.5rem] lg:text-[1.75rem] xl:text-[2rem]
                      font-semibold leading-none tracking-[-0.04em]
                      transition-colors duration-300
                      ${isActive ? "text-purple-800" : "text-[var(--site-text)]"}
                    `}
                    >
                      {step.number}
                    </span>

                    <div className="min-h-[180px] sm:min-h-[200px] md:min-h-[220px] lg:min-h-[250px]">
                      <h3
                        className={`
                        text-[1.25rem] sm:text-[1.35rem] md:text-[1.55rem] lg:text-[1.75rem] xl:text-[1.85rem] leading-[1.08]
                        font-semibold tracking-[-0.03em] sm:tracking-[-0.04em]
                        transition-colors duration-300
                        ${isActive ? "text-purple-800" : "text-black/75"}
                      `}
                      >
                        {step.title}
                      </h3>
                      <p
                        className={`
                        mt-0.5 sm:mt-1
                        text-[0.95rem] sm:text-[1rem] md:text-[1.05rem] lg:text-[1.15rem] xl:text-[1.25rem] leading-[1.25]
                        tracking-[-0.02em] sm:tracking-[-0.03em]
                        transition-colors duration-300
                        ${isActive ? "text-black/70" : "text-black/55"}
                      `}
                      >
                        {step.subtitle}
                      </p>
                      <p
                        className={`
                        mt-3 sm:mt-4 md:mt-5
                        max-w-[90%] sm:max-w-[95%] md:max-w-[560px]
                        text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] leading-[1.75]
                        transition-colors duration-300
                        ${isActive ? "text-black/85" : "text-black/65"}
                      `}
                      >
                        {step.body}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Image (Desktop Only with animation) */}
          {isDesktop && (
            <div
              ref={visualRailRef}
              className="relative hidden lg:block"
              style={{ height: railHeight || undefined }}
            >
              <div
                ref={visualCardRef}
                className="absolute left-0 top-20 w-full will-change-transform"
              >
                <div className="relative mx-auto aspect-[0.98] w-full max-w-[480px] overflow-hidden rounded-[24px] border border-black/10 bg-white/85 shadow-[var(--site-shadow)] lg:rounded-[26px] xl:max-w-[540px] xl:rounded-[28px]">
                  {previousStep !== null && previousStep !== activeStep ? (
                    <div ref={previousImageRef} className="absolute inset-0">
                      <Image
                        src={processSteps[previousStep].image}
                        alt={processSteps[previousStep].title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 42vw"
                        className="object-cover"
                        priority={false}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/5" />
                    </div>
                  ) : null}

                  <div ref={currentImageRef} className="absolute inset-0 ">
                    <Image
                      src={processSteps[activeStep].image}
                      alt={processSteps[activeStep].title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-cover"
                      priority={activeStep < 2}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/5" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Mobile/Tablet Image - Always visible on smaller screens */}
          {/* {!isDesktop && (
            <div className="mt-6 sm:mt-8 lg:hidden">
              <div className="relative mx-auto aspect-[0.98] w-full max-w-[400px] sm:max-w-[480px] md:max-w-[540px] overflow-hidden rounded-[20px] sm:rounded-[24px] md:rounded-[28px] border border-white/8 bg-[#111111] shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
                <Image
                  src={processSteps[activeStep].image}
                  alt={processSteps[activeStep].title}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  priority={activeStep < 2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/5" />
              </div>
            </div>
          )} */}
        </div>
      </div>
    </section>
  );
}
