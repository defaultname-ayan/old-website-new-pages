import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BackToTopButton from "./components/BackToTheTop";
import { icons } from "lucide-react";
import CookieConsent from "./components/CookieConsent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Satoru Foundation",
  description: "Satoru Foundation",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <CookieConsent />
        <BackToTopButton />
      </body>
    </html>
  );
}
