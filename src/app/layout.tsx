import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/contact";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prem Kamban | AI Architect",
  description: "Portfolio of Prem Kamban, Senior Lead IT & AI Architect specializing in Next.js, AI Agents, and Scalable Systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
