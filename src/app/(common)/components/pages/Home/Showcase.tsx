import Image from "next/image";
import Link from "next/link";
import FlipButton from "../../button/FlipButton";

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
          {showcaseItems.map((item, itemIndex) => (
            <article
              key={item.brand}
              className={itemIndex % 2 === 1 ? "group md:mt-16" : "group"}
            >
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
                  <p className="text-[13px] text-site-accent">{item.brand}</p>
                  <h3 className="mt-2 max-w-[520px] text-[2rem] font-semibold leading-[1.08] tracking-[-0.04em] text-site-text md:text-[2.2rem]">
                    {item.title}
                  </h3>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-20 rounded-[34px] border border-dashed border-gray-800 px-6 py-14 text-center md:px-10 md:py-10">
          <h3 className="text-[2rem] font-semibold tracking-[-0.04em] text-site-text md:text-xl">
            Your project here
          </h3>
          <p className="mx-auto  max-w-[680px] text-sm leading-8 text-site-text md:text-md">
            The proof is in our work. Check out{" "}
            <span className="font-semibold text-site-accent underline underline-offset-4">
              our case studies
            </span>{" "}
            to learn how our product development services can transform your
            business.
          </p>

          {/* <div className="mt-5 flex justify-center">
            <Link href="#contact" className="group [perspective:1000px]">
              <span className="relative block h-[56px] w-[280px] [transform-style:preserve-3d] transition-transform duration-500 group-hover:[transform:rotateX(90deg)]">
                <span className="absolute inset-0 flex items-center justify-center gap-3 rounded-full bg-site-accent px-8 text-[16px] font-semibold text-black [backface-visibility:hidden]">
                  Book a discovery call
                  <ArrowUpRight size={18} strokeWidth={2.4} />
                </span>
                <span className="absolute inset-0 flex items-center justify-center rounded-full border border-[] bg-transparent px-8 text-[16px] font-semibold text-site-accent [backface-visibility:hidden] [transform:rotateX(-90deg)_translateZ(28px)]">
                  Let&apos;s talk
                </span>
              </span>
            </Link>
          </div> */}
          <FlipButton
            href="#contact"
            label="Book a discovery call"
            flipLabel="Let's talk"
          />
        </div>
      </div>
    </section>
  );
}
