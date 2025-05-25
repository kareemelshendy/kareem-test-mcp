"use client";

import { ImagesGallery } from "@/components";
import useMediaQuery from "@/hooks/media-query-observer.hook";

export const GallerySection = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  
  return (
    <ImagesGallery
      showWoof={false}
      images={[
        {
          src: "/images/facilities-pets/pet-1.png",
          width: isMobile ? 96 : 291,
          height: isMobile ? 150 : 460,
        },
        {
          src: "/images/facilities-pets/pet-3.png",
          width: isMobile ? 96 : 291,
          height: isMobile ? 130 : 368,
        },
        {
          src: "/images/facilities-pets/pet-2.png",
          width: isMobile ? 154 : 397,
          height: isMobile ? 150 : 368,
        },
        {
          src: "/images/facilities-pets/pet-text-4.png",
          width: isMobile ? 154 : 397,
          height: isMobile ? 130 : 460,
        },
        {
          src: "/images/facilities-pets/pet-text-5.png",
          width: isMobile ? 154 : 397,
          height: isMobile ? 150 : 460,
        },
        {
          src: "/images/facilities-pets/pet-6.png",
          width: isMobile ? 154 : 397,
          height: isMobile ? 130 : 369,
        },
        {
          src: "/images/facilities-pets/pet-7.png",
          width: isMobile ? 96 : 291,
          height: isMobile ? 150 : 368,
        },
        {
          src: "/images/facilities-pets/pet-8.png",
          width: isMobile ? 96 : 291,
          height: isMobile ? 130 : 460,
        },
      ]}
    />
  );
};
