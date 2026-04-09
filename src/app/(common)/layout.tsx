import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
import type { ReactNode } from "react";
import { TransitionProvider } from "../hooks/TransitionContext";

export default function CommonLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <TransitionProvider>
        <Navbar />
        <div className="min-h-screen pt-16">
          {children}
        </div>
        <Footer />
      </TransitionProvider>
    </>
  );
}
// fdASfsa
