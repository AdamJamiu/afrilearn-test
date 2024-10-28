"use client";

import { ReactElement, useEffect, useState } from "react";

type ProgressChartProps = {
  color: string;
  percentage: number;
  score?: number;
  name: string;
};

const ProgressBar = ({
  color,
  percentage,
  score,
  name,
}: ProgressChartProps): ReactElement => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    setProgress(percentage);
  }, []);
  return (
    <div className="flex justify-start items-center w-full font-wixMadeforTex gap-2">
      <div
        style={{
          backgroundColor: color,
        }}
        className="p-1 rounded-xl h-full"
      ></div>
      <div className="w-full border-2 rounded-lg flex justify-between items-center px-2 py-1.5 relative">
        <div className="rounded-md absolute left-0 top-0 bottom-0 w-[75%]">
          <div
            className="z-10 relative h-full rounded-lg ease-out duration-300 transition-all"
            style={{
              backgroundColor: color,
              width: `${progress}%`,
            }}
          ></div>
        </div>
        <p className="font-semibold text-[#0B1A2D] z-10 uppercase text-xs">
          {name}
        </p>
        <div className="flex justify-start items-center gap-5 text-[10px] sm:text-xs md:text-base font-semibold">
          <p className="text-primary_grey">{progress} %</p>
          <p className="text-[#75819A]">{score} / 30</p>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
