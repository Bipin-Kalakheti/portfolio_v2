// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { incognito, gitlabmono } from "../../public/assets/font/font";
import ParticleBackground from "@/components/ParticleBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bipin Kalakheti",
  description: "Personal portfolio website built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${incognito.variable} ${inter.className} ${gitlabmono.variable}`}
      >
        <Navbar />
        <main className="min-h-90vh bg-black text-white p-6">
          <ParticleBackground particleCount={2} />
          <div className="relative z-10 max-w-4xl mx-auto">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
