"use client";

import Link from "next/link";
import { test_configuration, test_progress } from "../../data/sidebar";
import { usePathname } from "next/navigation";
import { ReactElement } from "react";
import { CgClose } from "react-icons/cg";

interface IMobileSideProps {
  open: boolean;
  setOpen: (prop: boolean) => void;
}

const MobileSidebar = ({ setOpen, open }: IMobileSideProps): ReactElement => {
  const pathname = usePathname();

  // if (!open) return <></>;
  return (
    <>
      <div
        className={`${
          open ? "opacity-30 z-[100]" : "opacity-0 -z-[100]"
        } fixed bg-black ease-in-out transition-all duration-150 inset-0 sm:hidden block`}
      ></div>
      <aside
        className={`${
          open ? "translate-x-0 z-[111]" : "-translate-x-[1000px] -z-[111]"
        } fixed bg-white inset-0 border-2 shadow-[#F1F5F8] ease-in duration-500 transition-transform sm:hidden block`}
      >
        <div className="h-full overflow-y-auto p-4 mt-5 relative">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-2 right-4 p-1.5 hover:bg-gray-100 ease transition-all rounded-full"
          >
            <CgClose size={20} />
          </button>
          <div className="">
            <h2 className="font-semibold mt-2 text-primary_grey font-wixMadeforTex">
              Test configuration
            </h2>

            <div className="space-y-2 w-full mt-3 mb-5 font-nunitoSans">
              {test_configuration.map((item, index) => (
                <Link
                  onClick={() => setOpen(false)}
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
    </>
  );
};

export default MobileSidebar;
