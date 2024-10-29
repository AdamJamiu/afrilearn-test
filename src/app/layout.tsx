import type { Metadata } from "next";
import { Nunito_Sans, Wix_Madefor_Text } from "next/font/google";
import DashboardLayout from "../components/global/DashboardLayout";
import "./globals.css";

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
        <DashboardLayout />
      </body>
    </html>
  );
}
