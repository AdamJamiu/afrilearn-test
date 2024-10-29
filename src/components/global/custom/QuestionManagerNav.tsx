import { LiaExchangeAltSolid } from "react-icons/lia";
import { BiPlus } from "react-icons/bi";

const QuestionManagerNav = () => {
  return (
    <div className="w-full rounded-lg bg-white shadow-md p-3 flex justify-between items-center">
      <div className="flex justify-start items-center gap-1.5 sm:gap-3 font-wixMadeforTex">
        <div className="md:p-2 p-1.5 border-2 border-[#989CAD] rounded-md"></div>
        <div className="flex justify-start items-center gap-2 text-xs md:text-sm font-bold">
          <p className="text-[#75819A] font-medium">QUESTIONS</p>
          <p>33 / 60</p>
        </div>
      </div>
      <div className="flex items-center whitespace-nowrap gap-3 text-sm sm:text-base">
        <div className="flex items-center whitespace-nowrap font-medium">
          <button className="lg:px-4 py-1.5 rounded-md text-primary_grey flex justify-between items-center bg-white gap-1.5">
            <LiaExchangeAltSolid
              className="hidden rotate-90 md:block"
              size={20}
            />
            <p className="font-wixMadeforTex font-semibold text-primary_grey text-sm">
              Reorder questions
            </p>
          </button>
        </div>
        <button className="sm:p-2 p-1 rounded-md text-white justify-between items-center bg-primary_green gap-1 flex">
          <BiPlus className="text-lg m:text-2xl" />
          <p className="font-wixMadeforTex text-sm md:block hidden">
            Add question
          </p>
        </button>
      </div>
    </div>
  );
};

export default QuestionManagerNav;
