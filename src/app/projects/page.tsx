// src/app/projects/page.tsx
"use client";

import Navbar from "@/components/Navbar";
import ProjectsGrid from "@/components/projects/ProjectGrid";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="max-w-4xl mx-auto">
        <Navbar />
        <div className="mt-20">
          <ProjectsGrid />
        </div>
      </div>
    </main>
  );
}
