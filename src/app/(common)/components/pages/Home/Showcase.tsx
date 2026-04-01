import Image from "next/image";
import Link from "next/link";

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
  return (
    <section className="bg-[#0b0b0b] px-5 py-20 text-white md:px-8 lg:py-24">
      <div className="mx-auto max-w-[1280px]">
        <div className="mx-auto max-w-[740px] text-center">
          <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#52F447]">
            How We Helped Others Succeed
          </p>
          <h2 className="mt-4 text-[2.25rem] font-semibold tracking-[-0.04em] text-white md:text-[3.2rem]">
            Our Creative Showcase
          </h2>
          <p className="mx-auto mt-4 max-w-[620px] text-[15px] leading-7 text-white/78 md:text-base">
            We have become experts in creating top-notch digital products. We design beautifully and develop excellently. And we care deeply about what we do.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-7 gap-y-12 md:grid-cols-2 md:gap-y-16">
          {showcaseItems.map((item, itemIndex) => (
            <article key={item.brand} className={itemIndex % 2 === 1 ? "group md:mt-16" : "group"}>
              <Link href="#contact" className="block">
                <div className="overflow-hidden rounded-[24px] bg-[#111111]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={620}
                    height={760}
                    className="h-auto w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="mt-4">
                  <p className="text-[13px] text-white/85">{item.brand}</p>
                  <h3 className="mt-2 max-w-[520px] text-[2rem] font-semibold leading-[1.08] tracking-[-0.04em] text-white md:text-[2.2rem]">
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
