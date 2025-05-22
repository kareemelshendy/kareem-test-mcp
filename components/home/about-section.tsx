"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { BallIcon, BallWithoutThreadIcon } from "../icons";

gsap.registerPlugin(ScrollTrigger);

const aboutText =
  "Step into your dog's ultimate haven—a place where wagging tails meet open arms. Whether it's a day filled with fun at daycare, a refreshing grooming session, or a cozy boarding experience, we treat every pet as if they're our own.";

// Helper to render each word and its characters in spans for animation
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

export const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const ballRef = useRef<HTMLDivElement | null>(null);
  const ballContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Animate only the characters (about-char) with a scroll-based stagger
    if (sectionRef.current) {
      const charSpans = sectionRef.current.querySelectorAll('.about-char');
      gsap.from(charSpans, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'top 20%',
          scrub: true,
        },
        opacity: 0.2,
        // y: 10,
        stagger: 0.05,
        ease: 'power2.out',
      });
    }

    // Ball movement and spin animation
    if (ballRef.current && ballContainerRef.current) {
      const ball = ballRef.current;
      const container = ballContainerRef.current;
      // Calculate distance to move: container width - ball width
      const containerRect = container.getBoundingClientRect();
      const ballRect = ball.getBoundingClientRect();
      const distance = containerRect.width - ballRect.width;

      gsap.to(ball, {
        x: distance,
        rotate: 360 * 2, // 2 full spins
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top bottom", // when container enters viewport
          end: "bottom top",   // when container leaves viewport
          scrub: true,
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="container px-4 pt-[100px] mb-[40px] lg:mb-[100px]">
      <div
        ref={ballContainerRef}
        className="w-full flex justify-center items-center relative h-[35px] mb-[96px]"
      >
        
        <Image src="/images/line-chart.svg" alt="About Petzania" fill className="z-0" />
        <div
          ref={ballRef}
          className="text-[110px] text-primary absolute bottom-[15px] left-0"
          tabIndex={0}
          aria-label="Moving and spinning ball icon"
          role="img"
        >
          <BallWithoutThreadIcon />
        </div>
      </div>

      <div
        ref={sectionRef}
        aria-label="About Petzania section text"
        className= " text-[24px] lg:text-[28px] font-medium max-w-[974px] text-center mx-auto leading-relaxed"
      >
        {/* Visually hidden for screen readers */}
        <span className="sr-only">{aboutText}</span>
        {renderAnimatedText(aboutText)}
      </div>
    </section>
  );
};
