"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Pause, Play, Quote } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CULTURE_IMAGES = [
  {
    src: "/assets/our-culture/about-member-1.png",
    alt: "Team member 1",
    name: "Sarah Johnson",
    role: "Lead UX Designer",
  },
  {
    src: "/assets/our-culture/about-member-2.png",
    alt: "Team member 2",
    name: "Michael Chen",
    role: "UI Developer",
  },
  {
    src: "/assets/our-culture/about-member-3.png",
    alt: "Team member 3",
    name: "Emma Rodriguez",
    role: "Brand Strategist",
  },
  {
    src: "/assets/our-culture/about-member-4.png",
    alt: "Team member 4",
    name: "David Kim",
    role: "No-Code Expert",
  },
  {
    src: "/assets/our-culture/about-member-5.png",
    alt: "Team member 5",
    name: "Lisa Thompson",
    role: "Project Manager",
  },
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
  const animationTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );
  const isAnimatingRef = useRef(false);
  const nextSlideRef = useRef<() => void>(() => {});

  const setAnimatingState = (value: boolean) => {
    isAnimatingRef.current = value;
  };

  const runSlideTransition = (updateIndex: (prev: number) => number) => {
    if (isAnimatingRef.current) return;

    setAnimatingState(true);
    setCurrentIndex(updateIndex);

    if (animationTimeoutRef.current) {
      clearTimeout(animationTimeoutRef.current);
    }

    animationTimeoutRef.current = setTimeout(() => {
      setAnimatingState(false);
      animationTimeoutRef.current = null;
    }, SLIDE_ANIMATION_MS);
  };

  const nextSlide = () => {
    runSlideTransition((prev) => (prev + 1) % CULTURE_IMAGES.length);
  };

  const prevSlide = () => {
    runSlideTransition(
      (prev) => (prev - 1 + CULTURE_IMAGES.length) % CULTURE_IMAGES.length,
    );
  };

  const goToSlide = (index: number) => {
    runSlideTransition(() => index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying((prev) => !prev);
  };

  nextSlideRef.current = nextSlide;

  useEffect(() => {
    if (!isAutoPlaying) {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
        autoPlayRef.current = null;
      }
      return;
    }

    autoPlayRef.current = setInterval(() => {
      nextSlideRef.current();
    }, AUTO_PLAY_INTERVAL_MS);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
        autoPlayRef.current = null;
      }
    };
  }, [isAutoPlaying]);

  useEffect(() => {
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }

      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
      }
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
        {
          opacity: 0,
          x: -50,
        },
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
        {
          opacity: 0,
          x: 50,
        },
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
    <section
      ref={sectionRef}
      className="relative py-20 md:py-24 lg:py-28 bg-[#0b0b0b] overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-800/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-800/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <div ref={contentRef} className="space-y-8">
            <div>
              <div className="inline-block mb-4">
                <div className="w-12 h-0.5 bg-purple-800" />
              </div>
              <h2 className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-purple-800">
                OUR CULTURE
              </h2>
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold leading-[1.2] mt-4 text-white">
                How Our Team Blends
                <br />
                UI UX, Branding, And
                <br />
                No-Code
              </h3>
            </div>

            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <Quote className="w-8 h-8 text-purple-800 mb-4" />
              <p className="text-base sm:text-lg leading-relaxed text-gray-300">
                We Believe In Clear Communication, Proactive Problem Solving,
                And Full Transparency.
              </p>
            </div>

            {/* Stats or values */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-800">100%</div>
                <div className="text-xs text-gray-400">Transparency</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-800">24/7</div>
                <div className="text-xs text-gray-400">Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-800">50+</div>
                <div className="text-xs text-gray-400">Experts</div>
              </div>
            </div>
          </div>

          {/* Right Side - Enhanced Carousel */}
          <div ref={carouselRef} className="relative">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0b0b0b] p-2">
              {/* Main Carousel */}
              <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden">
                {CULTURE_IMAGES.map((image, index) => (
                  <div
                    key={image.src}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                      index === currentIndex
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-full"
                    }`}
                    style={{
                      transform: `translateX(${(index - currentIndex) * 100}%)`,
                    }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <p className="text-xl font-semibold">{image.name}</p>
                      <p className="text-sm text-gray-300">{image.role}</p>
                    </div>
                  </div>
                ))}

                {/* Navigation Buttons */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white hover:bg-purple-800 hover:text-black transition-all duration-300 z-20"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white hover:bg-purple-800 hover:text-black transition-all duration-300 z-20"
                >
                  <ChevronRight size={20} />
                </button>

                {/* Auto-play Toggle */}
                <button
                  onClick={toggleAutoPlay}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white hover:bg-purple-800 hover:text-black transition-all duration-300 z-20"
                >
                  {isAutoPlaying ? <Pause size={14} /> : <Play size={14} />}
                </button>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-4">
                {CULTURE_IMAGES.map((image, index) => (
                  <button
                    key={image.src}
                    onClick={() => goToSlide(index)}
                    className={`transition-all duration-300 ${
                      index === currentIndex
                        ? "w-8 h-1.5 bg-purple-800 rounded-full"
                        : "w-1.5 h-1.5 bg-white/40 rounded-full hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex justify-center gap-2 mt-4 overflow-x-auto pb-2 px-4 scrollbar-thin">
              {CULTURE_IMAGES.map((image, index) => (
                <button
                  key={image.src}
                  onClick={() => goToSlide(index)}
                  className={`relative w-14 h-14 rounded-lg overflow-hidden transition-all duration-300 flex-shrink-0 ${
                    index === currentIndex
                      ? "ring-2 ring-purple-800 scale-105"
                      : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
