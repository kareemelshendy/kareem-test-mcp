"use client";
import { useState, useRef } from "react";
import { AccordionItem } from "./accordion-item";
import { ServiceItem } from "./service-item";
import {
  CleanIcon,
  DogsIcon,
  HomeIcon,
  TraningIcon,
  TruckIcon,
} from "../icons";
import { ServiceInfo } from "@/models";

export const FaqsList = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const faqsRef = useRef<HTMLDivElement>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const handleServiceClick = (idx: number) => {
    if (idx === activeIndex) return;
    setActiveIndex(idx);
    setOpenIndex(null);
  };

  const serviceItems: ServiceInfo[] = [
    {
      title: "Daycare",
      image: "/images/services/services-1.png",
      alt: "Dog Daycare",
      icon: <DogsIcon />,
      thumbnailLabel: "Daycare",
      starsRotation: "rotate-0",      
      faqs: [
        {
          title: "How long does it take to train my pet?",
          desc: "Lorem ipsum dolor sit amet consectetur. Ut convallis pellentesque imperdiet integer lectus massa. Id adipiscing mauris nec faucibus blandit gravida ante lectus. Neque laoreet lectus mus mi id. Aenean convallis etiam nibh euismod potenti tempus proin at tristique.",
        },
        {
          title: "How long does it take to train my pet?",
          desc: "Lorem ipsum dolor sit amet consectetur. Ut convallis pellentesque imperdiet integer lectus massa. Id adipiscing mauris nec faucibus blandit gravida ante lectus. Neque laoreet lectus mus mi id. Aenean convallis etiam nibh euismod potenti tempus proin at tristique.",
        },
        {
          title: "How long does it take to train my pet?",
          desc: "Lorem ipsum dolor sit amet consectetur. Ut convallis pellentesque imperdiet integer lectus massa. Id adipiscing mauris nec faucibus blandit gravida ante lectus. Neque laoreet lectus mus mi id. Aenean convallis etiam nibh euismod potenti tempus proin at tristique.",
        },
        {
          title: "How long does it take to train my pet?",
          desc: "Lorem ipsum dolor sit amet consectetur. Ut convallis pellentesque imperdiet integer lectus massa. Id adipiscing mauris nec faucibus blandit gravida ante lectus. Neque laoreet lectus mus mi id. Aenean convallis etiam nibh euismod potenti tempus proin at tristique.",
        },
        {
          title: "How long does it take to train my pet?",
          desc: "Lorem ipsum dolor sit amet consectetur. Ut convallis pellentesque imperdiet integer lectus massa. Id adipiscing mauris nec faucibus blandit gravida ante lectus. Neque laoreet lectus mus mi id. Aenean convallis etiam nibh euismod potenti tempus proin at tristique.",
        },
        {
          title: "How long does it take to train my pet?",
          desc: "Lorem ipsum dolor sit amet consectetur. Ut convallis pellentesque imperdiet integer lectus massa. Id adipiscing mauris nec faucibus blandit gravida ante lectus. Neque laoreet lectus mus mi id. Aenean convallis etiam nibh euismod potenti tempus proin at tristique.",
        },
      ],
    },
    {
      title: "Boarding",
      image: "/images/services/services-2.png",
      alt: "Dog Boarding",
      icon: <HomeIcon />,
      thumbnailLabel: "Boarding",
      starsRotation: "-rotate-[145deg]",
      faqs: [
        {
          title: "How long does it take to train my pet? 2",
          desc: "Lorem ipsum dolor sit amet consectetur. Ut convallis pellentesque imperdiet integer lectus massa. Id adipiscing mauris nec faucibus blandit gravida ante lectus. Neque laoreet lectus mus mi id. Aenean convallis etiam nibh euismod potenti tempus proin at tristique.",
        },
        {
          title: "How long does it take to train my pet? 2",
          desc: "Lorem ipsum dolor sit amet consectetur. Ut convallis pellentesque imperdiet integer lectus massa. Id adipiscing mauris nec faucibus blandit gravida ante lectus. Neque laoreet lectus mus mi id. Aenean convallis etiam nibh euismod potenti tempus proin at tristique.",
        },
        {
          title: "How long does it take to train my pet? 2",
          desc: "Lorem ipsum dolor sit amet consectetur. Ut convallis pellentesque imperdiet integer lectus massa. Id adipiscing mauris nec faucibus blandit gravida ante lectus. Neque laoreet lectus mus mi id. Aenean convallis etiam nibh euismod potenti tempus proin at tristique.",
        },
        {
          title: "How long does it take to train my pet? 2",
          desc: "Lorem ipsum dolor sit amet consectetur. Ut convallis pellentesque imperdiet integer lectus massa. Id adipiscing mauris nec faucibus blandit gravida ante lectus. Neque laoreet lectus mus mi id. Aenean convallis etiam nibh euismod potenti tempus proin at tristique.",
        },
        {
          title: "How long does it take to train my pet? 2",
          desc: "Lorem ipsum dolor sit amet consectetur. Ut convallis pellentesque imperdiet integer lectus massa. Id adipiscing mauris nec faucibus blandit gravida ante lectus. Neque laoreet lectus mus mi id. Aenean convallis etiam nibh euismod potenti tempus proin at tristique.",
        },
        {
          title: "How long does it take to train my pet? 2",
          desc: "Lorem ipsum dolor sit amet consectetur. Ut convallis pellentesque imperdiet integer lectus massa. Id adipiscing mauris nec faucibus blandit gravida ante lectus. Neque laoreet lectus mus mi id. Aenean convallis etiam nibh euismod potenti tempus proin at tristique.",
        },
      ],
    },

    {
      title: "Training",
      image: "/images/services/services-3.png",
      alt: "Dog Training",
      icon: <TraningIcon />,
      thumbnailLabel: "Training",
      starsRotation: "-rotate-[150deg]",
      faqs: [
        {
          title: "How long does it take to train my pet? 3",
          desc: "Lorem ipsum dolor sit amet consectetur. Ut convallis pellentesque imperdiet integer lectus massa. Id adipiscing mauris nec faucibus blandit gravida ante lectus. Neque laoreet lectus mus mi id. Aenean convallis etiam nibh euismod potenti tempus proin at tristique.",
        },
        {
          title: "How long does it take to train my pet? 3",
          desc: "Lorem ipsum dolor sit amet consectetur. Ut convallis pellentesque imperdiet integer lectus massa. Id adipiscing mauris nec faucibus blandit gravida ante lectus. Neque laoreet lectus mus mi id. Aenean convallis etiam nibh euismod potenti tempus proin at tristique.",
        },
        {
          title: "How long does it take to train my pet? 3",
          desc: "Lorem ipsum dolor sit amet consectetur. Ut convallis pellentesque imperdiet integer lectus massa. Id adipiscing mauris nec faucibus blandit gravida ante lectus. Neque laoreet lectus mus mi id. Aenean convallis etiam nibh euismod potenti tempus proin at tristique.",
        },
        {
          title: "How long does it take to train my pet? 3",
          desc: "Lorem ipsum dolor sit amet consectetur. Ut convallis pellentesque imperdiet integer lectus massa. Id adipiscing mauris nec faucibus blandit gravida ante lectus. Neque laoreet lectus mus mi id. Aenean convallis etiam nibh euismod potenti tempus proin at tristique.",
        },
        {
          title: "How long does it take to train my pet? 3",
          desc: "Lorem ipsum dolor sit amet consectetur. Ut convallis pellentesque imperdiet integer lectus massa. Id adipiscing mauris nec faucibus blandit gravida ante lectus. Neque laoreet lectus mus mi id. Aenean convallis etiam nibh euismod potenti tempus proin at tristique.",
        },
        {
          title: "How long does it take to train my pet? 3",
          desc: "Lorem ipsum dolor sit amet consectetur. Ut convallis pellentesque imperdiet integer lectus massa. Id adipiscing mauris nec faucibus blandit gravida ante lectus. Neque laoreet lectus mus mi id. Aenean convallis etiam nibh euismod potenti tempus proin at tristique.",
        },
      ],
    },
    {
      title: "Grooming",
      image: "/images/services/services-4.png",
      alt: "Dog Grooming",
      icon: <CleanIcon />,
      thumbnailLabel: "In-shop Grooming",
      starsRotation: "-rotate-[120deg]",
      faqs: [
        {
          title: "How long does it take to train my pet? 4",
          desc: "Lorem ipsum dolor sit amet consectetur. Ut convallis pellentesque imperdiet integer lectus massa. Id adipiscing mauris nec faucibus blandit gravida ante lectus. Neque laoreet lectus mus mi id. Aenean convallis etiam nibh euismod potenti tempus proin at tristique.",
        },
        {
          title: "How long does it take to train my pet? 4",
          desc: "Lorem ipsum dolor sit amet consectetur. Ut convallis pellentesque imperdiet integer lectus massa. Id adipiscing mauris nec faucibus blandit gravida ante lectus. Neque laoreet lectus mus mi id. Aenean convallis etiam nibh euismod potenti tempus proin at tristique.",
        },
        {
          title: "How long does it take to train my pet? 4",
          desc: "Lorem ipsum dolor sit amet consectetur. Ut convallis pellentesque imperdiet integer lectus massa. Id adipiscing mauris nec faucibus blandit gravida ante lectus. Neque laoreet lectus mus mi id. Aenean convallis etiam nibh euismod potenti tempus proin at tristique.",
        },
        {
          title: "How long does it take to train my pet? 4",
          desc: "Lorem ipsum dolor sit amet consectetur. Ut convallis pellentesque imperdiet integer lectus massa. Id adipiscing mauris nec faucibus blandit gravida ante lectus. Neque laoreet lectus mus mi id. Aenean convallis etiam nibh euismod potenti tempus proin at tristique.",
        },
        {
          title: "How long does it take to train my pet? 4",
          desc: "Lorem ipsum dolor sit amet consectetur. Ut convallis pellentesque imperdiet integer lectus massa. Id adipiscing mauris nec faucibus blandit gravida ante lectus. Neque laoreet lectus mus mi id. Aenean convallis etiam nibh euismod potenti tempus proin at tristique.",
        },
        {
          title: "How long does it take to train my pet? 4",
          desc: "Lorem ipsum dolor sit amet consectetur. Ut convallis pellentesque imperdiet integer lectus massa. Id adipiscing mauris nec faucibus blandit gravida ante lectus. Neque laoreet lectus mus mi id. Aenean convallis etiam nibh euismod potenti tempus proin at tristique.",
        },
      ],
    },
    {
      title: "Mobile Grooming",
      image: "/images/services/services-5.png",
      alt: "Mobile Grooming",
      icon: <TruckIcon />,
      thumbnailLabel: "Mobile Grooming",
      starsRotation: "-rotate-[120deg]",
      faqs: [
        {
          title: "How long does it take to train my pet? 5",
          desc: "Lorem ipsum dolor sit amet consectetur. Ut convallis pellentesque imperdiet integer lectus massa. Id adipiscing mauris nec faucibus blandit gravida ante lectus. Neque laoreet lectus mus mi id. Aenean convallis etiam nibh euismod potenti tempus proin at tristique.",
        },
        {
          title: "How long does it take to train my pet? 5",
          desc: "Lorem ipsum dolor sit amet consectetur. Ut convallis pellentesque imperdiet integer lectus massa. Id adipiscing mauris nec faucibus blandit gravida ante lectus. Neque laoreet lectus mus mi id. Aenean convallis etiam nibh euismod potenti tempus proin at tristique.",
        },
        {
          title: "How long does it take to train my pet? 5",
          desc: "Lorem ipsum dolor sit amet consectetur. Ut convallis pellentesque imperdiet integer lectus massa. Id adipiscing mauris nec faucibus blandit gravida ante lectus. Neque laoreet lectus mus mi id. Aenean convallis etiam nibh euismod potenti tempus proin at tristique.",
        },
        {
          title: "How long does it take to train my pet? 5",
          desc: "Lorem ipsum dolor sit amet consectetur. Ut convallis pellentesque imperdiet integer lectus massa. Id adipiscing mauris nec faucibus blandit gravida ante lectus. Neque laoreet lectus mus mi id. Aenean convallis etiam nibh euismod potenti tempus proin at tristique.",
        },
        {
          title: "How long does it take to train my pet? 5",
          desc: "Lorem ipsum dolor sit amet consectetur. Ut convallis pellentesque imperdiet integer lectus massa. Id adipiscing mauris nec faucibus blandit gravida ante lectus. Neque laoreet lectus mus mi id. Aenean convallis etiam nibh euismod potenti tempus proin at tristique.",
        },
        {
          title: "How long does it take to train my pet? 5",
          desc: "Lorem ipsum dolor sit amet consectetur. Ut convallis pellentesque imperdiet integer lectus massa. Id adipiscing mauris nec faucibus blandit gravida ante lectus. Neque laoreet lectus mus mi id. Aenean convallis etiam nibh euismod potenti tempus proin at tristique.",
        },
      ],
    },
  ];

  return (
    <>
      <div className="flex gap-[16px] mb-[60px] w-full lg:max-w-[794px] lg:justify-center mx-auto overflow-x-auto overflow-hidden lg:overflow-visible">
        {serviceItems.map((service, idx) => (
          <button
            key={idx}
            onClick={() => handleServiceClick(idx)}
            aria-label={`Show FAQs for ${service.title}`}
            tabIndex={0}
            className="focus:outline-none flex-shrink-0"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") handleServiceClick(idx);
            }}
            type="button"
          >
            <ServiceItem service={service} isActive={idx === activeIndex} />
          </button>
        ))}
      </div>

      <div ref={faqsRef} style={{ opacity: 1 }}>
        {serviceItems[activeIndex]?.faqs?.map((faq, idx) => (
          <AccordionItem
            key={idx}
            faqNumber={idx + 1}
            title={faq.title}
            desc={faq.desc}
            isOpen={openIndex === idx}
            handleToggle={() => handleToggle(idx)}
          />
        ))}
      </div>
    </>
  );
};
