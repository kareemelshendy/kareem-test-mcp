import Image from "next/image";
import React from "react";
import HeartIcon from "../../icons/heart-icon";
import {
  InstaIcon,
  LocationMarkerIcon,
  PhoneIcon,
  WhatsappIcon,
  FacebookIcon,
} from "../../icons";
import { FooterTop } from "./footer-top";

const socialIcons = (
  <div className="flex gap-[18px] mt-4" aria-label="Social media links">
    <a
      href="#"
      aria-label="Instagram"
      tabIndex={0}
      className="text-secondary text-[21px]"
    >
      <InstaIcon />
    </a>
    <a
      href="#"
      aria-label="Facebook"
      tabIndex={0}
      className="text-secondary text-[21px]"
    >
      <FacebookIcon />
    </a>
  </div>
);

export const Footer = () => {
  return (
    <footer className="">
      <FooterTop />

      <div className="relative container px-4 py-10  flex-col flex  flex-wrap md:flex-row  gap-4  md:gap-[8px] justify-between border-b border-primary">
        <div className="z-10 absolute -top-[26px] lg:-top-[31px] left-[50%] translate-x-[-50%] text-[14px] lg:text-[24px] text-primary font-bold bg-background rounded-[15px] w-[271px] lg:w-[413px] lg:h-[63px] h-[53px] flex items-center justify-center">Let’s make tails wag together</div>

        {/* Left: Logo & Description */}

        <div className="">
          <Image
            src="/images/petzania-logo.svg"
            alt="Petzania Logo"
            width={145}
            height={64}
            className="mb-[24px]"
          />
          <p className="text-[12px] md:text-[14px] text-secondary mb-[16px] max-w-[346px]">
            Petzania is your pet's loving home away from home, offering
            top-quality daycare, training, boarding and grooming services. We
            focus on providing a safe, comfortable, and enriching environment
            where your pets feel happy, loved, and cared for, ensuring their
            well-being while you're away.
          </p>
          {socialIcons}
        </div>

        <div className="md:pt-[54px]">
          <div className="mb-7">
            <p className="font-bold  text-[12px] md:text-[14px] text-secondary mb-[8px]">
              Opening Hours:
            </p>
            <div className="">
              <p className="text-[12px] md:text-[14px] text-secondary mb-[8px]">
                Mon - Fri: 08:00AM - 08:00PM
              </p>
              <p className="text-[12px] md:text-[14px] text-secondary">
                Sat - Sun: 10:00AM - 10:00PM
              </p>
            </div>
          </div>
          <div>
            <p className="font-bold text-[12px] md:text-[14px] text-secondary mb-[8px]">
              Pickup & Drop-off:
            </p>
            <div className="">
              <p className="text-[12px] md:text-[14px] text-secondary mb-[8px]">
                Mon - Fri: 07:00AM - 07:00PM
              </p>
              <p className="text-[12px] md:text-[14px] text-secondary">
                Sat - Sun: 09:00AM - 09:00PM
              </p>
            </div>
          </div>
        </div>

        <div className="md:pt-[54px]">
          <p className="font-bold text-[12px] md:text-[14px] text-secondary  mb-2 md:mb-[16px]">
            Links
          </p>
          <ul className=" flex flex-col gap-2 md:gap-4">
            <li>
              <a
                href="#"
                className=" text-[12px] md:text-[14px] text-secondary"
                aria-label="Home"
                tabIndex={0}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" text-[12px] md:text-[14px] text-secondary"
                aria-label="Services"
                tabIndex={0}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" text-[12px] md:text-[14px] text-secondary"
                aria-label="Pricing & Packages"
                tabIndex={0}
              >
                Pricing & Packages
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" text-[12px] md:text-[14px] text-secondary"
                aria-label="Contact"
                tabIndex={0}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="md:pt-[54px]">
          <p className="font-bold text-[14px] text-secondary mb-2 md:mb-[16px]">
            Contact Info
          </p>

          <div className="flex gap-2 mb-4 items-center">
            <span className="text-4">
              <LocationMarkerIcon />
            </span>
            <p className="text-[12px] md:text-[14px] text-secondary max-w-[180px]">
              DAMAC Executive Bay - Al A'amal St - Dubai - United Arab Emirates
            </p>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-4">
              <PhoneIcon />
            </span>
            <a
              href="tel:+971588283227"
              className="text-[12px] md:text-[14px] text-secondary max-w-[180px"
              aria-label="Call +971 58 828 3227"
              tabIndex={0}
            >
              +971 58 828 3227
            </a>
          </div>
          <div className="flex items-center gap-2 mt-2 mb-4">
            <span className="text-4">
              {" "}
              <WhatsappIcon />
            </span>
            <a
              href="https://wa.me/971588283227"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] md:text-[14px] text-secondary max-w-[180px"
              aria-label="WhatsApp +971 58 828 3227"
              tabIndex={0}
            >
              +971 58 828 3227
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container px-[48px]  py-[24px] flex flex-col md:flex-row justify-between items-center gap-2">
        <p className=" text-[12px] md:text-[14px] font-medium text-secondary">
          © 2024 PETZANIA. ALL RIGHTS RESERVED.
        </p>
        <div className="text-[12px] md:text-[14px] font-medium text-secondary flex items-center gap-2">
          MADE BY PROJECX WITH
          <span className="text-[21px] text-primary">
            <HeartIcon />
          </span>
        </div>
      </div>
    </footer>
  );
};
