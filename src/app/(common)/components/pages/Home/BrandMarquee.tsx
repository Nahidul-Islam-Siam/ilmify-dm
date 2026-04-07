import Image from "next/image";
import FastMarquee from "react-fast-marquee";

const brandLogos = [
  { src: "/assets/hero_carouser/imgi_24_wal-mart.svg", alt: "Walmart" },
  { src: "/assets/hero_carouser/imgi_25_cisco.svg", alt: "Cisco" },
  { src: "/assets/hero_carouser/imgi_26_trafilea.svg", alt: "Trafilea" },
  { src: "/assets/hero_carouser/imgi_27_yallaMotor.svg", alt: "YallaMotor" },
  {
    src: "/assets/hero_carouser/imgi_28_nissan-motor-corporation.svg",
    alt: "Nissan Motor Corporation",
  },
  { src: "/assets/hero_carouser/imgi_29_repurpose.svg", alt: "Repurpose" },
  { src: "/assets/hero_carouser/imgi_30_adiqat.svg", alt: "Adiqat" },
];

export default function BrandMarquee() {
  return (
    <div className="relative z-10 w-full overflow-hidden rounded-2xl border border-site-border bg-site-panel py-2 shadow-[var(--site-shadow)]">
      {/* <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-site-panel to-transparent sm:w-24 md:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-site-panel to-transparent sm:w-24 md:w-32" /> */}

      <FastMarquee speed={40} gradient={false} pauseOnHover>
        {brandLogos.map((brand, index) => (
          <div
            key={brand.alt}
            className="mx-6 flex h-10 min-w-[120px] items-center justify-center opacity-80 transition-all duration-300 hover:scale-105 hover:opacity-100 sm:mx-8 sm:h-12 sm:min-w-[140px] md:mx-10 md:h-14 md:min-w-[160px]"
          >
            <Image
              src={brand.src}
              alt={brand.alt}
              width={160}
              height={40}
              className="max-h-8 w-auto object-contain brightness-0 opacity-80 transition-all duration-300 hover:opacity-100 sm:max-h-10 md:max-h-12"
              priority={index < 3}
            />
          </div>
        ))}
      </FastMarquee>
    </div>
  );
}
