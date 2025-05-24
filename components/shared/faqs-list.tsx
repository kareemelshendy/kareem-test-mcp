"use client";
import { useState } from "react";
import { AccordionItem } from "./accordion-item";

interface Props {
  faqs: {
    title: string;
    desc: string;
  }[];
}
export const FaqsList = ({ faqs }: Props) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <>
      {faqs.map((faq, idx) => (
        <AccordionItem
          key={idx}
          faqNumber={idx + 1}
          title={faq.title}
          desc={faq.desc}
          isOpen={openIndex === idx}
          handleToggle={() => handleToggle(idx)}
        />
      ))}
    </>
  );
};
