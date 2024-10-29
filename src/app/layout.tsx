import type { Metadata } from "next";
import { Nunito_Sans, Wix_Madefor_Text } from "next/font/google";
import Sidebar from "@/components/global/Sidebar";
import Navbar from "@/components/global/Navbar";
import "./globals.css";
import MobileSidebar from "@/components/global/MobileSidebar";

const wixMadeforTex = Wix_Madefor_Text({
  variable: "--font-wixMadeforTex",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "1000", "200", "300"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Afrilearn Test",
  description: "Afrilearn front end developer test",
  keywords: "afrilearn test, afrilearn front end developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${wixMadeforTex.variable} ${nunitoSans.variable} font-wixMadeforTex`}
      >
        <Navbar />
        <Sidebar />
        <MobileSidebar />
        <main className="md:mt-7 mt-16 ml-0 md:ml-56 bg-[#F1F5F8] h-full min-h-[94vh] p-4 sm:p-10 md:pt-16 md:pb-16 pr-6 md:pl-16">
          {children}
        </main>
      </body>
    </html>
  );
}
