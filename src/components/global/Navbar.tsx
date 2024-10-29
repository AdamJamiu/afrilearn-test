import { IoInformationCircleOutline } from "react-icons/io5";
import { CiPlay1 } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { IoChevronBack } from "react-icons/io5";
import { IoMenuSharp } from "react-icons/io5";
import { ReactElement } from "react";

interface INavProps {
  setOpen: (prop: boolean) => void;
}

const Navbar = ({ setOpen }: INavProps): ReactElement => {
  return (
    <nav className="fixed right-0 left-0 top-0 bg-white shadow-sm z-[99] font-wixMadeforTex py-4 pl-0 pr-4 sm:p-4 text-sm md:text-base">
      <div className="flex justify-between items-center w-full">
        <div className="flex justify-start items-center sm:gap-4 flex-nowrap">
          <button className="px-4 py-1.5 rounded-md text-primary_grey flex justify-between items-center bg-white gap-1 text-sm sm:text-base">
            <IoChevronBack size={20} />
            <p className="font-wixMadeforTex">Assesment</p>
          </button>

          <div className="font-semibold lg:flex justify-start items-center gap-2 text-primary_grey hidden text-sm xl:text-base">
            <p>Primary 1</p>
            <p>.</p>
            <p>Mid Term Test</p>
            <p>.</p>
            <p>Agricultural Science</p>
          </div>
        </div>
        <div className="flex items-center whitespace-nowrap gap-3 text-sm sm:text-base">
          <div className="flex items-center whitespace-nowrap font-medium">
            <button className="px-4 py-1.5 rounded-md text-primary_grey flex justify-between items-center bg-white gap-1.5">
              <IoInformationCircleOutline
                className="hidden md:block"
                size={20}
              />
              <p className="font-wixMadeforTex">Test Info</p>
            </button>

            <button className="lg:px-4 py-1.5 rounded-md text-primary_grey flex justify-between items-center bg-white gap-1.5">
              <IoEyeOutline className="hidden md:block" size={20} />
              <p className="font-wixMadeforTex">Test preview</p>
            </button>
          </div>
          <button className="lg:px-4 md:px-2 px-0 py-2 rounded-md text-white justify-between items-center bg-primary_green font-semibold gap-1 hidden md:flex">
            <CiPlay1 size={20} />
            <p className="font-wixMadeforTex text-sm">Activate test</p>
          </button>
          <button
            onClick={() => setOpen(true)}
            className="sm:hidden block p-1.5 rounded-full hover:bg-gray-100 ease transition-all"
          >
            <IoMenuSharp size={25} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
