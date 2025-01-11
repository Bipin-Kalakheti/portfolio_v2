"use client";
import React from "react";
import ProfileSection from "@/components/Profile";
import { motion } from "framer-motion";
import TechStack from "@/components/TechStack";
import ProjectsGrid from "@/components/projects/ProjectGrid";
import MapComponent from "@/components/Map";
import "@/styles/Map.css";

export default function HomePage() {
  return (
    <div className="mt-20 max-w-4xl mx-auto">
      <div className="relative">
        {/* Map Section */}
        <div className="relative w-full h-64 rounded-lg overflow-hidden">
          <MapComponent />
          {/* Gradient overlay */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-[linear-gradient(transparent,#9d9da200_60%,#fafafa)] dark:bg-[linear-gradient(transparent,#18181b73_60%,#0a0a0a)]"></div>
        </div>

        {/* Profile Section */}
        <ProfileSection />
      </div>
      <TechStack />
      <ProjectsGrid showFeaturedOnly />
    </div>
  );
}
