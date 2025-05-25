import {  FaqsList, SectionTitle } from "@/components";
import Link from "next/link";

export default function Faqs() {
 
  return (
    <section className="flex flex-col py-[100px] lg:py-[151px] container">
      <SectionTitle title="Got Questions?" className="!mb-0" />
      <SectionTitle
        title="We’ve Got Answers!"
        className=" mb-[56px] lg:mb-[118px]"
      />



      <FaqsList />

      <p className="text-[16px] text-secondary font-medium">
        If you have more questions, please{" "}
        <Link className="text-primary" href="/contact-us">contact us.</Link>
      </p>
    </section>
  );
}
