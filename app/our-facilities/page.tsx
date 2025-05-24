import { HighlightedText, SectionTitle } from "@/components";
import { FacilitiesCard } from "./components/facilities-card";

export default function OurFacilities() {
  const facilities = [
    {
      id: 1,
      title: "The HOOD -Business Bay ",
      location:
        "DAMAC Executive Bay - Al A'amal St - Dubai - United Arab Emirates",
      phone: "+971 58 828 3227",
    },
    {
      id: 2,
      title: "The retreat -DIP 2",
      location:
        "DAMAC Executive Bay - Al A'amal St - Dubai - United Arab Emirates",
      phone: "+0283949272694",
    },
    {
      id: 3,
      title: "Mobile van",
      location: "Anywhere in Dubai - United Arab Emirates",
      phone: "+0283949272694",
    },
  ];
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
