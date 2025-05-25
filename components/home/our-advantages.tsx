"use client";
import Image from "next/image";
import { ArrowIcon } from "../icons";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SectionTitle } from "../shared/section-title";
import { Flower } from "../shared/flower";

export const OurAdvantages = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const flowerRef = useRef<HTMLSpanElement>(null);
  const arrowRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const hasAnimated = useRef(false);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Ensure all fade-in elements start hidden and in their initial positions
    gsap.set(titleRef.current, { opacity: 0, y: 24 });
    gsap.set(textRef.current, { opacity: 0, y: 24 });
    gsap.set(arrowRef.current, { opacity: 0, y: 16 });
    gsap.set(flowerRef.current, { rotate: 0 });
    gsap.set(card1Ref.current, { opacity: 0, x: 120, rotate: 0 });
    gsap.set(card2Ref.current, { opacity: 0, x: 120, rotate: 0 });

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;
        // Title and text entrance
        if ( textRef.current) {
          gsap.to(titleRef.current, {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: "power2.out",
          });
          gsap.to(textRef.current, {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: "power2.out",
            delay: 0.25,
          });
        }
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
        if (card1Ref.current && card2Ref.current) {
          const isMobile = window.matchMedia("(max-width: 1023px)").matches;
          if (isMobile) {
            gsap.to(card1Ref.current, {
              opacity: 1,
              x: 0,
              duration: 0.7,
              ease: "power2.out",
              onComplete: () => {
                gsap.to(card1Ref.current, {
                  rotate: 5,
                  duration: 0.4,
                  ease: "power2.out",
                });
                gsap.to(card2Ref.current, {
                  opacity: 1,
                  x: 0,
                  duration: 0.7,
                  ease: "power2.out",
                  onComplete: () => {
                    gsap.to(card2Ref.current, {
                      rotate: -5,
                      duration: 0.4,
                      ease: "power2.out",
                    });
                  },
                });
              },
            });
          } else {
            gsap.to([card1Ref.current, card2Ref.current], {
              opacity: 1,
              x: 0,
              duration: 0.7,
              ease: "power2.out",
              stagger: 0.1,
              onComplete: () => {
                gsap.to(card1Ref.current, {
                  rotate: 5,
                  duration: 0.4,
                  ease: "power2.out",
                });
                gsap.to(card2Ref.current, {
                  rotate: -5,
                  duration: 0.4,
                  ease: "power2.out",
                });
              },
            });
          }
        }
      }
    };

    const observer = new window.IntersectionObserver(handleIntersection, {
      threshold: 0.5,
      // rootMargin: '-40% 0px -40% 0px',
    });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="container flex flex-col items-center mb-[60px] lg:mb-[189px]"
    >


     <SectionTitle title="Our Advantages" />
      <p
        ref={textRef}
        className="text-center text-[20px] font-medium max-w-[632px] mx-auto mb-[32px]"
      >
        Because we don't just care for pets—we adore them! Here's why your furry
        friends will love us as much as you do:
      </p>
      <Flower flowerClassName="#FFEDE2" />

      <div className="py-[30px]  grid grid-cols-1 lg:grid-cols-2 gap-[60px] md:gap-[100px] lg:gap-[60px] w-full">
        <div
          ref={card1Ref}
          className="border border-primary rounded-default flex flex-col justify-center px-[20px] bg-[#FEFCFB] h-[242px] lg:h-[440px] overflow-hidden"
        >
          <div className="absolute top-0 right-0 lg:w-[328px] lg:h-[348px] w-[205px] h-[217px]">
            <Image
              src="/images/dog-bone.png"
              alt="Dog Bone"
              fill
              className="absolute top-0 right-0 opacity-50"
            />
          </div>

          <div className="absolute inset-0 flex flex-col justify-center px-[20px]">
            <h3 className="text-[24px] lg:text-[44px] text-primary">
              Wellness-Centered
            </h3>
            <p className="text-[14px] lg:text-[20px] font-medium text-primary max-w-[216px] lg:max-w-[365px]">
              We go beyond providing space, creating enriching activities that
              nurture your dog's mental, physical, and social well-being.
            </p>
          </div>
        </div>
        <div
          ref={card2Ref}
          className="border border-primary rounded-default flex flex-col justify-center px-[20px] bg-[#FEFCFB] lg:h-[440px] h-[242px] overflow-hidden"
        >
          <div className=" absolute top-[30px] right-[-20px] rotate-6 lg:w-[290px] lg:h-[289px] w-[173px] h-[184px]">
            <Image src="/images/card-2-shape.png" alt="Dog Bone" fill />
          </div>
          <div className="absolute inset-0 flex flex-col justify-center px-[20px]">
            <h3 className="text-[24px] lg:text-[44px] text-primary">
              Skill & Breed Based
            </h3>
            <p className="text-[14px] lg:text-[20px] font-medium text-primary max-w-[216px] lg:max-w-[365px]">
              Care is tailored to your pet's unique traits and needs, promoting
              their health and happiness.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
