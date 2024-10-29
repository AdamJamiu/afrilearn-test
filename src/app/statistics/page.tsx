"use client";

import ProgressBar from "@/components/global/custom/ProgressBar";
import RingChart from "@/components/global/custom/RingChart";
import { class_performance } from "@/data/sidebar";
import { scores } from "@/data/statistics";
import { ReactNode } from "react";
import { LuPieChart } from "react-icons/lu";

export default function Statistics(): ReactNode {
  return (
    <section className="h-full w-full">
      <div className="w-full flex justify-start items-center gap-2">
        <LuPieChart size={22} color="#B2BBCE" />
        <h2 className="font-semibold text-primary_grey md:text-lg">
          Class performance statistics
        </h2>
      </div>

      <div className="my-7 w-full flex justify-start items-center flex-wrap gap-5">
        {class_performance.map((item, index) => (
          <div key={index} className="md-w-[400px] lg:w-[340px] w-full">
            <RingChart
              color="red"
              percentage={item.percentage}
              score={item?.score}
              name={item.name}
            />
          </div>
        ))}
      </div>

      <div className="w-full rounded-lg bg-white shadow-md p-6">
        <h2 className="font-semibold capitalize w-full text-[#75819A] text-xs sm:text-sm md:text-[15px]">
          SCORE PER QUESTION topic (9)
        </h2>
        <div className="my-7 w-full grid grid-cols-1 lg:grid-cols-2 gap-5">
          {scores.map((item, index) => (
            <ProgressBar
              key={index}
              color={item.color}
              name={item.name}
              percentage={item.percentage}
              score={item.score}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
