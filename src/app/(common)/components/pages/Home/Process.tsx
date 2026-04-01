"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    subtitle: "Research & Domain Analysis",
    body:
      "Don't ignore the crucial step of research and development in the UX design process. Discover and solve user problems to launch a successful product. Gather data on the target audience and analyze customer feedback for a stronger experience.",
    image: "/assets/idea/home-process-1.png",
  },
  {
    number: "02",
    title: "Flows",
    subtitle: "User Journey Map Sitemap",
    body:
      "Create successful user flows for your product by mapping journeys and interactions. Define product ideas and goals, align them to user needs, and test them with real users for optimization.",
    image: "/assets/idea/home-process-2.png",
  },
  {
    number: "03",
    title: "Wireframes",
    subtitle: "Low - Fidelity Design",
    body:
      "Define the content and functionality of your product with wireframes. Brainstorm multiple ideas, get feedback, and refine the structure for a more natural and intuitive interface.",
    image: "/assets/idea/home-process-mob-3.png",
  },
  {
    number: "04",
    title: "Mockups",
    subtitle: "High - Fidelity Design",
    body:
      "Visualize your product's appearance with polished mockups. Detailed screens are reviewed by stakeholders and then validated with users for improved design decisions.",
    image: "/assets/idea/home-process-mob-4.png",
  },
  {
    number: "05",
    title: "Prototyping",
    subtitle: "Interaction Design",
    body:
      "UX designers create clickable prototypes to assess product functionality, gather user feedback, and collaborate with the development team before implementation.",
    image: "/assets/idea/home-process-mob-5.png",
  },
  {
    number: "06",
    title: "Testing",
    subtitle: "Usability Testing",
    body:
      "Improve product usability by testing with real users. Define goals and scenarios, recruit the right audience, analyze results, and make changes for an optimal experience.",
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

  useEffect(() => {
    const progressTo = gsap.quickTo(progressFillRef.current, "height", {
      duration: 0.75,
      ease: "power3.out",
    });
    const cardTo = gsap.quickTo(visualCardRef.current, "y", {
      duration: 0.95,
      ease: "power3.out",
    });

    const syncScrollState = () => {
      const timeline = timelineRef.current;
      const rail = visualRailRef.current;
      const card = visualCardRef.current;
      const steps = stepRefs.current.filter(Boolean) as HTMLDivElement[];

      if (!timeline || steps.length === 0) return;

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
      const lastCenter = Math.max(firstCenter, centers[centers.length - 1] - timelineRect.top);
      const targetCenter = Math.max(firstCenter, Math.min(centers[nextActive] - timelineRect.top, lastCenter));
      progressTo(targetCenter);

      if (rail) {
        setRailHeight(timeline.offsetHeight);
      }

      if (rail && card && window.innerWidth >= 1024) {
        const activeNode = steps[nextActive];
        const maxTop = Math.max(rail.offsetHeight - card.offsetHeight, 0);
        const targetTop = Math.max(
          0,
          Math.min(
            activeNode.offsetTop + activeNode.offsetHeight * 0.5 - card.offsetHeight * 0.5,
            maxTop,
          ),
        );

        cardTo(targetTop);
      } else {
        cardTo(0);
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
  }, []);

  useEffect(() => {
    if (previousStepRef.current === activeStep) {
      gsap.set(currentImageRef.current, { autoAlpha: 1, x: 0, scale: 1 });
      return;
    }

    setPreviousStep(previousStepRef.current);

    if (previousImageRef.current) {
      gsap.fromTo(
        previousImageRef.current,
        { autoAlpha: 1, x: 0, scale: 1 },
        {
          autoAlpha: 0,
          x: -24,
          scale: 0.985,
          duration: 0.42,
          ease: "power2.out",
          overwrite: true,
        },
      );
    }

    if (currentImageRef.current) {
      gsap.fromTo(
        currentImageRef.current,
        { autoAlpha: 0, x: 26, scale: 0.985 },
        {
          autoAlpha: 1,
          x: 0,
          scale: 1,
          duration: 0.68,
          ease: "power3.out",
          overwrite: true,
        },
      );
    }

    const timeout = window.setTimeout(() => setPreviousStep(null), 460);
    previousStepRef.current = activeStep;

    return () => window.clearTimeout(timeout);
  }, [activeStep]);

  return (
    <section className="bg-[#0b0b0b] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1280px]">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#52F447] sm:text-[12px]">
            Our Process, Your Advantage
          </p>
          <h2 className="mt-4 text-[2rem] font-semibold tracking-[-0.05em] text-white sm:text-[2.65rem] md:text-[3.5rem]">
            From Idea To Execution
          </h2>
          <p className="mx-auto mt-4 max-w-[720px] text-[15px] leading-7 text-white/78 sm:text-base sm:leading-8">
            We have become experts in creating top-notch digital products. We
            design beautifully and develop excellently. And we care deeply about
            what we do.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-[minmax(0,1.04fr)_minmax(360px,0.78fr)] lg:items-start lg:gap-16 xl:gap-20">
          <div ref={timelineRef} className="relative">
            <div className="absolute left-[43px] top-0 hidden h-full w-[6px] -translate-x-1/2 rounded-full bg-white/6 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] md:block" />
            <div className="absolute left-[43px] top-0 hidden h-full w-[14px] -translate-x-1/2 rounded-full bg-[#52F447]/8 blur-md md:block" />
            <div
              ref={progressFillRef}
              className="absolute left-[43px] top-0 hidden h-0 w-[4px] -translate-x-1/2 rounded-full bg-[#52F447] shadow-[0_0_18px_rgba(82,244,71,0.65)] md:block"
            />

            <div className="space-y-8 sm:space-y-10 lg:space-y-12">
              {processSteps.map((step, index) => {
                const isActive = index === activeStep;

                return (
                  <div
                    key={step.number}
                    ref={(node) => {
                      stepRefs.current[index] = node;
                    }}
                    className="relative rounded-[22px] border border-white/7 bg-white/[0.015] p-5 pl-16 transition-colors duration-500 sm:p-7 sm:pl-20 md:border-0 md:bg-transparent md:p-0 md:pl-[92px]"
                  >
                    <span className="absolute -left-3 top-4 w-8 text-left text-[1.5rem] font-semibold leading-none tracking-[-0.04em] text-white md:top-1 md:text-[2rem]">
                      {step.number}
                    </span>

                    <div className="md:min-h-[230px] lg:min-h-[250px]">
                      <h3 className={`text-[1.55rem] font-semibold tracking-[-0.04em] transition-colors duration-500 sm:text-[1.85rem] ${isActive ? "text-white" : "text-white/88"}`}>
                        {step.title}
                      </h3>
                      <p className={`mt-1 text-[1.15rem] tracking-[-0.03em] transition-colors duration-500 sm:text-[1.45rem] ${isActive ? "text-white/68" : "text-white/55"}`}>
                        {step.subtitle}
                      </p>
                      <p className={`mt-5 max-w-[560px] text-[15px] leading-7 transition-colors duration-500 sm:text-[16px] sm:leading-8 ${isActive ? "text-white/92" : "text-white/62"}`}>
                        {step.body}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div ref={visualRailRef} className="relative hidden lg:block" style={{ height: railHeight || undefined }}>
            <div ref={visualCardRef} className="absolute left-0 top-20 w-full will-change-transform">
              <div className="relative mx-auto aspect-[0.98] w-full max-w-[540px] overflow-hidden rounded-[28px] border border-white/8 bg-[#111111] shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
                {previousStep !== null && previousStep !== activeStep ? (
                  <div ref={previousImageRef} className="absolute inset-0">
                    <Image
                      src={processSteps[previousStep].image}
                      alt={processSteps[previousStep].title}
                      fill
                      sizes="42vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/5" />
                  </div>
                ) : null}

                <div ref={currentImageRef} className="absolute inset-0">
                  <Image
                    src={processSteps[activeStep].image}
                    alt={processSteps[activeStep].title}
                    fill
                    sizes="42vw"
                    className="object-cover"
                    priority={activeStep < 2}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/5" />
                </div>
              </div>
            </div>
          </div>

          <div className="hidden">
            <div className="relative mx-auto aspect-[0.98] w-full max-w-[540px] overflow-hidden rounded-[22px] border border-white/8 bg-[#111111] shadow-[0_24px_80px_rgba(0,0,0,0.35)] sm:rounded-[28px]">
              <Image
                src={processSteps[activeStep].image}
                alt={processSteps[activeStep].title}
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
