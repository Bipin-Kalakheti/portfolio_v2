"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative overflow-hidden rounded-2xl bg-zinc-900/50 hover:bg-zinc-900/75 transition-colors group"
    >
      <div className="p-8">
        <div className="flex items-start gap-6">
          <div className="w-12 h-12 relative">
            <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-0.5 overflow-hidden rounded">
              <div className="bg-pink-500"></div>
              <div className="bg-purple-500"></div>
              <div className="bg-yellow-500"></div>
              <div className="bg-blue-500"></div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <div className="flex gap-2">
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
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>
            <p className="text-zinc-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-1.5 bg-black/30 px-3 py-1 rounded-full text-sm"
                >
                  <span className="text-white">{tech.icon}</span>
                  <span className="text-zinc-400">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Project Preview Image */}
      <div className="mt-4">
        <div className="relative h-[400px] w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 z-10"></div>
          {project.imageUrl && (
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;