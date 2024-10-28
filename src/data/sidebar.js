import { FiHome } from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";
import { IoSettingsOutline } from "react-icons/io5";
import { VscSettings } from "react-icons/vsc";
import { IoTimeOutline } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";

import { BsBarChart } from "react-icons/bs";
import { LuPieChart } from "react-icons/lu";
import { HiOutlineDocumentCheck } from "react-icons/hi2";

export const test_configuration = [
  {
    label: "Basic Settings",
    link: "/basicSettings",
    icon: IoSettingsOutline,
  },
  {
    label: "Question Manager",
    link: "/questionManager",
    icon: VscSettings,
  },
  {
    label: "Question Settings",
    link: "/questionSettings",
    icon: RxDashboard,
  },
  {
    label: "Test Start Page",
    link: "/testStartPage",
    icon: FiHome,
  },
  {
    label: "Time Settings",
    link: "/timeSettings",
    icon: IoTimeOutline,
  },
  {
    label: "Grading and summary",
    link: "/gradeSummary",
    icon: IoDocumentTextOutline,
  },
];

export const test_progress = [
  {
    label: "Test Results",
    link: "/testResults",
    icon: BsBarChart,
  },
  {
    label: "Test Sheet Review",
    link: "/testSheetReview",
    icon: HiOutlineDocumentCheck,
  },
  {
    label: "Statistics",
    link: "/statistics",
    icon: LuPieChart,
  },
];

export const class_performance = [
  {
    name: "attended",
    percentage: 100,
    score: 30,
  },
  {
    name: "above avg.",
    percentage: 75,
    score: 22,
  },
  {
    name: "average score",
    percentage: 50,
    // score: 22,
  },
];
