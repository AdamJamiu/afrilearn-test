"use client";

import Link from "next/link";
import { test_configuration, test_progress } from "../../data/sidebar";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="fixed bg-white left-0 top-10 bottom-0 border-2 shadow-[#F1F5F8] z-50 w-[270px] md:block hidden">
      <div className="h-full overflow-y-auto p-4 mt-5">
        <div className="">
          <h2 className="font-semibold mt-2 text-primary_grey font-wixMadeforTex">
            Test configuration
          </h2>

          <div className="space-y-2 w-full mt-3 mb-5 font-nunitoSans">
            {test_configuration.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="w-full font-nunitoSans"
              >
                <button
                  className={`${
                    pathname.includes(item.link)
                      ? "bg-glass_green text-[#0B1A2D] font-semibold"
                      : "text-primary_grey"
                  } w-full flex justify-start items-center p-3 rounded-md gap-4 hover:bg-glass_green ease transition-all duration-200`}
                >
                  <item.icon size={20} color="#75819A" />
                  <p className="whitespace-nowrap text-sm">{item.label}</p>
                </button>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <h2 className="font-semibold text-primary_grey font-wixMadeforTex">
            Test progress and results
          </h2>

          <div className="space-y-2 w-full mt-3 mb-5 font-nunitoSans">
            {test_progress.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="w-full font-nunitoSans"
              >
                <button
                  className={`${
                    pathname.includes(item.link)
                      ? "bg-glass_green text-[#0B1A2D] font-semibold"
                      : "text-primary_grey"
                  } w-full flex justify-start items-center p-3 rounded-md gap-4 hover:bg-glass_green ease transition-all duration-200`}
                >
                  <item.icon size={20} color="#75819A" />
                  <p className="whitespace-nowrap text-sm">{item.label}</p>
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
