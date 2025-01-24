"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Tv } from "lucide-react";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 1, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className="relative overflow-hidden rounded-2xl bg-zinc-900/50 hover:bg-zinc-900/75 transition-colors group"
    >
      <div className="relative h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-black/70 transition-all duration-300 ease-out opacity-70 group-hover:scale-105"></div>
        {project.imageUrl && (
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end bg-black/50 transition-opacity">
          <motion.div className="relative flex flex-col gap-4 transition-transform duration-300 group-hover:-translate-y-4">
            <div className="flex justify-between items-start">
              <h3 className="text-2xl font-semibold mb-2 text-white">
                {project.title}
              </h3>
              <div className="flex gap-2"></div>
            </div>
            <p className="text-zinc-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-1.5 bg-black/30 px-3 py-1 rounded-full text-sm"
                >
                  <span className="text-white">
                    {typeof tech.icon === "function" ? tech.icon() : tech.icon}
                  </span>
                  <span className="text-zinc-400">{tech.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4 opacity-0 translate-y-20 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition"
              >
                <Github size={20} />
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition"
              >
                <Tv size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
