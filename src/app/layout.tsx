// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { incognito, gitlabmono } from "../../public/assets/font/font";
import ParticleBackground from "@/components/ParticleBackground";
import { ThemeProvider } from "@/context/ThemeContext";

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
        className={`${incognito.variable} ${inter.className} ${gitlabmono.variable} 
        dark:bg-black bg-white dark:text-white text-zinc-900 transition-colors duration-300 `}
      >
        <ThemeProvider>
          <Navbar />
          <div className="gradient-overlay aura absolute top-0 w-full h-60 z-20 pointer-events-none"></div>

          <main className="relative min-h-90vh p-6 dark:bg-black bg-white dark:text-white text-zinc-900 transition-colors duration-300">
            <ParticleBackground />
            <div className="relative z-10 max-w-4xl mx-auto">{children}</div>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
