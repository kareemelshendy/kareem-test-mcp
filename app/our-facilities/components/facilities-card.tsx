import { Flower, SectionTitle, ServiceItem } from "@/components";
import { LocationMarkerIcon, PhoneIcon } from "@/components/icons";
import { Facility } from "@/models";
import Link from "next/link";

export const FacilitiesCard = ({ facility }: { facility: Facility }) => {
  return (
    <div className="flex flex-col py-[14px] px-[15px] lg:py-[22px] lg:px-[49px] bg-background rounded-default  border border-secondary relative lg:mb-[205px] mb-[100px] last-of-type:mb-0">
      <div
        className={`absolute bg-background w-[107px] top-[-15px]  ${
          facility.id % 2 === 0 ? "right-[20px] lg:right-[42px]" : "left-[20px] lg:left-[42px]"
        }  h-[20px] lg:h-[30px]`}
      ></div>

      <div
        className={`text-[95px] lg:text-[130px]  text-secondary  font-bold absolute top-[-70px] lg:top-[-100px] z-10 font-bowlby-one-sc ${
          facility.id % 2 === 0 ? "right-[42px]" : "left-[42px]"
        }`}
      >
        {facility.id}
      </div>

      <div className="relative flex flex-col items-center gap-[16px] bg-[#FFEDE2] rounded-default px-[14px] py-[35px]  lg:p-[41px]">
        <SectionTitle title={facility.title} className="max-w-[508px]" />

        <div className="flex md:justify-center lg:gap-[24px] mb-[13px] w-full lg:max-w-[779px] overflow-x-auto lg:overflow-x-visible mx-auto">
          {facility.services.map((service, index) => (
            <div key={index}>
              <ServiceItem service={service} isActive={true} />
            </div>
          ))}
        </div>

        <div className="flex items-center gap-[16px]">
          <span className="text-[20px] lg:text-[24px] text-secondary">
            <LocationMarkerIcon />{" "}
          </span>
          <Link
            href={`#`}
            target="_blank"
            className="text-[14px] lg:text-[20px] text-secondary font-medium max-w-[467px] text-center"
          >
            {facility.location}
          </Link>
        </div>
        <div className="flex items-center gap-[16px]">
          <span className="text-[20px] lg:text-[24px] text-secondary">
            <PhoneIcon />{" "}
          </span>
          <Link
            href={`tel:${facility.phone}`}
            target="_blank"
            className="text-[14px] lg:text-[20px] text-secondary font-medium max-w-[467px] text-center"
          >
            {facility.phone}
          </Link>
        </div>

        <Link
          href={`/our-facilities/${facility.id}`}
          className="lg:absolute lg:bottom-[30px] lg:right-[40px] flex flex-col items-center"
        >
          <Flower
            wrapperClassName="!mb-2"
            flowerClassName="!text-white "
            arrowClassName="-rotate-90"
          />

          <span className=" text-[14px] lg:text-[16px] font-medium text-center">View more</span>
        </Link>
      </div>
    </div>
  );
};
