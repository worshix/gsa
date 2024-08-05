import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import dynamic from "next/dynamic";

const BasicAnimations = dynamic(() => import('@/components/BasicAnimations'), { ssr: false });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden roboto">
        <Navbar />
          {children}
        <Footer />
      </body>
      <BasicAnimations />
    </html>
  );
}
