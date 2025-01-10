// src/components/projects/ProjectGrid.tsx
"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

const ProjectsGrid = ({ showFeaturedOnly = false }) => {
  const displayedProjects = showFeaturedOnly
    ? projects.filter((project) => project.featured)
    : projects;

  return (
    <section className="py-16">
      <h2 className="text-4xl font-bold mb-12">My personal projects</h2>
      <div className="grid gap-8">
        {displayedProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsGrid;
