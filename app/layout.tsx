import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Asadullah | Full Stack Developer",
  description: "I am Asadullah. I have more than 3 years of experience in website development. My expertise includes Laravel web application development, WordPress plugin development, Shopify store creation, theme design with TailwindCSS, and bug fixes for applications. Currently, I am enhancing my skills with the TALL stack (TailwindCSS, Alpine.js, Laravel, Livewire) to build modern and dynamic web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Contact />
      </body>
    </html>
  );
}
