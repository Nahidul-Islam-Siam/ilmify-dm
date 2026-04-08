"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const showcaseItems = [
  {
    brand: "Bloom Money",
    title: "Smart Money Solutions",
    image: "/assets/showcase/portfolio-1.png",
  },
  {
    brand: "Alfan",
    title: "The Platform for Content Creators",
    image: "/assets/showcase/portfolio-2.png",
  },
  {
    brand: "Earpoin",
    title: "The Best Place ToFind Productivity Tools",
    image: "/assets/showcase/portfolio-3.png",
  },
  {
    brand: "Finnecta",
    title: "Wallet application to streamline digital transactions",
    image: "/assets/showcase/portfolio-4.png",
  },
  {
    brand: "Trivo",
    title: "Clearbit, a business intelligence platform",
    image: "/assets/showcase/portfolio-5.png",
  },
  {
    brand: "Fastgo",
    title: "Fastgo's scooter rental app to drive adoption",
    image: "/assets/showcase/portfolio-6.png",
  },
];

export default function Showcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardRefs.current.filter(Boolean) as HTMLElement[];
    if (!section || cards.length === 0) return;

    const ctx = gsap.context(() => {
      cards.forEach((card, index) => {
        const media = card.querySelector("[data-showcase-media]") as HTMLElement;
        const title = card.querySelector("[data-showcase-title]") as HTMLElement;
        const brand = card.querySelector("[data-showcase-brand]") as HTMLElement;

        gsap.set(card, { transformPerspective: 1600, transformOrigin: "50% 100%" });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 92%",
            end: "top 36%",
            scrub: 0.85,
          },
        });

        tl.fromTo(
          card,
          {
            yPercent: 10,
            opacity: 0.15,
            scale: 0.82,
            rotateX: 26,
            rotateY: index % 2 ? -10 : 10,
            rotateZ: index % 2 ? 2 : -2,
            filter: "blur(5px) brightness(0.82)",
          },
          {
            yPercent: -2,
            opacity: 1,
            scale: 1,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            filter: "blur(0px) brightness(1)",
            ease: "power3.out",
          },
          0,
        )
          .fromTo(
            media,
            { scale: 1.16, yPercent: 9, rotateZ: index % 2 ? -0.9 : 0.9 },
            { scale: 1, yPercent: 0, rotateZ: 0, ease: "power3.out" },
            0,
          )
          .fromTo(
            [brand, title],
            { y: 56, opacity: 0, filter: "blur(6px)" },
            {
              y: 0,
              opacity: 1,
              filter: "blur(0px)",
              stagger: 0.06,
              ease: "power3.out",
            },
            0.08,
          );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0b0b0b] px-5 py-10 text-white md:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="mx-auto max-w-[740px] text-center">
          <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-site-accent">
            How We Helped Others Succeed
          </p>
          <h2 className="mt-4 text-[2.25rem] font-semibold tracking-[-0.04em] text-[var(--site-text)] md:text-[3.2rem]">
            Our Creative Showcase
          </h2>
          <p className="mx-auto mt-4 max-w-[620px] text-[15px] leading-7 text-gray-500 md:text-base">
            We have become experts in creating top-notch digital products. We
            design beautifully and develop excellently. And we care deeply about
            what we do.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-7 gap-y-12 md:grid-cols-2 md:gap-y-16">
          {showcaseItems.map((item, index) => (
            <article
              key={item.brand}
              ref={(node) => {
                cardRefs.current[index] = node;
              }}
              className="group relative will-change-transform"
            >
              <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-br from-site-accent/12 via-transparent to-site-accent/6 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              <Link href="#contact" className="block">
                <div
                  data-showcase-media
                  className="overflow-hidden rounded-[24px] bg-[#111111]"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={620}
                    height={760}
                    className="h-auto w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="mt-4">
                  <p
                    data-showcase-brand
                    className="text-[13px] text-site-accent"
                  >
                    {item.brand}
                  </p>
                  <h3
                    data-showcase-title
                    className="mt-2 max-w-[520px] text-[2rem] font-semibold leading-[1.08] tracking-[-0.04em] text-site-text md:text-[2.2rem]"
                  >
                    {item.title}
                  </h3>
                </div>
              </Link>
            </article>
          ))}
        </div>

    
      </div>
    </section>
  );
}
