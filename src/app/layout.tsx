import ScrollToTopButton from "@/components/ui/ScrollToTopButton/ScrollToTopButton";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ilmify - Digital Marketing Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${inter.variable} antialiased !bg-white`}
      >
        <>
          <div className="">
            {/* <GoogleTranslateClient/> */}
            {children}
          </div>
          <ScrollToTopButton />
          <Toaster richColors position="top-right" />
        </>
      </body>
    </html>
  );
}
