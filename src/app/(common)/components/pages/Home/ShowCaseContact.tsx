"use client";
import React, { useRef } from "react";
import FlipButton from "../../button/FlipButton";
import { TransitionType } from "@/app/types/TransitionTypes";
import { useTransition } from "@/app/hooks/TransitionContext";

interface ShowcaseContactProps {
  transitionType?: TransitionType;
}

const ShowCaseContact = ({ transitionType }: ShowcaseContactProps) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { applyTransition } = useTransition();
  React.useEffect(() => {
    if (sectionRef.current) {
      applyTransition(sectionRef.current, TransitionType.Carousel3D);
    }
  }, [transitionType, applyTransition]);
  return (
    <div
      ref={sectionRef}
      className="site-shell my-10 rounded-[34px] border border-dashed border-gray-800 px-6 py-14 text-center md:px-10 md:py-10"
    >
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
  );
};

export default ShowCaseContact;
