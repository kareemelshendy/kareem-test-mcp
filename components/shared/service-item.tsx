import { ServiceInfo } from "@/models";
import {
  CleanIcon,
  DogsIcon,
  HomeIcon,
  StarsIcon,
  TraningIcon,
  TruckIcon,
} from "../icons";
import { useMemo } from "react";

export const ServiceItem = ({
  service,
  isActive,
}: {
  service: ServiceInfo;
  isActive: boolean;
}) => {
  const icon = useMemo(() => {
    if (typeof service.icon === "string") {
      switch (service.icon) {
        case "DogsIcon":
          return <DogsIcon />;
        case "CleanIcon":
          return <CleanIcon />;
        case "HomeIcon":
          return <HomeIcon />;
        case "TraningIcon":
          return <TraningIcon />;
        case "TruckIcon":
          return <TruckIcon />;
        default:
          return <DogsIcon />;
      }
    }
    return service.icon;
  }, [service.icon]);

  return (
    <div
      className="group flex flex-col items-center gap-[8px] w-[110px] lg:w-[161px]"
      tabIndex={0}
      aria-label={service.thumbnailLabel}
      role="button"
    >
      <p
        className={
          "text-[12px] lg:text-[16px] font-medium text-center text-secondary/50 hover:text-secondary duration-300 group-hover:text-secondary h-[36px] lg:h-auto" +
          (isActive ? " !text-secondary" : "")
        }
      >
        {service.thumbnailLabel}
      </p>
      <div
        className={
          `group cursor-pointer relative text-primary/50 hover:text-primary w-[61px] h-[61px] lg:w-[110px] lg:h-[110px] rounded-full bg-[#FFEDE2] flex items-center justify-center text-[32px] lg:text-[54px] border border-transparent group-hover:border-primary transition-all duration-300` +
          (isActive ? " !border-primary !text-primary" : "")
        }
      >
        <span
          className={`absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-full text-[50px] lg:text-[88px] flex items-center justify-end ${service.starsRotation} group-hover:-rotate-[180deg] duration-200`}
        >
          <StarsIcon />
        </span>
        {icon}
      </div>
    </div>
  );
};
