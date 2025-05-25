"use client";

import { ServiceAction, ServiceInfo } from "@/models";
import Image from "next/image";
import { KeyboardEvent, useState } from "react";
import { FreeMode, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { StarsIcon } from "../icons";
import { ServiceItem } from "./service-item";
import Link from "next/link";

const ServiceActionButton = ({ action }: { action: ServiceAction }) => {
  if (action.href) {
    return (
      <Link
        href={action.href}
        className=" flex-shrink-0 rounded-[40px] flex items-center justify-center gap-[8px] px-[16px] bg-primary text-white font-poppins font-bold group min-w-[170px] h-[50px]"
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
      <ServiceDetails items={service.items || []} />
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

export const ServicesSwiper = ({ services }: { services: any }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [mainSwiper, setMainSwiper] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="flex flex-col-reverse gap-[78px]">
      <Swiper
        onSwiper={setMainSwiper}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        className=" !h-auto"
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.activeIndex), console.log(swiper.activeIndex);
        }}
      >
        {services.map((service: ServiceInfo) => (
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
        className={`flex items-center !justify-center  ${services.length >= 5 ? "!max-w-[880px]" : "max-w-[310px]"} !h-[170px] !overflow-x-auto`}
        breakpoints={{
          0: { slidesPerView: 4 },
          1024: { slidesPerView: services.length || 5 },
        }}
      >
        {services.map((service: ServiceInfo, idx: number) => (
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
            <ServiceItem service={service} isActive={idx === activeIndex} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
