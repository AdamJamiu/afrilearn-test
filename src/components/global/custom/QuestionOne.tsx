"use client";

import { ReactElement, useState } from "react";

const QuestionOne = (): ReactElement => {
  const [selected, setSelected] = useState<number>(0);
  const itemsArray = Array.from({ length: 4 }, (_, index) => index + 1);

  return (
    <div className="w-full rounded-lg bg-white shadow-md p-4">
      <div className="w-full flex flex-col sm:flex-row justify-start sm:justify-between sm:items-center gap-4 sm:gap-2">
        <div className="flex justify-start items-center gap-1.5 sm:gap-3 font-wixMadeforTex">
          <div className="md:p-2 p-1.5 border-2 border-[#989CAD] rounded-md"></div>
          <div className="flex justify-start items-center gap-2 text-xs md:text-sm font-bold">
            <p>Q. 1</p>
          </div>
        </div>
        <div className="flex items-center whitespace-nowrap gap-3 md:gap-5 text-sm">
          <div className="flex items-center whitespace-nowrap font-medium gap-3">
            <div className="flex justify-start items-center gap-2 text-xs md:text-sm">
              <p className="text-[#B2BBCE] font-medium">Topic</p>
              <p>Farm tools</p>
            </div>

            <div className="flex justify-start items-center gap-2 md:gap-3 text-xs md:text-sm">
              <p className="text-[#B2BBCE] font-medium">Type</p>
              <p>Single choice</p>
            </div>

            <div className="flex justify-start items-center text-xs md:text-sm gap-2 md:gap-3">
              <p className="text-[#B2BBCE] font-medium">Points</p>
              <p>1</p>
            </div>
          </div>
        </div>
      </div>

      <p className="text-primary_grey font-wixMadeforTex text-sm font-medium pt-10 md:px-10">
        This is a suspense novel about the main character who accidentally gets
        a notebook with the various tracks and plans of a mysterious figure. The
        main character starts to decipher the contents of the notebook and finds
        that it contains mysterious codes and riddles.
      </p>

      <div className="md:px-10 py-10 w-full space-y-1">
        {itemsArray.map((_, index) => (
          <button
            onClick={() => setSelected(index)}
            key={index}
            className={`${
              index === selected ? "bg-[#F3FBF8] text-[#41424F]" : ""
            } w-full flex justify-start items-center gap-3 text-sm md:text-base p-3 rounded-md hover:bg-[#F3FBF8] ease transition-all duration-200`}
          >
            <div
              className={`${
                index === selected ? "border-primary_green" : "border-[#989CAD]"
              } p-2 rounded-full border-2`}
            ></div>
            <p>Answer option 1</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionOne;
