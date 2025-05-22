import { SectionTitle } from "@/components/shared/section-title";
import { FooterSwiper } from "./footer-swiper";

export const FooterTop = () => (

 <div className="relative w-full  py-[50px] lg:py-[96px] lg:h-[713px] px-[24px]">
  <svg
    className="absolute top-0 left-0 w-full h-full"
    viewBox="0 0 1440 713"
    preserveAspectRatio="none"
  >
    <path
      fill="#F65D00"
      d="M0 600C0 268.629 268.629 0 600 0H840C1171.37 0 1440 268.629 1440 600V713H0V600Z"
    />
  </svg>
  <div className="relative z-10  container overflow-hidden ">
  
    <SectionTitle title="Our Facilities" className="mb-[32px] lg:mb-[128px] text-white" />
    <FooterSwiper />
  </div>
</div>

);
