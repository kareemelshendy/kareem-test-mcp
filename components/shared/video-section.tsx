import { PlayButtonIcon } from "../icons";

export const VideoSection = () => {
  return (
    <div className="container py-[35px] lg:py-[83px]">
      <div className="h-[420px] lg:h-[600px] w-full border-4 border-[#EDBEAC] rounded-default flex items-center justify-center">
        <button className="text-[95px] lg:text-[142px] text-[#D35000]">
          <PlayButtonIcon />
        </button>
      </div>
    </div>
  );
};
