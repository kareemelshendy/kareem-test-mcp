"use client";

import { DownArrow } from "../icons";
import { useState } from "react";

interface Props {
  faqNumber: number;
  title: string;
  desc: string;
  isOpen: boolean;
  handleToggle: () => void;
}

export const FAQItem = ({ faqNumber, title, desc, isOpen, handleToggle }: Props) => {

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleToggle();
    }
  };
  const contentId = `faq-content-${faqNumber}`;
  const formattedNumber = faqNumber.toString().padStart(2, "0");

  return (
    <div
      className={`py-[24px] px-[8px] lg:p-[48px] bg-[#FFEDE2] flex items-start w-full mb-[32px] gap-[8px] lg:gap-[48px] rounded-default border border-transparent transition-all duration-300 ${
        isOpen ? "!bg-background !border-primary" : ""
      } `}
    >
      <p className=" text-[24px] lg:text-[40px] text-primary font-bold">{formattedNumber}</p>
      <div className={`flex flex-col w-full ${isOpen ? "!mt-0" : ""}`}>
        <button
          className="text-[16px] lg:text-[32px] font-bold text-secondary flex items-center justify-between gap-[16px] w-full focus:outline-none cursor-pointer"
          aria-expanded={isOpen}
          aria-controls={contentId}
          id={`faq-header-${faqNumber}`}
          onClick={handleToggle}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          type="button"
        >
          <span>{title}</span>
          <span
            className={
              `w-[32px] lg:w-[48px] h-[32px] lg:h-[48px] flex items-center justify-center text-[21px] lg:text-[32px] bg-white rounded-full transition-transform duration-300` +
              (isOpen ? " rotate-180 !bg-secondary text-white" : " rotate-0")
            }
            aria-hidden="true"
          >
            <DownArrow />
          </span>
        </button>
        <div
          id={contentId}
          role="region"
          aria-labelledby={`faq-header-${faqNumber}`}
          className={`overflow-hidden transition-all duration-300 ] ${
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <p className="text-[14px] lg:text-[20px] font-medium text-secondary mt-[16px] lg:mt-[24px]">{desc}</p>
        </div>
      </div>
    </div>
  );
};
