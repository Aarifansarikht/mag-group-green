
import React from "react";
import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const space = Space_Grotesk({ 
  subsets: ["latin"], 
  variable: "--font-space",
  weight: ['300', '400', '500', '600', '700']
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "MAG Group | Engineering Precision",
  description: "Advanced structural systems and drainage solutions for the modern built environment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body suppressHydrationWarning className={`${inter.variable} ${space.variable} ${mono.variable} font-sans antialiased bg-paper text-ink selection:bg-cobalt/20 selection:text-cobalt-900`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
