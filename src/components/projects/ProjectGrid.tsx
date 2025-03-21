"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";

const ProjectsGrid = ({ showFeaturedOnly = false }) => {
  const displayedProjects = showFeaturedOnly
    ? projects.filter((project) => project.featured)
    : projects;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="py-4">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My personal projects
      </motion.h2>
      <motion.div
        className="grid gap-8 md:grid-cols-2"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {displayedProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </motion.div>

      {showFeaturedOnly && (
        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="mt-10 text-center">
        <a
          href="/projects"
          className="inline-flex items-center gap-1 text-sm font-medium text-amber-600 dark:text-emerald-400 hover:text-amber-500 dark:hover:text-emerald-300 transition-colors hover:translate-x-1"
        >
          View all projects
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </a>
      </div>
        </motion.div>
      )}
    </section>
  );
};

export default ProjectsGrid;
