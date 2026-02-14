import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hacksecure.in"),
  title: "HACKSECURE'26",
  description:
    "HackSecure '26 is the flagship cybersecurity hackathon organized by CSEC, NIT Hamirpur. Bringing together innovators, ethical hackers, and developers from across North India to solve real-world security challenges.",
  keywords: [
    "HackSecure",
    "HackSecure 2026",
    "CSEC Hackathon",
    "Cybersecurity Hackathon",
    "North India Hackathon",
    "Flagship Hackathon",
    "Ethical Hacking Event",
    "CSEC NIT Hamirpur",
  ],
  authors: [
    { name: "CSEC – Computer Science Engineers' Community, NIT Hamirpur" },
  ],
  robots: "index, follow",
  openGraph: {
    title: "HackSecure '26 – Organized by CSEC",
    description:
      "Join HackSecure '26, the flagship cybersecurity hackathon organized by CSEC, NIT Hamirpur. Compete, innovate, and secure the future.",
    url: "https://hacksecure.in",
    siteName: "HackSecure '26",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HackSecure '26 – Flagship Hackathon by CSEC",
    description:
      "North India’s flagship cybersecurity hackathon by CSEC, NIT Hamirpur. Register now!",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Science+Gothic:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />

        <Script
          src="https://apply.devfolio.co/v2/sdk.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
