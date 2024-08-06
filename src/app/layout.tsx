import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import dynamic from "next/dynamic";
export const metadata = {
  icons:{
    icon:'/assets/images/logo.jpg'
  }
}
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
