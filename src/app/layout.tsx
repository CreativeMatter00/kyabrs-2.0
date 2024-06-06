import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/Navbar/Navbar";
import Footer from "@/components/ui/footer/Footer";
import NavTest from "@/components/ui/Navbar/NavTest";
import HomeFooter from "@/components/ui/footer/homeFooter/HomeFooter";

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
			<body>
				<NavTest />
				<div>{children}</div>
				<HomeFooter />
			</body>
		</html>
	);
}
