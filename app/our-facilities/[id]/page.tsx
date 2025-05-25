import { getFacilityById } from "@/api";
import { HighlightedText, SectionTitle, VideoSection } from "@/components";
import { GallerySection } from "./components/gallery-section";
import { ServicesSection } from "./components/services-section";

export default async function FacilityPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const facility = await getFacilityById(parseInt(id));

  return (
    <section className="py-[100px] lg:py-[150px]">
      <SectionTitle title={facility?.title!} />
      <HighlightedText text={facility?.description!}  className="!mb-[75px]"/>

      <GallerySection />
      <VideoSection />

      <ServicesSection services={facility?.services || []} />
    </section>
  );
}
