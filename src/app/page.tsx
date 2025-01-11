"use client";

import Navbar from "@/components/Navbar";
import ProjectsGrid from "@/components/projects/ProjectGrid";
import TechStack from "@/components/Techstack";
import MapComponent from "@/components/Map";
import "@/styles/Map.css";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="max-w-4xl mx-auto">
        <Navbar />
        <div className="mt-20">
          <div className="relative">
            {/* Map Section */}
            <div className="relative w-full h-64 rounded-lg overflow-hidden">
              <MapComponent />
              {/* Gradient overlay */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-[linear-gradient(transparent,#9d9da200_60%,#fafafa)] dark:bg-[linear-gradient(transparent,#18181b73_60%,#0a0a0a)]"></div>
            </div>

            {/* Profile Section */}
            <div className="flex items-start gap-6 mt-6">
              <div className="w-20 h-20 relative">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src="/images/profile.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h1 className="text-2xl font-semibold mb-2">
                  Hey, I'm Bipin Kalakheti 👋
                </h1>
                <div className="flex items-center text-green-500 gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  <span>Available for work</span>
                </div>
                <p className="text-zinc-300 text-lg">
                  I'm a creative software developer with experience in UI design
                  and crafting engaging user experiences with great attention to
                  detail.
                </p>
              </div>
            </div>
          </div>
          <TechStack />
          <ProjectsGrid showFeaturedOnly />
        </div>
      </div>
    </main>
  );
}
