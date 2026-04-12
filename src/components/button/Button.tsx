import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

type ButtonProps = {
  href: string;
  label: string;
  size?:string;
};

const Button = ({ href, label,size="text-sm" }: ButtonProps) => {
  return (
    <div className="">
      <Link
        href={href}
        className={`group flex w-full items-center justify-center gap-2 rounded-full bg-amber-500 hover:bg-transparent px-6 py-3.5 ${size} font-semibold text-white transition-all hover:bg-transparent hover:text-black border border-transparent hover:border-black`}
      >
        <span>{label}</span>
        <ArrowRight
          size={16}
          className="group-hover:translate-x-0.5 transition-transform"
        />
      </Link>
    </div>
  );
};

export default Button;
