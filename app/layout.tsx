import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import { ViewTransition } from "react";
import Navbar from "@/app/components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blind MC Store",
  description: "Purchase ranks for Blind MC — the Minecraft Java Edition server.",
  icons: {
    icon: "/icon.jpg",
    shortcut: "/icon.jpg",
    apple: "/icon.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="fixed inset-0 -z-10">
          <Image
            src="/background.png"
            alt=""
            fill
            className="object-cover opacity-60 blur-[8px] scale-110"
            priority
            quality={80}
          />
        </div>
        <Navbar />
        <ViewTransition>{children}</ViewTransition>
      </body>
    </html>
  );
}
