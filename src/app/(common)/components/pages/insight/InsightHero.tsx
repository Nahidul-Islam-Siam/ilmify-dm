"use client";

import { useRef } from "react";
export default function InsightsHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  //   const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  //   useEffect(() => {
  //     const handleMouseMove = (e: MouseEvent) => {
  //       if (!containerRef.current) return;
  //       const rect = containerRef.current.getBoundingClientRect();
  //       setMousePosition({
  //         x: ((e.clientX - rect.left) / rect.width) * 100,
  //         y: ((e.clientY - rect.top) / rect.height) * 100,
  //       });
  //     };
  //     const container = containerRef.current;
  //     container?.addEventListener("mousemove", handleMouseMove);
  //     return () => container?.removeEventListener("mousemove", handleMouseMove);
  //   }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[80vh] w-full bg-black overflow-hidden flex items-center justify-center "
    >
      {/* Background bubble */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none z-0">
        {/* <Image
          src="/assets/hero/home_bubble.webp"
          alt=""
          fill
          className="object-cover opacity-10"
          priority
        /> */}
      </div>

      {/* Mouse glow */}
      {/* <div
        className="fixed pointer-events-none z-10 transition-all duration-150 ease-out"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: "translate(-50%, -50%)",
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, rgba(82,244,71,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      /> */}

      {/* Main content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 max-w-5xl mx-auto">
        {/* Big heading */}
        <h1 className="font-black uppercase leading-[1.05] tracking-tight">
          <span className="block text-site-text ">
            Stay Updated With
          </span>
          <span className="block text-site-accent text-[clamp(32px,8vw,96px)]">
            Our insights
          </span>
        </h1>

        {/* Subtext */}
        <p className="mt-5 sm:mt-6 text-[clamp(13px,1.8vw,17px)] text-white/70 font-normal leading-relaxed max-w-[480px] mx-auto">
          Read our thoughts and insights on UI UX design
        </p>
      </div>
    </section>
  );
}
