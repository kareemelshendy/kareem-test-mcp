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

// Types

type ServiceAction = {
  label: string;
  href?: string;
  onClick?: () => void;
  ariaLabel: string;
  subTitle?: string;
  title: string;
};

type ServiceInfo = {
  title: string;
  description: string;
  image: string;
  alt: string;
  items: ServiceAction[];
  icon: React.ReactNode;
  thumbnailLabel: string;
  starsRotation: string;
};

// Data

const services: ServiceInfo[] = [
  {
    title: "Daycare",
    description: "Where play meets care, and tails never stop wagging.",
    image: "/images/services/services-1.png",
    alt: "Dog Daycare",
    items: [
      {
        label: "Book Now",
        // href: "/contact-us",
        ariaLabel: "Contact us for Dog Daycare - Business Bay",
        subTitle: "(Mini & small dogs only)",
        title: "Dog Daycare - Business Bay",
      },
      {
        label: "Book Now",
        // href: "/contact-us",
        ariaLabel:
          "Contact us for Dog Daycare - Business Bay (Mini & small dogs only)",
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
    items: [
      {
        label: "Book Now",
        ariaLabel: "Book Boarding",
        title: "Dog Boarding",
      },
    ],
    icon: <HomeIcon />,
    thumbnailLabel: "Boarding",
    starsRotation: "-rotate-[145deg]",
  },
  {
    title: "Training",
    description: "Turning good dogs into great companions.",
    image: "/images/services/services-3.png",
    alt: "Dog Training",
    items: [
      {
        label: "Book Now",
        ariaLabel: "Book Stay and Train",
        title: "Stay and Train",
      },
      {
        label: "Book Now",
        ariaLabel: "Book Daycare and Train",
        title: "Daycare and Train",
      },
      {
        label: "Book Now",
        ariaLabel: "Book At Home Training",
        title: "At Home Training",
      },
    ],
    icon: <TraningIcon />,
    thumbnailLabel: "Training",
    starsRotation: "-rotate-[150deg]",
  },
  {
    title: "Grooming",
    description: "Because every pet deserves the star treatment.",
    image: "/images/services/services-4.png",
    alt: "Dog Grooming",
    items: [
      {
        label: "Book Now",
        ariaLabel: "Book Dog Grooming",
        title: "Dog Grooming",
      },
      {
        label: "Book Now",
        ariaLabel: "Book Cat Grooming",
        title: "Cat Grooming",
      },
    ],
    icon: <CleanIcon />,
    thumbnailLabel: "In-shop Grooming",
    starsRotation: "-rotate-[120deg]",
  },
  {
    title: "Mobile Grooming",
    description:
      "Because every pet deserves the star treatment from the comfort of their homes",
    image: "/images/services/services-5.png",
    alt: "Mobile Grooming",
    items: [
      {
        label: "Book Now",
        ariaLabel: "Book Dog Mobile Grooming",
        title: "Dog Mobile Grooming",
      },
      {
        label: "Book Now",
        ariaLabel: "Book Cat Mobile Grooming",
        title: "Cat Mobile Grooming",
      },
    ],
    icon: <TruckIcon />,
    thumbnailLabel: "Mobile Grooming",
    starsRotation: "-rotate-[120deg]",
  },
];

// Reusable Components

const ServiceActionButton = ({ action }: { action: ServiceAction }) => {
  if (action.href) {
    return (
      <Link
        href={action.href}
        className=" flex-shrink-0 rounded-[40px] flex items-center justify-center gap-[8px] px-[16px] bg-primary text-white font-poppins font-bold group min-w-[170px] h-[50px]"
        aria-label={action.ariaLabel}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            window.location.href = action.href!;
          }
        }}
      >
        <span className="group-hover:translate-x-[16px] transition-all duration-300">
          {action.label}
        </span>
        <span className="w-[8px] h-[8px] rounded-full bg-white group-hover:-translate-x-[112px] transition-all duration-300"></span>
      </Link>
    );
  }
  return (
    <button
      className="rounded-[40px] flex items-center justify-center gap-[8px] px-[16px] bg-primary text-white font-poppins font-bold group min-w-[170px] h-[50px]"
      aria-label={action.ariaLabel}
      tabIndex={0}
      onKeyDown={(e: KeyboardEvent<HTMLButtonElement>) => {
        if (e.key === "Enter" || e.key === " ") {
          (e.target as HTMLButtonElement).click();
        }
      }}
    >
      <span className="group-hover:translate-x-[16px] transition-all duration-300">
        {action.label}
      </span>
      <span className="w-[8px] h-[8px] rounded-full bg-white group-hover:-translate-x-[90px] transition-all duration-300"></span>
    </button>
  );
};

const ServiceDetails = ({ items }: { items: ServiceAction[] }) => (
  <div className="flex flex-col gap-[24px]">
    {items.map((item, idx) => (
      <div
        key={item.title}
        className="flex items-start lg:items-center flex-col lg:flex-row gap-[16px] lg:gap-0 justify-between lg:w-[505px]"
      >
        <div>
          <p className="text-[20px] font-medium text-secondary">{item.title}</p>
          {/* Only show extra info for the first Daycare detail */}
          {item.subTitle && (
            <p className="text-[16px] font-medium">({item.subTitle})</p>
          )}
        </div>
        <ServiceActionButton action={item} />
      </div>
    ))}
  </div>
);

const ServiceSlide = ({ service }: { service: ServiceInfo }) => (
  <div className="w-full flex">
    <div className="w-full lg:w-1/2">
      <h3 className="text-[44px]">{service.title}</h3>
      <p className="text-[16px] font-medium text-secondary mb-[40px]">
        {service.description}
      </p>
      <ServiceDetails items={service.items} />
    </div>
    <div className="hidden lg:w-1/2 lg:flex items-center justify-end">
      <Image
        src={service.image}
        alt={service.alt}
        width={460}
        height={460}
        className="block"
      />
    </div>
  </div>
);

const ServiceThumbnail = ({
  service,
  isActive,
}: {
  service: ServiceInfo;
  isActive: boolean;
}) => (
  <div
    className="group flex flex-col items-center gap-[8px] w-[110px] lg:w-[161px]"
    tabIndex={0}
    aria-label={service.thumbnailLabel}
    role="button"
  >
    <p
      className={
        "text-[12px] lg:text-[16px] font-medium text-secondary/50 hover:text-secondary duration-300 group-hover:text-secondary" +
        (isActive ? " !text-secondary" : "")
      }
    >
      {service.thumbnailLabel}
    </p>
    <div
      className={
        `group cursor-pointer relative text-primary/50 hover:text-primary w-[61px] h-[61px] lg:w-[110px] lg:h-[110px] rounded-full bg-[#FFEDE2] flex items-center justify-center text-[32px] lg:text-[54px] border border-transparent group-hover:border-primary transition-all duration-300` +
        (isActive ? " !border-primary !text-primary" : "")
      }
    >
      <span
        className={`absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-full text-[50px] lg:text-[88px] flex items-center justify-end ${service.starsRotation} group-hover:-rotate-[180deg] duration-200`}
      >
        <StarsIcon />
      </span>
      {service.icon}
    </div>
  </div>
);

export const OurServices = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [mainSwiper, setMainSwiper] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);
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
        <div className="flex flex-col-reverse gap-[78px]">
          <Swiper
            onSwiper={setMainSwiper}
            spaceBetween={10}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Thumbs]}
            className="mySwiper2 !h-auto"
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.activeIndex),
                console.log(swiper.activeIndex);
            }}
          >
            {services.map((service) => (
              <SwiperSlide key={service.title}>
                <ServiceSlide service={service} />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={15}
            slidesPerView={4.2}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Thumbs]}
            className="flex items-center !justify-center !max-w-[880px] !h-[150px] !overflow-x-auto"
            breakpoints={{
              0: { slidesPerView: 2.2 },
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
          >
            {services.map((service, idx) => (
              <SwiperSlide
                key={service.title}
                className="!flex items-center !justify-center !lg:w-[161px]"
                onClick={() => mainSwiper && mainSwiper.slideTo(idx)}
                tabIndex={0}
                onKeyDown={(e) => {
                  if ((e.key === "Enter" || e.key === " ") && mainSwiper) {
                    mainSwiper.slideTo(idx);
                  }
                }}
                aria-label={`Go to ${service.title}`}
                role="button"
              >
                <ServiceThumbnail
                  service={service}
                  isActive={idx === activeIndex}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
