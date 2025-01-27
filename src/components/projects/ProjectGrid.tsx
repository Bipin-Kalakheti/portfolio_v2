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
    <section className="py-16">
      <motion.h2
        className="text-4xl font-bold mb-12 text-gradient"
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
    </section>
  );
};

export default ProjectsGrid;
