import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";

import Nav from "../../components/layout/Nav";
import Footer from "../../components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "David Montanez | Portfolio",
  description: "Showcase my work, skills, and projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col min-h-screen ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />
          <div className="pt-16 flex flex-grow flex-col">
            {children}
          </div>
        <Footer />
      </body>
    </html>
  );
}
