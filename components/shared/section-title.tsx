"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export const SectionTitle = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!titleRef.current) return;
    // Ensure all fade-in elements start hidden and in their initial positions
    gsap.set(titleRef.current, { opacity: 0, y: 24 });
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;
        // Title and text entrance
        if (titleRef.current) {
          gsap.to(titleRef.current, {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: "power2.out",
          });
        }
      }
    };

    const observer = new window.IntersectionObserver(handleIntersection, {
      threshold: 0.5,
      // rootMargin: '-40% 0px -40% 0px',
    });
    observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);
  return (
    <h2 ref={titleRef} className={`page-title ${className}`}>
      {title}
    </h2>
  );
};
