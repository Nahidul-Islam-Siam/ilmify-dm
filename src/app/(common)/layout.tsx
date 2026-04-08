import Footer from "@/app/(common)/components/shared/Footer/Footer";
import Navbar from "@/app/(common)/components/shared/Navbar/Navbar";
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
        <main className="mx-auto min-h-screen w-full max-w-[var(--site-max-width)] pt-16">
          {children}
        </main>
        <Footer />
      </TransitionProvider>
    </>
  );
}
// fdASfsa
