import { FAQItem, FaqsList, SectionTitle } from "@/components";
import Link from "next/link";

export default function Faqs() {
  const faqsData = [
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
  ];
  return (
    <section className="flex flex-col py-[100px] lg:py-[151px] container">
      <SectionTitle title="Got Questions?" className="!mb-0" />
      <SectionTitle
        title="We’ve Got Answers!"
        className=" mb-[56px] lg:mb-[118px]"
      />

      <FaqsList faqs={faqsData} />

      <p className="text-[16px] text-secondary font-medium">
        If you have more questions, please{" "}
        <Link className="text-primary" href="/contact-us">contact us.</Link>
      </p>
    </section>
  );
}
