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
      <div className="min-h-screen pt-16">{children}</div>
      <Footer />
    </>
  );
}
