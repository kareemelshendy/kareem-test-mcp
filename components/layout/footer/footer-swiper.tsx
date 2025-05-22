"use client";
import {
  ArrowIcon,
  CleanIcon,
  HomeIcon,
  LocationMarkerIcon,
  PetsIcon,
  PhoneIcon,
  TraningIcon,
  TruckIcon,
} from "@/components/icons";
import Link from "next/link";
import { EffectFade, FreeMode, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";
import swiper, { Swiper as SwiperType } from "swiper";
import Image from "next/image";

export const FooterSwiper = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <div className="flex">
      <div className=" w-full lg:w-1/2 flex items-center justify-center gap-[30px]">
        <button
          className=" hidden lg:block h-[46px] text-[46px] text-white rotate-90 cursor-pointer"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <ArrowIcon />
        </button>
        <Swiper
          effect={"fade"}
          slidesPerView={1}
          spaceBetween={30}
          modules={[FreeMode, Thumbs, EffectFade]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setCurrentSlide(swiper.activeIndex);
          }}
          onSlideChange={(e) => {
            setCurrentSlide(e.activeIndex);
            console.log(e.activeIndex);
          }}
          className="!h-auto !w-[327px] lg:!w-auto"
        >
          <div></div>

          <SwiperSlide>
            <div className="bg-primary">
              <div className="flex items-start justify-center lg:justify-start gap-[16px]">
                <button
                  className=" mt-1  lg:hidden text-[15px] text-white rotate-90 cursor-pointer"
                  onClick={() => swiperRef.current?.slidePrev()}
                >
                  <ArrowIcon />
                </button>
                <h4 className="text-white text-[16px] lg:text-[32px] mb-[8px] text-center lg:text-left">
                  THE HOOD - Business Bay
                </h4>

                <button
                  className=" mt-1  lg:hidden text-[15px] text-white -rotate-90 cursor-pointer"
                  onClick={() => swiperRef.current?.slideNext()}
                >
                  <ArrowIcon />
                </button>
              </div>
              <p className=" text-[12px] lg:max-w-[586px] text-white lg:text-[20px] mb-[16px] text-center lg:text-left">
                Our Business Bay branch, located in the heart of the city,
                offers grooming and daycare services and serves as a convenient
                hub for clients transferring to our other branches.
              </p>

              <div className="flex items-center gap-1 lg:gap-[16px] mb-[24px] justify-center lg:justify-start">
                <p className="text-white text-[12px] lg:text-[16px] font-bold">
                  Services Available:
                </p>
                <div className="flex items-center gap-1 lg:gap-2">
                  <div className=" w-[21px]  lg:w-[43px] h-[21px] lg:h-[43px] bg-white rounded-md text-[17px] lg:text-[35px] flex items-center justify-center text-primary">
                    <PetsIcon />
                  </div>

                  <div className="w-[21px] lg:w-[43px] h-[21px] lg:h-[43px] bg-white rounded-md text-[17px] lg:text-[35px] flex items-center justify-center text-primary">
                    <CleanIcon />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-[16px] mb-[16px]">
                <span className="text-white text-[24px]">
                  <LocationMarkerIcon />
                </span>

                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-[12px] lg:text-[16px] font-medium  max-w-[261px] lg:max-w-none"
                >
                  DAMAC Executive Bay - Al A'amal St - Dubai - United Arab
                  Emirates
                </a>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-[16px]">
                <span className="text-white text-[24px]">
                  <PhoneIcon />
                </span>

                <Link
                  href="tel:+971588283227"
                  target="_blank"
                  className="text-white text-[12px] lg:text-[16px] font-medium  max-w-[261px] lg:max-w-none"
                >
                  +971 58 828 3227
                </Link>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-primary">
              <div className="flex items-start justify-center lg:justify-start gap-[16px]">
                <button
                  className=" mt-1  lg:hidden text-[15px] text-white rotate-90 cursor-pointer"
                  onClick={() => swiperRef.current?.slidePrev()}
                >
                  <ArrowIcon />
                </button>
                <h4 className="text-white text-[16px] lg:text-[32px] mb-[8px] text-center lg:text-left">
                  The Retreat - DIP 2
                </h4>

                <button
                  className=" mt-1  lg:hidden text-[15px] text-white -rotate-90 cursor-pointer"
                  onClick={() => swiperRef.current?.slideNext()}
                >
                  <ArrowIcon />
                </button>
              </div>

              <p className=" text-[12px] lg:max-w-[586px] text-white lg:text-[20px] mb-[16px] text-center lg:text-left">
                The luxury wellness retreat is a premium wellness experience
                crafted to cater to the preferences and requirements of your
                pet's breed.{" "}
              </p>

              <div className="flex items-center gap-1 lg:gap-[16px] mb-[24px] justify-center lg:justify-start">
                <p className="text-white text-[12px] lg:text-[16px] font-bold">
                  Services Available:
                </p>
                <div className="flex items-center gap-1 lg:gap-2">
                  <div className=" w-[21px]  lg:w-[43px] h-[21px] lg:h-[43px] bg-white rounded-md text-[17px] lg:text-[35px] flex items-center justify-center text-primary">
                    <PetsIcon />
                  </div>
                  <div className=" w-[21px]  lg:w-[43px] h-[21px] lg:h-[43px] bg-white rounded-md text-[17px] lg:text-[35px] flex items-center justify-center text-primary">
                    <HomeIcon />
                  </div>
                  <div className="w-[21px]  lg:w-[43px] h-[21px] lg:h-[43px] bg-white rounded-md text-[17px] lg:text-[35px] flex items-center justify-center text-primary">
                    <TraningIcon />
                  </div>
                  <div className="w-[21px]  lg:w-[43px] h-[21px] lg:h-[43px] bg-white rounded-md text-[17px] lg:text-[35px] flex items-center justify-center text-primary">
                    <CleanIcon />
                  </div>

                  <div className="w-[21px]  lg:w-[43px] h-[21px] lg:h-[43px] bg-white rounded-md text-[17px] lg:text-[35px] flex items-center justify-center text-primary">
                    <TruckIcon />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-[16px] mb-[16px]">
                <span className="text-white text-[15px] lg:text-[24px]">
                  <LocationMarkerIcon />
                </span>

                <Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-[12px] lg:text-[16px] font-medium  max-w-[261px] lg:max-w-none"
                >
                  DAMAC Executive Bay - Al A'amal St - Dubai - United Arab
                  Emirates
                </Link>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-[16px]">
                <span className="text-white text-[15px] lg:text-[24px]">
                  <PhoneIcon />
                </span>

                <Link
                  href="tel:+0283949272694"
                  target="_blank"
                  className="text-white text-[12px] lg:text-[16px] font-medium  max-w-[261px] lg:max-w-none "
                >
                  +0283949272694{" "}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <button
          className=" hidden lg:block h-[46px] text-[46px] text-white -rotate-90 cursor-pointer"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <ArrowIcon />
        </button>
      </div>

      <div className="hidden lg:flex w-full lg:w-1/2 items-center justify-center">
        <div className="w-[440px] h-[341px] relative">
          <div className=" rotate-[25deg] bg-background rounded-full w-[229px] h-[229px] absolute top-[-32px] right-[100px] flex items-center justify-center gap-[16px] flex-col">
            <button
              className={` text-secondary/30 text-[24px] font-bold font-poppins cursor-pointer ${
                currentSlide === 1 ? "!text-secondary" : ""
              }`}
              onClick={() => swiperRef.current?.slideTo(1)}
            >
              {" "}
              THE RETREAT
            </button>
            <button
              className={`text-secondary/30 text-[24px] font-bold font-poppins cursor-pointer ${
                currentSlide === 0 ? "!text-secondary" : ""
              }`}
              onClick={() => swiperRef.current?.slideTo(0)}
            >
              {" "}
              THE HOOD
            </button>
          </div>
          <Image
            src={"/images/dog-head.png"}
            alt="footer-swiper"
            fill
            className="object-cover !top-[-80px] pointer-events-none "
          />
        </div>
      </div>
    </div>
  );
};
