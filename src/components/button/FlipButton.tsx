import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

type FlipButtonProps = {
  href: string;
  label: string;
  flipLabel: string;
  width?:string;
};

const FlipButton = ({ href, label, flipLabel,width }: FlipButtonProps) => {
  return (
    <div className="mt-5 flex justify-center">
      <Link href={href} className="group [perspective:1000px]">
        <span className={`relative block h-[56px] ${width || 'w-[280px]'} [transform-style:preserve-3d] transition-transform duration-500 group-hover:[transform:rotateX(90deg)]`}>
          <span className="absolute inset-0 flex items-center justify-center gap-3 rounded-full bg-site-accent px-8 text-[16px] font-semibold text-site-bg [backface-visibility:hidden]">
            {label}
            <ArrowUpRight size={18} strokeWidth={2.4} />
          </span>
          <span className="absolute inset-0 flex items-center justify-center rounded-full border border-[] bg-transparent px-8 text-[16px] font-semibold text-site-accent [backface-visibility:hidden] [transform:rotateX(-90deg)_translateZ(28px)]">
            {flipLabel}
          </span>
        </span>
      </Link>
    </div>
  );
};

export default FlipButton;
