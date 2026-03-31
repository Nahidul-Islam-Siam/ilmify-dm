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
    <div className="relative z-10 mt-8 w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28 bg-gradient-to-r from-[#0b0b0b] via-[#0b0b0b] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-28 bg-gradient-to-l from-[#0b0b0b] via-[#0b0b0b] to-transparent" />

      <FastMarquee speed={34} gradient={false} pauseOnHover>
        {brandLogos.concat(brandLogos).map((brand, index) => (
          <div
            key={`${brand.alt}-${index}`}
            className="mx-10 flex h-10 min-w-[140px] items-center justify-center opacity-90 transition hover:opacity-100"
          >
            <Image
              src={brand.src}
              alt={brand.alt}
              width={140}
              height={36}
              className="max-h-8 w-auto object-contain grayscale"
            />
          </div>
        ))}
      </FastMarquee>
    </div>
  );
}
