"use client";
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import { SectionTitle } from "../shared/section-title";

interface ImageItem {
  src: string;
  width: number;
  height: number;
}

interface Props {
  title?: string;
  images: ImageItem[];
  showWoof?: boolean;
}

export const ImagesGallery = ({ title, images, showWoof = true }: Props) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);
  const singleGalleryRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const [inView, setInView] = useState(false);
  const woofRef = useRef<HTMLDivElement | null>(null);

  // Group images into columns of 2
  const imageColumns = Array.from(
    { length: Math.ceil(images.length / 2) },
    (_, colIndex) => images.slice(colIndex * 2, colIndex * 2 + 2)
  );

  useEffect(() => {
    if (!containerRef.current || !singleGalleryRef.current || !inView) return;

    const singleWidth = singleGalleryRef.current.offsetWidth;
    if (animationRef.current) {
      animationRef.current.kill();
    }
    animationRef.current = gsap.to(containerRef.current, {
      x: -singleWidth,
      duration: 20,
      ease: "linear",
      repeat: -1,
      modifiers: {
        x: (x: string) => {
          const xNum = parseFloat(x);
          return (xNum % -singleWidth) + "px";
        },
      },
    });
    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [images, inView]);

  // Intersection Observer to detect if section is in view
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    observer.observe(section);
    return () => {
      observer.disconnect();
    };
  }, []);

  // Animate woof image pop-up when inView
  useEffect(() => {
    if (!woofRef.current) return;
    if (inView) {
      gsap.fromTo(
        woofRef.current,
        { scale: 0.7, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.7,
          ease: "back.out(1.7)",
          delay: 0.3,
        }
      );
    } else {
      gsap.set(woofRef.current, { scale: 0.7, opacity: 0 });
    }
  }, [inView]);

  return (
    <section ref={sectionRef} className="w-full py-8 relative">
      {title ? (
        <SectionTitle title={title} className="mb-[24px] lg:mb-[48px]" />
      ) : null}
      {showWoof ? (
        <div
          ref={woofRef}
          className="absolute right-[4%] top-[20%] lg:top-[7%] lg:right-[7%] z-10 w-[66px] h-[51px] lg:w-[165px] lg:h-[128px] opacity-0 scale-75"
        >
          <Image src="/images/woof.svg" alt="Petzania" fill />
        </div>
      ) : null}
      <div className="w-full overflow-hidden pl-24 relative">
        <div
          ref={containerRef}
          className="flex gap-[20px]"
          aria-label="Image gallery carousel"
          tabIndex={0}
        >
          <div ref={singleGalleryRef} className="flex gap-[20px]">
            {imageColumns.map((column, columnIdx) => (
              <div
                key={"first-" + columnIdx}
                className="flex flex-col gap-4 rounded-default overflow-hidden"
              >
                {column.map((image, idx) => {
                  const imageKey = `first-${columnIdx}-${idx}`;
                  return (
                    <div
                      key={image.src + idx}
                      className={`relative  rounded-default !overflow-hidden flex items-center justify-center `}
                      style={{ width: image.width, height: image.height }}
                      onMouseEnter={() => {
                        setHovered(imageKey);
                        // if (animationRef.current) animationRef.current.pause();
                      }}
                      onMouseLeave={() => {
                        setHovered(null);
                        // if (animationRef.current) animationRef.current.resume();
                      }}
                      tabIndex={0}
                      aria-label={`Gallery image ${columnIdx * 2 + idx + 1}`}
                    >
                      <Image
                        src={image.src}
                        alt={`Gallery image ${columnIdx * 2 + idx + 1}`}
                        className={`w-full h-full object-cover rounded-default transition-transform duration-300  pointer-events-none ${
                          hovered === imageKey ? "scale-110 z-10" : ""
                        }`}
                        draggable={false}
                        width={image.width}
                        height={image.height}
                      />
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
          {/* Second set for seamless looping */}
          <div className="flex gap-[20px]">
            {imageColumns.map((column, columnIdx) => (
              <div
                key={"second-" + columnIdx}
                className="flex flex-col gap-4 rounded-default overflow-hidden"
              >
                {column.map((image, idx) => {
                  const imageKey = `second-${columnIdx}-${idx}`;
                  return (
                    <div
                      key={image.src + idx + "-dup"}
                      className={`rounded-default overflow-hidden flex items-center justify-center`}
                      style={{ width: image.width, height: image.height }}
                      onMouseEnter={() => {
                        setHovered(imageKey);
                        // if (animationRef.current) animationRef.current.pause();
                      }}
                      onMouseLeave={() => {
                        setHovered(null);
                        // if (animationRef.current) animationRef.current.resume();
                      }}
                      tabIndex={0}
                      aria-label={`Gallery image duplicate ${
                        columnIdx * 2 + idx + 1
                      }`}
                    >
                      <Image
                        src={image.src}
                        alt={`Gallery image duplicate ${
                          columnIdx * 2 + idx + 1
                        }`}
                        className={`w-full h-full object-cover rounded-default transition-transform duration-300  pointer-events-none ${
                          hovered === imageKey ? "scale-110 z-10" : ""
                        }`}
                        draggable={false}
                        width={image.width}
                        height={image.height}
                      />
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
