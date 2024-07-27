import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import BasicAnimations from "@/components/BasicAnimations";

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
