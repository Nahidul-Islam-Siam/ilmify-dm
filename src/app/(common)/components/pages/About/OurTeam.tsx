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
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 88%",
            end: "top 48%",
            scrub: 1,
          },
        },
      );

      leaderCards.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 70,
            rotateY: index % 2 === 0 ? -18 : 18,
            rotateX: 10,
            z: -140,
          },
          {
            opacity: 1,
            y: 0,
            rotateY: 0,
            rotateX: 0,
            z: 0,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              end: "top 55%",
              scrub: 1,
            },
          },
        );
      });

      teamCards.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 100,
            rotateY: index % 3 === 0 ? -16 : index % 3 === 1 ? 0 : 16,
            rotateX: 12,
            z: -180,
          },
          {
            opacity: 1,
            y: 0,
            rotateY: 0,
            rotateX: 0,
            z: 0,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 92%",
              end: "top 58%",
              scrub: 1,
            },
          },
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const attachTilt = (element: HTMLDivElement | null) => {
    if (!element || element.dataset.tiltBound === "true") return;
    element.dataset.tiltBound = "true";

    const onMove = (event: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width;
      const py = (event.clientY - rect.top) / rect.height;
      const rotateY = (px - 0.5) * 14;
      const rotateX = (0.5 - py) * 12;

      gsap.to(element, {
        rotateX,
        rotateY,
        y: -8,
        transformPerspective: 1200,
        transformOrigin: "center center",
        duration: 0.35,
        ease: "power2.out",
        overwrite: true,
      });
    };

    const onLeave = () => {
      gsap.to(element, {
        rotateX: 0,
        rotateY: 0,
        y: 0,
        duration: 0.45,
        ease: "power3.out",
        overwrite: true,
      });
    };

    element.addEventListener("mousemove", onMove);
    element.addEventListener("mouseleave", onLeave);
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0b0b0b] py-16 md:py-20 lg:py-24"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[5%] left-[-5%] h-[400px] w-[400px] rounded-full bg-gradient-to-br from-site-accent/15 to-transparent blur-3xl animate-float-slow" />
        <div className="absolute top-[20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-gradient-to-bl from-site-accent/10 to-transparent blur-3xl animate-float-delayed" />
        <div className="absolute bottom-[10%] left-[10%] h-[450px] w-[450px] rounded-full bg-gradient-to-tr from-site-accent/12 to-transparent blur-3xl animate-float" />
        <div className="absolute bottom-[30%] right-[5%] h-[350px] w-[350px] rounded-full bg-gradient-to-tl from-site-accent/8 to-transparent blur-3xl animate-float-slow" />
        <div className="absolute top-[40%] left-[20%] h-[200px] w-[200px] rounded-full bg-gradient-to-br from-site-accent/20 to-site-accent/5 blur-2xl animate-pulse" />
        <div className="absolute top-[60%] right-[15%] h-[180px] w-[180px] rounded-full bg-gradient-to-bl from-site-accent/15 to-transparent blur-2xl animate-float-delayed" />
      </div>

      <div className="absolute inset-0 bg-[#0b0b0b]/60 pointer-events-none" />

      <div ref={contentRef} className="relative z-10 opacity-0 translate-y-10">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center md:mb-16">
            <h2 className="fade-text mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Meet Our Expert Team
            </h2>
            <p className="fade-text mx-auto max-w-2xl text-base text-gray-400 sm:text-lg md:text-xl">
              Passionate designers and developers ready to bring your vision to
              life
            </p>
            <div className="mx-auto mt-6 h-px w-20 bg-gradient-to-r from-transparent via-site-accent to-transparent" />
          </div>

          <div className="mx-auto mb-16 grid max-w-5xl grid-cols-1 gap-6 md:mb-20 md:grid-cols-3 md:gap-8 [perspective:1200px]">
            {leaders.map((leader, index) => (
              <div
                key={leader.name}
                ref={(node) => {
                  leaderRefs.current[index] = node;
                  attachTilt(node);
                }}
                className="leader-card group text-center [transform-style:preserve-3d]"
              >
                <div className="relative mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full border-2 border-site-accent/20 shadow-lg transition-all duration-300 group-hover:border-site-accent group-hover:shadow-[0_0_30px_rgba(82,244,71,0.2)] md:h-40 md:w-40">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-lg font-semibold text-white md:text-xl">
                  {leader.name}
                </h3>
                <p className="text-sm text-site-accent">{leader.role}</p>
                <p className="mt-2 text-xs text-gray-500">
                  {leader.experience} experience
                </p>
              </div>
            ))}
          </div>

          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 md:gap-6 [perspective:1400px]">
              {regularTeam.map((member, index) => (
                <div
                  key={member.name}
                  ref={(node) => {
                    teamRefs.current[index] = node;
                    attachTilt(node);
                  }}
                  className="team-card group overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm transition-all duration-500 hover:border-site-accent/30 [transform-style:preserve-3d]"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    {/* <div className="absolute bottom-4 left-0 right-0 flex translate-y-2 justify-center gap-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <Link
                        href={member.linkedin}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-site-accent/20 backdrop-blur-sm transition-all duration-300 hover:bg-site-accent"
                      >
                        <Linkedin size={14} className="text-white" />
                      </Link>
                      <Link
                        href={member.email}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-site-accent/20 backdrop-blur-sm transition-all duration-300 hover:bg-site-accent"
                      >
                        <Mail size={14} className="text-white" />
                      </Link>
                    </div> */}
                  </div>

                  <div className="p-4 text-center">
                    <h4 className="text-base font-semibold text-white transition-colors duration-300 group-hover:text-site-accent md:text-lg">
                      {member.name}
                    </h4>
                    <p className="mb-2 text-xs text-gray-400 md:text-sm">
                      {member.role}
                    </p>
                    <div className="flex justify-center gap-4 text-xs text-gray-500">
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
                <p className="text-2xl font-bold text-site-accent md:text-3xl">
                  {teamMembers.length}+
                </p>
                <p className="text-xs text-gray-500">Expert Members</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-site-accent md:text-3xl">
                  500+
                </p>
                <p className="text-xs text-gray-500">Projects Delivered</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-site-accent md:text-3xl">
                  8+
                </p>
                <p className="text-xs text-gray-500">Years Combined</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(30px, -20px) scale(1.05);
          }
        }
        @keyframes float-delayed {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-25px, -30px) scale(1.08);
          }
        }
        @keyframes float-slow {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(20px, -15px) scale(1.03);
          }
        }
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.1);
          }
        }
        @keyframes glow {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(2);
          }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
        }
        .animate-pulse {
          animation: pulse-slow 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
