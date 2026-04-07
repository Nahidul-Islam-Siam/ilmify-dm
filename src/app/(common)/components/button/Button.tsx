import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

type ButtonProps = {
    href:string;
    label:string;
}

const Button = ({ href,label}: ButtonProps) => {
    return (
      <div className="px-4 pt-4">
                <Link
                  href={href}
       
                  className="group flex w-full items-center justify-center gap-2 rounded-full bg-purple-800 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-transparent hover:text-purple-800 border border-transparent hover:border-purple-800"
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