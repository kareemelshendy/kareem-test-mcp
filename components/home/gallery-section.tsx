"use client";
import useMediaQuery from "@/hooks/media-query-observer.hook";
import { ImagesGallery } from "../images-gallery/images-gallery";

export const GallerySection = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");


  console.log(isMobile);
  return (
    <section className=" mb-[40px] lg:mb-[100px]">
      <ImagesGallery
      title="A Day in the Life at Petzania"
      images={[
        { src: "/images/pets/pet-1.png", width: isMobile ? 96 : 291, height: isMobile ? 150 : 460 },
        { src: "/images/pets/pet-3.png", width: isMobile ? 96 : 291, height: isMobile ? 130 : 368 },
        { src: "/images/pets/pet-2.png", width: isMobile ? 154 : 397, height: isMobile ? 150 : 368 },
        { src: "/images/pets/pet-4.png", width: isMobile ? 154 : 397, height: isMobile ? 130 : 460 },
        { src: "/images/pets/pet-5.png", width: isMobile ? 154 : 397, height: isMobile ? 150 : 460 },
        { src: "/images/pets/pet-6.png", width: isMobile ? 154 : 397, height: isMobile ? 130 : 369 },
        { src: "/images/pets/pet-7.png", width: isMobile ? 96 : 291, height: isMobile ? 150 : 368 },
        { src: "/images/pets/pet-8.png", width: isMobile ? 96 : 291, height: isMobile ? 130 : 460 },
      ]}
    />
    </section>
  );
};
