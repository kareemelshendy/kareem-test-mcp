"use client";
import { Flower, SectionTitle } from "@/components";
import {
  FacebookIcon,
  InstaIcon,
  PhoneIcon,
  WhatsappIcon,
} from "@/components/icons";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

export default function ContactUs() {
  return (
    <section className="container py-[100px] lg:py-[200px]">
      <div className="flex flex-col items-center mb-[60px] lg:mb-[168px]">
        <SectionTitle title="If you want to chit chat" className="mb-[32px]" />

        <ContactFadeGroup />

        <Flower />
      </div>

      <div className="flex flex-col items-center mb-[60px] lg:mb-[168px]">
        <SocialsFadeGroup />
        <Flower />
      </div>

      <MailFadeGroup />
    </section>
  );
}

// Fade-in group for phone and WhatsApp
const ContactFadeGroup = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const whatsappRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const tl = gsap.timeline();
          tl.fromTo(
            phoneRef.current,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
          ).fromTo(
            whatsappRef.current,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
            "+=0.1"
          );
        }
      },
      { threshold: 0.2 }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col items-center">
      <div
        ref={phoneRef}
        className="flex items-center gap-[9px] mb-[16px]"
        aria-label="Phone contact"
      >
        <span className="text-[30px]">
          <PhoneIcon />
        </span>
        <Link
          href="tel:+971588283227"
          className="text-secondary text-[20px] font-medium"
        >
          +971 58 828 3227
        </Link>
      </div>
      <div
        ref={whatsappRef}
        className="flex items-center gap-[9px] mb-[16px] lg:mb-[64px]"
        aria-label="WhatsApp contact"
      >
        <span className="text-[30px]">
          <WhatsappIcon />
        </span>
        <Link
          href="https://wa.me/971588283227"
          className="text-secondary text-[20px] font-medium"
        >
          +971 58 828 3227
        </Link>
      </div>
    </div>
  );
};

// Fade-in group for socials
const SocialsFadeGroup = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const tl = gsap.timeline();
          tl.fromTo(
            textRef.current,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
          ).fromTo(
            socialsRef.current,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
            "+=0.1"
          );
        }
      },
      { threshold: 0.2 }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col items-center">
      <SectionTitle title="If you like stalking" className="mb-[32px]" />
      <div ref={textRef}>
        <p className="text-secondary text-[20px] font-medium mb-[32px]">
          here are our socials
        </p>
      </div>
      <div
        ref={socialsRef}
        className="flex items-center gap-[32px] mb-[32px] lg:mb-[64px]"
        aria-label="Social media links"
      >
        <Link
          href="#"
          className="text-[51px]"
          aria-label="Instagram"
          tabIndex={0}
        >
          <InstaIcon />
        </Link>
        <Link
          href="#"
          className="text-[51px]"
          aria-label="Facebook"
          tabIndex={0}
        >
          <FacebookIcon />
        </Link>
      </div>
    </div>
  );
};

// Fade-in group for mail and final message
const MailFadeGroup = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mailRef = useRef<HTMLAnchorElement>(null);
  const messageRef = useRef<HTMLParagraphElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const tl = gsap.timeline();
          tl.fromTo(
            mailRef.current,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
          ).fromTo(
            messageRef.current,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
            "+=0.1"
          );
        }
      },
      { threshold: 0.2 }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col items-center">
      <SectionTitle title="If you like mails" className="mb-[32px]" />
      <Link
        ref={mailRef}
        href="mailto:info@petzaniauae.com"
        className="text-secondary text-[28px] font-medium mb-[24px] uppercase"
      >
        info@petzaniauae.com
      </Link>
      <Flower />
      <p
        ref={messageRef}
        className="text-secondary text-[28px] font-medium mb-[24px] uppercase max-w-[585px] text-center"
      >
        we cannot wait to hear from you! We're All Ears (and Tails)!
      </p>
    </div>
  );
};
