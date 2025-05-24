import { SectionTitle } from "@/components";
import { LocationMarkerIcon, PhoneIcon } from "@/components/icons";
import Link from "next/link";

interface Props {
  title: string;
  location: string;
  phone: string;
  id: number;
}

export const FacilitiesCard = ({ facility }: { facility: Props }) => {
  return (
    <div className="flex flex-col py-[22px] px-[49px] bg-background rounded-default  border border-secondary relative mb-[205px] last-of-type:mb-0">
      <div
        className={`absolute bg-background w-[107px] top-[-15px]  ${
          facility.id % 2 === 0 ? "right-[42px]" : "left-[42px]"
        }  h-[30px]`}
      ></div>

      <div
        className={`text-[130px]  text-secondary  font-bold absolute top-[-100px] font-bowlby-one-sc ${
          facility.id % 2 === 0 ? "right-[42px]" : "left-[42px]"
        }`}
      >
        {facility.id}
      </div>

      <div className="flex flex-col items-center gap-[16px] bg-[#FFEDE2] rounded-default p-[41px]">
        <SectionTitle title={facility.title} className="max-w-[508px]" />
        <div className="flex items-center gap-[16px]">
          <span className="text-[24px] text-secondary">
            <LocationMarkerIcon />{" "}
          </span>
          <Link
            href={`#`}
            target="_blank"
            className="text-[20px] text-secondary font-medium max-w-[467px] text-center"
          >
            {facility.location}
          </Link>
        </div>
        <div className="flex items-center gap-[16px]">
          <span className="text-[24px] text-secondary">
            <PhoneIcon />{" "}
          </span>
          <Link
            href={`tel:${facility.phone}`}
            target="_blank"
            className="text-[20px] text-secondary font-medium max-w-[467px] text-center"
          >
            {facility.phone}
          </Link>
        </div>
      </div>
    </div>
  );
};
