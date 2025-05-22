"use client";

import Image from "next/image";
import { ArrowIcon } from "../icons";
import { useEffect, useRef } from "react";
import gsap from "gsap";
export const Flower = () => {
  const flowerRef = useRef<HTMLSpanElement>(null);
  const arrowRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!arrowRef.current || !flowerRef.current) return;
    gsap.set(arrowRef.current, { opacity: 0, y: 16 });
    gsap.set(flowerRef.current, { rotate: 0 });

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;

        // Arrow and flower sequence
        if (flowerRef.current && arrowRef.current) {
          gsap.to(arrowRef.current, {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: "power2.out",
            onComplete: () => {
              gsap.to(flowerRef.current, {
                rotate: 360,
                duration: 1.2,
                ease: "power2.out",
              });
            },
          });
        }
        // Cards entrance and rotation
      }
    };

    const observer = new window.IntersectionObserver(handleIntersection, {
      threshold: 0.5,
      // rootMargin: '-40% 0px -40% 0px',
    });
    observer.observe(flowerRef.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div className="w-[100px] h-[90px] relative mb-[24px] lg:mb-[60px]">
      <span ref={flowerRef} className="absolute inset-0">
        <Image src="/images/flower-shape.svg" alt="Pet" fill />
      </span>
      <span
        ref={arrowRef}
        className="absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] text-[46px] text-primary"
        aria-label="Arrow Icon"
        tabIndex={0}
      >
        <ArrowIcon />
      </span>
    </div>
  );
};
