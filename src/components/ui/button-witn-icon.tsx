import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const ButtonWithIconDemo = () => {
  return (
    <Link href="https://bit.ly/4bkwj7S" target="_blank" rel="noopener noreferrer">
      <button className="relative text-sm font-medium rounded-full h-12 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 w-fit overflow-hidden cursor-pointer bg-white/[0.08] border border-white/20 text-white backdrop-blur-sm hover:bg-white/[0.14] hover:border-white/40">
        <span className="relative z-10 transition-all duration-500 tracking-wide">
          Let&apos;s Connect
        </span>
        <div className="absolute right-1 w-10 h-10 bg-white text-black rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
          <ArrowUpRight size={16} />
        </div>
      </button>
    </Link>
  );
};

export default ButtonWithIconDemo;
