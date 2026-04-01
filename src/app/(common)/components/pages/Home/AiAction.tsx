import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AiAction() {
  return (
    <section className=" text-white ">
      <div className="relative overflow-hidden  bg-[#0d0d0d] shadow-[0_24px_90px_rgba(0,0,0,0.34)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_8%,rgba(82,244,71,0.95),transparent_17%),radial-gradient(circle_at_18%_58%,rgba(82,244,71,0.28),transparent_24%),radial-gradient(circle_at_100%_10%,rgba(82,244,71,0.24),transparent_18%),linear-gradient(90deg,#131313_0%,#0c0c0c_46%,#081008_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_22%,transparent_78%,rgba(82,244,71,0.04))]" />

        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="relative grid min-h-[420px] grid-cols-1 lg:min-h-[560px] lg:grid-cols-[1.05fr_0.95fr] ">
            <div className="absolute inset-y-0 left-[54%] hidden w-px bg-gradient-to-b from-transparent via-white/6 to-transparent lg:block" />

            <div className="relative z-10 flex items-center py-14 sm:py-16 lg:py-20">
              <div className="max-w-[760px]">
                <div className="mb-5 inline-flex items-center rounded-full border border-[#52F447]/20 bg-[#52F447]/8 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#52F447] backdrop-blur-sm sm:text-[12px]">
                  AI-Ready Product Systems
                </div>

                <h2 className="max-w-[760px] text-balance text-[2.5rem] font-semibold leading-[0.96] ]">
                  Design That Thinks.
                  <br />
                  <span className="text-[#52F447]">Interfaces</span> That Feel.
                </h2>

                <p className="mt-7 max-w-[700px] text-[17px] leading-8 text-white/82 sm:text-[19px] md:text-[20px] lg:mt-8 lg:text-[21px]">
                  At ZeeFrames, we craft AI-ready design systems for modern
                  software that feel responsive, scalable, and deeply
                  human-centered.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4 sm:mt-10">
                  <Link
                    href="#contact"
                    className="inline-flex h-[54px] items-center justify-center gap-3 rounded-full bg-[#52F447] px-7 text-[15px] font-semibold text-black shadow-[0_0_32px_rgba(82,244,71,0.22)] transition hover:brightness-95 sm:h-[58px] sm:px-8 sm:text-[16px]"
                  >
                    See AI in Action
                    <ArrowUpRight size={18} strokeWidth={2.4} />
                  </Link>

                  <div className="text-sm text-white/56 sm:text-[15px]">
                    Smart systems for ambitious products
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 flex min-h-[260px] items-center justify-center pb-12 pt-4 sm:min-h-[320px] lg:min-h-full lg:pb-0 lg:pt-0">
              <div className="relative flex h-full w-full items-center justify-center">
                <div className="absolute h-[180px] w-[180px] rounded-full bg-[#52F447]/12 blur-[90px] sm:h-[220px] sm:w-[220px] lg:h-[260px] lg:w-[260px]" />
                <div className="absolute h-[320px] w-[320px] rounded-full border border-[#52F447]/10 bg-[radial-gradient(circle,rgba(82,244,71,0.08),transparent_62%)] blur-3xl sm:h-[380px] sm:w-[380px] lg:h-[460px] lg:w-[460px]" />
                <div className="absolute inset-x-[12%] top-[12%] h-px bg-gradient-to-r from-transparent via-[#52F447]/25 to-transparent" />
                <Image
                  src="/assets/idea/video/star.gif"
                  alt="Animated star"
                  width={420}
                  height={420}
                  unoptimized
                  className="relative z-10 h-auto w-[180px] max-w-full object-contain drop-shadow-[0_0_24px_rgba(82,244,71,0.1)] sm:w-[240px] md:w-[300px] lg:w-[380px] xl:w-[430px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
