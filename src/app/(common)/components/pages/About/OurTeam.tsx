"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  {
    name: "Abdullah",
    role: "UI/UX Designer",
    image: "/assets/our-team/about-abdullah.png",
    experience: "5+ years",
    projects: "40+",
  },
  {
    name: "Ali",
    role: "Frontend Developer",
    image: "/assets/our-team/about-ali.png",
    experience: "4+ years",
    projects: "35+",
  },
  {
    name: "Babar",
    role: "Director",
    image: "/assets/our-team/about-babar.png",
    experience: "12+ years",
    projects: "120+",
  },
  {
    name: "Bilal",
    role: "Senior Developer",
    image: "/assets/our-team/about-bilal.png",
    experience: "6+ years",
    projects: "55+",
  },
  {
    name: "Gohar",
    role: "Product Designer",
    image: "/assets/our-team/about-gohar.png",
    experience: "7+ years",
    projects: "60+",
  },
  {
    name: "Maryam",
    role: "UX Researcher",
    image: "/assets/our-team/about-maryam.png",
    experience: "4+ years",
    projects: "30+",
  },
  {
    name: "Mubashir",
    role: "Design Lead",
    image: "/assets/our-team/about-mubashir.png",
    experience: "8+ years",
    projects: "75+",
  },
  {
    name: "Mustafa",
    role: "Creative Director",
    image: "/assets/our-team/about-mustafa.png",
    experience: "10+ years",
    projects: "95+",
  },
  {
    name: "Nashra",
    role: "Brand Designer",
    image: "/assets/our-team/about-nashra.png",
    experience: "3+ years",
    projects: "25+",
  },
  {
    name: "Nasir",
    role: "Backend Developer",
    image: "/assets/our-team/about-nasir.png",
    experience: "5+ years",
    projects: "42+",
  },
  {
    name: "Umar",
    role: "UI UX Design Lead",
    image: "/assets/our-team/about-umar.png",
    experience: "9+ years",
    projects: "85+",
  },
  {
    name: "Yousaf",
    role: "Motion Designer",
    image: "/assets/our-team/about-yousaf.png",
    experience: "4+ years",
    projects: "32+",
  },
];

const leaders = teamMembers.filter((member) =>
  ["Babar", "Mustafa", "Umar"].includes(member.name),
);
const regularTeam = teamMembers.filter(
  (member) => !["Babar", "Mustafa", "Umar"].includes(member.name),
);

export default function OurTeamSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const leaderRefs = useRef<Array<HTMLDivElement | null>>([]);
  const teamRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const leaderCards = leaderRefs.current.filter(Boolean) as HTMLDivElement[];
    const teamCards = teamRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!section || !content) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        content,
        { opacity: 0, y: 34 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 88%",
            end: "top 50%",
            scrub: 1,
          },
        },
      );

      [...leaderCards, ...teamCards].forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 56, rotateX: -8 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 92%",
              end: "top 58%",
              scrub: 1,
            },
            delay: index * 0.02,
          },
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-transparent py-16 md:py-20 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-5%] top-[5%] h-[400px] w-[400px] rounded-full bg-gradient-to-br from-purple-800/12 to-transparent blur-3xl" />
        <div className="absolute bottom-[10%] right-[5%] h-[380px] w-[380px] rounded-full bg-gradient-to-bl from-site-accent/10 to-transparent blur-3xl" />
      </div>

      <div ref={contentRef} className="relative z-10 opacity-0 translate-y-10">
        <div className="site-shell px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center md:mb-16">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-black sm:text-4xl md:text-5xl lg:text-6xl">
              Meet Our Expert Team
            </h2>
            <p className="mx-auto max-w-2xl text-base text-black/62 sm:text-lg md:text-xl">
              Passionate designers and developers ready to bring your vision to
              life
            </p>
            <div className="mx-auto mt-6 h-px w-20 bg-gradient-to-r from-transparent via-purple-800 to-transparent" />
          </div>

          <div className="mx-auto mb-16 grid max-w-5xl grid-cols-1 gap-6 md:mb-20 md:grid-cols-3 md:gap-8">
            {leaders.map((leader, index) => (
              <div
                key={leader.name}
                ref={(node) => {
                  leaderRefs.current[index] = node;
                }}
                className="group rounded-2xl border border-black/10 bg-white/86 p-5 text-center shadow-[var(--site-shadow)]"
              >
                <div className="relative mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full border-2 border-purple-800/20 transition-all duration-300 group-hover:border-purple-800 md:h-40 md:w-40">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-lg font-semibold text-black md:text-xl">
                  {leader.name}
                </h3>
                <p className="text-sm text-purple-800">{leader.role}</p>
                <p className="mt-2 text-xs text-black/52">
                  {leader.experience} experience
                </p>
              </div>
            ))}
          </div>

          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
              {regularTeam.map((member, index) => (
                <div
                  key={member.name}
                  ref={(node) => {
                    teamRefs.current[index] = node;
                  }}
                  className="group overflow-hidden rounded-2xl border border-black/10 bg-white/86 shadow-[var(--site-shadow)] transition-all duration-500 hover:border-purple-800/30"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>

                  <div className="p-4 text-center">
                    <h4 className="text-base font-semibold text-black transition-colors duration-300 group-hover:text-purple-800 md:text-lg">
                      {member.name}
                    </h4>
                    <p className="mb-2 text-xs text-black/58 md:text-sm">
                      {member.role}
                    </p>
                    <div className="flex justify-center gap-4 text-xs text-black/50">
                      <span>{member.experience}</span>
                      <span>|</span>
                      <span>{member.projects} projects</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex flex-wrap justify-center gap-8 md:gap-12">
              <div className="text-center">
                <p className="text-2xl font-bold text-purple-800 md:text-3xl">
                  {teamMembers.length}+
                </p>
                <p className="text-xs text-black/55">Expert Members</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-purple-800 md:text-3xl">
                  500+
                </p>
                <p className="text-xs text-black/55">Projects Delivered</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-purple-800 md:text-3xl">
                  8+
                </p>
                <p className="text-xs text-black/55">Years Combined</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
