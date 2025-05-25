import { HighlightedText, SectionTitle } from "@/components";
import { FacilitiesCard } from "./components/facilities-card";
import { getFacilities } from "@/api";

export default async function OurFacilities() {
  const facilities = await getFacilities();

  return (
    <section className="container py-[100px] lg:py-[175px]">
      <SectionTitle title="explore our three facilities" />

      <HighlightedText
        text="The Hood, The Retreat, and our Mobile Van—each catered to meet your pet’s unique needs with love and care."
        className="!mb-[130px]"
      />

      <div className="flex flex-col gap-[24px]">
        {facilities.map((facility, index) => (
          <FacilitiesCard key={index} facility={facility} />
        ))}
      </div>
    </section>
  );
}
