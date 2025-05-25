"use client";

import React, { KeyboardEvent, useEffect, useRef } from "react";
import { Thumbs, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { useState } from "react";

import {
  CleanIcon,
  DogsIcon,
  HomeIcon,
  StarsIcon,
  TraningIcon,
  TruckIcon,
} from "../icons";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { SectionTitle } from "../shared/section-title";
import { ServiceItem } from "../shared/service-item";
import { ServicesSwiper } from "../shared/services-swiper";
import { ServiceInfo } from "@/models";



const services: ServiceInfo[] = [
  {
    title: "Daycare",
    description: "Where play meets care, and tails never stop wagging.",
    image: "/images/services/services-1.png",
    alt: "Dog Daycare",
    items: [
      {
        label: "Book Now",
        subTitle: "(Mini & small dogs only)",
        title: "Dog Daycare - Business Bay",
      },
      {
        label: "Book Now",
        title: "Dog Daycare - DIP 2",
      },
    ],

    icon: <DogsIcon />,
    thumbnailLabel: "Daycare",
    starsRotation: "rotate-0",
  },
  {
    title: "Boarding",
    description: "A cozy retreat while you're away.",
    image: "/images/services/services-2.png",
    alt: "Dog Boarding",
    icon: <HomeIcon />,
    thumbnailLabel: "Boarding",
    starsRotation: "-rotate-[145deg]",
    items: [
      {
        label: "Book Now",
        title: "Dog Boarding",
      },
    ],
  },
  {
    title: "Training",
    description: "Turning good dogs into great companions.",
    image: "/images/services/services-3.png",
    alt: "Dog Training",
    icon: <TraningIcon />,
    thumbnailLabel: "Training",
    starsRotation: "-rotate-[150deg]",
    items: [
      {
        label: "Book Now",
        title: "Stay and Train",
      },
      {
        label: "Book Now",
        title: "Daycare and Train",
      },
      {
        label: "Book Now",
        title: "At Home Training",
      },
    ],
  },
  {
    title: "Grooming",
    description: "Because every pet deserves the star treatment.",
    image: "/images/services/services-4.png",
    alt: "Dog Grooming",
    icon: <CleanIcon />,
    thumbnailLabel: "In-shop Grooming",
    starsRotation: "-rotate-[120deg]",
    items: [
      {
        label: "Book Now",
        title: "Dog Grooming",
      },
      {
        label: "Book Now",
        title: "Cat Grooming",
      },
    ],
  },
  {
    title: "Mobile Grooming",
    description:
      "Because every pet deserves the star treatment from the comfort of their homes",
    image: "/images/services/services-5.png",
    alt: "Mobile Grooming",
    icon: <TruckIcon />,
    thumbnailLabel: "Mobile Grooming",
    starsRotation: "-rotate-[120deg]",
    items: [
      {
        label: "Book Now",
        title: "Dog Mobile Grooming",
      },
      {
        label: "Book Now",
        title: "Cat Mobile Grooming",
      },
    ],
  },
];

// Reusable Components




export const OurServices = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const hasAnimated = useRef(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
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
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="container mb-[40px] lg:mb-[100px]">
      <div className="flex flex-col">
        <SectionTitle title="Our Services" className="mb-[24px] lg:mb-[80px]" />
        <ServicesSwiper services={services} />
      </div>
    </section>
  );
};
