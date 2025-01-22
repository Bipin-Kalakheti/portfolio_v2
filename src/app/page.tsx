"use client";
import React from "react";
import ProfileSection from "@/components/Profile";
import { motion } from "framer-motion";
import TechStack from "@/components/TechStack";
import ProjectsGrid from "@/components/projects/ProjectGrid";
import MapComponent from "@/components/Map";
import TestComponent from "@/components/TestComponent";

import "@/styles/Map.css";

export default function HomePage() {
  return (
    <div className="mt-20 max-w-4xl mx-auto">
      <div className="relative">
        {/* Map Section */}
        <div className="relative w-full h-64 rounded-lg overflow-hidden">
          <MapComponent />
          {/* Gradient overlay */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent dark:from-black dark:to-transparent"></div>
        </div>

        {/* Profile Section */}
        <ProfileSection />
      </div>
      <TechStack />
      <ProjectsGrid showFeaturedOnly />
      <TestComponent />
    </div>
  );
}
