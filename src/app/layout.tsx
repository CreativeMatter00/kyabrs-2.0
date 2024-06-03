import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/Navbar/Navbar";
import Footer from "@/components/ui/footer/Footer";

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
				<Navbar />
				<div>{children}</div>
				<Footer />
			</body>
		</html>
	);
}
