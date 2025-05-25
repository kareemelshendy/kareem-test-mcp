import { SectionTitle } from "@/components";
import { ServicesSwiper } from "@/components/shared/services-swiper";
import { ServiceInfo } from "@/models";

export const ServicesSection = ({ services }: { services: ServiceInfo[] }) => {
  return (
    <div className="container">
      <SectionTitle title="Services available" />

      <ServicesSwiper services={services} />
    </div>
  );
};
