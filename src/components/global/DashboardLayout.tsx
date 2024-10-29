"use client";

import Sidebar from "@/components/global/Sidebar";
import Navbar from "@/components/global/Navbar";
import MobileSidebar from "@/components/global/MobileSidebar";
import { useState, ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: IProps): ReactNode => {
  const [open, setOpen] = useState(false);

  return (
    <main className="w-full">
      <Navbar setOpen={setOpen} />
      <Sidebar />
      <MobileSidebar setOpen={setOpen} open={open} />
      <main className="md:mt-7 mt-16 ml-0 md:ml-56 bg-[#F1F5F8] h-full min-h-[94vh] p-4 sm:p-10 md:pt-16 md:pb-16 pr-6 md:pl-16">
        {children}
      </main>
    </main>
  );
};

export default DashboardLayout;
