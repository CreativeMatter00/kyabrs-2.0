import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar/Navbar";
import Footer from "@/components/ui/footer/Footer";
import NavTest from "@/components/ui/Navbar/NavTest";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KYABRS",
  description: "KYABRS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavTest />
        {/* <Navbar /> */}
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
