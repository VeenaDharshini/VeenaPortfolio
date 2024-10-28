import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AppHeader } from "./components/app_header";
import { AppFooter } from "./components/app_footer";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Veena Dharshini Web Developer | Designer | E-commerce | Mobile app",
	description: "Get your customized websites, mobile app from us",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased grid grid-rows-[max-content_1fr_max-content] min-h-screen w-full`}>
				<AppHeader />
				{children}
				<AppFooter />
			</body>
		</html>
	);
}
