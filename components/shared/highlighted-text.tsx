"use client";


import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const renderAnimatedText = (text: string) =>
  text.split(" ").map((word, wordIdx) => (
    <span
      key={wordIdx}
      className="about-word inline-block mr-2 align-middle"
      aria-hidden="true"
    >
      {word.split("").map((char, charIdx) => (
        <span
          key={charIdx}
          className="about-char inline-block"
          aria-hidden="true"
        >
          {char}
        </span>
      ))}
    </span>
  ));

export const HighlightedText = ({ text ,className}: { text: string ,className?:string }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate only the characters (about-char) with a scroll-based stagger
      if (sectionRef.current) {
        const charSpans = sectionRef.current.querySelectorAll(".about-char");
        gsap.from(charSpans, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
          },
          opacity: 0.2,
          // y: 10,
          stagger: 0.05,
          ease: "power2.out",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [text]);
  return (
    <div
      ref={sectionRef}
      aria-label="About Petzania section text"
      className={`text-[24px] lg:text-[28px] font-medium max-w-[974px] text-center mx-auto leading-relaxed ${className}`}
    >
      {/* Visually hidden for screen readers */}
      <span className="sr-only">{text}</span>
      {renderAnimatedText(text)}
    </div>
  );
};
