"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Pause, Play, Quote } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CULTURE_IMAGES = [
  { src: "/assets/our-culture/about-member-1.png", alt: "Team member 1", name: "Sarah Johnson", role: "Lead UX Designer" },
  { src: "/assets/our-culture/about-member-2.png", alt: "Team member 2", name: "Michael Chen", role: "UI Developer" },
  { src: "/assets/our-culture/about-member-3.png", alt: "Team member 3", name: "Emma Rodriguez", role: "Brand Strategist" },
  { src: "/assets/our-culture/about-member-4.png", alt: "Team member 4", name: "David Kim", role: "No-Code Expert" },
  { src: "/assets/our-culture/about-member-5.png", alt: "Team member 5", name: "Lisa Thompson", role: "Project Manager" },
] as const;

const AUTO_PLAY_INTERVAL_MS = 4000;
const SLIDE_ANIMATION_MS = 500;

export default function OurCultureSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const animationTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isAnimatingRef = useRef(false);
  const nextSlideRef = useRef<() => void>(() => {});

  const setAnimatingState = (value: boolean) => {
    isAnimatingRef.current = value;
  };

  const runSlideTransition = (updateIndex: (prev: number) => number) => {
    if (isAnimatingRef.current) return;
    setAnimatingState(true);
    setCurrentIndex(updateIndex);
    if (animationTimeoutRef.current) clearTimeout(animationTimeoutRef.current);
    animationTimeoutRef.current = setTimeout(() => {
      setAnimatingState(false);
      animationTimeoutRef.current = null;
    }, SLIDE_ANIMATION_MS);
  };

  const nextSlide = () => runSlideTransition((prev) => (prev + 1) % CULTURE_IMAGES.length);
  const prevSlide = () => runSlideTransition((prev) => (prev - 1 + CULTURE_IMAGES.length) % CULTURE_IMAGES.length);
  const goToSlide = (index: number) => runSlideTransition(() => index);
  const toggleAutoPlay = () => setIsAutoPlaying((prev) => !prev);

  nextSlideRef.current = nextSlide;

  useEffect(() => {
    if (!isAutoPlaying) {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
        autoPlayRef.current = null;
      }
      return;
    }
    autoPlayRef.current = setInterval(() => nextSlideRef.current(), AUTO_PLAY_INTERVAL_MS);
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying]);

  useEffect(() => {
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
      if (animationTimeoutRef.current) clearTimeout(animationTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const carousel = carouselRef.current;
    if (!section || !content || !carousel) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        content,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 40%",
            scrub: 1,
          },
        },
      );

      gsap.fromTo(
        carousel,
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            end: "top 35%",
            scrub: 1,
          },
        },
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-transparent py-20 md:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-purple-800/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-site-accent/8 blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div ref={contentRef} className="space-y-8">
            <div>
              <div className="mb-4 inline-block">
                <div className="h-0.5 w-12 bg-purple-800" />
              </div>
              <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-purple-800 sm:text-xs">
                OUR CULTURE
              </h2>
              <h3 className="mt-4 text-2xl font-bold leading-[1.2] text-black sm:text-3xl md:text-4xl lg:text-4xl">
                How Our Team Blends
                <br />
                UI UX, Branding, And
                <br />
                No-Code
              </h3>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white/85 p-6 shadow-[var(--site-shadow)]">
              <Quote className="mb-4 h-8 w-8 text-purple-800" />
              <p className="text-base leading-relaxed text-black/72 sm:text-lg">
                We Believe In Clear Communication, Proactive Problem Solving, And Full Transparency.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-800">100%</div>
                <div className="text-xs text-black/55">Transparency</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-800">24/7</div>
                <div className="text-xs text-black/55">Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-800">50+</div>
                <div className="text-xs text-black/55">Experts</div>
              </div>
            </div>
          </div>

          <div ref={carouselRef} className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white/90 p-2 shadow-[var(--site-shadow)]">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl">
                {CULTURE_IMAGES.map((image, index) => (
                  <div
                    key={image.src}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                      index === currentIndex ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
                    }`}
                    style={{ transform: `translateX(${(index - currentIndex) * 100}%)` }}
                  >
                    <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" priority={index === 0} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <p className="text-xl font-semibold">{image.name}</p>
                      <p className="text-sm text-white/80">{image.role}</p>
                    </div>
                  </div>
                ))}

                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white/85 text-black transition-all duration-300 hover:bg-purple-800 hover:text-white"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white/85 text-black transition-all duration-300 hover:bg-purple-800 hover:text-white"
                >
                  <ChevronRight size={20} />
                </button>

                <button
                  onClick={toggleAutoPlay}
                  className="absolute right-4 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-full border border-black/10 bg-white/85 text-black transition-all duration-300 hover:bg-purple-800 hover:text-white"
                >
                  {isAutoPlaying ? <Pause size={14} /> : <Play size={14} />}
                </button>
              </div>

              <div className="mt-4 flex justify-center gap-2">
                {CULTURE_IMAGES.map((image, index) => (
                  <button
                    key={image.src}
                    onClick={() => goToSlide(index)}
                    className={`transition-all duration-300 ${
                      index === currentIndex ? "h-1.5 w-8 rounded-full bg-purple-800" : "h-1.5 w-1.5 rounded-full bg-black/30 hover:bg-black/55"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="scrollbar-thin mt-4 flex justify-center gap-2 overflow-x-auto px-4 pb-2">
              {CULTURE_IMAGES.map((image, index) => (
                <button
                  key={image.src}
                  onClick={() => goToSlide(index)}
                  className={`relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-lg transition-all duration-300 ${
                    index === currentIndex ? "scale-105 ring-2 ring-purple-800" : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image src={image.src} alt={`Thumbnail ${index + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
