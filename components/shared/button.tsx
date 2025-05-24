'use client'
import Link from "next/link";
import { useRef, useState } from "react";

interface Props {
  label: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "link";
  className?: string;
}

export const Button = ({
  label,
  href,
  onClick,
  type = "button",
  className,
}: Props) => {
    const labelRef = useRef<HTMLSpanElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);
    const handleFocus = () => setIsHovered(true);
    const handleBlur = () => setIsHovered(false);

    console.log('labelRef', labelRef?.current?.clientWidth)
    
  if (type === "link" && href) {
    return (
      <Link
        href={href}
        className={` flex-shrink-0 rounded-[40px] flex items-center justify-center gap-[8px] px-[16px] bg-primary text-white font-poppins font-bold group min-w-[170px] h-[50px] ${className} cursor-pointer`}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            window.location.href = href!;
          }
        }}
        tabIndex={0}
        aria-label={label}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        <span ref={labelRef} className="group-hover:translate-x-[16px] transition-all duration-300">
          {label}
        </span>
        <span
          className="w-[8px] h-[8px] rounded-full bg-white transition-all duration-300"
          style={isHovered && labelRef.current ? { transform: `translateX(-${labelRef.current.clientWidth + 8}px)` } : {}}
        ></span>
      </Link>
    );
  }

  return (
    <button
      className={`rounded-[40px] flex items-center justify-center gap-[8px] px-[16px] bg-primary text-white font-poppins font-bold group min-w-[170px] h-[50px] ${className} cursor-pointer`}
      onClick={onClick}
      tabIndex={0}
      aria-label={label}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <span ref={labelRef} className="group-hover:translate-x-[16px] transition-all duration-300">
        {label}
      </span>
      <span
        className="w-[8px] h-[8px] rounded-full bg-white transition-all duration-300"
        style={isHovered && labelRef.current ? { transform: `translateX(-${labelRef.current.clientWidth + 8}px)` } : {}}
      ></span>
    </button>
  );
};
