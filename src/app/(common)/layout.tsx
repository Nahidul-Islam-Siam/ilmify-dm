import Footer from "@/app/(common)/components/shared/Footer/Footer";
import Navbar from "@/app/(common)/components/shared/Navbar/Navbar";

export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-80px)]">
           {children}
      </div>
   
      <Footer />
    </>
  );
}
