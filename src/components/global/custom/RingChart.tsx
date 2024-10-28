import React, { useEffect, useState } from "react";

type RingChartProps = {
  color: string;
  percentage: number;
  score?: number;
  name: string;
};

const RingChart = ({ name, percentage, score }: RingChartProps) => {
  const size = 170;
  const [progress, setProgress] = useState(0); // Initial percentage set to 0 for animation
  const radius = (size - 20) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  // Animate the progress on initial render
  useEffect(() => {
    setProgress(percentage);
  }, [percentage]);

  return (
    <div className="flex md:flex-row flex-col gap-3 sm:gap-1 justify-between items-start bg-white rounded-lg shadow-sm p-4">
      <p className="sm:text-lg text-base md:text-xl font-semibold text-[#75819A] capitalize whitespace-nowrap">
        {name}
      </p>
      <div className="flex flex-col items-center relative mx-auto sm:mx-0">
        <svg width={size} height={size} className="transform -rotate-90">
          {/* Background Circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#F1F5F8"
            strokeWidth="12"
            fill="transparent"
          />
          {/* Progress Circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={percentage > 51 ? "#0BC279" : "#FFDF37"}
            strokeWidth="12"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-1000 ease-out" // Smooth animation
          />
        </svg>
        <div className="absolute z-30 top-[38%] left-[37%] flex flex-col justify-center items-center">
          <span className="md:text-2xl font-semibold text-[#0B1A2D]">
            {progress}%
          </span>
          {score ? (
            <p className="font-medium text-[#75819A] text-sm">{score} / 30</p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default RingChart;
